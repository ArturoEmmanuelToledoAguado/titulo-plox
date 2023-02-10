import { savingNewTesis } from "./sidebarSlice"
import bcrypt from 'bcryptjs'
import { fileUpload } from "../../helpers/fileUpload"

export const startNewAnalysis = (file = []) => {
    return async (dispatch, getState) => {
        dispatch(savingNewTesis)
        const {uid} = getState().auth
        const node = Math.abs(bcrypt.hashSync(uid, bcrypt.genSaltSync(10)).replace(/[^0-9]+/g, "")) % 4
        const tesis = await fileUpload(file) // You must return an OK and the node where I keep it
        const newTesis = {
            title: '',
            date: new Date().getTime(),
            tesis
        }
        //Una vez que tienes esto lo mandas completo a back
        dispatch(addNewEmptyAnalysis(newTesis))
        dispatch(setAnalysisActivate(newTesis))
    }
}