
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Shield, Terminal, Award, Laptop } from 'lucide-react';

const About: React.FC = () => {
  const { about } = useSelector((state: RootState) => state.portfolio);
  
  // Map icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield size={20} />;
      case 'terminal':
        return <Terminal size={20} />;
      case 'award':
        return <Award size={20} />;
      case 'laptop':
        return <Laptop size={20} />;
      default:
        return <Shield size={20} />;
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph.split('vulnerability assessment').map((part, i, arr) => (
                  i < arr.length - 1 
                    ? <>{part}<span className="accent">vulnerability assessment</span></>
                    : part
                )).map((part, i, arr) => (
                  i < arr.length - 1 
                    ? <>{part}<span className="accent">penetration testing</span></>
                    : part
                )).map((part, i, arr) => (
                  i < arr.length - 1 
                    ? <>{part}<span className="accent">secure coding practices</span></>
                    : part
                )).map((part, i, arr) => (
                  i < arr.length - 1 
                    ? <>{part}<span className="highlighted">Cyber Security Professional</span></>
                    : part
                )).map((part, i, arr) => (
                  i < arr.length - 1 
                    ? <>{part}<span className="highlighted">HackSecure</span></>
                    : part
                ))}
              </p>
            ))}
          </div>
          
          <div className="about-features">
            {about.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
