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

  // when the like button is clicked, it will call likehandle function
  return (
    <>
    <h1>Likes : {likes}</h1>
    <button onClick={likeHandle}>Like</button>
    </>
  )
}

export default App
