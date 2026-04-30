// uncontrolled component or uncontrolled form
// we are not using react State to control the value of the input fields.
const App = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value)
    console.log("from submitted.....");
    console.log("Logging in with the following credentials");
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
  }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
     <div>
       <input
       name="email"
      type='email'
      placeholder='email...'
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
