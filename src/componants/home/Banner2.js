import React,{ useEffect } from 'react';
import AOS from 'aos';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import capture21 from '../../img/Capture21.PNG';

function Banner2() {

    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once
        });
      }, []);
  return (
    <section
      className="pb-5"
      style={{
        backgroundImage: "url('../../img/banner-3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-xxl mt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" data-aos="fade-up" data-aos-delay="100"  style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100 bg-light"
                  src={capture21}
                  alt="Banner"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="col-lg-6 p-5 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="mb-4" style={{ color: '#5a08dd', fontWeight: 'bold', fontSize: '2.5rem' }} data-aos="fade-up" data-aos-delay="200">
                Become a member
              </h1>
              <p className="mb-4 text-" style={{ fontWeight: 'bold', fontSize: '1.2rem', color:'black' }} data-aos="fade-up" data-aos-delay="300">
                Members from our community learn many subjects. We provide the tools and skills to teach what you love.
              </p>
              <a className="btn btn-primary py-3 mt-2" href="instructor.php" style={{ fontWeight: 'bold' }} data-aos="fade-up" data-aos-delay="400">
                Start The Journey Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner2;
