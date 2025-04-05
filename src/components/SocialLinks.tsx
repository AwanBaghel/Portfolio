
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/yourusername',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: <Twitter size={20} />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: <Instagram size={20} />
    }
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="text-portfolio-navy hover:text-portfolio-teal transition-colors"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
