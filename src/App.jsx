
const App = () => {
  let Likes = 0;

  const handleLike = () => {
    like = like + 1; // like++
  }

  return(
    <>
    <h1>Likes: {Likes}</h1>
    <button onClick={handleLike}>Like</button>
    </>
  )
}

export default App;
