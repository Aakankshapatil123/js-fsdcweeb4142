// controlled component or controlled form

import { useState } from "react";

// we are using react State to control the value of the input fields.
const App = () => {
  // 1. create a state for the input
   const[email, steEmail] = useState("")

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Logging in....");
    console.log(email)
  }

  // 2. assingning the sate as a value to the input field
  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
     <div>
       <input
       name="email"
      type='email'
      placeholder='email...'
      value={email}
      onChange={(e) => steEmail(e.target.value)}
      />
     </div>

     <div>
      <input
      name="password"
      type='password'
      placeholder='password...'
      />
     </div>

     <button type="submit">
      Login
     </button>
    </form>
    </>
  )
}

export default App;
