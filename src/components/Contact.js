// components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>rom.chamraeun@example.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+855 12 345 678</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Phnom Penh, Cambodia</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;