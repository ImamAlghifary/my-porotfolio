import React from 'react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar font-EB-Garamond px-4 py-5 fixed top-0 w-full z-50 transition-all ease-in duration-600 ${
        scrolled || isMenuOpen
          ? `bg-beige text-navy-blue`
          : `bg-transparent`
      }`}>
      <div className="container max-w-6xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Imam</div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')} className="hover:text-teal transition-colors duration-300">home</a></li>
          <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-teal transition-colors duration-300">about</a></li>
          <li><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="hover:text-teal transition-colors duration-300">skills</a></li>
          <li><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="hover:text-teal transition-colors duration-300">experience</a></li>
          <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="hover:text-teal transition-colors duration-300">projects</a></li>
        </ul>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      
      <div 
        className={`fixed top-0 left-0 w-full bg-beige text-navy-blue p-6 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-[-100%]'
        } md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-navy-blue">
          <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <ul className="flex flex-col space-y-3 mt-5 text-2xl">
          <li><a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')} className="hover:text-teal transition-colors duration-300 border-b-2 border-navy-blue">home</a></li>
          <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-teal transition-colors duration-300 border-b-2 border-navy-blue">about</a></li>
          <li><a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="hover:text-teal transition-colors duration-300 border-b-2 border-navy-blue">skills</a></li>
          <li><a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="hover:text-teal transition-colors duration-300 border-b-2 border-navy-blue">experience</a></li>
          <li><a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="hover:text-teal transition-colors duration-300 border-b-2 border-navy-blue">projects</a></li>
        </ul>
      </div>

      {isMenuOpen && (
        <div 
          onClick={toggleMenu} 
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
