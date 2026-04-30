import { useState } from "react";


const App = () => {
   const [reactions, setReactions] = useState({
    likes: 0,
    dislikes: 0
   });

   const[history, setHistory] = useState([]);

  const likeHandle = () => {
     setReactions({
      ...reactions,
      likes: reactions.likes + 1
     })
     setHistory([...history, 'L'])
  };

  const dislikeHandle = () =>{
     setReactions({
      ...reactions,
      dislikes: reactions.dislikes + 1
     })
     setHistory([...history, 'D'])
  }
  console.log(history);

  return (
    <>
    <button onClick={likeHandle}>
      <span className="material-symbols-outlined">
thumb_up
</span>
{reactions.likes}
</button> &nbsp; 
    <button onClick={dislikeHandle}>
      <span className="material-symbols-outlined">
thumb_down
</span>
{reactions.dislikes}
</button>
<p>{history.join(' ')}</p>
    </>
  )
}

export default App;
