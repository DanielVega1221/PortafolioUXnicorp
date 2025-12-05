import React, { useState, useRef } from "react";
import "./SobreNosotros.css";

function AcordeonAnimado({ titulo, children }) {
  const [abierto, setAbierto] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => setAbierto((prev) => !prev);

  return (
    <div className={`porque-menu${abierto ? " abierto" : ""}`}> 
      <button
        className="acordeon-summary"
        onClick={toggle}
        aria-expanded={abierto}
      >
        <span className="acordeon-titulo-wrapper">{titulo}</span>
        <span className="acordeon-toggle-icon">
          {abierto ? '−' : '+'}
        </span>
      </button>
      <div
        className="porque-menu-content"
        ref={contentRef}
        style={{
          maxHeight: abierto ? contentRef.current?.scrollHeight + "px" : "0px",
          opacity: abierto ? 1 : 0,
          transition: "max-height 0.5s cubic-bezier(.4,0,.2,1), opacity 0.4s cubic-bezier(.4,0,.2,1)",
          overflow: "hidden"
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default AcordeonAnimado;
