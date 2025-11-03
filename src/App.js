
import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0B1120] via-[#0B1120] to-[#0A0F1F]">
      <Navbar />

      <Element name="home">
        <Hero />
      </Element>

      <Element name="about" data-aos="fade-up">
        <About />
      </Element>

      <Element name="skills" data-aos="fade-up">
        <Skills />
      </Element>

      <Element name="projects" data-aos="fade-up">
        <Projects />
      </Element>

      <Element name="education" data-aos="fade-up">
        <Education />
      </Element>

      <Element name="contact" data-aos="fade-up">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
