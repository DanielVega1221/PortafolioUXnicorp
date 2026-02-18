import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { id: "main", color: "#dbc9c9", label: "Inicio" },
  { id: "sobre-nosotros", color: "#e1d1ec", label: "¿Por qué elegirnos?" },
  { id: "servicios", color: "#f37aa6", label: "Servicios" },
  { id: "proyectos", color: "#c9def9", label: "Proyectos" },
  { id: "tecnologias", color: "#e0a6d8", label: "Tecnologías" },
  { id: "nosotros", color: "#ffd4a3", label: "Nosotros" },
  { id: "metodologia", color: "#b8e6d5", label: "Cómo trabajamos" },
  { id: "contact", color: "#f0e68c", label: "Contacto" }
];

function Navbar({ activeSection, onNavClick, hidden }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Siempre renderiza el contenedor, pero con animación de fade si hidden o mobile
  const containerClass = `navbar-container${isMobile || hidden ? ' navbar-hidden' : ''}`;

  const handleItemClick = (id) => {
    // Siempre navegar a home primero si no estamos allí, luego hacer scroll
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      // Esperar a que la página se cargue y luego hacer scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } else {
      // Si ya estamos en home, hacer scroll directo
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (onNavClick) {
      onNavClick(id);
    }
  };

  return (
    <div className={containerClass}>
      {/* Línea vertical */}
      <div className="navbar-line" />
      {/* Botones circulares */}
      <div className="navbar-buttons">
        {navItems.map((item) => {
          const isSectionActive = activeSection === item.id;
          const isItemHovered = hoveredItem === item.id;
          
          return (
            <button
              key={item.id}
              className={`navbar-button ${isSectionActive ? 'active' : ''}`}
              style={{
                backgroundColor: isSectionActive 
                  ? item.color 
                  : isItemHovered 
                    ? '#e5e5e5' 
                    : '#4a4a4a',
                boxShadow: isSectionActive 
                  ? `0 0 16px 4px ${item.color}66` 
                  : 'none'
              }}
              onClick={() => handleItemClick(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Tooltip */}
              <span 
                className={`navbar-tooltip${isItemHovered ? ' visible' : ''}${isSectionActive && isItemHovered ? ' active-section' : ''}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
