import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTASection.css';
import '../../section-glass-card.css';

function CTASection({ 
  titulo = "¿Listo para transformar tu idea en realidad?", 
  descripcion = "Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer digitalmente",
  textoBoton = "Agendar consulta gratuita",
  variant = "primary",
  linkTo = null
}) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (linkTo) {
      if (linkTo.includes('#')) {
        const [path, hash] = linkTo.split('#');
        navigate(path || '/');
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      } else {
        navigate(linkTo);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const contactoElement = document.getElementById('contact');
      if (contactoElement) {
        contactoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className={`cta-section ${variant === 'primary' ? 'cta-primary' : 'cta-secondary'}`}>
      <div className="section-glass-card">
        <div className="cta-content">
        <h2 className="cta-titulo">{titulo}</h2>
        <p className="cta-descripcion">{descripcion}</p>
        <button className="cta-boton" onClick={handleClick}>
          <span className="cta-boton-texto">{textoBoton}</span>
          <span className="cta-boton-icono">→</span>
        </button>
      </div>
      <div className="cta-decoration">
        <div className="cta-circle cta-circle-1"></div>
        <div className="cta-circle cta-circle-2"></div>
        <div className="cta-circle cta-circle-3"></div>
      </div>
      </div>
    </section>
  );
}

export default CTASection;
