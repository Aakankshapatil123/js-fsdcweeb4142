import './App.css'

const App = () => {
  const recipes = [
     {
      name: 'Pasta',
      ingredients: ['Pasta', 'Tomato Sauce', 'Cheese'],
      author: 'John Doe',
      cookingTime: '30 minutes',
      difficulty: 'Easy',
      isFavourite: true
      
    },
    {
      name: 'Chicken Curry',
      ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'],
      author: 'Jane Smith',
      cookingTime: '45 minutes',
      difficulty: 'Medium',
      isFavourite: false
  
    },
    {
      name: 'Chocolate Cake',
      ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Eggs'],
      author: 'Emily Johnson',
      cookingTime: '1 hour',
      difficulty: 'Hard',
      isFavourite: true
  
    }
  ];
  // const list = [<li>recipes</li>] 

  
  return (
    <>
    <h1>Recipes</h1>
    <ul>
      {
        recipes
        .map((recipes, index)=>{
        return <li key={index}>
          <div className= "recipe-card">
          <header>
            <h2>{recipes.name}</h2>
          <span 
          className="material-symbols-outlined"
          style={{
            'fontVariationSettings':
            `'FILL' ${recipes.isFavourite ? 1 : 0},
            'wght' 400,
            'GRAD' 0,
            'opsz' 24`,
            fontSize: '32PX'
          }}
          >
             favorite
             </span>
          </header>
          <hr></hr>
          <p><strong>Author:</strong>{recipes.author}</p>
          <p><strong>Cooking Time:</strong>{recipes.cookingTime}</p>
          <p><strong>Difficulty:</strong>{recipes.difficulty}</p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {
              recipes.ingredients
              .map((ingredients, index)=> {
                return <li key={index}>{ingredients}</li>
              })           
               }
          </ul>
          </div>
          </li>
      })
      }
    </ul>
    </>
  )
}

export default App;
