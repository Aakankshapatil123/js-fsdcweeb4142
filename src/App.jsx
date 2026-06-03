import { createContext, useReducer, useState } from "react";
import Reaction from "./components/Reaction";

const reducer = (state, action) => {
  // the current state is in -> state
  // has to return the new state
  if(action.type === "LIKE"){
    // we know that the like buttoon is clicked
    // so we want to increace the current state by 1 retun it
    return state + 1
  }

}
 export const ReactionContext = createContext();
const App = () => {
  
  const [likes, setLikes] = useReducer(reducer, 0);

  return (
    <ReactionContext.Provider value={{likes, setLikes}}>
      <Reaction />
    </ReactionContext.Provider>
  )
}

export default App;
