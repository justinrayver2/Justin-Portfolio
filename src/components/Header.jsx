import React, { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(20, 20, 35, 0.95)",
        color: "#fff",
        zIndex: 1000,
        padding: "16px 24px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(6px)",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)",
          cursor: "pointer",
          transform: visible
            ? "translateX(0) scale(1)"
            : "translateX(-50px) scale(0.8)",
          opacity: visible ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = visible
            ? "translateX(0) scale(1)"
            : "translateX(-50px) scale(0.8)")
        }
      >
        <h1
          style={{
            margin: 0,
            fontSize: "2rem",
            letterSpacing: "1px",
            color: "#fff",
            fontWeight: "700",
          }}
        >
          JR
        </h1>
      </div>
    </header>
  );
}
