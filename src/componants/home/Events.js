import React, { useEffect } from 'react';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import eventImage from '../../img/event.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Events = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="owl-carousel header-carousel position-relative">
      <div className="owl-carousel-item position-relative">
        <img
          className="img-fluid Event-image"
          src={eventImage}
          alt="Event"
          style={{ height: "100%" }}
          data-aos="fade-up" // AOS animation class
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: 'rgba(24, 29, 56, 0.7)' }}
          data-aos="fade-up" // AOS animation class
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5
                  className="text-uppercase mb-3"
                  style={{ color: '#5a08dd', fontWeight: 'bold', fontSize: '1.5rem' }}
                  data-aos="fade-up" // AOS animation class
                >
                  Upcoming Tech Event
                </h5>
                <h1
                  className="text-white"
                  style={{ fontWeight: 'bold', fontSize: '3rem' }}
                  data-aos="fade-up"
                >
                  Discover the Future of Innovation
                </h1>
                <p
                  className="text-white mb-4 pb-2"
                  style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                  data-aos="fade-up"
                >
                  Join us for an unforgettable event experience!
                </p>
                <a
                  href="event1.php"
                  className="btn btn-primary py-md-3 px-md-5 me-3"
                  style={{ fontWeight: 'bold' }}
                  data-aos="fade-up" // AOS animation class
                >
                  Read More
                </a>
                <a
                  href="cll/login.php"
                  className="btn btn-light py-md-3 px-md-5"
                  style={{ fontWeight: 'bold' }}
                  data-aos="fade-up" // AOS animation class
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className="text-center text-white"
        style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
        data-aos="fade-up"
      >
        No events available at the moment.
      </p>
    </div>
  );
};

export default Events;
