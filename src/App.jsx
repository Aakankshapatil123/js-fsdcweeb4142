

import { useState } from "react"


const App = () => {

  const[reactions, setReaction] = useState({
    likes : 0,
    dislikes: 0
  });
  

  const likeHandle = () => {
     setReaction({
      ...reactions,
      likes: reactions.likes + 1
  })
  };

  const dislikeHandle = () => {
    setReaction({
      ...reactions,
      dislikes : reactions.dislikes + 1
    })
  }

  console.log(reactions);
  // when the like button is clicked, it will call likehandle function
  return (
    <>
    
    <button onClick={likeHandle}><span 
    className="material-symbols-outlined">
    thumb_up
    </span> 
    {reactions.likes}
    </button> &nbsp;
    <button onClick={dislikeHandle}><span 
    className="material-symbols-outlined">
    thumb_down
    </span>
    {reactions.dislikes}
    </button>
    </>
  )
}

export default App;
