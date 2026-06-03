import { useContext } from "react";
import { ReactionContext } from "../App";

const Reaction = () => {
    const {likes, setLikes} = useContext(ReactionContext)

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={() => setLikes({
        type: "LIKE"
      })}>Like</button>
    </div>
  )
}

export default Reaction;
