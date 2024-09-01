import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Project One",
    description: "A brief description of what this project does.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A brief description of what this project does.",
    link: "#",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="glass-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
