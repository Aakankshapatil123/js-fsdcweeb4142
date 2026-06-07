import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import instance from '../instances/instance';
import { useDispatch, useSelector } from 'react-redux';
import { selectNodes, setNodes } from '../redux/features/notesSlice';

const Nodes = () => {
   const { id } = useParams();
   const nodes = useSelector(selectNodes);

   const dispatch =  useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
     instance
     .get(`/notes/${id}`)
     .then (response => dispatch(setNodes(response.data)))
   },[])

   const handleBack = (e) => {
    e.preventDefault();

    navigate(-1)
   }

  return (
    <div>
      <h3>Note</h3>
      <p>{nodes?.description}</p>
      <p><strong>CreatedAt:</strong>{nodes?.createdAt}</p>

      <button onClick={handleBack}>
        Back to All Notes
      </button>
      
    </div>
  )
}

export default Nodes;
