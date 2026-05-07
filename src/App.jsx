import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [todos, setTodos] = useState([])

  // 1.with dependancy list
 useEffect(() => {
  // run when the component is rendered or re-renderd when the specified dependencies.
   axios.get('https://69fc3366fce564e259176e6d.mockapi.io/todos')
  .then(reponse => setTodos(reponse.data));
 },[]);


//  console.log(count1);
  return (
    <>
    <h1>Todes</h1>
     <ul>
      {
        todos
        .map(todo =>(
          <li key={todo.id}>{todo.title}</li>
        ))
      }
     </ul>
    </>
  )
}

export default App
