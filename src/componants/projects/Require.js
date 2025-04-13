import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import innovImage from '../../img/innov2.jpg';
import readyImage from '../../img/ready.jpg';

function MemberRequirements() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Data structure for the sections
  const whatWeLookFor = [
    {
      title: 'Passion for Teaching',
      description: 'A genuine enthusiasm for sharing knowledge and facilitating the learning journey for others.',
    },
    {
      title: 'Expertise in Your Field',
      description: 'Demonstrated expertise in your subject matter, backed by relevant qualifications and experience.',
    },
    {
      title: 'Communication Skills',
      description: 'Clear and effective communication to convey complex concepts and engage learners of various backgrounds.',
    },
    {
      title: 'Innovation',
      description: 'Willingness to embrace innovative teaching methods and technologies to enhance the learning experience.',
    },
  ];

  const howToGetStarted = [
    {
      description: 'Familiarize yourself with AI&DEV and the diverse range of courses we offer.',
    },
    {
      description: 'Craft a compelling application that showcases your passion, expertise, and proposed course offerings.',
    },
  ];

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="mb-4" style={{ color: '#87CEEB' }}  data-aos="fade-up" data-aos-delay="100">What We Look for in Our Members</h1>
              <div className="row gy-2 gx-4 mb-4"  data-aos="fade-up" data-aos-delay="100">
                <ul style={{ listStyle: 'none' }}>
                  {whatWeLookFor.map((item, index) => (
                    <li key={index}>
                      <b>{item.title}:</b> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={innovImage}
                  alt="Innovation"
                  style={{ objectFit: 'cover' }}
                   data-aos="fade-up" data-aos-delay="100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid" src={readyImage} alt="Ready to Join"  data-aos="fade-up" data-aos-delay="100" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s"  data-aos="fade-up" data-aos-delay="100">
              <h1 style={{ color: '#87CEEB' }}>Ready to Join Us?</h1>
              <p className="mb-4"  data-aos="fade-up" data-aos-delay="100">Here's How to Get Started</p>
              <div className="row gy-2 gx-4 mb-4">
                <ul style={{ listStyle: 'none' }}  data-aos="fade-up" data-aos-delay="100">
                  {howToGetStarted.map((item, index) => (
                    <li key={index}>
                      <i className="fa fa-check"></i> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="./base/admin/signup.php" className="btn text-white" style={{ backgroundColor: '#87CEEB' }}  data-aos="fade-up" data-aos-delay="100">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberRequirements;
