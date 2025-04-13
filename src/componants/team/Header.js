import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import teamImage from '../../img/innov.jpg';

function TeamHeader() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="container-fluid bg-primary py-5 mb-5 page-header img-fluid"
      style={{
        background: `url(${teamImage}) no-repeat center center/cover`,
        position: 'relative',
      }}
    >
      <div
        className="top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{ background: 'rgba(24, 29, 56, 0.7)' }}
      >
        <div className="text-center">
          <h1 className="display-3 text-white animated slideInDown" data-aos="fade-up" style={{fontWeight:'bold'}}>Our Team</h1>
          <nav aria-label="">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">Home</a>
              </li>
              <li className="breadcrumb-item text-white active" aria-current="page">Team</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TeamHeader;
