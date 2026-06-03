import { useDispatch, useSelector } from "react-redux"
import { selectDislikes, selectLikes, selectReactions, setDislikes, setLikes, setReactions,   } from "./redux/feature/reactionSlice"

const App = () => {
  const likes = useSelector(selectLikes);
  const dispatch = useDispatch();

  const Dislikes = useSelector(selectDislikes);

  const Reaction = useSelector(selectReactions);

  const handleLikes = () => {
    dispatch(setLikes());
    dispatch(setReactions('LIKE'));
  }

  const handleDislike = () => {
    dispatch(setDislikes());
    dispatch(setReactions('DISLIKE'));
  }



  return (
     <div>
     <h1>Like:{likes}</h1>
     <button onClick={handleLikes}>Like</button> &nbsp;
     <h1>Dislike: {Dislikes}</h1>
     <button onClick={handleDislike}>Dislike</button>

     <h1>Reactions: {Reaction.join(', ')}</h1>
    </div>
  )
}

export default App
