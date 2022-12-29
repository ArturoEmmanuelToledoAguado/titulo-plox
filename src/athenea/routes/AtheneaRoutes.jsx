import { Navigate, Route, Routes } from "react-router-dom"
import { AtheneaPage } from "../pages/AtheneaPage"

export const AtheneaRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <AtheneaPage/>}/>
        <Route path="/*" element={ <Navigate to="/"/>} />
    </Routes>
  )
}
