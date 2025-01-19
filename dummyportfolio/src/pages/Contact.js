import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact-section">
        <h1>Contact Me</h1>
        <p>If you’d like to discuss a project or just want to say hi, feel free to reach out!</p>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Write your message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <div className="contact-info">
            <p><strong>Email:</strong> yourname@example.com</p>
            <p><strong>Phone:</strong> +123-456-7890</p>
            <p><strong>Location:</strong> City, Country</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
