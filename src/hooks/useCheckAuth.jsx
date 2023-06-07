import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseAuth } from '../firebase'
import { login, logout } from '../store/auth'
import { startLoadingTesis } from '../store/sidebar'

export const useCheckAuth = () => {

    const {status} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async( user) => {
            if(!user) return dispatch(logout())
            const {uid, email, displayName, phothoURL } = user
            dispatch(login( { uid, email, displayName, phothoURL }))
            dispatch(startLoadingTesis())
        })

    }, [])

    return {
        status
    }
}
