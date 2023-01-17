import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components/"

const drawerWidth = 160

export const AtheneaLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}} className=" animate__animated animate__fadeIn animate__faster">
        {/* {navbar} */}
        <NavBar drawerWidth={drawerWidth}/>
        {/* {sidebar} */}
        <SideBar drawerWidth={drawerWidth}/>
        <Box 
            component='main'
            sx={{flexGrow: 1, p:3}}
        >
        <Toolbar />

            {children}

        </Box>
    </Box>
  )
}
