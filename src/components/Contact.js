// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2>Contact Information</h2>
        <ul>
          <div><strong>Email:</strong> praveenshetty.code@gmail.com</div>
          <div><strong>Phone:</strong> 9951478032</div>
          <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/praveen" target="_blank" rel="noopener noreferrer">Praveen's LinkedIn</a></div>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
