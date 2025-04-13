import React from 'react'
import Navbar from '../componants/login/Navbar';
// import Form1 from '../componants/login/Form1';
import Footer from '../componants/login/Footer';
// import Form2 from '../componants/login/Form2';
import App from '../componants/login/Form';


function Login() {
  return (
    <>
        <Navbar/>
        {/* <Form1/> */}
        <App/>
        <Footer/>
    </>
  )
}

export default Login;
