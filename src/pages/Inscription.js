import React, { useState } from 'react';
import './login.css';
import Form from '../componants/inscription/Form';
import Form1 from '../componants/inscription/Form1';



function Inscription(){

  return (
    <div className="container" style={{width:"1500px",top:"10px",height:"800px",position: "relative", maxWidth: "850px",width: "100%", background: "#fff", padding: "130px 30px", boxShadow: "2px 2px 20px rgba(0,0,0,0.3)",perspective: "2700px"}}>
      <Form/>
      <div className="forms">
        <div className="form-content">
          <div className="login-form" >
            <div className="title" id="board-title">Inscription</div>
            <div className="alert-box">
            </div>
              <Form1/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
