import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-buttons">
          <a href="mailto:inban.ts@gmail.com" className="gmail" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://github.com/inbantamizhselvan" className="github" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/inban-tamizhselvan/" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
