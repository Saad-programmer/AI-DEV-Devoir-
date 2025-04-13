// import React from 'react'
// import club from '../../img/club.jpg'
// import 'bootstrap/dist/css/bootstrap.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import '../../style/login-form-style.css'


// function Form2() {
//     return (
//         <>
//             <div class="container" >
//                 <input type="checkbox" id="flip"/>
//                 <div class="cover">
//                     <div class="front">
//                         <img src={club} alt=""/>
//                             <div class="text">
//                                 <span class="text-1">AI & DEV Space MANAGEMENT SYSTEM<br/></span>
//                                 <span class="text-2">Plan serve program</span>
//                             </div>
//                     </div>

//                 </div>
//                 <div class="forms">
//                     <div class="form-content">
//                         <div class="login-form">
//                             <div class="title" id='board-title'>Login</div>
//                                 <div class="alert-box">
//                                     <div class="alert alert-danger text-center mt-3" role="alert" id="error-msg">
//                                     </div>
//                                 </div>
//                                 <form action="index.php" id="login-form" method="post">
//                                     <div class="input-boxes">
//                                         <div class="input-box">
//                                             <i class="fas fa-envelope"></i>
//                                             <input type="email" name="email" placeholder="Enter your email" id='loginEmail' required/>
//                                         </div>
//                                         <div class="input-box">
//                                             <i class="fas fa-lock"></i>
//                                             <input type="password" name="password" placeholder="Enter your password" id="password" required/>
//                                             <i class="bi bi-eye-fill" style={{marginLeft:"auto",marginRight: "6px"}} id="togglePassword"></i>
//                                         </div>
//                                         <div class="text"><a id="forgotpassword">Forgot password?</a></div>
//                                         <div class="button input-box">
//                                             <button type="submit" class="btn">
//                                                 Submit
//                                             </button>
//                                         </div>
//                                         <div>
//                                             <a href="../base/admin/signup2.php" class="text">Don't have an account? Register here</a>
//                                         </div>
//                                     </div>
//                                 </form>

//                                 <form action="index.php" id="forgotPassword-form" method="post" style={{display:"none;"}}>

//                                     <div class="input-boxes">
//                                         <div class="input-box">
//                                             <i class="fas fa-envelope"></i>
//                                             <input type="email" name="email" id="forgotEmail" placeholder="Enter your email" required/>
//                                         </div>

//                                         <div class="text" style={{marginBottom: "20px",display:"flex"}}>
//                                             <a id="backToLogin">back to login?</a>
//                                         </div>

//                                         <div class="button input-box">
//                                             <button type="submit" id='sendCodeBtn'>
//                                                 Send Code
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </form>

//                                 <form id="otpVarification-form" method="post" style={{display:"none;"}}>
//                                     <div class="input-boxes">
//                                         <div class="input-box">
//                                             <i class="fas fa-envelope"></i>
//                                             <input type="text" name="email" value="some value" id="otpDisabledEmail"/>
//                                         </div>

//                                         <div class="input-box">
//                                             <i class="fas fa-lock"></i>
//                                             <input type="text" name="otp" placeholder="Enter code" id="otpCode" required/>
//                                         </div>

//                                         <div class="text" style={{marginBottom: "20px",display:"flex"}}>
//                                             <a id="backToforgotPasswordForm">back</a>
//                                             <a id="resendOTP" style={{marginLeft: "auto;"}}>resend OTP?</a>
//                                         </div>

//                                         <div class="button input-box">
//                                             <button type="submit" id='verifyCodeBtn'>
//                                                 Verify Code
//                                             </button>
//                                         </div>

//                                     </div>
//                                 </form>


//                                 <form id="createNewPassword-form" method="post" style={{display:"none;"}}>
//                                     <div class="input-boxes">
//                                         <div class="input-box">
//                                             <i class="fas fa-lock"></i>
//                                             <input type="password" name="newpassword" id='newpassword' placeholder='Enter new password' required/>
//                                         </div>

//                                         <div class="invalid-feedback" id='weakPasswordFeedback'></div>

//                                         <div class="input-box">
//                                             <i class="fas fa-lock"></i>
//                                             <input type="password" name="confirmpassword" id='confirmpassword' placeholder='Confirm password' required/>
//                                         </div>

//                                         <div class="invalid-feedback" id='passwordNotSame'>
//                                             New password and confirm password are not same!
//                                         </div>

//                                         <div class="form-check mt-3 ">
//                                             <input class="form-check-input" type="checkbox" value="" id="showPasswords"/>
//                                                 <label class="form-check-label" for="showPasswords" id='showPasswordLabel'>
//                                                     Show password
//                                                 </label>
//                                         </div>

//                                         <div class="button input-box">
//                                             <button type="submit" id='changePasswordBtn'>
//                                                 Change password
//                                             </button>
//                                         </div>

//                                     </div>
//                                 </form>



//                             </div>

//                         </div>
//                     </div>
//             </div>
//         </>
//     )
// }

// export default Form2
