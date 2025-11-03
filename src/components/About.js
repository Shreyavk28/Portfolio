
import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function About() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
   <section id="about" className="py-16 bg-[#0b0f1a] overflow-hidden">

      <Particles
        id="tsparticles-about"
        init={particlesInit}
        options={{
          background: { color: "#0b0f1a" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: ["#6EE7B7", "#A78BFA"] }, 
            links: {
              color: "#6EE7B7",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
       <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="overflow-hidden rounded-xl shadow-lg flex justify-center"
>
  <img
    src="/photo.jpg"
    alt="About Me"
    className="w-64 md:w-72 lg:w-80 h-auto object-cover"
  />
</motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            About <span className="text-purple-400">Me</span>
          </h2>
         <p className="text-slate-300 mb-4 leading-relaxed text-lg md:text-xl">
  I’m a passionate{" "}
  <span className="text-purple-400 font-medium">
    Fullstack Developer
  </span>{" "}
  with a love for building modern, responsive, and user-friendly web
  applications. My goal is to create digital experiences that are not
  only visually appealing but also performant.
</p>

<p className="text-slate-300 mb-8 leading-relaxed text-lg md:text-xl">
  I enjoy working with technologies like{" "}
  <span className="text-purple-400 font-medium">
    <strong>React</strong>, <strong>Node.js</strong>,{" "}
    <strong>Express</strong>, and <strong>MongoDB</strong>
  </span>. Outside of coding, I explore new design trends, contribute to
  open-source, and refine my problem-solving skills.
</p>


          <a
            href="/Shreya_VK_CV.pdf"
            download
            className="inline-block px-6 py-3 rounded-lg text-white bg-gradient-to-r from-teal-400 to-purple-400 hover:opacity-90 transform hover:-translate-y-1 transition-transform duration-500 ease-in-out shadow-lg"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
