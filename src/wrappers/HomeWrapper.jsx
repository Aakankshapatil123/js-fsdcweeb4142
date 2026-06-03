import { Outlet } from 'react-router';
import NavBar from '../cpmponents/NavBar'

const HomeWrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default HomeWrapper;
