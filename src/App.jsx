

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

  const list = [];
  recipes.forEach(recipes => {
    list.push(
    <li>{recipes}</li>
  )
  });
  return (
    <>
    <h1>Recipes</h1>
    <ul>{list}</ul>
    </>
  )
}

export default App;
