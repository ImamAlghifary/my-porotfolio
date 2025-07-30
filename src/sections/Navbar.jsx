import React from 'react';
import { useState, useEffect} from 'react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      console.log("scrollY", offset);
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar font-EB-Garamond px-4 py-5 fixed top-0 w-full z-50 transition-all ease-out duration-2000 ${
        scrolled
          ? `bg-beige text-navy-blue`
          : `bg-transparent`
      }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className=" text-2xl font-bold">Imam</div>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-teal transition-colors duration-300">home</a></li>
          <li><a href="#about" className="hover:text-teal transition-colors duration-300">about</a></li>
          <li><a href="#skills" className="hover:text-teal transition-colors duration-300">skills</a></li>
          <li><a href="#experience" className="hover:text-teal transition-colors duration-300">experience</a></li>
          <li><a href="#projects" className="hover:text-teal transition-colors duration-300">projects</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;