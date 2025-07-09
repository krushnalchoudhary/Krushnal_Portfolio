import React, { useEffect, useState } from "react";
import "./Hero.css";
import ParticlesComponent from "../../ParticlesComponent";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaDev,
} from "react-icons/fa";
import hero1 from "../../assets/c.png";
import hero2 from "../../assets/About.png";
import hero3 from "../../assets/portfolio_logo.png";
import resumePDF from "../../assets/resume/Krushnals_resume.pdf"

const HeroSection = () => {
  const texts = ["Web Development", "Frontend Development"];
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const el = document.querySelector("#typing-text");
    let textIndex = 0;
    let charIndex = 0;
    let currentText = texts[textIndex];
    let typing = true;

    const type = () => {
      if (!el) return;
      if (typing) {
        el.innerHTML = currentText.substring(0, charIndex) + "|";
        charIndex++;
        if (charIndex > currentText.length) {
          typing = false;
          setTimeout(type, 1000);
          return;
        }
      } else {
        charIndex--;
        el.innerHTML = currentText.substring(0, charIndex) + "|";
        if (charIndex === 0) {
          typing = true;
          textIndex = (textIndex + 1) % texts.length;
          currentText = texts[textIndex];
        }
      }
      setTimeout(type, 150);
    };

    type();
    return () => clearTimeout();
  }, []);

  // Image fade-in/fade-out every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFadeClass("fade-in");
      }, 500); // Duration matches fade-out animation
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home" id="home">
      <ParticlesComponent id="tsparticles" />
      <div className="content">
        <h2>
          Hi There,<br /> I'm Krushnal <span>Choudhary</span>
        </h2>
        <p>
          I Am Into <span id="typing-text"></span>
        </p>

        <div className="buttons left-align">
          <a href="#about" className="btn">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
<a
  href={resumePDF}
  className="btn download"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <span>Download Resume</span>
  <i className="fas fa-file-download"></i>
</a>

        </div>

        <div className="socials">
          <ul className="social-icons">
            <li>
              <a className="linkedin" href="https://www.linkedin.com/in/krushnal-choudhary-82b79b247/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </li>
            <li>
              <a className="github" href="https://github.com/krushnalchoudhary" target="_blank" rel="noreferrer"><FaGithub /></a>
            </li>
            <li>
              <a className="twitter" href="https://x.com/itskrishnal" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </li>
            <li>
              <a className="telegram" href="https://t.me/KrushnalChoudhary" target="_blank" rel="noreferrer"><FaTelegramPlane /></a>
            </li>
            <li>
              <a className="instagram" href="https://www.instagram.com/krushnal_choudhary" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="image">
        <img
          draggable="false"
          className={`tilt ${fadeClass}`}
          src={images[currentImage]}
          alt="Hero"
        />
      </div>
    </section>
  );
};

export default HeroSection;
