import React, { useEffect } from 'react';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import icon4 from '../../img/icon4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Service() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="owl-carousel header-carousel position-relative">
      <div className="row g-2 text-center">
        <div className="col-12" data-aos="fade-up">
          <h1 style={{ color: "#5a08dd" }}>Invest in your professional goals with AI&DEV</h1>
          <p className="mb-5">
            Get unlimited access to over 90% of courses, Projects, Specializations, and
            Professional Certificates on Coursera, taught by top instructors.
          </p>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="100">
          <div className="service-item text-center pt-3 shadow">
            <div className="p-4">
              <img src={icon1} alt="Learn anything" width="60px" className="mb-4" />
              <h5 className="mb-3">Learn anything</h5>
              <p>Explore any interest or trending topic and advance your skills</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
          <div className="service-item text-center pt-3 shadow">
            <div className="p-4">
              <img src={icon2} alt="Save money" width="60px" className="mb-4" />
              <h5 className="mb-3">Save money</h5>
              <p>Spend less money on your learning if you plan to take multiple courses this year</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="500">
          <div className="service-item text-center pt-3 shadow">
            <div className="p-4">
              <img src={icon3} alt="Flexible learning" width="60px" className="mb-4" />
              <h5 className="mb-3">Flexible learning</h5>
              <p>Learn at your own pace, move between multiple courses, or switch to a different course</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="700">
          <div className="service-item text-center pt-3 shadow">
            <div className="p-4">
              <img src={icon4} alt="Unlimited certificates" width="60px" className="mb-4" />
              <h5 className="mb-3">Unlimited certificates</h5>
              <p>Earn a certificate for every learning program that you complete at no additional cost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
