import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';

function AboutSection() {
  useEffect(() => {
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 1200, // Slightly longer animation duration
      once: false, // Allow animations to replay on scroll
      easing: 'ease-in-out-quart', // Smooth easing for animations
    });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 justify-content-center text-center">
          <div id="about-section" className="col-lg-10" data-aos="zoom-in" data-aos-delay="100">
            <h1 className="mb-4 text-primary">Welcome to <span className="fw-bold">AI&DEV</span></h1>
            <div className="card p-4 shadow-lg border-0" data-aos="fade-up" data-aos-delay="200">
              <p className="mb-3">
                At <strong>AI&DEV</strong>, we believe in accessible, innovative learning experiences that adapt to your schedule and learning style.
              </p>
              <p className="mb-0">
                Join us in embracing the future of education and unlock your potential with our immersive online courses.
              </p>
            </div>

            <div className="mt-5 text-start">
              <h3 className="mb-3 text-primary text-center" data-aos="fade-right" data-aos-delay="100">Our Vision</h3>
              <div className="card p-4 shadow-lg border-0" data-aos="fade-left" data-aos-delay="100">
                <p>
                  At <strong>AI&DEV Space</strong>, we envision a world where learning is accessible to everyone, regardless of their location, background, or circumstances.
                </p>
              </div>
            </div>

            <div className="mt-4 text-start">
              <h3 className="mb-3 text-primary" data-aos="fade-right" data-aos-delay="100">A Commitment to Excellence</h3>
              <div className="card p-4 shadow-lg border-0" data-aos="fade-left" data-aos-delay="600">
                <p>
                  We are dedicated to providing top-quality education. Our team collaborates with industry experts and educators to craft an unparalleled learning experience.
                </p>
              </div>
            </div>

            <div className="mt-4 text-start">
              <h3 className="mb-3 text-primary" data-aos="fade-right" data-aos-delay="100">Empowering Learners</h3>
              <div className="card p-4 shadow-lg border-0" data-aos="fade-left" data-aos-delay="100">
                <p>
                  We believe in the transformative power of education. <strong>AI&DEV Space</strong> is designed to empower individuals with the knowledge and skills needed to thrive in the digital era.
                </p>
              </div>
            </div>

            <div className="mt-4 text-start">
              <h3 className="mb-3 text-primary" data-aos="fade-right" data-aos-delay="100">Innovation in Learning</h3>
              <div className="card p-4 shadow-lg border-0" data-aos="fade-left" data-aos-delay="1000">
                <p>
                  Embracing technology, we integrate cutting-edge learning methods and tools to enhance your educational journey.
                </p>
              </div>
            </div>

            <div className="mt-4 text-start">
              <h3 className="mb-3 text-primary" data-aos="fade-right" data-aos-delay="100">Community-Centric Approach</h3>
              <div className="card p-4 shadow-lg border-0" data-aos="fade-left" data-aos-delay="1200">
                <p>
                  <strong>AI&DEV Space</strong> is more than just a platform; it’s a vibrant community of learners, educators, and innovators working together to shape the future.
                </p>
              </div>
            </div>

            <div className="mt-4 text-start">
              <h3 className="mb-3 text-primary" data-aos="fade-right" data-aos-delay="100">Diverse and Inclusive Education</h3>
              <div className="card p-4 shadow-lg border-0" data-aos="fade-left" data-aos-delay="100">
                <p>
                  We celebrate diversity in perspectives, cultures, and ideas. Our courses cater to various interests and skill levels, ensuring inclusivity for all learners.
                </p>
              </div>
            </div>

            <div className="mt-4 text-start">
              <h3 className="mb-3 text-primary" data-aos="fade-right" data-aos-delay="100">Continuous Improvement</h3>
              <div className="card p-4 shadow-lg border-0" data-aos="fade-left" data-aos-delay="100">
                <p>
                  We are always evolving. Feedback from our learners helps us continually enhance our platform to provide the best learning experience possible.
                </p>
              </div>
            </div>

            <div className="mt-5 text-center" data-aos="zoom-out" data-aos-delay="100">
              <p className="fw-bold">
                Thank you for being a part of <span className="text-primary">AI&DEV</span>. Together, let's shape the future of learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
