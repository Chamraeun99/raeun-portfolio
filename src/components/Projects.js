// components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart functionality and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'project1',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks with drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'Material UI'],
      image: 'project2',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecasts and interactive maps.',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      image: 'project3',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website showcasing projects and skills.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      image: 'project4',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <div className={`project-img-placeholder ${project.image}`}></div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link">View Project</a>
                  <a href={project.github} className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;