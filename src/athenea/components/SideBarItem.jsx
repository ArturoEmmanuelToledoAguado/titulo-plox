import { AccountBox, FileCopy, Home, Settings } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setButtonActivate } from '../../store/sidebar/sidebarSlice'

export const SideBarItem = ({value}) => {
    const dispatch = useDispatch()
    const onClickPage = () => dispatch(setButtonActivate(value))
  return (
    <ListItem disablePadding>
        <ListItemButton onClick= {onClickPage}>
            <ListItemIcon>
                {(value === 'Inicio')?
                    <Home />:
                    (value === 'Perfil')?
                    <AccountBox />:
                    (value === 'Documentos')?
                    <FileCopy />:
                    <Settings />
                    }{'  '+value}
            </ListItemIcon>
        </ListItemButton>
    </ListItem>
  )
}
