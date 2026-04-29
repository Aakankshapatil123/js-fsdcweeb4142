

import { useState } from "react"


const App = () => {

  const[likes, setLike] = useState(0)
  const[dislikes, setDislike] = useState(0);

  const likeHandle = () => {
     setLike(likes + 1);
  }

  const dislikeHandle = () => {
    setDislike(dislikes + 1)
  }

  // when the like button is clicked, it will call likehandle function
  return (
    <>
    
    <button onClick={likeHandle}><span 
    className="material-symbols-outlined">
    thumb_up
    </span> 
    {likes}
    </button> &nbsp;
    <button onClick={dislikeHandle}><span 
    className="material-symbols-outlined">
    thumb_down
    </span>
    {dislikes}
    </button>
    </>
  )
}

export default App;
