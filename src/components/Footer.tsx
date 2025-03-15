
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { personalInfo } = useSelector((state: RootState) => state.portfolio);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">
              KC<span className="accent">.</span>
            </div>
            <p className="footer-text">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="footer-copyright">
            <p className="copyright-text">
              {personalInfo.copyright}
            </p>
            <p className="tagline">
              {personalInfo.tagline}
            </p>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
