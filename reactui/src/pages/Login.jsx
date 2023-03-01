import "./login.css"
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div className="cont">
    <div className="container" id="container">
	<div className="form-container sign-in-container">
		<form name="validation" id="validation">
			<h1>Log In</h1>
            <div>
			<input type="email"  placeholder="Email" id="email" name="email"/>
        </div>
        <div>
			<input type="password"  placeholder="Password" id="pswd" name="pswd"/>
        </div>
			<button>Sign In</button>
			<p>Create Account &nbsp;&nbsp;<a href="SignUp.html">Here?</a></p>
		</form>
        
	</div>
<div className="overlay-container">
	<div className="overlay">	
		<div className="overlay-panel overlay-right">
		<h1> Welcome </h1>
		<p>Enter your E-mail and password if You do not have account create</p>
		<Link to="/sign-up-form">
		<p> <b><a class="here">Here</a></b></p>
		</Link>
        <p>OR view and comment <b><a class="here">Here</a></b></p>
			</div>
		</div>
	</div>
</div>
    
    </div>
  )
}

export default Login