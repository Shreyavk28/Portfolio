import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // 👈 Import react-scroll Link

export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] text-slate-400 pt-12 pb-12 border-t border-[#3b3f57]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:items-start">

      
        <div>
          <h2 className="text-white text-2xl font-bold mb-2">Portfolio.</h2>
          <p className="text-l text-slate-500 leading-relaxed">
            Crafting digital experiences with passion and precision.
          </p>
        </div>

     
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={800}
                offset={-70} 
                className="hover:text-purple-400 transition cursor-pointer"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="education"
                smooth={true}
                duration={800}
                offset={-70}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                Education
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-70}
                className="hover:text-purple-400 transition cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        
        <div className="md:text-left text-center">
          <h3 className="text-white text-lg font-bold mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-5 text-2xl">
            <a
              href="https://www.linkedin.com/in/shreya-vk-666538260/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Shreyavk28"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:shreyavkumar5344@gmail.com"
              className="hover:text-purple-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-sm text-slate-500 mt-8 border-t border-[#1e2538] pt-4">
        © {new Date().getFullYear()} Shreya V K — Built with React & Tailwind
      </div>
    </footer>
  );
}
