import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  // 1.without dependancy list
 useEffect(() => {
  // this will happen whenever the component is rendered or re-rendered
   fetch('https://69fc3366fce564e259176e6d.mockapi.io/todos')
  .then(response => response.json())
  .then(todos => console.log(todos));
 })

  return (
    <>
    <button onClick={() => setCount(count + 1)}>Fetch Data</button>
    </>
  )
}

export default App
