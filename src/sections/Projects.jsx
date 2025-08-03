import React from 'react';
import projects from '../data/projectsData';

const Projects = () => {
  return (
    <div id="projects" className="max-w-6xl mx-auto text-center p-8 mt-10">
      <div className="font-EB-Garamond mb-6">
        <p className="text-6xl">Projects</p>
        <p className="text-2xl">What I’ve Built & Brought to Life</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {projects.map((project, index) => (
          <div key={project.uuid} className="relative bg-navy-blue shadow-lg overflow-hidden group">
            <div className="relative w-full h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform group-hover:translate-x-[-100%]" 
              />
              
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-500 transform translate-x-[100%] group-hover:translate-x-0 z-30">
                <div className="text-beige text-center">
                  <h4 className="text-2xl font-semibold mb-2 font-EB-Garamond">Tech Stack</h4>
                  <ul className="text-lg font-Inter text-left flex flex-col gap-1">
                    {project.techStack.map((tech, i) => (
                      <li key={i} className='bg-beige p-1 text-navy-blue'>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/30  group-hover:opacity-100 transition-opacity duration-300 z-30"></div>

            
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-beige z-30 transition-transform duration-500 transform group-hover:translate-x-[-100%]">
                <h3 className="text-2xl font-semibold mb-1 text-left font-EB-Garamond">{project.title}</h3>
                <p className="leading-relaxed text-left font-Inter">{project.description}</p>
              </div>
              

              {project.tag && (
                <div className="absolute top-4 right-4 bg-black/70 text-beige text-xs px-3 py-1  tracking-wider uppercase z-40 font-Inter">
                  {project.tag}
                </div>
              )}
            </div>
            <div className="p-4 bg-white text-navy-blue">
              <a
                href={project.link}
                target='_blank'
                className="inline-block w-full px-8 py-3 border-2 border-navy-blue text-navy-blue text-lg uppercase tracking-wider font-semibold hover:bg-navy-blue hover:text-white transition-all duration-300 font-Inter"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

