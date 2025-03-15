
import React from 'react';
import { heroData } from '../../data';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <span className="inline-block py-1 px-3 mb-4 rounded-full bg-primary/10 text-sm font-medium">
              {heroData.tag}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">{heroData.title.first}</span>
              <span className="cyber-text">{heroData.title.last}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {heroData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {heroData.buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  className={button.primary ? 'btn-cyber' : 'px-6 py-2 rounded-md border border-border hover:border-cyber-accent/50 transition-all duration-300'}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-cyber-accent/20 to-cyber-blue/20 rounded-full flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full glass-card flex items-center justify-center animate-pulse-subtle overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Kanhu Charan Pradhan"
                  className="w-[85%] h-[85%] object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-float"
            aria-label="Scroll to About section"
          >
            <ArrowDownCircle size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
