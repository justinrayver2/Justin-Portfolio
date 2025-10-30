import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrapper">
        <h2 className="section-title">Contact</h2>

        <p>Email: <a href="mailto:justinrayver.14@gmail.com">justinrayver.14@gmail.com</a></p>
        <p>Location: West Habog2 Molo, Iloilo City, Philippines</p>

        <div className="social-links">
          <a href="https://www.facebook.com/justinkyot15#/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/jusz_bustinz/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/justinrayver2" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="Your email" />
          </label>

          <label>
            Message
            <textarea placeholder="Your message"></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>

        <p className="note">This form is for demo purposes only.</p>
      </div>
    </section>
  );
}
