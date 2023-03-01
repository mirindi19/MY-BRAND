import "./Admin-style.css"
import MenuIcon from '@mui/icons-material/Menu';

const SignUpView = () => {
  return (
    <div>
    
    <div className="wrapper">
       <div className="sidebar">
           <div className="profile">
               <img src="./pictures/Mirindi.jpg" alt="profile_picture"></img>
               <h3>Mirindi Saidi</h3>
               <p>Admin</p>
        </div>
        <ul>
            <li>
                <a class="active">
                    <span class="item" >Sign up view</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="item" >Message</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="item">Blog</span>
                </a>
            </li>           
</ul>
      </div>
      </div>

    <nav>
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
           <MenuIcon/>
        </label>
        <ul>
            <li className="d"><a>Sign up view</a></li>
            <li className="d"><a>message</a></li>
            <li className="d"><a>Blog</a></li>
            <li><button class="btnTopNavbar">logout</button></li>
        </ul>
    </nav>
    <main>

        <div className="wrapper-table">
   <div className="Table-div-response">
        <table className="display-Table">
            <tr> 
                <th>Fullname</th>
                <th>Age</th>
                <th>Email</th> 
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

export default SignUpView