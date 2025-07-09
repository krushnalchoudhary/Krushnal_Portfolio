import React, { useState } from "react";
import "./ProjectsSection.css";
import ShareSphere from "../../assets/project/ShareSphere.png";
import WeatherAppSS from "../../assets/WeatherAppSS.png";
import portfolioImage from "../../assets/portfolio.png";


import PodcastWeb from "../../assets/work/PodcastWebsite.png"
import Dashboard from "../../assets/work/Dashboard.png"
import WH from "../../assets/work/WH_Web.png"

// Dummy data for projects
const projectData = [
  {
    title: "Portfolio Website",
    image: portfolioImage,
    description: "Responsive portfolio built with React.",
    liveLink: "https://your-live-site.com",
    codeLink: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Share Sphere",
    image: ShareSphere,
    description: "Java Application to share files between two Devices connected on same WiFi.",
    codeLink: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Weather App",
    image: WeatherAppSS,
    description: "Real-time weather data using OpenWeather API.",
    liveLink: "https://krushnalchoudhary.github.io/WeatherApp/",
    codeLink: "https://github.com/krushnalchoudhary/WeatherApp",
  },
];

// Dummy data for My Work
const myWorkData = [
  {
    title: "podcast Website",
    image: PodcastWeb,
    description: "An Responsive Podcast Website using React Js",
    codeLink: "https://github.com/yourusername/remote-patient-monitoring", // Replace as needed
    liveLink: "https://shows.wallethunter.xyz/",
  },
  {
    title: "Admin/User Dashboard",
    image: Dashboard,
    description: "Interactive Dashboard with graphical representation build using React Js",
    codeLink: "https://github.com/yourusername/college-erp-tools", // Replace as needed
    liveLink: "https://woobiedashboard.vercel.app/",
  },
  {
    title: "Wallet Hunter Website",
    image: WH,
    description: "An responsive Websiteb created using React js.",
    codeLink: "https://github.com/yourusername/college-erp-tools", // Replace as needed
    liveLink: "https://wallethunter.xyz/",
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const renderCard = (project, index) => (
    <div className="card" key={index}>
      {project.image && <img src={project.image} alt={project.title} />}
      <div className="overlay">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="buttons">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
              View
            </a>
          )}
          {project.codeLink && (
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn">
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        My <span>{activeTab === "projects" ? "Projects" : "Work"}</span>
      </h2>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={`tab-btn ${activeTab === "mywork" ? "active" : ""}`}
          onClick={() => setActiveTab("mywork")}
        >
          My Work
        </button>
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {activeTab === "projects"
          ? projectData.map(renderCard)
          : myWorkData.map(renderCard)}
      </div>
    </section>
  );
};

export default ProjectsSection;
