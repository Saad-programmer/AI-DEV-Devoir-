import React from 'react';
import { Link } from 'react-router-dom';
import club from '../../img/club.jpg'
import logo from '../../img/icon000.png';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,

  MDBInput
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={club} alt="login form" className='rounded-start w-100' height={"100%"}/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <img alt="" src={logo} style={{ color: '#ff6219' }} />
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>

<p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>
  Don't have an account? 
  <Link to="/inscription" style={{color: '#393f81'}}>Register here</Link>
</p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;