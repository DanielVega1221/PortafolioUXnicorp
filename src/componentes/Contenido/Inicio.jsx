/**
 * COMPONENTE: Hero / Sección de inicio (primera vista del sitio)
 * 
 * Usado en:
 * - App.jsx (primera sección de la home)
 * 
 * Funcionalidad:
 * - Hero con logo, título principal y CTA
 * - Animaciones con IntersectionObserver
 * - Botón que scrollea suavemente a #sobre-nosotros
 * - Frases rotativas destacando servicios
 * 
 * Estado:
 * - isVisible: Controla animaciones de entrada basado en scroll
 */

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Inicio.css";
import Logo1 from "../../assets/Logo1.png";
import OptimizedImage from "../OptimizedImage";

function Inicio() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  const scrollToSobreNosotros = () => {
    const sobreNosotrosElement = document.getElementById('sobre-nosotros');
    if (sobreNosotrosElement) {
      const yOffset = 0;
      const y = sobreNosotrosElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div 
      id="main" 
      className={`inicio-container-modern section-spacing ${isVisible ? 'animations-active' : 'animations-paused'}`} 
      ref={containerRef}
    >
      {/* Elementos decorativos */}
      <div className="sparkle sparkle-1">✦</div>
      <div className="sparkle sparkle-2">✦</div>
      <div className="sparkle sparkle-3">✧</div>
      <div className="sparkle sparkle-4">✦</div>
      <div className="sparkle sparkle-5">✧</div>
      <div className="doodle-heart">♡</div>
      <div className="doodle-star">★</div>
      <div className="doodle-star-extra2">✧</div>
      <div className="sparkle sparkle-6">✦</div>
      <div className="sparkle sparkle-7">✧</div>
      <div className="sparkle sparkle-8">✦</div>
      <div className="sparkle sparkle-9">✧</div>
      <div className="sparkle sparkle-10">✦</div>

      {/* Contenido principal */}
      <div className="content-wrapper">
        {/* Sección izquierda - Texto optimizado para SEO */}
        <div className="text-section">
          <div className="main-content">
            <h1 className="modern-title">
              {t('inicio.titulo1')}
              <br />
              <span className="seo-hidden">{t('inicio.seoHidden')}</span>
              {t('inicio.titulo2')}
              <br />
              <span className="highlight-word">{t('inicio.titulo3')}</span>
            </h1>

            {/* Logo insertado aquí para responsive - se muestra solo en mobile */}
            <div className="visual-section mobile-logo">
              <OptimizedImage 
                src={Logo1} 
                alt={t('inicio.altLogo')}
                loading="eager" 
                fetchpriority="high"
                className="logo-modern"
                width="153"
                height="153"
              />
            </div>
            
            <p className="modern-description"
              dangerouslySetInnerHTML={{ __html: t('inicio.descripcion') }}
            />

            {/* Keywords ocultas para SEO */}
            <div className="seo-keywords" style={{ position: 'absolute', left: '-9999px', opacity: 0 }}>
              <span>desarrollo web argentina</span>
              <span>diseño de páginas web</span>
              <span>agencia web profesional</span>
              <span>sistemas de gestión web</span>
              <span>desarrollo web profesional</span>
              <span>programación web argentina</span>
            </div>

            <button 
              className="modern-cta"
              onClick={scrollToSobreNosotros}
              aria-label={t('inicio.cta')}
              style={{
                background: '#f37aa6',
                boxShadow: '0 8px 32px rgba(179,229,252,0.22), 0 2px 8px rgba(243,122,166,0.15)',
                border: 'none',
                filter: 'drop-shadow(0 2px 16px #e8d5ff)',
                backdropFilter: 'blur(6px)',
                transition: 'box-shadow 0.5s, filter 0.5s, transform 0.3s',
                willChange: 'transform',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                const sphere = e.currentTarget.querySelector('.button-sphere');
                const rocket = e.currentTarget.querySelector('.button-rocket');
                if (sphere && rocket) {
                  sphere.style.opacity = '0';
                  sphere.style.transform = 'scale(0) rotate(180deg)';
                  rocket.style.opacity = '1';
                  rocket.style.transform = 'scale(1) rotate(0deg) translateX(0px)';
                }
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={e => {
                const sphere = e.currentTarget.querySelector('.button-sphere');
                const rocket = e.currentTarget.querySelector('.button-rocket');
                if (sphere && rocket) {
                  sphere.style.opacity = '1';
                  sphere.style.transform = 'scale(1) rotate(0deg)';
                  rocket.style.opacity = '0';
                  rocket.style.transform = 'scale(0) rotate(-45deg) translateX(-10px)';
                }
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span className="button-text">{t('inicio.cta')}</span>
              <div className="button-icon-container">
                <div className="button-sphere">●</div>
                <div className="button-rocket">🚀</div>
              </div>
            </button>
          </div>
        </div>

        {/* Sección derecha - Logo (visible solo en desktop) */}
        <div className="visual-section desktop-logo">
          <OptimizedImage 
            src={Logo1} 
            alt={t('inicio.altLogo')}
            className="logo-modern"
            loading="eager"
            fetchpriority="high"
            width="250"
            height="250"
          />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
