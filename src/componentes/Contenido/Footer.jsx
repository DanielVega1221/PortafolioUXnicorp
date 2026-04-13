import React from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import logo from '../../assets/Logo1.png';
import OptimizedImage from '../OptimizedImage';
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaWhatsapp, FaHome, FaUsers, FaBriefcase, FaLaptopCode, FaBullseye, FaHandshake, FaInfoCircle, FaPlay } from 'react-icons/fa';

const redes = [
  { nombre: 'Instagram', url: 'https://www.instagram.com/uxnicorp/', icono: <FaInstagram />, color: '#f37aa6' },
  { nombre: 'LinkedIn', url: 'https://www.linkedin.com/company/uxnicorp/', icono: <FaLinkedin />, color: '#f37aa6' },
  { nombre: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61578796932025', icono: <FaFacebook />, color: '#f37aa6' }
];

function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'es';
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSectionClick = (sectionId) => {
    const homePath = `/${lang}`;
    if (location.pathname !== homePath && location.pathname !== `${homePath}/`) {
      navigate(homePath, { replace: false });
      setTimeout(() => scrollToSection(sectionId), 500);
    } else {
      scrollToSection(sectionId);
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
              <p className="footer-tagline">{t('footer.tagline')}</p>
            </div>
          </div>
          <p className="footer-description">{t('footer.descripcion')}</p>
          <div className="footer-contact-info">
            <a href="mailto:uxnicorp@gmail.com" className="footer-contact-item">
              <FaEnvelope />
              <span>uxnicorp@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Columna 2: Navegación rápida */}
        <div className="footer-section footer-nav-section">
          <h4 className="footer-section-title">{t('footer.navTitulo')}</h4>
          <nav className="footer-nav-modern" aria-label="Navegación del sitio">
            <a href={`/${lang}`} onClick={(e) => { e.preventDefault(); handleSectionClick('main'); }} className="footer-nav-item" aria-label={t('footer.nav.inicio')}>
              <span className="footer-nav-icon"><FaHome /></span>
              <span>{t('footer.nav.inicio')}</span>
            </a>
            <a href={`/${lang}#servicios`} onClick={(e) => { e.preventDefault(); handleSectionClick('servicios'); }} className="footer-nav-item" aria-label={t('footer.nav.servicios')}>
              <span className="footer-nav-icon"><FaBullseye /></span>
              <span>{t('footer.nav.servicios')}</span>
            </a>
            <a href={`/${lang}#proyectos`} onClick={(e) => { e.preventDefault(); handleSectionClick('proyectos'); }} className="footer-nav-item" aria-label={t('footer.nav.proyectos')}>
              <span className="footer-nav-icon"><FaBriefcase /></span>
              <span>{t('footer.nav.proyectos')}</span>
            </a>
            <a href={`/${lang}#tecnologias`} onClick={(e) => { e.preventDefault(); handleSectionClick('tecnologias'); }} className="footer-nav-item" aria-label={t('footer.nav.tecnologias')}>
              <span className="footer-nav-icon"><FaLaptopCode /></span>
              <span>{t('footer.nav.tecnologias')}</span>
            </a>
            <Link to={`/${lang}/sobre-nosotros`} className="footer-nav-item" aria-label={t('footer.nav.sobreNosotros')}>
              <span className="footer-nav-icon"><FaInfoCircle /></span>
              <span>{t('footer.nav.sobreNosotros')}</span>
            </Link>
            <Link to={`/${lang}/como-trabajamos`} className="footer-nav-item" aria-label={t('footer.nav.comoTrabajamos')}>
              <span className="footer-nav-icon"><FaHandshake /></span>
              <span>{t('footer.nav.comoTrabajamos')}</span>
            </Link>
            <button onClick={() => handleSectionClick('contact')} className="footer-nav-item" type="button" aria-label={t('footer.nav.contacto')}>
              <span className="footer-nav-icon"><FaEnvelope /></span>
              <span>{t('footer.nav.contacto')}</span>
            </button>
          </nav>
        </div>

        {/* Columna 3: Redes sociales y CTA */}
        <div className="footer-section footer-social-section">
          <h4 className="footer-section-title">{t('footer.socialTitulo')}</h4>
          <p className="footer-social-description">{t('footer.socialDesc')}</p>
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
            <h5>{t('footer.ctaTitulo')}</h5>
            <button 
              onClick={() => handleSectionClick('contact')} 
              className="footer-cta-button"
              type="button"
            >
              {t('footer.ctaBoton')}
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom-modern">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="footer-bottom-links">
            <span className="footer-bottom-text">{t('footer.hecho')} </span>
            <span className="footer-heart" onClick={handleHeartClick} style={{ cursor: 'pointer' }}>❤️</span>
            <span className="footer-bottom-text"> {t('footer.en')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
