import "./login.css"

const SignUp = () => {
  return (
    <div>
    <div class="container" id="container">
	<div class="form-container sign-in-container">
		<form name="validation" method="post" id="validation">
			<h1 style={{fontSize: 20}}>create Account</h1>
			<div class="error">
            <input type="text"  placeholder="Full name" id="fname" name="fname"/>
			</div>
			<div class="error1">
            <input type="text"  placeholder="Age" id="age" name="age"/>
			</div>
			<div class="error">
			<input type="email"  placeholder="Email" id="email" name="email"/>
		    </div>
			<div class="error">
			<input type="password"  placeholder="Password" id="pswd" name="pswd"/>

		</div>
			<button type="submit">Sign Up</button>
			<p><a href="index.html">Return to login</a></p>
		</form>
       
	</div>
<div class="overlay-container">
	<div class="overlay">	
		<div class="overlay-panel overlay-right">
		<h1> Welcome</h1>
		<p>Enter your E-mail and password if You do not have account create <b><a href="SignUp.html"class="here">Here</a></b></p>
		<p>OR view and comment <b><a href="./Homepage.html"class="here">Here</a></b></p>
			</div>
		</div>
	</div>
</div>
    
    </div>
  )
}

export default SignUp