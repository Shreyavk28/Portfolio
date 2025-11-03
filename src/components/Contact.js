
import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, AnimatePresence } from "framer-motion";
import { Element } from "react-scroll";

const Contact = () => {
  const [status, setStatus] = useState("");

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mpwlkprp", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <Element name="contact">
      <section className="relative py-20 bg-[#0b0f1a] overflow-hidden">
      
        <Particles
          id="tsparticles-contact" 
          init={particlesInit}
          options={{
            background: { color: "#0b0f1a" },
            fpsLimit: 60,
            particles: {
              number: { value: 50, density: { enable: true, area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 1 },
              move: { enable: true, speed: 0.3 },
            },
          }}
          className="absolute inset-0 z-0"
        />

   
        <motion.div
          className="relative z-10 bg-gradient-to-br from-[#1a2238] to-[#0e1220] 
                     rounded-2xl p-8 md:p-12 w-full max-w-lg mx-auto 
                     shadow-xl border border-[#3b3f57]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-gray-400 uppercase tracking-widest text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.p>

          <motion.h1
            className="text-4xl font-extrabold text-white mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Contact Me
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
           
            <div>
              <label
                htmlFor="name" 
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Name
              </label>
              <input
                id="name" 
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="name" 
                required
                className="w-full px-4 py-2 rounded-lg
                         bg-gradient-to-br from-[#1a2238] to-[#0e1220]
                         text-white placeholder-[#a3a7c2]
                         border border-[#3b3f57]
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

         
            <div>
              <label
                htmlFor="email" 
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Email
              </label>
              <input
                id="email" 
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email" 
                required
                className="w-full px-4 py-2 rounded-lg
                         bg-gradient-to-br from-[#1a2238] to-[#0e1220]
                         text-white placeholder-[#a3a7c2]
                         border border-[#3b3f57]
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

         
            <div>
              <label
                htmlFor="message" 
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full px-4 py-2 rounded-lg
                         bg-gradient-to-br from-[#1a2238] to-[#0e1220]
                         text-white placeholder-[#a3a7c2]
                         border border-[#3b3f57]
                         focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </motion.div>

        <AnimatePresence>
          {status && (
            <motion.div
              key={status}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className={`fixed bottom-5 right-5 px-4 py-2 rounded shadow-lg text-white ${
                status === "success"
                  ? "bg-green-500"
                  : status === "error"
                  ? "bg-red-500"
                  : ""
              }`}
            >
              {status === "success" && "✅ Message sent successfully!"}
              {status === "error" && "❌ Something went wrong. Please try again."}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Element>
  );
};

export default Contact;