import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';

function ContactUs() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-5 bg-white text-center px-3" data-aos="fade-up" data-aos-delay="100">Contact Us</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h5 data-aos="fade-up" data-aos-delay="200">Get In Touch</h5>
            <p data-aos="fade-up" data-aos-delay="300" className="mb-4">
              I'm happy to help! If you're looking for contact information or details about
              AI&DEV's online free courses website for e-learning, I don't have real-time browsing
              capabilities to access current websites or specific contact details.
            </p>
            <div className="d-flex align-items-center mb-3">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0, 0, 255, 0.5)' }}
                data-aos="fade-up" data-aos-delay="400"
              >
                <i className="fa fa-map-marker-alt text-white"></i>
              </div>
              <div className="ms-3">
                <h5 data-aos="fade-up" data-aos-delay="500">Office</h5>
                <p className="mb-0" data-aos="fade-up" data-aos-delay="500">Faculty Of Science BenMSICK</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '50px', height: '50px', backgroundColor: 'rgba(0, 0, 255, 0.5)' }}
              >
                <i className="fa fa-envelope-open text-white"></i>
              </div>
              <div className="ms-3">
                <h5 data-aos="fade-up" data-aos-delay="500">Email</h5>
                <p data-aos="fade-up" data-aos-delay="500" className="mb-0">communityaidev@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating" data-aos="fade-up" data-aos-delay="500">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating" data-aos="fade-up" data-aos-delay="500">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating" data-aos="fade-up" data-aos-delay="500">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating" data-aos="fade-up" data-aos-delay="500">
                    <textarea
                      className="form-control"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Leave a message here"
                      style={{ height: '150px' }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-up" data-aos-delay="500">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
