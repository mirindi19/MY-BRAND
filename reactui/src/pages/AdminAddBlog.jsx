import "./Admin-style.css"
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"
const AdminAddBlog = () => {
  return (
 
    <div className="wrapper">
       <div className="sidebar">
           <div className="profile">
               <img src="./pictures/Mirindi.jpg" alt="profile_picture"></img>
            <h3>Mirindi Saidi</h3>
            <p>Admin</p>
        </div>
        <ul>
        <Link to="/sign-up-view">
            <li>
                <a>
                    <span class="item" >Sign up view</span>
                </a>
            </li>
            </Link>
            <li>
                <a>
                    <span class="item" >Message</span>
                </a>
            </li>
        
            <li>
                <a class="active">
                    <span class="item">Blog</span>
                </a>
            </li>         
</ul>
      </div>
     

    <nav>
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
            <MenuIcon/>
        </label>
        <ul>
            <li className="d"><a href="./SignUpView.html">Sign up view</a></li>
            <li className="d"><a href="./viewMessage.html">message</a></li>
            <li className="d"><a href="./AdminBlog.html">Blog</a></li>
            <li><button class="btnTopNavbar">logout</button></li>
        </ul>
    </nav>
    <main>
        <div className="container-reg">
            <header>Enter Blog</header>
            <form name="addBlogAdmin" method="post" id="addBlogAdmin">
                <div className="form first">
                    <div className="details personal">
                        <div className="fields">
    
                             <div className="input-field">
                              <label for="proname">Title</label>
                              <input type="text" className="form-control" id="title" name="title"/>
                            </div>
                              <div className="input-field">
                                <label for="proname">Picture</label>
                                <input type="file" className="form-control" id="image" name="image"/>
                              
                              </div>
                              <div className="input-field">
                                <label for="proname">Message</label>
                                <textarea type="text" className="form-control" id="content" name="content"></textarea>
                               
                              </div>
                            <button class="btnEnter" type="submit">Enter</button>
                        </div>
    
                </div>
                       </div>
            </form>
             </div>
                
    </main>
    
    </div>
  )
}

export default AdminAddBlog