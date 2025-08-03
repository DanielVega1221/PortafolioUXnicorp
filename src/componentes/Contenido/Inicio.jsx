import React, { useState, useRef, useEffect } from "react";
import "./Inicio.css";
import Logo1 from "../../assets/Logo1.png";

function Inicio() {
  const [isVisible, setIsVisible] = useState(true); // Empezar con animaciones activas
  const containerRef = useRef(null);

  const scrollToSobreNosotros = () => {
    const sobreNosotrosElement = document.getElementById('sobre-nosotros');
    if (sobreNosotrosElement) {
      sobreNosotrosElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: buscar por clase si no encuentra por ID
      const sobreNosotrosSection = document.querySelector('.sobre-nosotros-section');
      if (sobreNosotrosSection) {
        sobreNosotrosSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        console.log('Sección Inicio visible:', entry.isIntersecting); // Para debug
      },
      {
        threshold: 0.3, // Se activa cuando 30% del componente es visible
        rootMargin: '0px' // Sin margen adicional para mayor precisión
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <div id="inicio" className={`inicio-container-modern section-spacing ${isVisible ? 'animations-active' : 'animations-paused'}`} ref={containerRef}>
      {/* Elementos decorativos reposicionados */}
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
        {/* Sección izquierda - Texto */}
        <div className="text-section">
          <div className="main-content">
            <h1 className="modern-title">
              Impulsamos tu
              <br />
              primer gran
              <br />
              <span className="highlight-word">salto digital</span>
            </h1>
            <button className="modern-cta"
              onClick={scrollToSobreNosotros}
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
              <span className="button-text">Comenzar mi viaje digital</span>
              <div className="button-icon-container">
                <div className="button-sphere">●</div>
                <div className="button-rocket">🚀</div>
              </div>
            </button>
          </div>
        </div>
        {/* Sección derecha - Elementos visuales */}
        <div className="visual-section">
          <img src={Logo1} alt="Logo" className="logo-modern" />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
