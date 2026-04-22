
// child componnets

// 3. receive functions from parent as props
function Header(props) {
   let name = "piu"
   let age = 25;

// 4. exicute the function from child component
// 5. also, we can pass the data to the in the parent componnent
props.receiveChildData(name, age); 


        return(
            <>
            <h1>Hello word</h1>
            </>
        )
     
}

export default Header;