import React, { useEffect } from 'react';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import about from '../../img/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Info() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={about}
                alt="About Us"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <h6 className="section-title bg-white text-start pe-3">About Us</h6>
            <h1 className="mb-4" style={{ color: "#5a08dd" }}>Welcome to AI&DEV Space</h1>
            <p className="mb-4">
              At AI&DEV, we believe in accessible, innovative learning experiences that
              adapt to your schedule and learning style. Join us in embracing the future of education and
              unlock your potential with our immersive online courses.
            </p>
            <p className="mb-4">
              Welcome to AI&DEV Space, your gateway to boundless learning opportunities. We're
              dedicated to democratizing education, offering a diverse range of courses taught by industry
              experts. Our mission is to empower learners worldwide, fostering a community-driven platform
              where knowledge knows no limits.
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Expert Instructors</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Live Interactive Sessions</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Comprehensive Course Catalog</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Community Engagement</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Personalized Learning Paths</p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0"><i className="fa fa-arrow-right me-2"></i>Certification and Recognition</p>
              </div>
            </div>
            <a className="btn text-light py-3 px-5 mt-2" href="about.php">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
