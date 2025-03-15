
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-accent/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div>
              <h3 className="text-2xl font-bold flex items-center">
                <Briefcase className="mr-2 text-cyber-accent" size={20} />
                Cyber Security Intern
              </h3>
              <p className="text-xl mt-1">HackSecure</p>
            </div>
            
            <div className="flex flex-col md:items-end gap-1">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-1" size={16} />
                <span>2023 - Present</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-1" size={16} />
                <span>Your Location</span>
              </div>
            </div>
          </div>
          
          <p className="mb-6 text-muted-foreground">
            Working with the security assessment team to identify vulnerabilities, perform penetration tests, and develop recommendations for improving client security postures.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Conducted vulnerability assessments and security audits for client networks and applications</li>
                <li>Assisted in penetration testing activities to identify security weaknesses in systems</li>
                <li>Documented findings and developed comprehensive security reports with remediation recommendations</li>
                <li>Contributed to the development of security policies and procedures</li>
                <li>Participated in security awareness training sessions for clients</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Achievements:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Identified critical vulnerabilities in a client's web application that could have led to data compromise</li>
                <li>Developed an automated script to improve efficiency in vulnerability scanning processes</li>
                <li>Contributed to a security awareness program that improved client understanding of cyber threats</li>
                <li>Recognized for attention to detail in documenting security findings</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="skill-tag">Metasploit</span>
                <span className="skill-tag">Nmap</span>
                <span className="skill-tag">Burp Suite</span>
                <span className="skill-tag">Wireshark</span>
                <span className="skill-tag">Kali Linux</span>
                <span className="skill-tag">OWASP ZAP</span>
                <span className="skill-tag">Nessus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
