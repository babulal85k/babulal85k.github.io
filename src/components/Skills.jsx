import React from 'react';
import skills from './skills.json';

const Skills = () => {
  return (
    <div id='skills'>
      <h1>Skills</h1>
      <div className="skill-container">
        {skills.map(skill => (
          <div key={skill.id} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;