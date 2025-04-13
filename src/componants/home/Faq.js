import React, { useState,useEffect } from "react";
import AOS from "aos";


function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "What is the AI&DEV ?",
      answer:
        "The AI&DEV is an initiative taken by AI&DEV, where we offer 1000+ free online courses in cutting-edge technologies and have successfully enrolled a whopping 5 Million+ learners across all domains. AI&DEV covers courses on Data Science, Machine Learning, Artificial Intelligence, Cloud Computing, Software Development, Sales and Business Development, Digital Marketing, Big Data, and many more.",
    },
    {
      question: "Why should I choose Great Learning Academy for free courses with certificates ?",
      answer:
        "Great Learning Academy is an excellent choice for free courses with certificates because of the high quality of the learning content. The courses are well-crafted, offer a great learning experience, and are interactive and engaging, making them ideal for learners in identifying what works best for their career goals.",
    },
    {
      question: "How many free courses can I enroll in at the same time?",
      answer: "You can simultaneously enroll in multiple courses at AI&DEV.",
    },
    {
      question: "How can I enroll in these free online courses?",
      answer:
        "You can click on the “Sign Up” button at the top-right of the page and register with your email address, or you can sign up using your Google Account.",
    },
    {
      question: "What are the most popular free courses offered by AI&DEV ?",
      answer:
        "AI&DEV focuses on in-demand concepts and skills, where learners can develop industry-relevant knowledge in their chosen sector. It provides a wide range of courses in prestigious fields, assisting learners across the globe in achieving their professional goals.\n\nSome of the most popular free courses offered by AI&DEV that are in high demand today include:\n- Free Data Science Courses\n- Free Artificial Intelligence Courses\n- Free Software Courses\n- Free Cloud Computing Courses",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration:1000,
      once:'true',
    });
  },[]);
    
  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-5" data-aos="fade-up" data-aos-delay="100">Frequently Asked Questions</h1>
        </div>
        <div className="row g-2">
          <div className="col-12">
            <div className="accordion" id="accordionExample" data-aos="fade-up" data-aos-delay="200">
              {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        activeIndex === index ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => handleClick(index)}
                    >
                      {item.question}
                    </button>
                  </h2>
                  {activeIndex === index && (
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
