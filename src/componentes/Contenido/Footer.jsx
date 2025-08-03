import React from "react";
import './Footer.css';
import logo from '../../assets/Logo1.png';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const redes = [
  { nombre: 'Instagram', url: 'https://www.instagram.com/uxnicorp/', icono: <FaInstagram /> },
  { nombre: 'LinkedIn', url: 'https://www.linkedin.com/company/uxnicorp/', icono: <FaLinkedin /> },
  { nombre: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61578796932025', icono: <FaFacebook /> }
];

const secciones = [
  { nombre: 'Inicio', id: 'inicio' },
  { nombre: 'Sobre Nosotros', id: 'sobre-nosotros' },
  { nombre: 'Proyectos', id: 'proyectos' },
  { nombre: 'Metodología', id: 'metodologia' },
  { nombre: 'Servicios', id: 'servicios' }
];

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: buscar por clase si no encuentra por ID
      const className = sectionId.replace('-', '-') + '-section';
      const fallbackElement = document.querySelector(`.${className}`);
      if (fallbackElement) {
        fallbackElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  return (
    <footer className="footer-uxnicorp" aria-label="Pie de página UXNicorp">
      <div className="footer-content-grid">
        {/* Columna 1: Logo y Claim */}
        <div className="footer-col">
          <img src={logo} alt="Logo de UXNicorp" className="footer-logo" loading="lazy" />
          <div className="footer-brand-text">
            <span className="footer-nombre">UXNicorp</span>
            <span className="footer-claim">Diseñamos experiencias digitales con corazón y creatividad.</span>
          </div>
        </div>

        {/* Columna 2: Redes sociales */}
        <div className="footer-col footer-center">
          <span className="footer-indicativo">¡Seguinos en redes!</span>
          <nav className="footer-redes" aria-label="Redes sociales">
            {redes.map((r) => (
              <a key={r.nombre} href={r.url} target="_blank" rel="noopener noreferrer" className="footer-red" aria-label={r.nombre} title={r.nombre}>
                <span className="footer-red-icono">{r.icono}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Columna 3: Navegación */}
        <div className="footer-col footer-right">
          <span className="footer-vuelve">¿Te gustó algo de lo que viste? ¡Volvé allá!</span>
          <nav className="footer-nav" aria-label="Navegación del sitio">
            {secciones.map((item) => (
              <button 
                key={item.nombre} 
                onClick={() => scrollToSection(item.id)} 
                className="footer-btn"
                type="button"
                aria-label={`Ir a la sección ${item.nombre}`}
              >
                {item.nombre}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2025 UXNicorp · Todos los derechos reservados</span>
        
      </div>
    </footer>
  );
}

export default Footer;
