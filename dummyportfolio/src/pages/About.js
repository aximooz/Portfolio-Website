import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <h1>About Me</h1>
        <div className="about-content">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lqMo0zkHIU2XV9X6g4qy7Y-k41f4bvXOlQ&s" 
            alt="Profile" 
            className="profile-image" 
          />
          <div className="about-text">
            <p>
              Hello! I'm <span className="highlight">M. Asim</span>, a dedicated and passionate MERN Stack Dev specializing in crafting engaging and user-friendly web applications. 
            </p>
            <p>
              With a strong foundation in <b>React.js</b> and <b>modern web technologies</b>, I enjoy turning creative ideas into real-world solutions.
            </p>
            <p>
              Outside of coding, I love exploring new technologies, reading, and connecting with fellow developers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
