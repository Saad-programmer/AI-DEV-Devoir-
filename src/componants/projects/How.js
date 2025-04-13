import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';

function HowItWorks() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Data structure for the sections
  const steps = [
    {
      title: 'Application Process',
      description: 'Submit your application and provide details about your expertise, teaching philosophy, and the courses you want to offer.',
      delay: '0.1s',
    },
    {
      title: 'Content Creation',
      description: 'Develop high-quality course content with the support of our instructional design team, ensuring your materials are engaging and effective.',
      delay: '0.3s',
    },
    {
      title: 'Go Live',
      description: 'Once approved, your courses go live on our platform, and learners from around the world can enroll and benefit from your knowledge.',
      delay: '0.5s',
    },
    {
      title: 'Engage and Grow',
      description: 'Interact with your students through discussion forums, live Q&A sessions, and feedback mechanisms, fostering a  community.',
      delay: '0.7s',
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-2 text-center wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12">
            <h1 style={{ color: '#87CEEB' }}>How It Works</h1>
            <p className="mb-5">Your Journey to Becoming a Member</p>
          </div>
        </div>
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-aos="fade-up" data-aos-delay="100" >
              <div className="service-item text-center pt-3 shadow">
                <div className="p-4"  data-aos="fade-up" data-aos-delay="100">
                  <h5 className="mb-3" >{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
