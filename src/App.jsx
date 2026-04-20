import React from "react";
import Header from "./componets/Header";
Header

// class cpmponents
class App extends React.Component{
 render() {
    let name = "piu";
    let age = 25;
      return(
        <>
          <Header name={name} age={age}/>
        </>

      )
 }
}

export default App;