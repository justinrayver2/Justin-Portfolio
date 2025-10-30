import React from "react";

export default function Header() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(20, 20, 35, 0.95)",
        color: "#fff",
        zIndex: 1000,
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>JR</h1>
      <nav>
        <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} style={{ marginRight: "1rem", color: "#e9eef7" }}>Home</a>
        <a href="#resume" onClick={(e) => handleNavClick(e, "resume")} style={{ marginRight: "1rem", color: "#e9eef7" }}>Resume</a>
        <a href="#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} style={{ marginRight: "1rem", color: "#e9eef7" }}>Portfolio</a>
        <a href="#blog" onClick={(e) => handleNavClick(e, "blog")} style={{ marginRight: "1rem", color: "#e9eef7" }}>Blog</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} style={{ color: "#e9eef7" }}>Contact</a>
      </nav>
    </header>
  );
}
