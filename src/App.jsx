import { useDispatch, useSelector } from "react-redux"
import { selectLikes, setDislikes, setLikes } from "./redux/feature/reactionSlice"

const App = () => {
  const likes = useSelector(selectLikes);
  const dispatch = useDispatch();

  const handleLikes = () => {
    dispatch(setLikes());
  }

  const handleDislike = () => {
    dispatch(setDislikes())
  }



  return (
     <div>
     <h1>Like:{likes}</h1>
     <button onClick={handleLikes}>Like</button> &nbsp;
     <button onClick={handleDislike}>Dislike</button>
    </div>
  )
}

export default App
