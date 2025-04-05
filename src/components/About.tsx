
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-teal shadow-lg">
              <img 
                src="/public/A.jpg" 
                alt="Awan Baghel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-lg mb-4 text-portfolio-dark">
              I'm a passionate web developer with experience in creating responsive and user-friendly websites.
              I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg mb-6 text-portfolio-dark">
              With a background in both design and development, I understand the importance of creating
              websites that not only look good but also function efficiently. My focus is on building
              applications that provide exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-portfolio-navy mb-2">Personal Info</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Name:</span> Awan Baghel</li>
                  <li><span className="font-medium">Age:</span> 20</li>
                  <li><span className="font-medium">Location:</span> Deoria, Uttar Pradesh</li>
                  <li><span className="font-medium">Experience:</span> Fresher</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-portfolio-navy mb-2">Interests</h4>
                <ul className="space-y-2">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>Photography</li>
                  <li>Traveling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
