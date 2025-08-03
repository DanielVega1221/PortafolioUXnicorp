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
        style={{
          background: "none",
          border: "none",
          width: "100%",
          textAlign: "left",
          padding: 0,
          fontWeight: 700,
          color: "#f37aa6",
          fontSize: "1.08rem",
          cursor: "pointer",
          outline: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <span>{titulo}</span>
        <span
          className="acordeon-flecha"
          style={{
            display: "inline-block",
            marginLeft: 12,
            transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
            transform: abierto ? "rotate(90deg)" : "rotate(0deg)",
            fontSize: "1.2em"
          }}
        >
          ▶
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
