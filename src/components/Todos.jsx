
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Todo from './Todo';



const Todos = () => {

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
    <h1>Todos</h1>
     <ul>
      {
        todos
        .map(todo =>{
          return <Todo 
          key={todo.id}
          todo={todo}
          />
        })
      }
     </ul>
    </>
  )
}
export default Todos;