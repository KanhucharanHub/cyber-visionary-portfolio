
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Skills: React.FC = () => {
  const { skills } = useSelector((state: RootState) => state.portfolio);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div 
              key={index}
              className="skill-category"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="category-title">
                {category.title}
              </h3>
              
              <div className="skills-container">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
