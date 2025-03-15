
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Your University Name",
      location: "Your Location",
      period: "2020 - 2023",
      description: "Specialized in Cyber Security and Network Administration, with focus on advanced security concepts, cryptography, and secure system design.",
      achievements: [
        "Graduated with distinction",
        "Research project on 'Network Vulnerability Assessment Techniques'",
        "Member of the University Cyber Security Club"
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Your Previous Institution",
      location: "Your Previous Location",
      period: "2017 - 2020",
      description: "Studied fundamental computer science principles, programming, and database management with introductory courses in network security.",
      achievements: [
        "Developed a secure file sharing application for final year project",
        "Participated in coding competitions",
        "Volunteer for technical workshops"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-10">
          {education.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-accent/10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold flex items-center">
                    <GraduationCap className="mr-2 text-cyber-accent" size={20} />
                    {item.degree}
                  </h3>
                  <p className="text-xl mt-1">{item.institution}</p>
                </div>
                
                <div className="flex flex-col md:items-end gap-1">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-1" size={16} />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-1" size={16} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="mb-4 text-muted-foreground">{item.description}</p>
              
              <div>
                <h4 className="font-semibold mb-2 text-cyber-accent">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1">
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
