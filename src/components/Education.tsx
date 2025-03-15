
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const { education } = useSelector((state: RootState) => state.portfolio);

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-list">
          {education.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <div className="degree-info">
                  <h3 className="degree">
                    <GraduationCap className="icon" size={20} />
                    {item.degree}
                  </h3>
                  <p className="institution">{item.institution}</p>
                </div>
                
                <div className="education-meta">
                  <div className="meta-item">
                    <Calendar className="icon" size={16} />
                    <span>{item.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin className="icon" size={16} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="education-description">{item.description}</p>
              
              <div className="achievements">
                <h4 className="achievements-title">Key Achievements:</h4>
                <ul className="achievements-list">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
