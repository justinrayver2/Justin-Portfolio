import React from "react";

export default function Preloader() {
  return (
    <div id="preloader">
      <div className="preloader-inner">
        <div className="loader-orb"></div>
        <div className="preloader-name">Loading...</div>
      </div>
    </div>
  );
}
