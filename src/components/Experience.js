// src/components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-item">
          <h4>Java Full Stack Developer | ITalent Digital Pvt Ltd | Hyderabad</h4>
          <p><strong>November 2021 – Present</strong></p>
          <ul>
            <li>Developed and maintained responsive applications using Java, Spring, Hibernate, and React.js.</li>
            <li>Led design and implementation of RESTful and GraphQL APIs for seamless data flow.</li>
            <li>Deployed applications on cloud platforms (AWS, Azure) and integrated CI/CD pipelines using Jenkins and Git.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>Cisco Reimagine Project</h4>
          <p><strong>November 2021 – December 2022</strong></p>
          <ul>
            <li>Designed and developed customer-related applications on the Kohros platform.</li>
            <li>Integrated third-party APIs, ensuring security and integrity.</li>
            <li>Collaborated with stakeholders to gather requirements and optimize processes.</li>
          </ul>
        </div>

        {/* Add more experiences or projects here */}
      </div>
    </section>
  );
}

export default Experience;
