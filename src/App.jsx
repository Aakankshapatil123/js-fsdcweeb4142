import Child1 from "./components/Child1";

const App = () => {
  const message = "hello from App component;"

  return (
    <div>
      <Child1 message={message}/>
    </div>
  )
}

export default App;
