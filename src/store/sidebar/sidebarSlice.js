import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
   name: 'sidebar',
   initialState : { value : ''},
   reducers : {
       setButtonActivate: (state, action) => {state.value = action.payload},
   }
})

export const {setButtonActivate} = sidebarSlice.actions