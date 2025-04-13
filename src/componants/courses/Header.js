import React from 'react';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import cour from '../../img/banner-3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  React.useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="page-header"
      style={{
        background: `url(${cour}) no-repeat center center/cover`,
      }}
      data-aos="fade-up" data-aos-delay="100">
      <div className="container py-5" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown" data-aos="fade-up" data-aos-delay="100" style={{ fontWeight: 'bold'}}>
              Courses
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a className="text-white" href="/">Home</a>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
