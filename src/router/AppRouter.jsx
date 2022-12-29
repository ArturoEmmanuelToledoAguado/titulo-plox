import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../authentication/routes/AuthRoutes"
import { AtheneaPage } from "../athenea/pages/AtheneaPage"

export const AppRouter = () => {
  return (
    <Routes>
        {/* {Login} */}
        <Route path='/auth/*' element={<AuthRoutes/>}/>

        {/* {JournalApp} */}
        <Route path='/*' element={<AtheneaPage/>}/>
    </Routes>
  )
}
