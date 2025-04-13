import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from "aos";


function Footer() {

  useEffect(() =>{
    AOS.init({
      duration:1000,
      once:'true',
    });
  },[]);

  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
      
    >
      <div className="container py-5">
        <div className="row g-5 d-flex justify-content-between">
          {/* Quick Links */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-white mb-3">Quick Link</h4>
            <p><Link className="text-light" to="/about">About Us</Link></p>
            <p><Link className="text-light" to="/contact">Contact Us</Link></p>
            <p><Link className="text-light" to="/privacy-policy">Privacy Policy</Link></p>
            <p><Link className="text-light" to="/terms-condition">Terms & Condition</Link></p>
            <p><Link className="text-light" to="/faqs-help">FAQs & Help</Link></p>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Faculty+of+Science+Ben+M'Sick,+FSBM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faculty Of Science BenMSICK, FSBM
              </a>
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>
              <a href="mailto:aidevcommunity735@gmail.com">aidevcommunity735@gmail.com</a>
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/aidev_communityfsbm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=61552792641869&mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="https://api.whatsapp.com/send?phone=362" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.tiktok.com/@ai.dev.community" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/company/ai-dev-community/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="subscribe-container">
              <h4 className="text-white mb-3">Subscribe to our Newsletter</h4>
              <p>Subscribe now and join our growing community of learners committed to lifelong education!</p>
              <div className="position-relative mx-auto subscribe-wrapper">
                <form
                  action="/subscribe"
                  method="POST"
                  id="newsletter-form"
                  className="newsletter-form"
                >
                  <input
                    className="form-control border-0 w-100 py-3 ps-4 pe-5 email-input"
                    type="email"
                    placeholder="Your email"
                    name="email"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-primary subscribe-button mt-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container" data-aos="fade-up" data-aos-delay="400">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="border-bottom" to="/">AI&DEV Community</Link>, All Right Reserved.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
