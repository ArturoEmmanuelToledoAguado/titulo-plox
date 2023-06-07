import { IconButton } from "@mui/material"
import { AtheneaLayout } from "../layout/AtheneaLayout"
import { FileList, NoteView, NothingSelectedView } from "../views"
import { AddOutlined, FileUpload } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewAnalysis } from "../../store/sidebar"

export const AtheneaPage = () => {

  const dispatch = useDispatch()
  const {isSaving, active, analysis} = useSelector(state => state.sidebar)
  const onClickNewTesis = () => dispatch(startNewAnalysis())

  return (
    <AtheneaLayout>
      {/* <NoteView/> */}
      {/* <NothingSelectedView /> */}
      {(!!active)?<NoteView/>:(analysis.length > 0)?<FileList/>:<NothingSelectedView />}

      <IconButton
        onClick={onClickNewTesis}
        size='large'
        disabled = {isSaving}
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
