import React from 'react'

function Form2() {
  return (
    <form action="index.php" id="forgotPassword-form" method="post">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="email" name="email" id="forgotEmail" placeholder="Enter your email" required />
                  </div>
                  <div className="text" style={{ marginBottom: '20px', display: 'flex' }}>
                    <a id="backToLogin">back to login?</a>
                  </div>
                  <div className="button input-box">
                    <button type="submit" id="sendCodeBtn" >Send Code</button>
                  </div>
                </div>
              </form>
  )
}

export default Form2
