import { AccountBox, FileCopy, Home, Settings } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Route, Routes } from "react-router-dom"


export const SideBar = ({drawerWidth = 120}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
            <Drawer
                variant='permanent'
                open
                sx= {{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper':{boxSizing: 'border-box', width: drawerWidth}
                }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component='div'>
                                Athena
                        </Typography>
                    </Toolbar>
                    <Divider />
                    <List>
                        {
                            ['Home', 'Perfil', 'My Documents', 'Acerca de'].map( text => (
                                <ListItem
                                    key= {text}
                                    disablePadding>
                                        <ListItemButton>
                                            
                                            <ListItemIcon>
                                                {(text === 'Home')?
                                                    <Home />:
                                                    (text === 'Perfil')?
                                                    <AccountBox />:
                                                    (text === 'My Documents')?
                                                    <FileCopy />:
                                                    <Settings />
                                                    }{'  '+text}
                                                {

                                                    <Grid 
                                                        conteiner>
                                                        <Routes>
                                                            <Route  path={(text === 'Home')?
                                                                            'DocumentList'.toString():
                                                                            (text === 'Perfil')?
                                                                            'Profile'.toString():
                                                                            (text === 'My Documents')?
                                                                            'DocumentDetails'.toString():
                                                                            'About'.toString()} 
                                                                    element={
                                                                        (text === 'Home')?
                                                                            <Home />:
                                                                            (text === 'Perfil')?
                                                                            <AccountBox />:
                                                                            (text === 'My Documents')?
                                                                            <FileCopy />:
                                                                            <Settings />
                                                                    }/>
                                                        </Routes>
                                                    </Grid>
                                                }
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
