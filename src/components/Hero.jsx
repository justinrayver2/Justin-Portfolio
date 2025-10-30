import { useEffect } from "react";


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
          gap: "1rem", // space between image, name, and description
          paddingTop: "100px",
        }}
      >
        <div className="hero-pic">
          <img
            src="/picture_na.jpg"
            alt="Justin Rayver Llaguno"
            style={{ width: "300px", height: " 300px", borderRadius: "100%", objectFit: "cover" }}
          />
        </div>

        <h1>Hi, I'm Justin Rayver Llaguno</h1>
        <p>Front-End Developer | Designer | Creative Coder</p>
      </div>
    </section>
  );
}
