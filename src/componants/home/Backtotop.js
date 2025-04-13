

const BackToTop = () => {
  useEffect(() => {
    // Initialize Wow.js
    const wow = new WOW({
      live: false,
    });
    wow.init();

    // Scroll to top functionality
    const backToTopButton = document.querySelector('.back-to-top');
    const handleScroll = () => {
      if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', scrollToTop);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTopButton.removeEventListener('click', scrollToTop);
    };
  }, []);

  return (
    <button
      className="btn btn-lg btn-primary btn-lg-square back-to-top"
      style={{ display: 'none' }}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
