import React from 'react';

const Projects = () => {
  const projects = [
    {
      uuid: 'd8c5f9b4-f3c2-4a0b-8d5f-1c4b1a4a4f8d',
      title: 'Portofolio Website',
      description: 'A personal portfolio website to showcase my skills and projects.',
      techStack: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      image: 'Screenshot 2025-08-02 220142.png', 
      link: '#',
      tag: 'Web Development', 
    },
    {
      uuid: 'a7b8c9d0-e1f2-3g4h-5i6j-7k8l9m0n1p2q',
      title: 'E-Commerce',
      description: 'A scalable e-commerce platform with user authentication, product management, and secure checkout.',
      techStack: ['Laravel', 'Laravel UI', 'Blade', 'MVC', 'PHP', 'MySQL'],
      image: 'https://placehold.co/600x400/2F4156/C8D9E6?text=E-Commerce',
      link: '#',
      tag: 'Web Development',
    },
    {
      uuid: 'a7b8c9d0-e1f2-3g4h-5i6j-7k8l9m0n1p2q',
      title: 'Electromagnetic AMCS',
      description: 'A real-time monitoring system for electromagnetic signals using ESP32, GPS, SignalHound.',
      techStack: ['SignalHound', 'Python', 'JavaScript', 'Grafana', 'PostgreSQL'],
      image: 'https://placehold.co/600x400/2F4156/C8D9E6?text=Monitoring+System',
      link: '#',
      tag: 'Internet of Things',
    },
    {
      uuid: 'c5d6e7f8-g9h0-i1j2-k3l4-m5n6o7p8q9r0',
      title: 'Translator App',
      description: 'A mobile app that translates text, images, and audio using Google ML Kit.',
      techStack: ['Android Studio', 'Firebase', 'ML Kit (Google)', 'Java'],
      image: 'https://placehold.co/600x400/2F4156/C8D9E6?text=Translator+App',
      link: '#',
      tag: 'Mobile Application',
    },
  ];

  return (
    <div id="projects" className="max-w-6xl mx-auto text-center p-8 mt-10">
      <div className="font-EB-Garamond mb-6">
        <p className="text-6xl">Projects</p>
        <p className="text-2xl">What I’ve Built & Brought to Life</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={project.uuid} className="relative bg-white shadow-lg  overflow-hidden group">
            <div className="relative w-full h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform group-hover:translate-x-[-100%]" 
              />
              <div className="absolute inset-0 bg-navy-blue flex items-center justify-center p-6 transition-transform duration-500 transform translate-x-[100%] group-hover:translate-x-0 z-10">
                <div className="text-beige text-center">
                  <h4 className="text-2xl font-semibold mb-2 font-EB-Garamond">Tech Stack</h4>
                  <ul className="text-lg font-Inter list-disc list-inside">
                    {project.techStack.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
            
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-white z-30 transition-transform duration-500 transform group-hover:translate-x-[-100%]">
                <h3 className="text-2xl font-semibold mb-1 text-left font-EB-Garamond">{project.title}</h3>
                <p className="leading-relaxed text-left font-Inter">{project.description}</p>
              </div>

              {project.tag && (
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1  tracking-wider uppercase z-40 font-Inter">
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

