// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2>Key Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Languages & Frameworks:</h4>
            <ul>
              <li>Java, JavaScript, SQL, Spring Boot, Hibernate, React.js</li>
              <li>FreeMarker, jQuery</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Tools & Platforms:</h4>
            <ul>
              <li>Git, Maven, Jenkins, Docker, VS Code, Eclipse</li>
              <li>Apache Tomcat, MRemoteNG, FileZilla</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Web Technologies:</h4>
            <ul>
              <li>HTML5, CSS3, JSP, XML, JSON, RESTful APIs, GraphQL</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Cloud & DevOps:</h4>
            <ul>
              <li>AWS, Azure, Jenkins, Docker, Shell Scripting</li>
              <li>CI/CD, Log4j, Agile Methodology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
