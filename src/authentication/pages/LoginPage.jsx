import { Alert, Button, Card, CardActions, CardContent, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { Face, Google, MarkunreadMailbox } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { Logo } from '../../athenea/components'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'

/* A constant that is storing the email and password. */
const formData = {
  email: '',
  password: ''
}

/* A validation for the email and password. */
const formValidations = {
  email: [ (value) => value.includes('.ipn.mx') && value.length >= 8 && (value.includes('docente') || value.includes('alumno')), 'El correo debe pertenecer al instituto'],
  password: [ (value) => value.length >= 8 , 'El password debe tener más de 8 letras'],
}

export const LoginPage = () => {

  /* Destructuring the status and errorMessage from the state.auth object. */
  const {status, errorMessage} = useSelector(state => state.auth)

  /*
  A function that returns the dispatch function from the Redux store. It can be used to dispatch
  actions to the store. */
  const dispatch = useDispatch()

  /* A React hook that lets you keep track of the state of a component. */
  const [formSubmitted, setFormSubmitted] = useState(false)
  const {formState, isFormValid, email, password, emailValid, passwordValid, onInputChange} = useForm(formData, formValidations)

  /* A React hook that returns a memoized value. Pass an inline function and an array of dependencies.
  useMemo will only recompute the memoized value when one of the dependencies has changed. This
  optimization helps to avoid expensive calculations on every render. */
  const isAuthenticating = useMemo(() => status === 'authenticated', [status])

  /**
   * If the form is valid, then dispatch the startLoginWithEmailPassword function with the email and
   * password as arguments.
   * @returns The return value of the function is the return value of the last statement in the
   * function.
   */
  const onSubmit = event => {
    event.preventDefault()
    // dispatch(checkingAuthentication(email, password))
    setFormSubmitted(true)
    if (!isFormValid) return;
    dispatch(startLoginWithEmailPassword( {email, password} ))
  }

  /**
   * OnGoogleSignIn() is a function that calls the startGoogleSignIn() function from the actions
   * folder.
   */
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  /* A login form. */
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
                          <Grid item sx={2}>
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
                        justifyContent = 'center'>
                          <MarkunreadMailbox sx={{ fontSize: 40, color: 'secondary', mr:2 }}/>
                          <Grid item sx={2}>
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
