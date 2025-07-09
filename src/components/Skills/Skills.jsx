import React from "react";
import "./Skills.css";
import skills from "../../data/skills.json"; // Relative to the current file

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="heading">
        <h2><i className="fas fa-laptop-code"></i> Skills <span>& Abilities</span></h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-modern-card"
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
