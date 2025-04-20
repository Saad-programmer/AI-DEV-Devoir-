import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../../img/icon000.png';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import { Link } from 'react-router-dom';

function Navbar({ activePage }) {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className={` navbar navbar-expand-lg navbar-light sticky-top p-0 ${isNavbarCollapsed ? '' : 'show'}`}>
      <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <p className="m-0 fw-bold" style={{ fontSize: "25px" }}>
          <img src={logo} alt="Logo" style={{ height: "70px", width: "200px" }} />
        </p>
      </Link>

      <button
        type="button"
        className="navbar-toggler me-4"
        onClick={toggleNavbar} // Toggle navbar visibility on button click
        aria-controls="navbarCollapse"
        aria-expanded={!isNavbarCollapsed} // Reflect current state in aria-expanded
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className={`nav-item nav-link ${activePage === 'home' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-item nav-link ${activePage === 'about' ? 'active' : ''}`}>About</Link>
          <Link to="/events" className={`nav-item nav-link ${activePage === 'events' ? 'active' : ''}`}>Events</Link>
          <Link to="/courses" className={`nav-item nav-link ${activePage === 'courses' ? 'active' : ''}`}>Courses</Link>
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
            <div className="dropdown-menu fade-down m-0">
              <Link to="/team" className={`dropdown-item ${activePage === 'team' ? 'active' : ''}`}>Our Team</Link>
              <Link to="/projects" className={`dropdown-item ${activePage === 'projects' ? 'active' : ''}`}>Projects</Link>
            </div>
          </div>
          <Link to="/contact" className={`nav-item nav-link ${activePage === 'contact' ? 'active' : ''}`}>Contact</Link>
          <Link to="/login" className={`nav-item nav-link ${activePage === 'Login' ? 'active' : ''}`}>Login <i className="fa fa-user"></i></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
