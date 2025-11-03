
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const education = [
    {
      degree: "B.E. / B.Tech — Computer Science",
      school: "Global Academy Of Technology",
      year: "2022 – Present",
      details:
        "Currently pursuing degree in Computer Science with a focus on web development and software engineering."
    },
    {
      degree: "Higher Secondary Education",
      school: "DR Thimmareddy Foundation PU College For Girls",
      year: "2020 – 2022",
      details:
        "Specialized in Science with Mathematics, Physics, and Chemistry."
    }
  ];

  return (
    <section id="education" className="bg-[#0b0f1a] py-[100px] mb-24">

      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-5xl font-bold text-white text-center mb-12"
          data-aos="fade-up"
        >
          Education
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <div
              key={index}
             className="bg-gradient-to-br from-[#1a2238] to-[#0e1220]
           p-6 rounded-lg border border-[#3b3f57]
           shadow-lg hover:shadow-xl 
           transition-all duration-300 hover:border-[#6b5db3]"

              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {edu.degree}
              </h3>
              {edu.school && <p className="text-gray-400">{edu.school}</p>}
              {edu.year && <p className="text-gray-500">{edu.year}</p>}
              <p className="mt-2 text-slate-300">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
