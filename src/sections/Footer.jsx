import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-beige py-12">
      <div className="border-y border-beige py-10 mb-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left flex items-center">
            <p className="text-sm leading-relaxed font-Inter">
             Thanks for visiting my portfolio!
            </p>
          </div>
          <div className="text-left md:border-l md:border-beige md:pl-8">
            <h3 className="text-2xl font-bold mb-4 font-EB-Garamond">Social Media</h3>
            <ul className="mt-4 flex space-x-6 items-center">
              <li>
                <a href="https://github.com/ImamAlghifary" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 fill-current text-beige hover:text-sky-blue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub</title>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.467-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/imam-alghifary/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 fill-current text-beige hover:text-teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>LinkedIn</title>
                    <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.05 20.48H3.5V8.92h3.55v11.56zM5.3 7.57a2.23 2.23 0 1 1 0-4.46 2.23 2.23 0 0 1 0 4.46zM20.5 20.48h-3.48v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3.48V8.92h3.35v1.54h.05c.47-.88 1.62-1.8 3.32-1.8 3.56 0 4.22 2.34 4.22 5.37v6.55z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:imamalghifary6@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 fill-current text-beige hover:text-teal" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Email</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-sm font-Inter">
        © {new Date().getFullYear()} Imam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
