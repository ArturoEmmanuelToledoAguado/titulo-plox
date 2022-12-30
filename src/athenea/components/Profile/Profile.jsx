import { AlternateEmail, Face, FormatQuote, Key, MarkunreadMailbox } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'

export const Profile = () => {
  return (
    <form action="/profile" method="post">
        <Grid
            container
            justifyContent= 'space-around'>
            <Grid
                item>
                    <Card >
                        <CardContent>
                            <Grid
                                container
                                alignItems = 'center'
                                justifyContent= 'center'
                                sx= {{mb:2}}>
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        component="div"
                                        sx={{mb:1}}>
                                        Datos del usuario
                                    </Typography>
                            </Grid>
                            <Grid
                                container
                                justifyContent= 'space-around'
                                alignItems = 'center'
                                sx= {{mb:2}}>
                                    <Face
                                        sx={{ fontSize: 40, color: 'secondary', mr:2}}/>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        type= 'text'
                                        variant="outlined"
                                        sx= {{ mr:1}}/>
                                    <TextField
                                        id="lastname"
                                        label="LastName"
                                        type= 'text'
                                        variant="outlined"
                                        sx= {{ mr:1}}/>
                            </Grid>
                            <Grid
                                container
                                justifyContent= 'space-around'
                                alignItems = 'center'>
                                    <AlternateEmail sx={{ fontSize: 40, color: 'secondary', mr:2 }}/>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        type= 'email'
                                        variant="outlined"
                                        sx= {{ mr:1}}/>

                                    <Key sx={{ fontSize: 40, color: 'secondary', mr:2 }}/>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        sx= {{ mr:1}}/>
                            </Grid>
                            <Grid
                                container
                                justifyContent= 'center'
                                alignItems = 'center'
                                sx= {{mb:2, mt:2}}>
                                    <FormatQuote
                                        sx={{ fontSize: 40, color: 'secondary', mr:2}}/>
                                    <TextField
                                        id="alias"
                                        label="@Alias"
                                        type= 'text'
                                        variant="outlined"
                                        sx= {{ mr:1}}/>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid
                                container
                                alignItems = 'center'
                                justifyContent= 'center'>
                                    <Button variant="contained">Update</Button>
                            </Grid>
                        </CardActions>
                    </Card>
            </Grid>
        </Grid>
    </form>
  )
}
