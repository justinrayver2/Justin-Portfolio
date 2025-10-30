import { useEffect } from "react";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        zIndex: 1000,
        padding: "10px 20px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>JR</h1>
      </div>
    </header>
  );
}
