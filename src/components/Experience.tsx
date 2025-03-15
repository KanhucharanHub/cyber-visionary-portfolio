
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const { experience } = useSelector((state: RootState) => state.portfolio);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-card">
          <div className="experience-header">
            <div className="position-info">
              <h3 className="position">
                <Briefcase className="icon" size={20} />
                {experience.position}
              </h3>
              <p className="company">{experience.company}</p>
            </div>
            
            <div className="experience-meta">
              <div className="meta-item">
                <Calendar className="icon" size={16} />
                <span>{experience.period}</span>
              </div>
              <div className="meta-item">
                <MapPin className="icon" size={16} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
          
          <p className="experience-description">
            {experience.description}
          </p>
          
          <div className="experience-sections">
            <div className="section">
              <h4 className="section-title">Key Responsibilities:</h4>
              <ul className="section-list">
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="section">
              <h4 className="section-title">Achievements:</h4>
              <ul className="section-list">
                {experience.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="section">
              <h4 className="section-title">Technologies Used:</h4>
              <div className="technologies">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="skill-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
