
import React from 'react';
import { cn } from '@/lib/utils';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Security Skills",
      skills: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Network Security",
        "Security Auditing",
        "SIEM Implementation",
        "Firewall Configuration",
        "Incident Response",
        "Threat Modeling"
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        "Python",
        "Linux/Unix",
        "Windows Server",
        "SQL",
        "PowerShell",
        "Bash Scripting",
        "Docker",
        "Wireshark"
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Metasploit",
        "Nmap",
        "Burp Suite",
        "Kali Linux",
        "Nessus",
        "Splunk",
        "OWASP ZAP",
        "Snort"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Documentation",
        "Risk Assessment",
        "Team Collaboration",
        "Analytical Thinking",
        "Time Management",
        "Client Presentations"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 opacity-0",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-bold mb-4 font-mono text-cyber-accent">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
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
