import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
   name: 'sidebar',
   initialState : {
        isSaving: false,
        value : '',
        tesis: null,
        analysis: [],
        messageSaved: '',
        active: null,
    },
   reducers : {
       savingNewTesis: (state, action) => {
        state.isSaving = true
        state.value = action.payload
        },
       addNewEmptyAnalysis: (state, action) => {
        state.analysis.push(action.payload)
        state.isSaving = false
        },
       setAnalysisActivate: (state, action) => {
        state.active = action.payload
        state.messageSaved = ''
       },
       changeStatus: (state) => {
        state.active = null
       },
       setAnalysis: (state, action) => {
        state.analysis = action.payload
       },
       setSavingAnalysis: (state) => {
        state.isSaving = true
        state.messageSaved = ''
       },
       updateAnalysis: (state, action) => {
        state.isSaving = false
        state.analysis = state.analysis.map(tesis => (analysis.id=== action.payload.id)? action.payload: tesis)
        state.messageSaved = `"${action.payload.title}" actualizado correctamente`
       },
       setPhotosToActivateTesis: (state, action) => {
        state.active.imageUrls = (state.active.imageUrls)?[...state.active.imageUrs,...action.payload]:[...action.payload]
        state.isSaving = false
        state.messageSaved = `Imagenes guardadas`
       },
       deleteNoteById: (state, action) => {
        state.isSaving = false
        state.active = null
        state.analysis = state.analysis.filter(tesis => tesis.id !== action.payload)
       },
       sendTesis: (state, action) => {
        state.tesis = action.payload
       }

   }
})

export const {
    addNewEmptyAnalysis,
    deleteNoteById,
    savingNewTesis,
    setAnalysis,
    setAnalysisActivate,
    setPhotosToActivateTesis,
    setSavingAnalysis,
    updateAnalysis,
    changeStatus,
    sendTesis
} = sidebarSlice.actions