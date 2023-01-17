import { useMemo, useState } from 'react'
import { useForm } from '../../hooks'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

const formData = {
  email: '',
  password: ''
}

const formValidations = {
  email: [ (value) => value.includes('.ipn.mx') && value.length >= 8 && (value.includes('docente') || value.includes('alumno')), 'El correo debe pertenecer al instituto'],
  password: [ (value) => value.length >= 8 , 'El password debe tener más de 8 letras'],
}

export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const [fromSubmitted, setFromSubmitted] = useState(false)
  const {formState, isFormValid, email, password, emailValid, passwordValid, onInputChange} = useForm(formData, formValidations)

  const isAuthenticating = useMemo(() => status === 'authenticated', [status])

  const onSubmit = event => {
    event.preventDefault()
    // dispatch(checkingAuthentication(email, password))
    setFormSubmitted(true)
    if (!isFormValid) return;
    dispatch(startLoginWithEmailPassword( {email, password} ))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form action="" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs = {12} sx= {{mt:2}}>
            <TextField
              label="Correo Institucional"
              type="email"
              placeholder="correo@alumno.ipn.mx"
              required
              name='email'
              value = {email}
              onChange={onInputChange}
              error ={!!emailValid && formSubmitted}
              helperText={(formSubmitted)?emailValid:null}
              fullWidth/>
          </Grid>
          
          <Grid item xs = {12} sx= {{mt:2}}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              required
              name='password'
              value = {password}
              error ={!!passwordValid &&  formSubmitted}
              helperText={(formSubmitted)?passwordValid:null}
              onChange = {onInputChange}
              fullWidth/>
          </Grid>

          <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item xs = {12} sm = {6}>
              <Button type='submit' variant='contained' disabled = {isAuthenticating} fullWidth>
                Login
              </Button>
            </Grid>
            
            <Grid item xs = {12} sm = {6}>
              <Button onClick={onGoogleSignIn} variant='contained' disabled = {isAuthenticating} fullWidth>
                <Google />
                <Typography sx = {{ ml:1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction= 'row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Registrarse
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
