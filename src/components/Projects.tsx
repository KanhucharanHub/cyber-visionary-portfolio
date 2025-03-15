
import React from 'react';
import { ExternalLink, Github, Lock, Shield, Database, AlertTriangle } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Network Vulnerability Scanner",
      description: "Developed a custom tool that automates the process of identifying security vulnerabilities in network infrastructure. The scanner provides detailed reports and remediation suggestions.",
      icon: <Shield className="text-cyber-accent" size={24} />,
      tags: ["Python", "Nmap", "Security", "Automation"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Secure File Transfer System",
      description: "Created an encrypted file transfer system with end-to-end encryption and secure authentication to protect sensitive data during transmission.",
      icon: <Lock className="text-cyber-accent" size={24} />,
      tags: ["Java", "Cryptography", "Secure Protocols", "Authentication"],
      links: {
        github: "#",
        live: null
      }
    },
    {
      title: "SQL Injection Prevention Framework",
      description: "Designed a framework to detect and prevent SQL injection attacks in web applications by implementing parameterized queries and input validation.",
      icon: <Database className="text-cyber-accent" size={24} />,
      tags: ["PHP", "MySQL", "Web Security", "Input Validation"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Security Awareness Training Module",
      description: "Developed an interactive training module to educate users about common cyber threats and best practices for maintaining security in their digital activities.",
      icon: <AlertTriangle className="text-cyber-accent" size={24} />,
      tags: ["React", "Educational", "Security Awareness", "Interactive"],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="mb-4">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={18} className="mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span className="text-sm">Live Demo</span>
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
