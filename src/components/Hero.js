
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0b0f1a]"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center text-center md:text-left">
        
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Hi, I'm{" "}
            <span className="text-purple-600">
              Shreya V K
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6}}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            A passionate <span className="text-purple-400 font-medium">Fullstack Developer</span> crafting
            beautiful, interactive, and responsive web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </ScrollLink>

            <ScrollLink
              to="projects"
              smooth={true}
              duration={800}
              offset={-70}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
                        text-gray-800 dark:text-white rounded-lg shadow hover:shadow-md 
                        transform hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </ScrollLink>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-60 sm:w-72 md:w-80 rounded-xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-purple-500/40 hover:scale-105 transition-transform duration-500">
            <img
              src="/photo.jpg"
              alt="portrait"
              className="object-cover w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
