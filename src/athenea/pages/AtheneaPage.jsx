import { FileList, Login, Profile } from "../components/index"
import { IconButton } from "@mui/material"
import { AtheneaLayout } from "../layout/AtheneaLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const AtheneaPage = () => {
  return (
    <AtheneaLayout>
      {/* <NoteView/> */}
      <NothingSelectedView />

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
