import { IconButton } from "@mui/material"
import { AtheneaLayout } from "../layout/AtheneaLayout"
import { FileList, NoteView, NothingSelectedView } from "../views"
import { AddOutlined, FileUpload } from "@mui/icons-material"

export const AtheneaPage = () => {
  return (
    <AtheneaLayout>
      {/* <NoteView/> */}
      {/* <NothingSelectedView /> */}
      <FileList />

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
          <FileUpload sx = {{ fontSize: 30 }} />
      </IconButton>
    </AtheneaLayout>
  )
}
