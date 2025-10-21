// components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Rom Chamraeun, a passionate Web Developer with a keen eye for design and a love for creating intuitive user experiences. With several years of experience in the field, I specialize in building responsive and accessible web applications.
            </p>
            <p>
              My journey in web development started during my studies in computer science, where I discovered my passion for turning complex problems into simple, beautiful designs. I believe in writing clean, efficient code and constantly learning new technologies to stay up-to-date with the ever-evolving web landscape.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, or experimenting with new recipes in the kitchen.
            </p>
          </div>
          
          <div className="about-info">
            <div className="info-item">
              <h3>Personal Information</h3>
              <ul>
                <li><span>Name:</span> Rom Chamraeun</li>
                <li><span>Age:</span> 28</li>
                <li><span>Location:</span> Phnom Penh, Cambodia</li>
                <li><span>Email:</span> rom.chamraeun@example.com</li>
              </ul>
            </div>
            
            <div className="info-item">
              <h3>Education</h3>
              <ul>
                <li><span>Degree:</span> Bachelor's in Computer Science</li>
                <li><span>University:</span> Institute of Technology of Cambodia</li>
                <li><span>Year:</span> 2015-2019</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;