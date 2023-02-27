import "./adminHome.scss"
import Siderbar from "./Siderbar"
import Navbar from "./Navbar"
const AdminHome = () => {
  return (
    <div className='AdminHome'>
    <Siderbar/>
    <div className="container">
    <Navbar/>
    </div>
    </div>
  )
}

export default AdminHome