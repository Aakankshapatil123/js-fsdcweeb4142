import { Outlet } from "react-router"
import Dashboard from "../pages/Dashboard"
import NavBar from "../cpmponents/NavBar"

const DashboardWrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default DashboardWrapper
