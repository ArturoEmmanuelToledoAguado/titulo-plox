import { Navigate, Route, Routes } from "react-router-dom"
import { AtheneaRoutes } from "../athenea/routes/AtheneaRoutes"
import { AuthRoutes } from "../authentication/routes/AuthRoutes"
import { useCheckAuth } from "../hooks"
import { CheckingAuth } from "../ui"


export const AppRouter = () => {

  const {status} = useCheckAuth()

  if(status === 'checking') return <CheckingAuth />

  return (
    <Routes>
      {
        (status === 'authenticated')? <Route path='/*' element={<AtheneaRoutes/>}/>:<Route path='/auth/*' element={<AuthRoutes/>}/>
      }

      <Route path='/*' element={<Navigate to= '/auth/login'/>}/>

    </Routes>
  )
}
