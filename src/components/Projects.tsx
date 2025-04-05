
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.',
      image: '/public/SuperMart.png',
      tags: ['web', 'react', 'node'],
    /*  liveLink: '#',
      githubLink: '#' */
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills with a modern design.',
      image: '/public/portfolio.png',
      tags: ['web', 'design'],
    /*liveLink: '#',
      githubLink: '#' */
    },
    {
      id: 3,
      title: 'Book Store',
      description: 'Developed an online book store using the MERN stack, providing an intuitive interface for users to browse, search, and purchase.',
      image: '/public/BookStore.png',
      tags: ['app', 'react'],
    /*  liveLink: '#',
      githubLink: '#' */
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Check out some of my recent work</p>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'all' ? 'bg-portfolio-navy text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'web' ? 'bg-portfolio-navy text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'app' ? 'bg-portfolio-navy text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('app')}
          >
            App Development
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-all ${filter === 'design' ? 'bg-portfolio-navy text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            onClick={() => setFilter('design')}
          >
            UI/UX Design
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group"
            >
              <div className="relative overflow-hidden h-48 md:h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="text-white">
                    <h4 className="font-semibold">{project.title}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/30 transition-all"
                      >
                        <Github size={18} className="text-white" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/30 transition-all"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
