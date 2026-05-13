import { Link } from 'react-router';
import './Navbar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
        <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/register"}>Register</Link>
        </li>
        <li>
            <Link to={"/login"}>Login</Link>
        </li>
        
    </ul>
    </div>
  )
}

export default NavBar;
