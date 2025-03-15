
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { ChevronDown, Shield, Code, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const { hero } = useSelector((state: RootState) => state.portfolio);

  return (
    <section id="home" className="hero-section">
      <div className="radial-gradient"></div>
      
      {/* Floating elements */}
      <div className="floating-icons">
        <div className="floating-icon" style={{ top: '25%', left: '20%' }}>
          <Shield size={40} />
        </div>
        <div className="floating-icon" style={{ bottom: '25%', right: '25%', animationDelay: '1s' }}>
          <Code size={48} />
        </div>
        <div className="floating-icon" style={{ top: '33%', right: '20%', animationDelay: '2s' }}>
          <Lock size={32} />
        </div>
      </div>
      
      <div className="container">
        <div className="max-w-4xl">
          <div className="hero-tag">
            <span>{hero.tag}</span>
          </div>
          
          <h1 className="hero-title">
            {hero.title.first} <br />
            <span className="cyber-text">{hero.title.last}</span>
          </h1>
          
          <div className="hero-description">
            <p>{hero.description}</p>
          </div>
          
          <div className="hero-buttons">
            {hero.buttons.map((button, index) => (
              <a 
                key={index} 
                href={button.link} 
                className={button.primary ? "btn-cyber" : "btn-secondary"}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown size={32} className="text-cyber-accent" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
