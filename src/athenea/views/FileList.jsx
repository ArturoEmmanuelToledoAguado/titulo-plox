import {List} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setAnalysisActivate } from '../../store/sidebar';
import { File } from './File';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'
import { useEffect } from 'react';

export const FileList = () => {

  const {analysis, messageSaved} = useSelector(state => state.sidebar)
  useEffect(() => {
    if(messageSaved.length > 0){
      Swal.fire('Analizando Tesis', messageSaved, 'success')
    }
  }, [messageSaved])
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {analysis.map((note) => (
          <File key={note.id} {...note}/>
        ))}
    </List>
  )
}