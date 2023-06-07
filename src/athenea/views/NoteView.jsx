import { AttachFile, SaveOutlined, Troubleshoot, Undo } from "@mui/icons-material"
import { Button, Grid, TextField, Typography} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { inActiveAnalisis, sendTesis, setAnalysisActivate } from "../../store/sidebar"
import { useForm } from "../../hooks/useForm"
import { MuiFileInput } from "mui-file-input"
import { useState } from "react"
import { loadFile } from "../../store/sidebar/thunks"
export const NoteView = () => {

  const dispatch = useDispatch()
  const {active} = useSelector(state => state.sidebar)
  const { titulo, date, id} = useForm(active)
  const [file, setFile] = useState(null)
  const onClickBack = () => dispatch(inActiveAnalisis())
  const onChangeSendFile = (value = File) => {
    if (value) {
      const fileReader = new FileReader();
      const fileName = value.name;
      fileReader.onload = (e) => {
        const fileData = e.target.result;
        setFile(value);
        dispatch(loadFile({fileName,fileData}))
        dispatch(setAnalysisActivate({fileName,date, id}))
      };
      
      fileReader.readAsDataURL(value);
    }
  }

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
                name = "title"
                value = {titulo}
            />
            <MuiFileInput color="primary" sx={{ padding: 2 }} value={file} onChange={onChangeSendFile}>
                <AttachFile sx={{ fontSize: 30, mr: 1 }}/>
            </MuiFileInput>
        </Grid>

    </Grid>
  )
}
