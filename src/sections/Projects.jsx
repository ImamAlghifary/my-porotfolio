import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product listings, and a shopping cart.',
      image: 'https://placehold.co/600x400/2F4156/C8D9E6?text=E-commerce', // Placeholder image
      link: '#', // Link to project details
      tag: 'Web Development', // Example tag
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality and real-time updates.',
      image: 'https://placehold.co/600x400/2F4156/C8D9E6?text=Task+App',
      link: '#',
      tag: 'Productivity',
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio website, showcasing my skills and projects.',
      image: 'https://placehold.co/600x400/2F4156/C8D9E6?text=Portfolio',
      link: '#',
      tag: 'UI/UX Design',
    },
    {
      title: 'Mobile Game Concept',
      description: 'A concept for a casual mobile game with intuitive controls and engaging levels.',
      image: 'https://placehold.co/600x400/2F4156/C8D9E6?text=Game+Concept',
      link: '#',
      tag: 'Game Development',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard to visualize complex datasets with D3.js.',
      image: 'https://placehold.co/600x400/2F4156/C8D9E6?text=Dashboard',
      link: '#',
      tag: 'Data Science',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center p-8 mt-10">
      <div className="font-EB-Garamond mb-6">
            <p className="text-6xl">Projects</p>
            <p className="text-2xl">What I’ve Built & Brought to Life</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="relative bg-white shadow-lg overflow-hidden group">
            {/* Project Image Container with Overlay Text */}
            <div className="relative w-full h-64 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>

              {/* Project Title and Description Overlay (like "Polo Soft Tailored" or product name) */}
              <div className="absolute inset-0 flex flex-col justify-end items-start p-6 text-white z-20">
                <h3 className="text-2xl font-semibold mb-1 text-left" style={{ fontFamily: 'var(--font-EB-Garamond)' }}>{project.title}</h3>
                <p className="text-sm leading-relaxed text-left" style={{ fontFamily: 'var(--font-Inter)' }}>{project.description}</p>
              </div>

              {/* Optional: Tag overlay like "Polo Soft Tailored" - positioned differently */}
              {project.tag && (
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded tracking-wider uppercase z-30" style={{ fontFamily: 'var(--font-Inter)' }}>
                  {project.tag}
                </div>
              )}
            </div>

            {/* Quickshop-like button - positioned below the image */}
            <div className="p-4 bg-white text-navy-blue"> {/* Background for the button area */}
              <a
                href={project.link}
                className="inline-block w-full px-8 py-3 border-2 border-navy-blue text-navy-blue text-lg uppercase tracking-wider font-semibold hover:bg-navy-blue hover:text-white transition-all duration-300"
                style={{ fontFamily: 'var(--font-Inter)' }}
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
