import {List} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setAnalysisActivate } from '../../store/sidebar';
import { File } from './File';

export const FileList = () => {

  const {analysis} = useSelector(state => state.sidebar)
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {analysis.map((note) => (
          <File key={note.id} {...note}/>
        ))}
    </List>
  )
}