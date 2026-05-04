

const App = () => {
  const recipes = [
    'Biryani',
    'Pulao',
    'Fried Rice',
    'Noodles',
    'Pasta',
    'Pizza',
    'Burger',
    'Sandwich',
    'Salad',
    'Soup'
  ];

  // const list = [<li>recipes</li>] 

  
  return (
    <>
    <h1>Recipes</h1>
    <ul>
      {
        recipes
        .map((recipes, index)=>{
        return <li key={index}>{recipes}</li>
      })
      }
    </ul>
    </>
  )
}

export default App;
