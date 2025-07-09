import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/portfolio_logo.png"; // Update path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-inner">
        {/* Left Section - Logo */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo-img" />
        </div>

        {/* Right Section - Navigation and Socials */}
        <div className="footer-right">
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-socials">
            <a href="mailto:you@example.com" title="Email"><FaEnvelope /></a>
            <a href="https://github.com/krushnalchoudhary" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/krushnal-choudhary-82b79b247/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/yourusername" title="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com/yourusername" title="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Krushnal Choudhary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
