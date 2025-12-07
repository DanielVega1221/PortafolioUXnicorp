import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/Logo1.png';
import OptimizedImage from '../OptimizedImage';
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaWhatsapp, FaHome, FaUsers, FaBriefcase, FaLaptopCode, FaBullseye, FaHandshake, FaInfoCircle } from 'react-icons/fa';

const redes = [
  { nombre: 'Instagram', url: 'https://www.instagram.com/uxnicorp/', icono: <FaInstagram />, color: '#f37aa6' },
  { nombre: 'LinkedIn', url: 'https://www.linkedin.com/company/uxnicorp/', icono: <FaLinkedin />, color: '#f37aa6' },
  { nombre: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61578796932025', icono: <FaFacebook />, color: '#f37aa6' }
];

const secciones = [
  { nombre: 'Inicio', id: 'main', icon: <FaHome />, type: 'scroll' },
  { nombre: 'Servicios', id: 'servicios', icon: <FaBullseye />, type: 'scroll' },
  { nombre: 'Proyectos', id: 'proyectos', icon: <FaBriefcase />, type: 'scroll' },
  { nombre: 'Tecnologías', id: 'tecnologias', icon: <FaLaptopCode />, type: 'scroll' },
  { nombre: 'Sobre Nosotros', to: '/sobre-nosotros', icon: <FaInfoCircle />, type: 'link' },
  { nombre: 'Cómo Trabajamos', to: '/como-trabajamos', icon: <FaHandshake />, type: 'link' },
  { nombre: 'Contacto', id: 'contact', icon: <FaEnvelope />, type: 'scroll' }
];

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHeartClick = (e) => {
    const emojis = ['❤️', '💖', '💕', '🦄', '✨', '💗', '💝', '🌈', '💫', '⭐'];
    const count = 25;

    for (let i = 0; i < count; i++) {
      const emoji = document.createElement('div');
      emoji.className = 'flying-emoji';
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      const rect = e.target.getBoundingClientRect();
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2;
      
      // Distancia aleatoria mayor
      const horizontalDistance = (Math.random() - 0.5) * 400; // -200 a 200
      const verticalLift = 200 + Math.random() * 150; // Sube entre 200-350px
      
      // Velocidad de rotación aleatoria
      const rotation = (Math.random() - 0.5) * 720; // -360 a 360 grados
      
      emoji.style.left = `${startX}px`;
      emoji.style.top = `${startY}px`;
      emoji.style.setProperty('--horizontal', `${horizontalDistance}px`);
      emoji.style.setProperty('--vertical-lift', `${verticalLift}px`);
      emoji.style.setProperty('--rotation', `${rotation}deg`);
      emoji.style.animationDelay = `${i * 0.02}s`;
      emoji.style.setProperty('--duration', `${2 + Math.random() * 1}s`);
      
      document.body.appendChild(emoji);
      
      setTimeout(() => {
        emoji.remove();
      }, 4000);
    }
  };

  return (
    <footer className="footer-modern" aria-label="Pie de página UXnicorp">
      <div className="footer-content-modern">
        {/* Columna 1: Marca y descripción */}
        <div className="footer-section footer-brand-section">
          <div className="footer-logo-container">
            <OptimizedImage src={logo} alt="Logo UXnicorp" className="footer-logo-modern" loading="lazy" width="60" height="60" />
            <div className="footer-brand-info">
              <h3 className="footer-brand-name">UXnicorp</h3>
              <p className="footer-tagline">Transformamos ideas en realidad digital</p>
            </div>
          </div>
          <p className="footer-description">
            Somos tu agencia de desarrollo web especializada en crear productos digitales exitosos. Combinamos diseño excepcional con tecnología de vanguardia para impulsar tu negocio.
          </p>
          
          <div className="footer-contact-info">
            <a href="mailto:uxnicorp@gmail.com" className="footer-contact-item">
              <FaEnvelope />
              <span>uxnicorp@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Columna 2: Navegación rápida */}
        <div className="footer-section footer-nav-section">
          <h4 className="footer-section-title">Navegación</h4>
          <nav className="footer-nav-modern" aria-label="Navegación del sitio">
            {secciones.map((item, index) => (
              item.type === 'link' ? (
                <Link
                  key={index}
                  to={item.to}
                  className="footer-nav-item"
                  aria-label={`Ir a ${item.nombre}`}
                >
                  <span className="footer-nav-icon">{item.icon}</span>
                  <span>{item.nombre}</span>
                </Link>
              ) : (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)} 
                  className="footer-nav-item"
                  type="button"
                  aria-label={`Ir a ${item.nombre}`}
                >
                  <span className="footer-nav-icon">{item.icon}</span>
                  <span>{item.nombre}</span>
                </button>
              )
            ))}
          </nav>
        </div>

        {/* Columna 3: Redes sociales y CTA */}
        <div className="footer-section footer-social-section">
          <h4 className="footer-section-title">Conectá con nosotros</h4>
          <p className="footer-social-description">
            Seguinos en nuestras redes para estar al día con las últimas tendencias en desarrollo web
          </p>
          <div className="footer-social-links">
            {redes.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={red.nombre}
                title={red.nombre}
                style={{ '--social-color': red.color }}
              >
                <span className="footer-social-icon">{red.icono}</span>
                <span className="footer-social-name">{red.nombre}</span>
              </a>
            ))}
          </div>

          <div className="footer-cta-box">
            <h5>¿Tenés un proyecto en mente?</h5>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="footer-cta-button"
              type="button"
            >
              Conversemos →
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom-modern">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © 2025 UXnicorp. Todos los derechos reservados.
          </p>
          <div className="footer-bottom-links">
            <span className="footer-bottom-text">Hecho con </span>
            <span className="footer-heart" onClick={handleHeartClick} style={{ cursor: 'pointer' }}>❤️</span>
            <span className="footer-bottom-text"> en Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
