import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../authentication/routes/AuthRoutes"
import { CheckingAuth } from "../ui"
import { login, logout } from "../store/auth"
import { FirebaseAuth } from "../firebase"
import { useDispatch, useSelector } from "react-redux"
import { AtheneaRoutes } from "../athenea/routes/AtheneaRoutes"


export const AppRouter = () => {

  const {status} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async( user) => {
      if(!user) return dispatch(logout())
      const {uid, email, displayName, phothoURL } = user
      dispatch(login( { uid, email, displayName, phothoURL }))
    })

  }, [])


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
