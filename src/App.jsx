import { useDispatch, useSelector } from "react-redux"
import { selectLikes, setLikes } from "./redux/feature/reactionSlice"

const App = () => {
  const likes = useSelector(selectLikes);
  const dispatch = useDispatch();

  const handleLikes = () => {
    dispatch(setLikes());
  }

  return (
     <div>
     <h1>Like:{likes}</h1>
     <button onClick={handleLikes}>Like</button> 
    </div>
  )
}

export default App
