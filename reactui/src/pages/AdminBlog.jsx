import "./Admin-style.css"
import MenuIcon from '@mui/icons-material/Menu';
const AdminBlog = () => {
  return (
    <div>
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
                    <a href="" class="active">
                        <span class="item">Blog</span>
                    </a>
                </li>           
  </ul>
          </div>
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
      <div class="wrapper-table">
 <div class="Table-div-response">
  <a href="AdminAddBlog.html" class="btnAction">Add Blog</a>
      <table class="display-Table">
          <tr> 
              <th>Title</th>
              <th>Date</th>
              <th>content</th>
              <th>Picture</th>
              <th>Action</th>
          </tr>
          
          <tbody id="storeList">
              
          </tbody> 
      </table>
      </div>
          </div>
  </main>
    
    </div>
  )
}

export default AdminBlog