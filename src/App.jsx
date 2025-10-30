import React, { useEffect } from "react";
import "./style.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import Preloader from "./components/Preloader";

export default function App() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const siteRoot = document.querySelector(".site-root");

    window.addEventListener("load", () => {
      preloader?.classList.add("hide");
      siteRoot?.classList.add("loaded");
    });
  }, []);

  return (
    <>
      <Preloader />
      <div className="site-root">
        <ParticlesBackground />
        <Header />
        <main>
          <Hero />
          <Resume />
          <Portfolio />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
import React from "react";
import Header from "./Header";

export default function App() {
  return (
    <div>
      <Header />

      <section id="hero" style={{ height: "100vh", backgroundColor: "#f5f5f5", padding: "50px" }}>
        <h2>Home Section</h2>
        <p>Welcome to my website!</p>
      </section>

      <section id="resume" style={{ height: "100vh", backgroundColor: "#e0e0e0", padding: "50px" }}>
        <h2>Resume Section</h2>
        <ul>
          <li>• Education</li>
          <li>• Work Experience</li>
          <li>• Skills</li>
        </ul>
      </section>

      <section id="portfolio" style={{ height: "100vh", backgroundColor: "#d0d0d0", padding: "50px" }}>
        <h2>Projects Section</h2>
        <p>Some of my projects go here.</p>
      </section>

      <section id="blog" style={{ height: "100vh", backgroundColor: "#c0c0c0", padding: "50px" }}>
        <h2>Blog Section</h2>
        <p>Read my latest posts.</p>
      </section>

      <section id="contact" style={{ height: "100vh", backgroundColor: "#b0b0b0", padding: "50px" }}>
        <h2>Contact Section</h2>
        <p>Get in touch with me!</p>
      </section>
    </div>
  );
}

