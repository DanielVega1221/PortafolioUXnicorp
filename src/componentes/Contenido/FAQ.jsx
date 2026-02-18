import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FAQ.css';
import '../../section-glass-card.css';

const faqs = [
  {
    pregunta: "¿Cómo funciona el proceso de cotización?",
    respuesta: "Nos contactas contando tu proyecto, agendamos una videollamada o chat para entender tus necesidades, y en 48 horas te enviamos una propuesta personalizada con alcance, tiempos y detalles. Todo sin compromiso y completamente transparente."
  },
  {
    pregunta: "¿Ofrecen mantenimiento después del lanzamiento?",
    respuesta: "Sí, ofrecemos planes de mantenimiento mensuales que incluyen: actualizaciones de seguridad, backups automáticos, soporte técnico prioritario, optimización de rendimiento y una ronda de cambios mensuales para ajustes menores que necesites."
  },
  {
    pregunta: "¿Trabajan con clientes de otros países?",
    respuesta: "Sí, totalmente. Trabajamos con clientes de toda Latinoamérica, España y Estados Unidos. Utilizamos herramientas de comunicación modernas (Zoom, Slack, Trello) y nos adaptamos a tu zona horaria para reuniones."
  },
  {
    pregunta: "¿Qué pasa si necesito cambios después del lanzamiento?",
    respuesta: "Si contratas nuestro plan de mantenimiento, incluye una ronda de cambios mensuales para modificaciones menores. Los primeros 30 días después del lanzamiento también incluyen ajustes. Para cambios mayores, trabajamos con total transparencia."
  },
  {
    pregunta: "¿Puedo administrar el contenido de mi sitio yo mismo?",
    respuesta: "Depende del tipo de proyecto. Los sistemas de gestión y e-commerce incluyen paneles administrativos completos e intuitivos."
  },
  {
    pregunta: "¿Qué diferencia a UXnicorp de otras agencias?",
    respuesta: "No solo te vendemos un sitio web, nos convertimos en tu aliado tecnológico. Nos preocupamos genuinamente por el crecimiento de tu negocio y te acompañamos en cada paso. No usamos plantillas genéricas, cada proyecto es hecho a medida. Hablamos sin tecnicismos, cumplimos lo que prometemos y estamos disponibles cuando nos necesitas. Queremos que tu negocio crezca tanto como el nuestro."
  },
  {
    pregunta: "¿Necesito tener todo definido antes de empezar?",
    respuesta: "¡No! Muchos de nuestros clientes llegaron con ideas vagas. Parte de nuestro servicio es ayudarte a estructurar y dar forma a tu proyecto. Te guiamos en cada decisión técnica y estratégica. Empezamos desde donde estés, sin importar cuán desarrollada esté tu idea."
  }
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

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

  const faqItems = useMemo(() => faqs.map((faq, idx) => (
    <FAQItem
      key={idx}
      faq={faq}
      idx={idx}
      isOpen={openIdx === idx}
      onToggle={toggle}
    />
  )), [openIdx, toggle]);

  return (
    <section 
      className={`faq-section ${isVisible ? 'visible' : ''}`}
      id="faq"
      ref={sectionRef}
    >
      <div className="section-glass-card">
          <h2 className="faq-titulo">
            Preguntas <span className="faq-highlight">frecuentes</span>
          </h2>
          <p className="faq-subtitulo">
            Resolvemos las dudas más comunes de nuestros clientes
          </p>
        </div>

        <div className="faq-container">
          {faqItems}
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Si ya estamos en home, solo scroll
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } else {
      // Si estamos en otra página, navegar y luego scroll
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
        <h3 className="faq-cta-titulo">¿No encontraste tu respuesta?</h3>
        <p className="faq-cta-desc">
          Estamos aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
        </p>
        <button onClick={handleContactClick} className="faq-cta-btn">
          <span>Contactanos ahora</span>
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
