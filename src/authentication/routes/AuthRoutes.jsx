import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"

/**
 * If the user is not logged in, then show them the login page. Otherwise, show them the dashboard.
 */
export const AuthRoutes = () => {
  /* A React Router. */
  return (
    <Routes>

        <Route path="login" element= {<LoginPage/>}/>
        <Route path="register" element= {<RegisterPage/>}/>

        <Route path="/*" element= {<Navigate to="/auth/login" />}/>
    </Routes>
  )
}
