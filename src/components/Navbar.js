
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const scrollProps = {
  spy: true,
  smooth: true,
  offset: -80,
   activeClass: "nav-active",
  duration: 800,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0f1a] text-white p-4 shadow-lg z-50 text-l">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>

        <div className="hidden md:flex space-x-12">
          <Link to="home" {...scrollProps} className="cursor-pointer">
            Home
          </Link>
          <Link to="about" {...scrollProps} className="cursor-pointer">
            About
          </Link>
          <Link to="skills" {...scrollProps} className="cursor-pointer">
            Skills
          </Link>
          <Link to="projects" {...scrollProps} className="cursor-pointer">
            Projects
          </Link>
          <Link to="education" {...scrollProps} className="cursor-pointer">
            Education
          </Link>
          <Link to="contact" {...scrollProps} className="cursor-pointer">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col items-center">
          <Link to="home" {...scrollProps} className="cursor-pointer" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="about" {...scrollProps} className="cursor-pointer" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="skills" {...scrollProps} className="cursor-pointer" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="projects" {...scrollProps} className="cursor-pointer" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="education" {...scrollProps} className="cursor-pointer" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="contact" {...scrollProps} className="cursor-pointer" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
