
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="font-mono text-xl font-bold hover:text-cyber-accent transition-colors">
              KC<span className="text-cyber-accent">.</span>
            </div>
            <p className="text-muted-foreground mt-2">
              Cyber Security Professional
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Kanhu Charan Pradhan. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed with precision and security in mind.
            </p>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-5 p-2 rounded-full bg-cyber-accent text-white hover:bg-cyber-blue transition-colors duration-300 shadow-lg"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
