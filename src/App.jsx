// controlled component or controlled form

import { useState } from "react";

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

  
  return (
    <>
    
    <form onSubmit={handleLogin}
    className="flex flex-col gap-4 w-100 mx-auto mt-10 bprder 
    border-gray-300 rounded p-8 shadow-lg"
    >
     <h1
      className="text-2xl font-bold text-center"
     >Login</h1>
     <div
      className="flex flex-col gap-2"
     >
       <input
       name="email"
      type='email'
      placeholder='email...'
      value={email}
      onChange={(e) => steEmail(e.target.value)}
      required
      className="border border-gray-300 rounded px-3 py-2"
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
      className="border border-gray-300 rounded px-3 py-2 w-full"
      />
     </div>

     <button 
     type="submit"
     className="border border-gray-500 rounded px-3 py-2 w-full"
     >
      Login
     </button>
    </form>
    </>
  )
}

export default App;
