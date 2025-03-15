
import React from 'react';
import { Shield, Terminal, Award, Laptop } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyber-accent" />,
      title: "Security Focus",
      description: "Dedicated to implementing robust security measures and protocols to protect digital assets."
    },
    {
      icon: <Terminal className="w-6 h-6 text-cyber-accent" />,
      title: "Technical Aptitude",
      description: "Strong foundation in programming and system architecture to address complex security challenges."
    },
    {
      icon: <Laptop className="w-6 h-6 text-cyber-accent" />,
      title: "Continuous Learning",
      description: "Committed to staying updated with emerging threats and security technologies."
    },
    {
      icon: <Award className="w-6 h-6 text-cyber-accent" />,
      title: "Analytical Mindset",
      description: "Skilled in analyzing vulnerabilities and developing strategic solutions."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am a passionate <span className="font-semibold">Cyber Security Professional</span> with a Master's degree in Computer Applications (MCA), dedicated to safeguarding digital environments against evolving threats.
            </p>
            
            <p className="text-lg leading-relaxed">
              My academic background has equipped me with a strong foundation in programming, system architecture, and network security principles, which I have applied during my internship at <span className="font-semibold">HackSecure</span>.
            </p>
            
            <p className="text-lg leading-relaxed">
              I am particularly interested in <span className="text-cyber-accent">vulnerability assessment</span>, <span className="text-cyber-accent">penetration testing</span>, and developing <span className="text-cyber-accent">secure coding practices</span> that help organizations maintain robust security postures.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-5 hover:shadow-md hover:shadow-cyber-accent/10 transition-all duration-300"
              >
                <div className="p-2 mb-4 inline-flex items-center justify-center rounded-md bg-cyber-accent/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
