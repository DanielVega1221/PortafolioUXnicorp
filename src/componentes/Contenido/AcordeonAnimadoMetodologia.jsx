/**
 * COMPONENTE: Acordeón controlado para pasos de metodología
 * 
 * Diferencia con AcordeonAnimado:
 * - Este es CONTROLADO (estado manejado por componente padre)
 * - Usado exclusivamente en Metodologia.jsx para pasos del proceso
 * - Tiene lógica de "solo uno abierto a la vez" en el padre
 * 
 * Props:
 * - titulo: String - Nombre del paso
 * - children: ReactNode - Detalles del paso
 * - abierto: Boolean - Estado controlado desde padre
 * - onClick: Function - Callback para cambiar paso activo
 */

import React, { useRef } from "react";
import "./Metodologia.css";

function AcordeonAnimadoMetodologia({ titulo, children, abierto, onClick }) {
  const contentRef = useRef(null);

  return (
    <div className={`porque-menu${abierto ? " abierto" : ""}`}> 
      <button
        className="acordeon-summary"
        onClick={onClick}
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

export default AcordeonAnimadoMetodologia;
