import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="wrapper">
      <h2 className="section-title">Resume</h2>

      <div className="resume-content">
        <div className="resume-section">
          <h3>Education</h3>
          <p>
            <strong>BS in Information Technology</strong> — 2022-2027<br />
            Western Institute of Technology
          </p>
        </div>

        <div className="resume-section">
          <h3>Experience</h3>
          <p>
            <strong>Front-End Developer (Beginner)</strong><br />
            Built responsive, user-friendly websites using React, HTML, CSS, and JavaScript.
          </p>
          <p>
            <strong>UI/UX Designer</strong><br />
            Designed intuitive and modern interfaces for web and mobile applications.
          </p>
        </div>

        <div className="resume-section">
          <h3>Skills</h3>
          <ul>
            <li>React.js & Vite</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Figma / UI Design</li>
            <li>Responsive Web Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
