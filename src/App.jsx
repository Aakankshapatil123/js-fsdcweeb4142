import Header from "./componets/Header";

// parent components
function App(){
  
  //1. create a function in the parrent component
  //  to receive the dada from the child component
  const receiveChildData=(name, age) => {
    console.log(`Hello ${name}! you are ${age} years old!`);
  }


  // 2 pass the function receiveChildDta as props
      return(
        <>
          <Header receiveChildData={receiveChildData} />
        </>

      )
 
}

export default App;