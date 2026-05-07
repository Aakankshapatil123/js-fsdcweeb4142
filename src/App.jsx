import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // 1.with dependancy list
 useEffect(() => {
  // run when the component is rendered or re-renderd when the specified dependencies.
   fetch('https://69fc3366fce564e259176e6d.mockapi.io/todos')
  .then(response => response.json())
  .then(todos => console.log(todos));
 },[count, count1]);

//  console.log(count1);
  return (
    <>
    <button onClick={() => setCount(count + 1)}>Fetch Data</button>
    <button onClick={() => setCount1(count1 + 1)}>Change State</button>
    </>
  )
}

export default App
