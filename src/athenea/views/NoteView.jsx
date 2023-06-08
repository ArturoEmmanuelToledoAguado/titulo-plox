import { AttachFile, SaveOutlined, Troubleshoot, Undo } from "@mui/icons-material"
import { Alert, Button, Collapse, Grid, IconButton, TextField, Typography} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { inActiveAnalisis, sendTesis, setAnalysisActivate } from "../../store/sidebar"
import { useForm } from "../../hooks/useForm"
import { MuiFileInput } from "mui-file-input"
import { useEffect, useState } from "react"
import { loadFile, startSaveTesis } from "../../store/sidebar/thunks"
import CloseIcon from '@mui/icons-material/Close';

export const NoteView = () => {

  const dispatch = useDispatch()
  const {active} = useSelector(state => state.sidebar)
  
  
  const { titulo, date, id} = useForm(active)
  const [file, setFile] = useState(null)
  const [open, setOpen] = useState(true);
  const [alert2, setAlert2] = useState(true)
  const onClickBack = () => dispatch(inActiveAnalisis())
  const onClickAnalysis = () => dispatch(startSaveTesis())
  const onChangeSendFile = (value = File) => {
    if (value) {
      const fileReader = new FileReader();
      const fileName = value.name;
      fileReader.onload = (e) => {
        const fileData = e.target.result;
        setFile(value);
        dispatch(loadFile({fileName,fileData}))
        dispatch(setAnalysisActivate({
          id,
          titulo: fileName.replace(
            fileName.substring(fileName.length - 4, fileName.length), ''
          ),
          date,
          tesis: fileData
          }))
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
              onClick={onClickAnalysis}
              color="primary"
              sx={{ padding: 2 }}>
                <Troubleshoot sx={{ fontSize: 30, mr: 1 }} />
                Analizar
            </Button>
        </Grid>

        <Grid container direction='column' justifyContent='center'>
            {titulo.length > 0 && (
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size='large'
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Tesis analizada previamente, puede buscar los resultados en su correo o cargar un nuevo documento
                </Alert>
              </Collapse>
            )}
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Este campo se llena de forma automatica"
                label="Titulo:"
                sx={{ border: 'non', mt: 2}}
                name = "title"
                value = {titulo}
            />

            <MuiFileInput
              color="primary"
              sx={{ mt:2 }}
              value={file}
              onChange={onChangeSendFile}
              placeholder="Agrega tu tesis"
              label= 'Tesis'>
                <AttachFile sx={{ fontSize: 30, mr: 1 }}/>
            </MuiFileInput>
            
            <Collapse in={alert2} sx={{ mt:2 }}>
                <Alert
                  color='warning'
                  action={
                    <IconButton
                      aria-label="close"
                      color='warning'
                      size='large'
                      onClick={() => {
                        setAlert2(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Asegurese de que el nombre de su archivo sea el nombre con el cual desea registrar su proyecto
                </Alert>
              </Collapse>
        </Grid>

    </Grid>
  )
}
