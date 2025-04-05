
import React from 'react';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  const educationItems = [
    {
      degree: "Diploma in Information Technology",
      institution: "Chhatrapati Shahu Ji Maharaj Government Polytechnic",
      duration: "2022 - Present",
      description: "Studied programming fundamentals, algorithms, and software development methodologies."
    },
    {
      degree: "Intermediate",
      institution: "New Central Public Acedemy",
      duration: "2021 - 2022",
      description: "Stream: Physics, Chemistry, and Mathematics."
    },
    {
      degree: "High School",
      institution: "St. Joseph High School",
      duration: "2019 - 2020",
      description: "Explored core subjects including mathematics, science, and literature, while participating in extracurricular activities."
    }
  ];

  const experienceItems = [
    {
      position: "Summer Training on Python",
      company: "Ekana Technologies",
      duration: "July 2024 - September 2024",
      description: ""
    },
    {
      position: "Information Security",
      company: "Saylor Academy",
      duration: "June 2024 - July 2024",
      description: ""
    },
    {
      position: "Python for Data Science",
      company: "Saylor Academy",
      duration: "July 2024 - August 2024",
      description: ""
    }
  ];

  return (
    <section id="resume" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">My academic and professional journey</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-portfolio-navy text-white rounded-full mr-3 text-sm">
                1
              </span>
              Education
            </h3>
            
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-portfolio-teal">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-portfolio-teal rounded-full"></div>
                  <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium">{item.institution}</span> | {item.duration}
                  </div>
                  <p className="text-portfolio-dark">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-portfolio-navy text-white rounded-full mr-3 text-sm">
                2
              </span>
              Certification
            </h3>
            
            <div className="space-y-8">
              {experienceItems.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-portfolio-amber">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-portfolio-amber rounded-full"></div>
                  <h4 className="text-xl font-semibold mb-1">{item.position}</h4>
                  <div className="text-sm text-muted-foreground mb-2">
                    <span className="font-medium">{item.company}</span> | {item.duration}
                  </div>
                  <p className="text-portfolio-dark">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/public/Awan.pdf"
            download="Awan_Baghel_Resume.pdf" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
