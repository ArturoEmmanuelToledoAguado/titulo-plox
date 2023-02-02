import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./auth"
import { sidebarSlice } from "./sidebar"
// import { counterSlice } from "./slices/counter"

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        sidebar: sidebarSlice.reducer
    }
})
