import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero-header">
      <div
        className="wrapper"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "100px",
          paddingBottom: "50px",
          color: "#fff",
        }}
      >
        <div className="hero-pic">
          <img
            src="/picture_na.jpg"
            alt="Justin Rayver Llaguno"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              transition: "transform 0.5s",
            }}
          />
        </div>

        <h1 style={{ margin: 0 }}>Hi, I'm Justin Rayver Llaguno</h1>
        <p style={{ color: "#ccc", marginTop: "0.5rem" }}>Front-End Developer | Designer | Creative Coder</p>
      </div>
    </section>
  );
}
