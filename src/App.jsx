import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  // 1.with empty dependancy list
 useEffect(() => {
  // run when the component is rendered for the first time alone.
   fetch('https://69fc3366fce564e259176e6d.mockapi.io/todos')
  .then(response => response.json())
  .then(todos => console.log(todos));
 },[])

  return (
    <>
    <button onClick={() => setCount(count + 1)}>Fetch Data</button>
    </>
  )
}

export default App
