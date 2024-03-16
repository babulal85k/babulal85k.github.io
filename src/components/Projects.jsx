import React from 'react';
import projects from "./projects.json";

const Projects = () => {
  return (
    <div id='projects'>
      <h1>Projects</h1>
      <div className="project-container">
      {projects.map(item => (
        <div key={item.id} className="project-card">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <div className="links">
            <a id='github' href={item.git} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a id='live' href={item.live} target="_blank" rel="noopener noreferrer">Live</a>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Projects;