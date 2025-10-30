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
