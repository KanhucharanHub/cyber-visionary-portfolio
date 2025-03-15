
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { ExternalLink, Github, Lock, Shield, Database, AlertTriangle } from 'lucide-react';

const Projects: React.FC = () => {
  const { projects } = useSelector((state: RootState) => state.portfolio);
  
  // Map icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield size={24} />;
      case 'lock':
        return <Lock size={24} />;
      case 'database':
        return <Database size={24} />;
      case 'alertTriangle':
        return <AlertTriangle size={24} />;
      default:
        return <Shield size={24} />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-icon">
                {getIcon(project.icon)}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={18} className="icon" />
                      <span className="link-text">Code</span>
                    </a>
                  )}
                  
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} className="icon" />
                      <span className="link-text">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
