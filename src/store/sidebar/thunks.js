import { addNewEmptyAnalysis, savingNewTesis, setAnalysisActivate, setSavingAnalysis, setAnalysis, changeStatus} from "./sidebarSlice"
import bcrypt from 'bcryptjs'
import { fileUpload, loadTesis } from "../../helpers"
import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase"

export const startNewAnalysis = (file = []) => {
    return async (dispatch, getState) => {
        dispatch(savingNewTesis())
        const {uid, displayName} = getState().auth
        if (!uid) throw new Error(`Usuario ${displayName} sin acceso`)
        // const node = Math.abs(bcrypt.hashSync(uid, bcrypt.genSaltSync(10)).replace(/[^0-9]+/g, "")) % 4
        // const tesis = await fileUpload(file) // You must return an OK and the node where I keep it
        const newTesis = {
            title: '',
            date: new Date().toDateString(),
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        const setDocResp = await setDoc(newDoc, newTesis)
        newTesis.id = newDoc.id
        //Once you have this, you send it complete to back
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

        // ? Here we would have to shoot the mail event once the entire analysis was done

        dispatch(updateAnalysis(activeAnalysis))

    }
}

export const startDeletingTesis = () => {
    return async (dispatch, getState) => {
        const {uid, displayName} = getState().auth
        const {active: activeAnalysis} = getState().auth
        const tesis = await fileDelete(activeAnalysis.id) // You must return an OK and the node where I keep it
    }
}

