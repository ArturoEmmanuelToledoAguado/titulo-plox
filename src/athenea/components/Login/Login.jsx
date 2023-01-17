import { useMemo, useState } from 'react'
import { useForm } from '../../../hooks';
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Face, MarkunreadMailbox } from '@mui/icons-material';
import { CardActions, CardContent, Card, Button, Typography, TextField, Grid} from '@mui/material';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../../store/auth'
import { Logo } from '../';

const formData = {
    email: '',
    password: ''
  }
  
const formValidations = {
    email: [ (value) => value.includes('.ipn.mx') && value.length >= 8 && (value.includes('docente') || value.includes('alumno')), 'El correo debe pertenecer al instituto'],
    password: [ (value) => value.length >= 8 , 'El password debe tener más de 8 letras'],
}

export const Login =() => {

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
    <form action="/login" method="post">
        <Grid 
            container
            noWrap
            justifyContent= 'space-around'
            alignItems='center'
            sx={{mb:1}}>
            <Grid
                Item
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
                                    <TextField id="username" label="Username" type= 'text' variant="outlined" />
                            </Grid>
                            <Grid
                                container
                                alignItems = 'center'
                                justifyContent= 'center'>
                                    <MarkunreadMailbox sx={{ fontSize: 40, color: 'secondary', mr:2 }}/>
                                    <TextField id="password" label="Password" type= 'password' variant="outlined" />
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid
                                container
                                alignItems = 'center'
                                justifyContent= 'center'>
                                    <Button variant="contained">LogIn</Button>
                            </Grid>
                        </CardActions>
                    </Card>
            </Grid>
            <Grid
                Item
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
  );
}