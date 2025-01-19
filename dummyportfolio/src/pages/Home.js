import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p className="subtitle">
            Hi, I'm <span className="highlight">M. Asim</span>, a passionate frontend developer.
          </p>
          <button className="cta-button">Explore My Work</button>
        </div>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgDWBomi-rQ_QPNkGIwVryqQhtwbVa4ENiQ&s" 
          alt="Hero section" 
          className="hero-image" 
        />
      </header>

      <section className="features">
        <div className="feature">
          <i className="icon fas fa-code"></i>
          <h3>Modern Design</h3>
          <p>Creating responsive and visually appealing designs.</p>
        </div>
        <div className="feature">
          <i className="icon fas fa-laptop-code"></i>
          <h3>Clean Code</h3>
          <p>Writing reusable, maintainable, and efficient code.</p>
        </div>
        <div className="feature">
          <i className="icon fas fa-lightbulb"></i>
          <h3>Creative Solutions</h3>
          <p>Innovative ideas for solving complex problems.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
