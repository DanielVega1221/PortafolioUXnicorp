import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLangNavigate } from '../../hooks/useLangNavigate';
import './FAQ.css';
import '../../section-glass-card.css';

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);
  const { t } = useTranslation();

  const faqsData = useMemo(() => {
    const items = t('faq.items', { returnObjects: true });
    return Array.isArray(items) ? items : [];
  }, [t]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Desconectar después de la primera animación
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const toggle = useCallback((idx) => {
    setOpenIdx(prev => prev === idx ? null : idx);
  }, []);

  const faqItems = useMemo(() => faqsData.map((faq, idx) => (
    <FAQItem
      key={idx}
      faq={faq}
      idx={idx}
      isOpen={openIdx === idx}
      onToggle={toggle}
    />
  )), [openIdx, toggle, faqsData]);

  return (
    <section 
      className={`faq-section ${isVisible ? 'visible' : ''}`}
      id="faq"
      ref={sectionRef}
    >
      <div className="section-glass-card">
          <h2 className="faq-titulo">
            {t('faq.titulo')} <span className="faq-highlight">{t('faq.tituloDestacado')}</span>
          </h2>
          <p className="faq-subtitulo">
            {t('faq.subtitulo')}
          </p>

          <div className="faq-container">
            {faqItems}
          </div>
        </div>

        <CTASection />
    </section>
  );
}

// Componente memoizado para cada FAQ item
const FAQItem = React.memo(({ faq, idx, isOpen, onToggle }) => {
  const handleClick = useCallback(() => {
    onToggle(idx);
  }, [idx, onToggle]);

  return (
    <div 
      className={`faq-item ${isOpen ? 'abierto' : ''}`}
      style={{ animationDelay: `${idx * 0.1}s` }}
    >
      <button 
        className="faq-pregunta" 
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls={`faq-respuesta-${idx}`}
      >
        <QuestionIcon />
        <span className="faq-pregunta-texto">{faq.pregunta}</span>
        <ToggleIcon />
      </button>
      <div 
        id={`faq-respuesta-${idx}`}
        className={`faq-respuesta ${isOpen ? 'visible' : ''}`}
        role="region"
      >
        <div className="faq-respuesta-contenido">
          <p>{faq.respuesta}</p>
        </div>
      </div>
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

// Iconos memoizados
const QuestionIcon = React.memo(() => (
  <span className="faq-pregunta-icono" aria-hidden="true">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </span>
));

QuestionIcon.displayName = 'QuestionIcon';

const ToggleIcon = React.memo(() => (
  <span className="faq-icono-toggle" aria-hidden="true">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
));

ToggleIcon.displayName = 'ToggleIcon';

// CTA Section memoizada
const CTASection = React.memo(() => {
  const navigate = useLangNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleContactClick = (e) => {
    e.preventDefault();
    
    const langMatch = location.pathname.match(/^\/(es|en)/);
    const isHome = langMatch && location.pathname === `/${langMatch[1]}`;

    if (isHome) {
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } else {
      navigate('/');
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  };

  return (
    <div className="faq-cta">
      <div className="faq-cta-content">
        <div className="faq-cta-icono" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" fill="url(#grad1)" opacity="0.2"/>
            <path d="M24 14v20M14 24h20" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round"/>
            <defs>
              <linearGradient id="grad1" x1="4" y1="4" x2="44" y2="44">
                <stop stopColor="#667eea"/>
                <stop offset="1" stopColor="#764ba2"/>
              </linearGradient>
              <linearGradient id="grad2" x1="14" y1="14" x2="34" y2="34">
                <stop stopColor="#667eea"/>
                <stop offset="1" stopColor="#764ba2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h3 className="faq-cta-titulo">{t('faq.ctaTitulo')}</h3>
        <p className="faq-cta-desc">
          {t('faq.ctaDesc')}
        </p>
        <button onClick={handleContactClick} className="faq-cta-btn">
          <span>{t('faq.ctaBoton')}</span>
          <span className="faq-cta-arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
});

CTASection.displayName = 'CTASection';

export default FAQ;
