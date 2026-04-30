// controlled component or controlled form

import { useState } from "react";
import './App.css';

const App = () => {
  // 1. create a state for the input
   const[email, steEmail] = useState("");
   const[password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Logging in....");
    console.log(email)
    console.log(password);


    // reset the form
    steEmail("");
    setPassword("");

    event.target.email.focus();
  }

  // const formStyle = {
  //     display:"flex",
  //     flexDirection: "column",
  //     gap: 10,
  //     border: "1px solid black",
  //     padding: "32px"
  // }

  // inline style
  return (
    <>
    
    <form onSubmit={handleLogin}
    className="formLogin"
    >
     <h1>Login</h1>
     <div>
       <input
       name="email"
      type='email'
      placeholder='email...'
      value={email}
      onChange={(e) => steEmail(e.target.value)}
      required
      style={{
        height: "30px",
        paddingLeft: "16px"
      }}
      />
     </div>

     <div>
      <input
      name="password"
      type='password'
      placeholder='password...'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
       style={{
        height: "30px",
        paddingLeft: "16px"
      }}
      />
     </div>

     <button 
     type="submit"
     className="btnLogin"
     >
      Login
     </button>
    </form>
    </>
  )
}

export default App;
