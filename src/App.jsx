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
import { useEffect, useRef, useState } from "react";


const App = () => {
 
  const emailHandler = useRef(null);

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(document.getElementById('email'));

      // console.log(event.target.email.value);

      console.log(emailHandler.current)
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
      placeholder="type yor email"
      type="email"
      ref={emailHandler}
      id="email" 
      />
      &nbsp;
      <button type="submit">SubScribe</button>
    </form>
    </>
  )
}

export default App;
