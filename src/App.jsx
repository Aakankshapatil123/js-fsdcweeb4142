import { useEffect } from 'react';
import './App.css'

const App = () => {
  const recipes = [
    
  ];

  useEffect(() => {
    fetch('https://69f880fdf7044aa0103df857.mockapi.io/recipes')
    .then((response) => {
      console.log("feching recipis..")
      return response.json();
    })
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.log(error))
  })

  console.log(JSON.stringify(recipes))
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
