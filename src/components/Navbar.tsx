
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          
          if (
            scrollPosition >= elementTop - 100 &&
            scrollPosition < elementTop + elementHeight - 100
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-20 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#home" className="text-portfolio-navy font-bold text-xl">
            Awan Baghel
          </a>
        </div>
        
        <div className="hidden md:flex space-x-1">
          <button 
            onClick={() => scrollToSection('home')}
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('resume')}
            className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
          >
            Resume
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-portfolio-navy p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0 py-4 animate-fade-in">
          <div className="flex flex-col space-y-2 px-4">
            <button 
              onClick={() => scrollToSection('home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''} text-left`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''} text-left`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''} text-left`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''} text-left`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('resume')}
              className={`nav-link ${activeSection === 'resume' ? 'active' : ''} text-left`}
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''} text-left`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
