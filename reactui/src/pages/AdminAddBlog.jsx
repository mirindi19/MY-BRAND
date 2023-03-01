import "./Admin-style.css"
import MenuIcon from '@mui/icons-material/Menu';
const AdminAddBlog = () => {
  return (
 
    <div class="wrapper">
       <div class="sidebar">
           <div class="profile">
               <img src="./pictures/Mirindi.jpg" alt="profile_picture"></img>
            <h3>Mirindi Saidi</h3>
            <p>Admin</p>
        </div>
        <ul>
            <li>
                <a href="./SignUpView.html">
                    <span class="item" >Sign up view</span>
                </a>
            </li>
            <li>
                <a href="./viewMessage.html">
                    <span class="item" >Message</span>
                </a>
            </li>
            <li>
                <a href="./AdminBlog.html"  class="active">
                    <span class="item">Blog</span>
                </a>
            </li>           
</ul>
      </div>
     

    <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <MenuIcon/>
        </label>
        <ul>
            <li class="d"><a href="./SignUpView.html">Sign up view</a></li>
            <li class="d"><a href="./viewMessage.html">message</a></li>
            <li class="d"><a href="./AdminBlog.html">Blog</a></li>
            <li><button onclick="logout()" class="btnTopNavbar">logout</button></li>
        </ul>
    </nav>
    <main>
        <div class="container-reg">
            <header>Enter Blog</header>
            <form name="addBlogAdmin" method="post" id="addBlogAdmin">
                <div class="form first">
                    <div class="details personal">
                        <div class="fields">
    
                             <div class="input-field">
                              <label for="proname">Title</label>
                              <input type="text" class="form-control" id="title" name="title"/>
                            </div>
                              <div class="input-field">
                                <label for="proname">Picture</label>
                                <input type="file" class="form-control" id="image" name="image"/>
                              
                              </div>
                              <div class="input-field">
                                <label for="proname">Message</label>
                                <textarea type="text" class="form-control" id="content" name="content"></textarea>
                               
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