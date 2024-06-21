
import React,{useState} from 'react'

function Login({setIsLoginPage} ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setError("");
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setError("");
      };
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch(
            "https://api.noava.in/v1/customers/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                // username: "heartinz",
                // password: "test",
                username:username,
                password: password,
              }),
            }
          );      if (!response.ok) {
            throw new Error("Failed to login. Please try again.");
          }
          const data = await response.json();
          const authToken = data.token;
          console.log("data", data);
          console.log("token", authToken);
          localStorage.setItem("authToken", authToken);
		  setIsLoginPage(false);
          console.log("Response:", response);
        } catch (error) {
          console.error("Login Error:", error);
    
          setError("Invalid username or password. Please try again.");
        }
      };
  return (
    <div>
      	<div className="wrapper">
		<div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div className="container">
				<div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div className="col mx-auto">
						<div className="card mb-0">
							<div className="card-body">
								<div className="p-4">
									<div className="mb-3 text-center">
										<img src="/images/logo/trans-icon-noava-logo-2000px.png" width="60" alt="" />
									</div>
									<div className="text-center mb-4">
										<h5 className="">Welcome to <b>Noava</b> Admin</h5>
										<p classNameName="mb-0">Please log in to your account</p>
									</div>
									<div className="form-body">
										<form className="row g-3">
                                  
                                    <div className="col-12">
                                    <label for="input37" class="col-sm-3 col-form-label">Username</label>
                                    <input type="text" class="form-control" value={username}  id="input37" name="username" placeholder="Enter the username"   onChange={handleUsernameChange}/>
											</div>
                                            <div class="col-md-12">
										<label for="bsValidation5" class="form-label">Password</label>
										<input type="password" value={password} class="form-control" id="bsValidation5"  onChange={handlePasswordChange}  placeholder="Password" required/>
										<div class="invalid-feedback">
											Please choose a password.
										</div>
									</div>
											<div className="col-md-12">
												<div className="form-check form-switch">
													<input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
													<label className="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
												</div>
											</div>
											{/* <div className="col-md-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
											</div> */}
											<div className="col-12">
												<div className="d-grid">
													<button type="submit" onClick={handleLogin} className="btn btn-primary">Sign in</button>
												</div>
											</div>
											{/* <div className="col-12">
												<div className="text-center ">
													<p className="mb-0">Don't have an account yet? <a href="authentication-signup.html">Sign up here</a>
													</p>
												</div>
											</div> */}
										</form>
									</div>
									{/* <div className="login-separater text-center mb-5"> <span>OR SIGN IN WITH</span>
										<hr/>
									</div> */}
									{/* <div className="list-inline contacts-social text-center">
										<a href="javascript:;" className="list-inline-item bg-facebook text-white border-0 rounded-3"><i className="bx bxl-facebook"></i></a>
										<a href="javascript:;" className="list-inline-item bg-twitter text-white border-0 rounded-3"><i className="bx bxl-twitter"></i></a>
										<a href="javascript:;" className="list-inline-item bg-google text-white border-0 rounded-3"><i className="bx bxl-google"></i></a>
										<a href="javascript:;" className="list-inline-item bg-linkedin text-white border-0 rounded-3"><i className="bx bxl-linkedin"></i></a>
									</div> */}
                               {error && <div className="text-danger mt-2">{error}</div>}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--end row--> */}
			</div>
		</div>
	</div>
    </div>
  )
}

export default Login
