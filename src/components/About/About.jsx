import React from "react";
import "./About.css";
import aboutImg from "../../assets/About.png";
import resumePDF from "../../assets/resume/Krushnals_resume.pdf"; // ✅ Import the PDF

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="row">
        <div className="image about-img">
          <img src={aboutImg} alt="Krushnal Choudhary" />
        </div>

        <div className="content">
          <h3 className="about-heading" style={{ color: "gray" }}>
            Hello! I'm Krushnal Choudhary 👋
          </h3>
          <p className="about-text">
            A dedicated <strong>Frontend Developer</strong> with a strong grasp
            on the <strong>React.js</strong> and <strong>MERN stack</strong>. I
            transform complex challenges into smooth, high-performance
            interfaces.
          </p>
          <p className="about-text">
            I'm passionate about <strong>UI/UX</strong>, ensuring responsive
            design, accessibility, and performance. Constantly learning and
            building real-world projects is what fuels my development journey.
          </p>
          <p className="about-text">
            Let's connect and build something impactful together!
          </p>
          <div className="about-buttons">
            <a href="#contact" className="btn contact-btn">
              <span>Contact Me</span> <i className="fas fa-paper-plane"></i>
            </a>
            <a
              href={resumePDF}
              className="btn resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span>Download Resume</span> <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
