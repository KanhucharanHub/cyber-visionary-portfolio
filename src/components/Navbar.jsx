
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { personalInfo } = useSelector((state) => state.portfolio);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="#home" className="logo">
            KC<span className="accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          {/* Theme Toggle in Mobile Menu */}
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
