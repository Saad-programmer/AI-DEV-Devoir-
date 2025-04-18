import React from 'react'
import { Link } from 'react-router-dom';


function Form1() {
  return (
    <form action="index.php" id="login-form" method="post">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="email" name="email" placeholder="Enter your email" id="loginEmail" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" name="password" placeholder="Enter your password" id="password" required />
                    <i className="bi bi-eye-fill" style={{ marginLeft: 'auto', marginRight: '6px' }} id="togglePassword"></i>
                  </div>
                  <div className="text"><a id="forgotpassword" >Forgot password?</a></div>
                  <div className="button input-box">
                    <button type="submit" className="btn">Submit</button>
                  </div>
                  <div>
                    <Link to="/inscription" className="text">Don't have an account? Register here</Link>
                  </div>
                </div>
              </form>
  )
}

export default Form1
