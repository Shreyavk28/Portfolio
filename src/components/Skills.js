
import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const skills = [
  { src: "/images/HTML.svg", name: "HTML5" },
  { src: "/images/CSS.svg", name: "CSS3" },
  { src: "/images/JavaScript.svg", name: "JavaScript" },
  { src: "/images/React-Dark.svg", name: "React" },
  { src: "/images/NodeJS-Dark.svg", name: "Node.js" },
  { src: "/images/Python-Dark.svg", name: "Python" },
  { src: "/images/django.png", name: "Django" },
  { src: "/images/MongoDB.svg", name: "MongoDB" },
  { src: "/images/C.svg", name: "C Language" },
  { src: "/images/sql.webp", name: "SQL" },
];

export default function Skills() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <motion.section
      id="skills"
      className="relative py-40 flex flex-col justify-center items-center bg-[#0b0f1a] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
     
      <Particles
        id="skills-particles"
        init={particlesInit}
        options={{
          background: { color: "#0b0f1a" },
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            opacity: { value: 0.3 },
            links: { enable: true, color: "#4C3FFB", opacity: 0.3 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl font-bold text-white mb-2">Skills</h2>
        <br />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6 gap-x-4 justify-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-white/5 rounded-xl p-4 shadow-lg border border-white/10 hover:border-purple-400 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{
                scale: 1.08,
                rotate: [0, 2, -2, 0],
              }}
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-16 h-16 object-contain drop-shadow-lg"
              />
              <p className="text-sm text-slate-100 mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
