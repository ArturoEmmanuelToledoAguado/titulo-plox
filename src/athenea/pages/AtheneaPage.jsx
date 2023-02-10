import { IconButton } from "@mui/material"
import { AtheneaLayout } from "../layout/AtheneaLayout"
import { FileList, NoteView, NothingSelectedView } from "../views"
import { AddOutlined, FileUpload } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewAnalysis } from "../../store/sidebar"

export const AtheneaPage = () => {

  const dispatch = useDispatch()
  const {isSaving, active} = useSelector(state => state.sidebar)
  const onClickNewTesis = () => dispatch(startNewAnalysis())
  return (
    <AtheneaLayout>
      {/* <NoteView/> */}
      {/* <NothingSelectedView /> */}
      {(!!active)?<FileList />: <FileList />}
      

      <IconButton
        onClick={onClickNewTesis}
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
