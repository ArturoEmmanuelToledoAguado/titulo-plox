import { Description, HighlightOff, Troubleshoot } from "@mui/icons-material"
import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import { setAnalysisActivate } from "../../store/sidebar"
import { startDeletingTesis } from "../../store/sidebar/thunks"

export const File = ({ titulo = '', id, date}) => {

    const dispatch = useDispatch()
    const onClickSelectTesis = () => dispatch(setAnalysisActivate({ titulo, id, date}))
    const onClickDelete = () => dispatch(startDeletingTesis(id))
  return (
    <ListItem
        className="animate__animated animate__fadeIn animate__faster"
        disableGutters>
        <Button
        onClick={onClickSelectTesis}
        color='button'
        sx={{ width: '90%'}}>
            <ListItemAvatar>
            <Avatar>
                <Description />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={ (titulo !== '')?titulo:'Sin archivo para analizar'}  secondary={`${date}`}/>
        </Button>
        <Button 
          onClick={onClickDelete}
          color="primary"
          sx={{ padding: 2 }}>
            <HighlightOff sx={{ fontSize: 30, mr: 1 }} />
            Borrar
        </Button>
    </ListItem>
  )
}
