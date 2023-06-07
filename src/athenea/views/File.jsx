import { Description } from "@mui/icons-material"
import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import { setAnalysisActivate } from "../../store/sidebar"

export const File = ({ titulo = '', id, date}) => {

    const dispatch = useDispatch()
    const onClickSelectTesis = () => dispatch(setAnalysisActivate({ titulo, id, date}))
  return (
    <ListItem
        className="animate__animated animate__fadeIn animate__faster"
        disableGutters>
        <Button
        onClick={onClickSelectTesis}
        color='button'
        sx={{ width: '80%'}}>
            <ListItemAvatar>
            <Avatar>
                <Description />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`Tesis ${titulo}`}  secondary={`${date}`}/>
        </Button>
    </ListItem>
  )
}
