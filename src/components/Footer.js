// components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">RC</span>
            <p>Web Developer & Creative Thinker</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">LinkedIn</a>
                <a href="#" className="social-icon">GitHub</a>
                <a href="#" className="social-icon">Twitter</a>
                <a href="#" className="social-icon">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Rom Chamraeun. All Rights Reserved.</p>
          <p>Designed and Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;