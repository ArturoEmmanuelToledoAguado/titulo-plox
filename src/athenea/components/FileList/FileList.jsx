import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Button} from '@mui/material';
import {Description } from '@mui/icons-material';

export const FileList = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {[1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disableGutters>
            <Button
              color='button'
              sx={{ width: '80%'}}>
                  <ListItemAvatar>
                    <Avatar>
                      <Description />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={`Tesis ${value}`}  secondary="Jan 9, 2014"/>
            </Button>
          </ListItem>
        ))}
    </List>
  )
}