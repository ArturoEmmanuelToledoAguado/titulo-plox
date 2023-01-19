import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Card, CardActions, CardContent, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth'
import { Logo } from '../../athenea/components'
import { useForm } from '../../hooks'
import { Face, MarkunreadMailbox, Password } from '@mui/icons-material'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('.ipn.mx') && value.length >= 8 && (value.includes('docente') || value.includes('alumno')), 'El correo debe pertenecer al instituto'],
  password: [ (value) => value.length >= 8 , 'El password debe tener más de 8 letras'],
  displayName : [ (value) => value.split(' ').length > 2  , 'El nombre es obligatorio y debe tener al menos 2 apellidos y 1 nombre']
}

export const RegisterPage = () => {
  
  let valid
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {status, errorMessage} = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'authenticated', [status])

  const {formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid} = useForm( formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState))
  }


  return (
    <AuthLayout title='Crear Cuenta'>
      <form action="" onSubmit={onSubmit} className=" animate__animated animate__fadeIn animate__faster">
      <Grid 
            container
            justifyContent= 'space-around'
            alignItems='center'
            sx={{mb:1}}>
            <Grid
                item
                xs={4}>
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
                                    xs={8}>
                                      <TextField
                                        label="Nombre completo"
                                        type="text"
                                        placeholder="Escribe tu nombre"
                                        fullWidth
                                        name='displayName'
                                        value={displayName}
                                        onChange ={onInputChange}
                                        error ={!!displayNameValid && formSubmitted}
                                        helperText={(formSubmitted)?displayNameValid:null}/>
                                  </Grid>
                            </Grid>

                            <Grid
                                container
                                alignItems = 'center'
                                justifyContent= 'center'
                                sx= {{mb:2}}>
                                  <MarkunreadMailbox sx={{ fontSize: 40, color: 'secondary', mr:2 }}/>
                                  <Grid item
                                    xs={8}>
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
                                    <Password sx={{ fontSize: 40, color: 'secondary', mr:2 }}/>
                                    <Grid item
                                    xs={8}>
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
                                    <Button disabled={isCheckingAuthentication} type='submit' variant="contained" fullWidth>
                                        Crear Cuenta
                                    </Button>
                            </Grid>
                        </CardActions>
                        <Grid container direction= 'row' justifyContent='end'>
                            <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
                            <Link component={RouterLink} color='inherit' to="/auth/login">
                            Ingresar
                            </Link>
                        </Grid>
                    </Card>
            </Grid>
            <Grid
                item
                alignItems='center'
                xs={6}>
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
