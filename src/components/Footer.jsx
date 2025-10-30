import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: "rgba(255,255,255,0.05)", padding: "2rem 0" }}>
      <div className="wrapper" style={{ textAlign: "center" }}>
        <p style={{ color: "#ccc", margin: 0 }}>
          © {new Date().getFullYear()} Justin Rayver Llaguno. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
