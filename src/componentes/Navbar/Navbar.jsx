import React, { useState } from "react";
import "./Navbar.css";

const navItems = [
  { id: "home", color: "#dbc9c9", label: "Inicio" },
  { id: "about", color: "#e1d1ec", label: "Sobre Nosotros" },
  { id: "projects", color: "#c9def9", label: "Proyectos" },
  { id: "methodology", color: "#f7d6f2", label: "Metodología" },
  { id: "services", color: "#f37aa6", label: "Servicios" }
];


function Navbar({ activeSection, onNavClick, hidden }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Siempre renderiza el contenedor, pero con animación de fade si hidden o mobile
  const containerClass = `navbar-container${isMobile || hidden ? ' navbar-hidden' : ''}`;

  const handleItemClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
