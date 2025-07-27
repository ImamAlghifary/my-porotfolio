import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-beige py-12">
      <div className='border-y border-beige py-10 mb-8'>
        <div className=" container mx-auto text-wrap grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Quick Link / About Me */}
            <div className="text-left">
            <h3 className="text-2xl font-bold mb-4 font-EB-Garamond">Quick Link</h3>
            <p className="text-sm leading-relaxed font-Inter text-wrap">
                Welcome to my portfolio. I'm a passionate and detail-oriented developer with a strong interest in IoT, data
                systems, and digital design. My work focuses on building reliable, scalable, and user-friendly solutions
                that bridge technology and real-world impact.
            </p>
            {/* You can add actual links here later */}
            {/* <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-sky-blue transition-colors duration-300" style={{ fontFamily: 'var(--font-Inter)' }}>Link 1</a></li>
                <li><a href="#" className="hover:text-sky-blue transition-colors duration-300" style={{ fontFamily: 'var(--font-Inter)' }}>Link 2</a></li>
            </ul> */}
            </div>

            {/* Column 2: Social Media */}
            <div className="text-left md:border-l md:border-beige md:pl-8"> {/* Added left border for separation */}
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-EB-Garamond)' }}>Social Media</h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-Inter)' }}>
                Welcome to my portfolio. I'm a passionate and detail-oriented developer with a strong interest in IoT, data
                systems, and digital design. My work focuses on building reliable, scalable, and user-friendly solutions
                that bridge technology and real-world impact.
            </p>
            {/* Social media icons/links can go here */}
            {/* <ul className="mt-4 flex space-x-4">
                <li><a href="#" className="hover:text-sky-blue transition-colors duration-300"><i className="fab fa-linkedin text-2xl"></i></a></li>
                <li><a href="#" className="hover:text-sky-blue transition-colors duration-300"><i className="fab fa-github text-2xl"></i></a></li>
                <li><a href="#" className="hover:text-sky-blue transition-colors duration-300"><i className="fab fa-twitter text-2xl"></i></a></li>
            </ul> */}
            </div>

            {/* Column 3: Another Quick Link / Contact Info */}
            <div className="text-left md:border-l md:border-beige md:pl-8"> {/* Added left border for separation */}
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-EB-Garamond)' }}>Quick Link</h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-Inter)' }}>
                Welcome to my portfolio. I'm a passionate and detail-oriented developer with a strong interest in IoT, data
                systems, and digital design. My work focuses on building reliable, scalable, and user-friendly solutions
                that bridge technology and real-world impact.
            </p>
            {/* Contact info or other links */}
            {/* <ul className="mt-4 space-y-2">
                <li><a href="mailto:your.email@example.com" className="hover:text-sky-blue transition-colors duration-300" style={{ fontFamily: 'var(--font-Inter)' }}>Email Me</a></li>
                <li><a href="#" className="hover:text-sky-blue transition-colors duration-300" style={{ fontFamily: 'var(--font-Inter)' }}>Resume</a></li>
            </ul> */}
            </div>
        </div>

      </div>  
        {/* Copyright Notice */}
        <div className="text-center text-sm font-Inter" >
            © Copyright {new Date().getFullYear()} Imam. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
