// updating a normal variablr does not re-rendering of the the component
//re-rendering means that the component will be re-evaluted and the UI will 
// be updated with nwe values

const App = () => {
   let likes = 0;

   const handleLike = () => {
    // update the likes variable
     likes++; // or likes = likes + 1;
     console.log(likes); // this will log the updated value of likes
   };

  //  when like button is clicked, it will call handlelike function
  return (
    <>
    <h1>Like : {likes}</h1>
    <button onClick={handleLike}>Like</button>
    </>
  )
}

export default App;
