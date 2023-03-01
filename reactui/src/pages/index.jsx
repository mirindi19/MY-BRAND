import "./login.css"

const index = () => {
  return (
    <div>
    <div class="container" id="container">
	<div class="form-container sign-in-container">
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
<div class="overlay-container">
	<div class="overlay">	
		<div class="overlay-panel overlay-right">
		<h1> Welcome </h1>
		<p>Enter your E-mail and password if You do not have account create <b><a href="SignUp.html"class="here">Here</a></b></p>
        <p>OR view and comment <b><a href="./Homepage.html"class="here">Here</a></b></p>
			</div>
		</div>
	</div>
</div>
    
    </div>
  )
}

export default index