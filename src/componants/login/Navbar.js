import React from 'react';
import logo from '../../img/icon000.png';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" >
      <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <p className="m-0 fw-bold" style={{ fontSize: "25px" }}>
          <img src={logo} alt="Logo" style={{ height: "70px", width: "200px" }} />
        </p>
      </Link>

      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link ">Home</Link>
          <Link to="/about" className="nav-item nav-link ">About</Link>
          <Link to="/events" className="nav-item nav-link ">Events</Link>
          <Link to="/courses" className="nav-item nav-link">Courses</Link>
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
            <div className="dropdown-menu fade-down m-0">
              <Link to="/team" className="dropdown-item">Our Team</Link>
              <Link to="/projects" className="dropdown-item">Projects</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
          <Link to="/login" className="nav-item nav-link active"> <i className="fa fa-user"></i></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
