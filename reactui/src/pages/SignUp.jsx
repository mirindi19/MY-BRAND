import "./login.css"
import {Link} from "react-router-dom"
const SignUp = () => {
  return (
    <div className="cont">
    <div className="container" id="container">
	<div className="form-container sign-in-container">
		<form>
			<h1 style={{fontSize: 20}}>create Account</h1>
			<div className="error">
            <input type="text"  placeholder="Full name" id="fname" name="fname"/>
			</div>
			<div className="error1">
            <input type="text"  placeholder="Age" id="age" name="age"/>
			</div>
			<div className="error">
			<input type="email"  placeholder="Email" id="email" name="email"/>
		    </div>
			<div className="error">
			<input type="password"  placeholder="Password" id="pswd" name="pswd"/>

		</div>
			<button type="submit">Sign Up</button>
			<p><a href="index.html">Return to login</a></p>
		</form>
       
	</div>
<div className="overlay-container">
	<div className="overlay">	
		<div className="overlay-panel overlay-right">
		<h1> Welcome</h1>
		<p>Enter your E-mail and password if You do not have account create</p>
		<Link to="/AdminBlog">
		 <p><b><a class="here">Here</a></b></p>
		 </Link>
		<p>OR view and comment <b><a href="./Homepage.html"class="here">Here</a></b></p>
			</div>
		</div>
	</div>
</div>
    
    </div>
  )
}

export default SignUp