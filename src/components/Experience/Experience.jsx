import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  useEffect(() => {
    ScrollReveal().reveal(".experience-card", {
      origin: "bottom",
      distance: "60px",
      duration: 1000,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  const experience = {
  role: "Frontend Developer",
  company: "Wallet Hunter Pvt Ltd.",
  duration: "Sep 2024 - Present",
  description: "Worked as a Frontend Developer, building and maintaining responsive, interactive, and user-friendly websites using React.js. Collaborated with cross-functional teams to implement modern UI/UX designs and optimize performance across devices.",
};


  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <h3>{experience.role}</h3>
        <span className="company">{experience.company}</span>
        <span className="duration">{experience.duration}</span>
        <p>{experience.description}</p>
      </div>
    </section>
  );
};

export default Experience;
