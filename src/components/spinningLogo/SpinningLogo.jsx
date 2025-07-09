import React, { useEffect, useState } from "react";
import "./SpinningLogo.css";
import logo from "../../assets/portfolio_logo.png";

const LogoScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // start fade-out
    }, 2000); // hold logo for 2s

    const exitTimer = setTimeout(() => {
      onComplete?.(); // move to main content
    }, 3000); // fade-out over 1s

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className={`logo-screen ${fadeOut ? "fade-out" : ""}`}>
      <img src={logo} alt="Logo" className="logo-img" />
    </div>
  );
};

export default LogoScreen;
