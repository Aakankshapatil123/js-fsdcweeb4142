// state: a way store and manage data in a component (componet memory)
// state is use to store data that can over time and affect the rendering component
// in react we can useState hook to manage state in functional componets
// the useState is function that use the array
// the array have a stateful value and function to update it.

// Note: we should no update or mutate the state directly
// Ṇote: State change cause re-rendering

import { useState } from "react"


const App = () => {

  const[likes, setLike] = useState(0)

  const likeHandle = () => {
     setLike(likes + 1);
  }

  const dislikeHandle = () => {
    setLike(likes - 1);
  }

  // when the like button is clicked, it will call likehandle function
  return (
    <>
    <h1>Likes : {likes} </h1>
    <button onClick={likeHandle}><svg xmlns="http://www.w3.org/2000/svg" 
    height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 
    23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-
    220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg></button> &nbsp;
    <button onClick={dislikeHandle}>DisLike</button>
    </>
  )
}

export default App;
