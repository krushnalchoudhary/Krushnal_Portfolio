import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Education.css";

const Education = () => {
  useEffect(() => {
    ScrollReveal().reveal(".education .card", {
      interval: 200,
      distance: "50px",
      origin: "bottom",
      duration: 800,
      reset: false,
    });
  }, []);

  return (
    <section className="education" id="education">
      <h2 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h2>

      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h3>B.E. in Electronics & Telecommunication</h3>
            <p className="institution">JSPM Narhe Technical Campus,Pune | 2020 - 2024</p>
            <p className="description">
              
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>Higher Secondary</h3>
            <p className="institution">Seva Sadan Higher Secondary School | 2019 - 2020</p>
            <p className="description">
              Completed with distinction in  Maths/Science stream.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
