// import { useState } from "react";


// const App = () => {
 
//   const [count, setCount] = useState(0);

//   return (
//     <>
//      <h1>Count: {count}</h1>
//      <button onClick={() => setCount(count + 1)}>inc</button>
//     </>
//   )
// }

// export default App;




// normal variable 
import { useEffect, useState } from "react";


const App = () => {
 
  const [count, setCount] = useState(0);
  const [state, setState] = useState(true);

  const handleCount = () => {
    setCount(count + 1)
    console.log(count);
  }
  


  useEffect(() => {
   console.log(`current state: ${state}`)
  },[state])
  

  return (
    <>
     <h1>Count: {count}</h1>
     <button onClick={handleCount}>inc</button> &nbsp;
     <button onClick={() => setState(!state)}>Chage State</button>

    </>
  )
}

export default App;
