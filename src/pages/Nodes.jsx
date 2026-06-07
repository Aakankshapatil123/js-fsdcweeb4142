import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import instance from '../instances/instance';
import { useDispatch, useSelector } from 'react-redux';
import { selectNodes, setNodes } from '../redux/features/notesSlice';
import nodeServices from '../services/nodeServices';

const Nodes = () => {
   const { id } = useParams();
   const nodes = useSelector(selectNodes);

   const dispatch =  useDispatch();
   const navigate = useNavigate();

   const fetchNodes = async () => {
    try {
      const responce = await  nodeServices.getNodesById();
    dispatch(setNodes(responce.data))
    }catch(error) {
      dispatch(setNodes([]));
    }
    
   }

   useEffect(() => {
    fetchNodes();
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
