import { useMemo, useState } from 'react'
import { useForm } from '../../hooks'
import { Face, Google, MarkunreadMailbox } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'
import { Alert, Button, Card, CardActions, CardContent, Grid, Link, TextField, Typography } from "@mui/material"
import { Logo } from '../../athenea/components'

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

  const [formSubmitted, setFormSubmitted] = useState(false)
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
      <Grid 
            container
            justifyContent= 'space-around'
            alignItems='center'
            sx={{mb:1}}>
            <Grid
                item
                sx={3}>
                    <Card >
                        <CardContent>
                            <Grid
                                container
                                alignItems = 'center'
                                justifyContent= 'center'
                                sx= {{mb:2}}>
                                <Logo direction='/img/mq19.png'/>
                            </Grid>

                            <Grid
                                container
                                alignItems = 'center'
                                justifyContent= 'center'
                                sx= {{mb:2}}>
                                  <Face sx={{ fontSize: 40, color: 'secondary', mr:2 }}/>
                                  <Grid item
                                    sx={2}>
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
                            </Grid>

                            <Grid 
                                item 
                                xs = {12} 
                                sx= {{mt:2}}
                                display= {!!errorMessage?'':'none'}>
                                <Alert severity='error'>{errorMessage}</Alert>
                            </Grid>
                            <Grid
                                container
                                alignItems = 'center'
                                justifyContent= 'center'>
                                    <MarkunreadMailbox sx={{ fontSize: 40, color: 'secondary', mr:2 }}/>
                                    <Grid item
                                    sx={2}>
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
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container
                                spacing={3}
                                sx={{ml:1, mt:1, mr:3 }}>
                                    <Button 
                                      type='submit'
                                      variant='contained'
                                      disabled = {isAuthenticating}
                                      fullWidth>
                                        Login
                                    </Button>
                            </Grid>
                            <Grid container
                                spacing={3}
                                sx={{mr:1, mt:1 }}>
                                    <Button
                                      onClick={onGoogleSignIn}
                                      variant='contained'
                                      disabled = {isAuthenticating}
                                      fullWidth>
                                        <Google />
                                        <Typography sx = {{ ml:1}}>Google</Typography>
                                    </Button>
                            </Grid>
                            
                        </CardActions>
                        <Grid container
                          sx={{mt:2, mr:8}}
                          alignItems = 'center'>
                            <Link
                                component={RouterLink}
                                color='inherit'
                                to="/auth/register">
                            Registrarse
                            </Link>
                        </Grid>
                    </Card>
            </Grid>
            <Grid
                item
                alignItems='center'
                xs={5}>
                    <Card>
                        <Grid
                            container
                            justifyContent= 'space-around'>
                            <Logo direction='/img/mq16.png'/>
                            <Logo direction='/img/mq17.png'/>
                            <Logo direction='/img/mq18.png'/>
                        </Grid>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h3"
                                component="div"
                                sx={{mb:1}}>
                                Bienvenido a Athena
                            </Typography>
                            <Typography
                                variant="h5"
                                align= 'justify'
                                color="secondary"
                                sx={{mb:1}}>
                                La primera plataforma en su clase impulzada con machine learning para el análisis de plagio en sus documentos.
                            </Typography>

                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                align= 'justify'
                                sx={{mb:1}}>
                                La información que nos rodea es abundante y sin duda alguna de fácil acceso, llegando a facilitar las posibilidades de incurrir en plagio accidental u otros delitos, motivo por el cual nos resulta indispensable realizar una correcta interpretación de tus documentos en busca de lograr un mejor resultado, utilizando tecnologías modernas, podemos lograr nuestro objetivo sin sacrificar tiempos de espera para nuestros usuarios.
                            </Typography>
                        </CardContent>
                    </Card>
            </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
