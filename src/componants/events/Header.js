import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import eventImage from '../../img/event.png';

function EventHeader() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="page-header"
      style={{
        background: `url(${eventImage}) no-repeat center center/cover`,
      }}
      data-aos="fade-up" data-aos-delay="200"
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown" data-aos="fade-up" style={{ fontWeight: 'bold'}}>
              Events
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a className="text-white" href="/">Home</a>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Courses
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHeader;
