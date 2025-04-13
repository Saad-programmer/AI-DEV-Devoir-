import React, { useEffect } from 'react';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import photo1 from '../../img/photo-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="container-xxl py-5 pt-5 bg-light">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 p-5" data-aos="fade-up" data-aos-delay="300">
            <h1 className="mb-4" style={{ color: "#5a08dd" }}>Explore Free Courses</h1>
            <p className="mb-4">
              Start your online learning journey at Great Learning Academy for free with our
              short-term basic courses across various in-demand domains.
            </p>
            <a className="btn text-light py-3 px-5 mt-2" href="man/login.php">Start For Free</a>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={photo1}
                alt="Explore Free Courses"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
