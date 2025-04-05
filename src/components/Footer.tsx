
import React from 'react';
import SocialLinks from './SocialLinks';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-portfolio-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white/90 text-2xl font-bold mb-2">Awan Baghel</h3>
            <p className="text-white/70">Web Developer & Designer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks className="text-white mb-4" />
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className="text-white/70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Awan Baghel. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
