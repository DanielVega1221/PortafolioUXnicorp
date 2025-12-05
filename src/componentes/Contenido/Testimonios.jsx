import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Testimonios.css';
import '../../section-glass-card.css';

const testimonios = [
  {
    nombre: "María González",
    cargo: "Directora de Marketing",
    empresa: "Instituto Educativo San Martín",
    testimonio: "UXnicorp transformó completamente nuestra presencia digital. El sitio web que desarrollaron no solo es hermoso, sino que aumentó nuestras consultas en un 40% en los primeros 3 meses.",
    testimonioCompleto: "UXnicorp transformó completamente nuestra presencia digital. El sitio web que desarrollaron no solo es hermoso, sino que aumentó nuestras consultas en un 40% en los primeros 3 meses. Su equipo es profesional, creativo y siempre disponible. Desde el primer día nos sentimos escuchados y entendieron perfectamente lo que necesitábamos. El proceso fue transparente, con entregas parciales que nos permitieron dar feedback constantemente. Además, nos capacitaron para que podamos gestionar el contenido por nuestra cuenta. Sin dudas, la mejor inversión que hicimos para nuestro instituto. Los recomendamos totalmente.",
    avatar: "👩‍💼",
    rating: 5,
    color: "#f37aa6"
  },
  {
    nombre: "Carlos Rodríguez",
    cargo: "CEO",
    empresa: "Comercio La Esquina",
    testimonio: "Necesitábamos un sistema de gestión que simplificara nuestras operaciones. El ERP que desarrollaron redujo nuestro tiempo administrativo en un 60%.",
    testimonioCompleto: "Necesitábamos un sistema de gestión que simplificara nuestras operaciones. El ERP que desarrollaron redujo nuestro tiempo administrativo en un 60%. La inversión se pagó sola en menos de 6 meses. Antes perdíamos horas diarias en tareas manuales que ahora están automatizadas. El sistema es intuitivo, potente y exactamente lo que necesitábamos. El equipo de UXnicorp nos acompañó en todo el proceso, desde el análisis inicial hasta la capacitación final. Altamente recomendados para cualquier negocio que quiera profesionalizar sus operaciones.",
    avatar: "👨‍💼",
    rating: 5,
    color: "#81ade7"
  },
  {
    nombre: "Laura Fernández",
    cargo: "Fundadora",
    empresa: "InverSmart",
    testimonio: "Desde el primer día nos sentimos acompañados. Transformaron nuestra idea de fintech en un MVP funcional que nos permitió captar inversores.",
    testimonioCompleto: "Desde el primer día nos sentimos acompañados. Transformaron nuestra idea de fintech en un MVP funcional que nos permitió captar inversores. Su experiencia técnica y visión estratégica fueron clave para nuestro éxito. No solo programaron, nos asesoraron en decisiones de negocio y nos ayudaron a priorizar funcionalidades. Gracias a su trabajo profesional, logramos lanzar en tiempo récord y captar la atención de fondos de inversión. El código es limpio, escalable y documentado. Seguimos trabajando con ellos en nuevas features. Son parte fundamental de nuestro equipo.",
    avatar: "👩‍💻",
    rating: 5,
    color: "#e0a6d8"
  },
  {
    nombre: "Diego Martínez",
    cargo: "Director",
    empresa: "Studio Creativo",
    testimonio: "Trabajar con UXnicorp fue una experiencia excelente. Entendieron nuestra visión y la llevaron más allá de lo que imaginábamos.",
    testimonioCompleto: "Trabajar con UXnicorp fue una experiencia excelente. Entendieron nuestra visión y la llevaron más allá de lo que imaginábamos. El sitio web es rápido, moderno y nuestros clientes no paran de felicitarnos por el diseño. La atención al detalle es impresionante. Cada animación, cada transición, cada elemento está pensado para brindar la mejor experiencia posible. Además, nos dieron consejos valiosos sobre SEO y estrategia digital que ya están dando resultados. El proyecto se completó en tiempo y forma. Volveremos a trabajar con ellos sin dudarlo.",
    avatar: "🎨",
    rating: 5,
    color: "#ffc107"
  }
];

function Testimonios() {
  const [actual, setActual] = useState(0);
  const [fade, setFade] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      cambiarTestimonio('next');
    }, 8000);
    return () => clearInterval(timer);
  }, [actual]);

  const cambiarTestimonio = (dir) => {
    setFade(true);
    setTimeout(() => {
      if (dir === 'next') {
        setActual((prev) => (prev + 1) % testimonios.length);
      } else {
        setActual((prev) => (prev - 1 + testimonios.length) % testimonios.length);
      }
      setFade(false);
    }, 300);
  };

  const test = testimonios[actual];

  return (
    <>
      <section className="testimonios-section">
        <div className="section-glass-card">
          <h2 className="testimonios-titulo">
            Lo que dicen <span className="testimonios-highlight">nuestros clientes</span>
          </h2>
        <p className="testimonios-subtitulo">
          La satisfacción de quienes confiaron en nosotros es nuestra mejor carta de presentación
        </p>

        <div className="testimonios-carrusel">
          <button 
            className="testimonio-nav testimonio-nav-izq" 
            onClick={() => cambiarTestimonio('prev')}
            aria-label="Testimonio anterior"
          >
            ←
          </button>

          <div className={`testimonio-card ${fade ? 'fade-out' : 'fade-in'}`}>
            <div className="testimonio-comillas">"</div>
            <div className="testimonio-contenido">
              <p className="testimonio-texto">{test.testimonio}</p>
              <div className="testimonio-rating">
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i} className="estrella">⭐</span>
                ))}
              </div>
              <div className="testimonio-footer">
                <div className="testimonio-autor">
                  <div className="testimonio-avatar" style={{ background: `linear-gradient(135deg, ${test.color}, ${test.color}dd)` }}>
                    {test.avatar}
                  </div>
                  <div className="testimonio-info">
                    <div className="testimonio-nombre">{test.nombre}</div>
                    <div className="testimonio-cargo">{test.cargo} · {test.empresa}</div>
                  </div>
                </div>
                <button className="testimonio-leer-mas" onClick={() => setShowModal(true)}>
                  Leer más →
                </button>
              </div>
            </div>
          </div>

          <button 
            className="testimonio-nav testimonio-nav-der" 
            onClick={() => cambiarTestimonio('next')}
            aria-label="Siguiente testimonio"
          >
            →
          </button>
        </div>

        <div className="testimonios-indicadores">
          {testimonios.map((_, idx) => (
            <button
              key={idx}
              className={`indicador ${idx === actual ? 'activo' : ''}`}
              onClick={() => {
                setFade(true);
                setTimeout(() => {
                  setActual(idx);
                  setFade(false);
                }, 300);
              }}
              aria-label={`Ver testimonio ${idx + 1}`}
            />
          ))}
        </div>
        </div>
      </section>

      {showModal && createPortal(
        <div className="testimonio-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="testimonio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="testimonio-modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <div className="testimonio-modal-header">
              <div className="testimonio-modal-avatar" style={{ background: `linear-gradient(135deg, ${test.color}, ${test.color}dd)` }}>
                {test.avatar}
              </div>
              <div className="testimonio-modal-info">
                <h3 className="testimonio-modal-nombre">{test.nombre}</h3>
                <p className="testimonio-modal-cargo">{test.cargo} · {test.empresa}</p>
                <div className="testimonio-modal-rating">
                  {[...Array(test.rating)].map((_, i) => (
                    <span key={i} className="estrella-grande">⭐</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="testimonio-modal-body">
              <div className="testimonio-modal-comillas">"</div>
              <p className="testimonio-modal-texto">{test.testimonioCompleto}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Testimonios;
