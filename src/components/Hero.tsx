
import React from 'react';
import { ChevronDown, Shield, Code, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative pt-16 overflow-hidden bg-cyber-grid"
    >
      <div className="absolute inset-0 bg-gradient-radial from-cyber-accent/5 to-transparent dark:from-cyber-accent/10 dark:to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 opacity-20 animate-float">
          <Shield size={40} className="text-cyber-accent" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Code size={48} className="text-cyber-accent" />
        </div>
        <div className="absolute top-1/3 right-1/5 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Lock size={32} className="text-cyber-accent" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-sm md:text-base font-mono tracking-wider mb-3 opacity-0 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-cyber-accent/10 border border-cyber-accent/30 rounded text-cyber-accent">
              Cyber Security Professional
            </span>
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Kanhu Charan <br />
            <span className="cyber-text animate-text-shimmer">Pradhan</span>
          </h1>
          
          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-8 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl">
              Specialized in helping organizations <span className="font-medium text-cyber-accent">protect</span> their digital assets with 
              cutting-edge security solutions and <span className="font-medium text-cyber-accent">proactive</span> defense strategies.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#contact" className="btn-cyber">
              Get in Touch
            </a>
            <a 
              href="#about" 
              className="px-6 py-2 rounded-md border border-cyber-accent/30 hover:bg-cyber-accent/10 transition-all duration-300"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-subtle">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown size={32} className="text-cyber-accent" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
