// components/Skills.js
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'UI/UX Design', level: 70 },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'HTML5', icon: '📝' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '📦' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Figma', icon: '🎯' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-content">
          <div className="skill-bars">
            <h3>Technical Skills</h3>
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="technologies">
            <h3>Technologies I Use</h3>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div className="tech-item" key={index}>
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;