import './siderbar.scss'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>Mirindi saidi</span>
        </div>
        <div className="center">
            <ul>
                <li>
                    <span>Sign up View</span>
                </li>
                <li>
                    <span>Message</span>
                </li>
                <li> 
                    <span>Blog</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar