import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Project One",
      description: "A web application built with React.js and Firebase for real-time data handling.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with a responsive design and integrated payment gateway.",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A portfolio website showcasing creative works and technical skills.",
      link: "#",
    },
  ];

  return (
    <div className="projects">
      <section className="projects-section">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
