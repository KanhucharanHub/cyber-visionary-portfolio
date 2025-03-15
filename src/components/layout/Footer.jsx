
import React from 'react';
import { personalInfo } from '../../data';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: '#' },
    { icon: <Linkedin size={20} />, url: '#' },
    { icon: <Facebook size={20} />, url: '#' },
    { icon: <Instagram size={20} />, url: '#' }
  ];
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold cyber-text mb-2">
              {personalInfo.logoText}
            </div>
            <p className="text-muted-foreground text-sm">
              {personalInfo.tagline}
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                aria-label={`Social link ${index + 1}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{personalInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
