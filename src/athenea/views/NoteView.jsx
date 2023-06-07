import { AttachFile, SaveOutlined, Troubleshoot, Undo } from "@mui/icons-material"
import { Button, Grid, TextField, Typography} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { inActiveAnalisis } from "../../store/sidebar"
export const NoteView = () => {

  const dispatch = useDispatch()
  const onClickBack = () => dispatch(inActiveAnalisis())
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >{new Date().toDateString()}</Typography>
        </Grid>
        <Grid item>
            <Button
              onClick={onClickBack}
              color="primary"
              sx={{ padding: 2 }}>
                <Undo sx={{ fontSize: 30, mr: 1 }} />
                Salir
            </Button>
            <Button 
              color="primary"
              sx={{ padding: 2 }}>
                <Troubleshoot sx={{ fontSize: 30, mr: 1 }} />
                Analizar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese el título del la tesis"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
            />

            <Button color="primary" sx={{ padding: 2 }}>
                <AttachFile sx={{ fontSize: 30, mr: 1 }}/>
                <input type="file" />
            </Button>
        </Grid>

    </Grid>
  )
}
