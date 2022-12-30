import {  Face, MarkunreadMailbox } from '@mui/icons-material';
import { CardActions, CardContent, Card, Button, Typography, TextField, CardMedia} from '@mui/material';
import { Grid } from '@mui/material';
import { Boton, Input, Logo } from '../';

export const Login =() => {
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