import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../style/index.css';
import '../../style/style.css';
import '../../style/style2.css';
import cat1 from '../../img/cat1.png';
import cat2 from '../../img/cat2.png';
import cat3 from '../../img/cat3.png';
import cat4 from '../../img/cat4.png';
import cat5 from '../../img/cat5.png';
import cat6 from '../../img/cat6.png';
import cat7 from '../../img/cat7.png';
import cat8 from '../../img/cat8.png';

function Categorie() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <h6 className="section-title bg-white text-center px-3">Categories</h6>
          <h1 className="mb-5" style={{ color: "#5a08dd" }}>Popular Topics to Explore</h1>
        </div>
        <div className="row g-2 m-2">
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content shadow p-3 mb-2">
              <img src={cat1} className="img-fluid" alt="Microsoft Excel" />
              <h5 className="my-2">
                <a href="./base/admin/signup2.php" className="text-center">Microsoft Excel</a>
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="content shadow p-3 mb-2">
              <img src={cat2} className="img-fluid" alt="AWS" />
              <h5 className="my-2">
                <a href="./base/admin/signup2.php" className="text-center">AWS</a>
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="content shadow p-3 mb-2">
              <img src={cat3} className="img-fluid" alt="Python" />
              <h5 className="my-2">
                <a href="./base/admin/signup2.php" className="text-center">Python</a>
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="500">
            <div className="content shadow p-3 mb-2">
              <img src={cat4} className="img-fluid" alt="Java" />
              <h5 className="my-2">
                <a href="./base/admin/signup2.php" className="text-center">Java</a>
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="content shadow p-3 mb-2">
              <img src={cat5} className="img-fluid" alt="Web Design" />
              <h5 className="my-2">
                <a href="./base/admin/signup2.php" className="text-center">Web Design</a>
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="700">
            <div className="content shadow p-3 mb-2">
              <img src={cat6} className="img-fluid" alt="Web Development" />
              <h5 className="my-2">
                <a href="./base/admin/signup2.php" className="text-center">Web Development</a>
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="800">
            <div className="content shadow p-3 mb-2">
              <img src={cat7} className="img-fluid" alt="MySQL" />
              <h5 className="my-2">
                <a href="./base/admin/signup2.php" className="text-center">MySQL</a>
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="900">
            <div className="content shadow p-3 mb-2">
              <img src={cat8} className="img-fluid" alt="UI/UX Design" />
              <h5 className="my-2">
                <a href="./base/admin/signup2.php" className="text-center">UI/UX Design</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorie;
