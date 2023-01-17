import { AccountBox, FileCopy, Home, Settings } from "@mui/icons-material"
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { Logo } from './'


export const SideBar = ({drawerWidth = 120}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
            <Drawer
                variant='permanent'
                open
                sx= {{
                    mb: 2,
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper':{boxSizing: 'border-box', width: drawerWidth}
                }}>
                    <Toolbar>
                        <Logo direction='/img/mq19.png'/>
                    </Toolbar>
                    <List>
                        {
                            ['Inicio', 'Perfil', 'Documentos', 'Acerca de'].map( text => (
                                <ListItem
                                    key= {text}
                                    disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {(text === 'Inicio')?
                                                    <Home />:
                                                    (text === 'Perfil')?
                                                    <AccountBox />:
                                                    (text === 'Documentos')?
                                                    <FileCopy />:
                                                    <Settings />
                                                    }{'  '+text}
                                            </ListItemIcon>
                                        </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
            </Drawer>
    </Box>
  )
}
