import { addNewEmptyAnalysis, savingNewTesis, setAnalysisActivate, setSavingAnalysis, setAnalysis, changeStatus, sendTesis, updateAnalysis, deleteTesisById} from "./sidebarSlice"
import { fileUpload, loadTesis } from "../../helpers"
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase"

export const startNewAnalysis = (file = []) => {
    return async (dispatch, getState) => {
        dispatch(savingNewTesis())
        const {uid, displayName} = getState().auth
        if (!uid) throw new Error(`Usuario ${displayName} sin acceso`)
        const newTesis = {
            titulo: '',
            tesis:  '',
            date: new Date().toDateString(),
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        const setDocResp = await setDoc(newDoc, newTesis)
        newTesis.id = newDoc.id
        dispatch(addNewEmptyAnalysis(newTesis))

        dispatch(setAnalysisActivate(newTesis))
    }
}

export const inActiveAnalisis = () => {
    return async (dispatch) => {
        dispatch(changeStatus())
    }
}

export const startLoadingTesis = () => {
    return async (dispatch, getState) => {
        const {uid, displayName} = getState().auth
        if (!uid) throw new Error(`Usuario ${displayName} sin acceso`)
        const tesis = await loadTesis(uid)
        dispatch(setAnalysis(tesis))

    }
}

export const startSaveAnalysis = () => {
    return async (dispatch, getState) => {
        dispatch(setSavingAnalysis())
        const {uid, displayName} = getState().auth
        const {active: activeAnalysis} = getState().sidebar
        if (!uid) throw new Error(`Usuario ${displayName} sin acceso`)

        dispatch(updateAnalysis(activeAnalysis))
    }
}

export const startDeletingTesis = (id) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${id}`)
        await deleteDoc(docRef)
        dispatch(deleteTesisById(id))
    }
}

export const loadFile = (tesis) => {
    return async(dispatch) => {
        dispatch(sendTesis(tesis))
    }
}

export const startSaveTesis = () => {
    return async(dispatch, getState) => {
        const {uid, email} = getState().auth
        const {active} = getState().sidebar
        const tesisToFireStore = {...active}

        const url = `https://apirep-production.up.railway.app/getReport?nameFile=${tesisToFireStore.titulo}&addressee=${encodeURIComponent(email)}`;

        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
          });
        
        delete tesisToFireStore.id
        delete tesisToFireStore.tesis 
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${active.id}`)
        await setDoc(docRef, tesisToFireStore, {merge: true})
        dispatch(updateAnalysis(active))
        dispatch(inActiveAnalisis())
    }
}
