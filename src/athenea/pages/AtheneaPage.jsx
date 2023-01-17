import { FileList, Login, Profile } from "../components/index"
import { IconButton } from "@mui/material"
import { AtheneaLayout } from "../layout/AtheneaLayout"
import { NoteView } from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"

export const AtheneaPage = () => {
  return (
    <AtheneaLayout>
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit distinctio dolor nam pariatur quo laboriosam eligendi exercitationem, quae odit voluptatibus rerum eum quam sint porro quod hic dolorum amet repellat.</Typography> */}
      <Login />
      {/* <Profile/>OK */}
      {/* <NoteView/> */}
      {/* {NothingSelected} */}

      <IconButton
        size='large'
        sx= {{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.8},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>
          <AddOutlined sx = {{ fontSize: 30 }} />
      </IconButton>
    </AtheneaLayout>
  )
}
