import { FileList } from "../components"
import { Grid} from "@mui/material"
export const NoteView = () => {
  return (
    <Grid container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{mb:1}}>

        <FileList  fullWidth/>
    </Grid>
  )
}
