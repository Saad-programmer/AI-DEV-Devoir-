import React, { useState } from 'react';
import './login.css';
import Form from '../componants/login/Form';
import Form1 from '../componants/login/Form1';



function Login(){

  return (
    <div className="container" style={{width:"900px",top:"30px",position: "relative", maxWidth: "850px",width: "100%", background: "#fff", padding: "130px 30px", boxShadow: "2px 2px 20px rgba(0,0,0,0.3)",perspective: "2700px"}} >
      <Form/>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title" id="board-title">Login</div>
            <div className="alert-box">
            </div>
              <Form1/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
