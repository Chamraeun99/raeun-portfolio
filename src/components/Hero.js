// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Rom Chamraeun</span>
          </h1>
          <h2 className="hero-subtitle">
            Web Developer & Creative Thinker
          </h2>
          <p className="hero-description">
            I build responsive, accessible, and performant web applications with modern technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="hero-image-bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;