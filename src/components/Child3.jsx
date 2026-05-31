const Child3 = ({message}) => {
    // child component that neets the data from App
    console.log(message)
  return (
    <div>
      {message}
    </div>
  )
}

export default Child3;
