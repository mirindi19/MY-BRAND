import "./Admin-style.css"
import MenuIcon from '@mui/icons-material/Menu';
const viewMessage = () => {
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
                <a href="SignUpView.html">
                    <span class="item" >Sign up view</span>
                </a>
            </li>
            <li>
                <a href="" class="active">
                    <span class="item" >Message</span>
                </a>
            </li>
            <li>
                <a href="AdminBlog.html">
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
            <li class="d"><a href="./AdminBlog.jsx">Blog</a></li>
            <li><button onclick="logout()" class="btnTopNavbar">logout</button></li>
        </ul>
    </nav>
    <main>

        <div class="wrapper-table">
   <div class="Table-div-response">
        <table class="display-Table">
            <tr> 
                <th>name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Message</th> 
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

export default viewMessage