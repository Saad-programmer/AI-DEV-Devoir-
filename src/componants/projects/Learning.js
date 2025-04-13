import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import innovImage from '../../img/innov.jpg';

function LearningHub() {
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
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }} data-aos="fade-up">
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src={innovImage}
                alt="Innovation"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="300">
            <h1 className="mb-4" style={{ color: '#87CEEB' }} data-aos="fade-up">Why Choose AI&DEV as Your Learning Hub?</h1>
            <div className="row gy-2 gx-4 mb-4">
              <ul style={{ listStyle: 'none' }} data-aos="fade-up">
                <li><b>Global Reach, Local Impact:</b> Reach a diverse audience from all corners of the globe while making a meaningful difference in individual lives.</li>
                <li><b>Cutting-Edge Technology:</b> Leverage our state-of-the-art e-learning infrastructure, ensuring a seamless and engaging learning experience for both you and your students.</li>
                <li><b>Flexible Teaching Opportunities:</b> Create and manage your courses on a schedule that suits your lifestyle, allowing you to balance your professional and personal commitments.</li>
                <li><b>Competitive Compensation:</b> Benefit from a transparent and rewarding compensation structure that recognizes your expertise and commitment to education.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningHub;
