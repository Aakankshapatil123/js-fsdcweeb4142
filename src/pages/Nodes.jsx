
import { useNavigate, useParams } from 'react-router';
import instance from '../instances/instance';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNoteById, selectLoadingNote, selectNote, selectNoteError } from '../redux/features/notesSlice';
import { useEffect } from 'react';

const Nodes = () => {
   const { id } = useParams();
   
  // get the stae via selectors
  const note = useSelector(selectNote);
  const LoadingNote = useSelector(selectLoadingNote);
  const noteerror = useSelector(selectNoteError);

  const dispatch = useDispatch();

   

   useEffect(() => {
     if (id) dispatch(fetchNoteById(id));
   },[dispatch, id])

  

  return (
    <div>
      {
        LoadingNote ?(
          <p>Loading...</p>
        ): noteerror ? (
          <p style={{color: "red"}}>{noteerror}</p>
        ): note ? (
          <div>
            <h3>{note.description}</h3>
            <p>Created At: {note.createdAt}</p>
          </div>
        ): (<p>No note found</p>)
        
      }
      
    </div>
  )
}

export default Nodes;
