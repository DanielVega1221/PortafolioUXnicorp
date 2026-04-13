import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const navItemDefs = [
  { id: "main",           color: "#dbc9c9", labelKey: "nav.inicio" },
  { id: "sobre-nosotros", color: "#e1d1ec", labelKey: "nav.porQueElegirnos" },
  { id: "servicios",      color: "#f37aa6", labelKey: "nav.servicios" },
  { id: "proyectos",      color: "#c9def9", labelKey: "nav.proyectos" },
  { id: "tecnologias",    color: "#e0a6d8", labelKey: "nav.tecnologias" },
  { id: "nosotros",       color: "#ffd4a3", labelKey: "nav.nosotros" },
  { id: "metodologia",    color: "#b8e6d5", labelKey: "nav.comoTrabajamos" },
  { id: "contact",        color: "#f0e68c", labelKey: "nav.contacto" }
];

function Navbar({ activeSection, onNavClick, hidden }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'es';
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
    const homePath = `/${lang}`;
    if (location.pathname !== homePath && location.pathname !== `${homePath}/`) {
      navigate(homePath, { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onNavClick) onNavClick(id);
  };

  return (
    <div className={containerClass}>
      <div className="navbar-line" />
      <div className="navbar-buttons">
        {navItemDefs.map((item) => {
          const isSectionActive = activeSection === item.id;
          const isItemHovered = hoveredItem === item.id;
          return (
            <a
              key={item.id}
              href={item.id === 'main' ? `/${lang}` : `/${lang}#${item.id}`}
              className={`navbar-button ${isSectionActive ? 'active' : ''}`}
              style={{
                backgroundColor: isSectionActive
                  ? item.color
                  : isItemHovered ? '#e5e5e5' : '#4a4a4a',
                boxShadow: isSectionActive
                  ? `0 0 16px 4px ${item.color}66`
                  : 'none'
              }}
              onClick={(e) => { e.preventDefault(); handleItemClick(item.id); }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className={`navbar-tooltip${isItemHovered ? ' visible' : ''}${isSectionActive && isItemHovered ? ' active-section' : ''}`}>
                {t(item.labelKey)}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
