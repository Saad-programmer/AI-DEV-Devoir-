import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';

function ApplyAsMember() {
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
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-5 bg-white text-center px-3" style={{ color: '#87CEEB' }}  data-aos="fade-up" data-aos-delay="100">
            Apply As Member
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s"  data-aos="fade-up" data-aos-delay="100">
            <h5>Welcome to AI&DEV - Where Knowledge Meets Innovation</h5>
            <p className="mb-4">
              Are you passionate about creating projects and making a real impact in the community or worldwide? If so, we invite you to become a member on our dynamic e-learning platform! Join a community of educators dedicated to fostering a love for learning and empowering individuals to achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyAsMember;
