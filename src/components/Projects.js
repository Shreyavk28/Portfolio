import React from "react";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Discover the Hidden Gems: A Dynamic Tourism Experience",
      description:
        "Built a responsive travel website showcasing Karnataka tourist destinations with dynamic content and interactive navigation. Implemented Express.js routing with MongoDB for seamless updates and optimized UI/UX for improved user engagement.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  
      github: "https://github.com/Shreyavk28/Discover-the-Hidden-Gems-A-Dynamic-Tourism-Experience", 
      live: "", 
    },
    {
      title: "Autism Disorder Detection using Deep Learning",
      description:
        "Developed a CNN-based deep learning model to detect Autism Spectrum Disorder (ASD) by analyzing facial features using TensorFlow/Keras. Integrated real-time webcam-based detection and enhanced accuracy with data augmentation.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas"],
      github: "", 
      live: "", 
    },
    {
      title: "Task Management Web App (MERN Stack)",
      description:
        "Built a full-stack task manager with JWT authentication, priority levels, and due-date tracking. Developed RESTful APIs and integrated them with a responsive React frontend, enabling efficient task management for 30+ users.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS"],
      github: "https://github.com/Shreyavk28/Task-Management-Web-App", 
      live: "", 
    },
    {
      title: "Expense Tracker with Insights",
      description:
        "Created a personal finance tracker for logging income and expenses with category-wise visualization using charts. Implemented secure CRUD operations and data storage in MongoDB.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS"],
      github: "https://github.com/Shreyavk28/Expense-Tracker", 
      live: "", 
    },
      {
  title: "Weather App",
  description:
    "Built a responsive weather application with a glassmorphism UI using React and Node.js. Integrates with the OpenWeather API to fetch real-time weather data by city and displays temperature, humidity, and conditions with a clean, modern interface.",
  tech: ["React.js", "Node.js", "Express.js", "CSS", "OpenWeather API"],
  github: "https://github.com/Shreyavk28/Weather-App",
  live: "", 
},
{
  title: "Priority Queue Manager",
  description:
    "Developed a data-driven task management system that prioritizes tasks using a Priority Queue algorithm instead of creation time. Implemented custom priority sorting logic with Django ORM and focused on scalable backend design using Object-Oriented Programming principles.",
  tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "SQLite"],
  github: "https://github.com/Shreyavk28/Priority-Queue-Manager-",
  live: "",
}


  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: {
      opacity: 1,
      y: 0, 
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">
          Projects
        </h2>

      
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
        >
          {projects.map((project, index) => (
          
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
              variants={cardVariants}
            
            >
              <div>
             
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white pr-4">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-700/50 text-purple-200 rounded-md text-sm" 
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}