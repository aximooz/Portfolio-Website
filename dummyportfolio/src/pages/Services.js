import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services">
      <section className="services-section">
        <h1>My Services</h1>
        <p>I offer a wide range of web development services to help you succeed online.</p>
        <div className="services-content">
          <div className="service-card">
            <h2>Web Design</h2>
            <p>Creative and responsive web designs that adapt to all devices.</p>
          </div>
          <div className="service-card">
            <h2>Web Development</h2>
            <p>Building fast, scalable websites using modern technologies like React and Node.js.</p>
          </div>
          <div className="service-card">
            <h2>UI/UX Design</h2>
            <p>Crafting intuitive and user-friendly interfaces to provide a seamless user experience.</p>
          </div>
          <div className="service-card">
            <h2>SEO Optimization</h2>
            <p>Improving your website's visibility on search engines to attract more visitors.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
