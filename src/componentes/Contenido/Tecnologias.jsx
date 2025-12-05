import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Tecnologias.css';
import '../../section-glass-card.css';
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt, 
  FaFigma, 
  FaAws,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiGraphql 
} from 'react-icons/si';

const tecnologias = [
  { 
    nombre: 'React', 
    icono: <FaReact />, 
    descripcion: 'Interfaces modernas y dinámicas con componentes reutilizables',
    detalles: 'Biblioteca JavaScript líder para crear interfaces de usuario interactivas. Permite desarrollo component-based, virtual DOM para performance óptimo y un ecosistema robusto de herramientas.',
    color: '#61DAFB' 
  },
  { 
    nombre: 'Node.js', 
    icono: <FaNodeJs />, 
    descripcion: 'Backend escalable y robusto con JavaScript',
    detalles: 'Runtime de JavaScript del lado del servidor. Perfecto para aplicaciones en tiempo real, APIs RESTful y microservicios. Event-driven y non-blocking I/O para máxima eficiencia.',
    color: '#339933' 
  },
  { 
    nombre: 'TypeScript', 
    icono: <SiTypescript />, 
    descripcion: 'Código seguro y mantenible con tipado estático',
    detalles: 'Superset de JavaScript que agrega tipado estático. Reduce bugs en tiempo de desarrollo, mejora la refactorización y facilita el trabajo en equipo con autocompletado inteligente.',
    color: '#3178C6' 
  },
  { 
    nombre: 'MongoDB', 
    icono: <SiMongodb />, 
    descripcion: 'Bases de datos NoSQL flexibles y escalables',
    detalles: 'Base de datos NoSQL orientada a documentos. Ideal para aplicaciones con datos no estructurados, schemas flexibles y necesidad de escalabilidad horizontal.',
    color: '#47A248' 
  },
  { 
    nombre: 'PostgreSQL', 
    icono: <SiPostgresql />, 
    descripcion: 'Datos relacionales potentes y confiables',
    detalles: 'Sistema de gestión de bases de datos relacional avanzado. ACID compliant, soporte para JSON, excelente para datos complejos y transacciones críticas.',
    color: '#4169E1' 
  },
  { 
    nombre: 'AWS', 
    icono: <FaAws />, 
    descripcion: 'Infraestructura en la nube líder mundial',
    detalles: 'Plataforma cloud computing más completa. Ofrece compute, storage, databases, analytics, ML y más de 200 servicios para aplicaciones enterprise-grade.',
    color: '#FF9900' 
  },
  { 
    nombre: 'Docker', 
    icono: <FaDocker />, 
    descripcion: 'Contenedores para despliegues consistentes',
    detalles: 'Plataforma de contenedores que garantiza que las aplicaciones funcionen igual en cualquier ambiente. Facilita CI/CD, microservicios y escalabilidad.',
    color: '#2496ED' 
  },
  { 
    nombre: 'Git', 
    icono: <FaGitAlt />, 
    descripcion: 'Control de versiones profesional distribuido',
    detalles: 'Sistema de control de versiones distribuido. Permite trabajo colaborativo, branching strategies, code review y historial completo de cambios.',
    color: '#F05032' 
  },
  { 
    nombre: 'Figma', 
    icono: <FaFigma />, 
    descripcion: 'Diseño UI/UX colaborativo en la nube',
    detalles: 'Herramienta de diseño colaborativa basada en navegador. Prototipado interactivo, design systems, componentes reutilizables y trabajo en tiempo real.',
    color: '#F24E1E' 
  },
  { 
    nombre: 'Next.js', 
    icono: <SiNextdotjs />, 
    descripcion: 'SSR y performance optimizada con React',
    detalles: 'Framework de React con SSR, SSG, ISR y routing automático. SEO-friendly, image optimization, API routes y rendimiento excepcional out-of-the-box.',
    color: '#000000' 
  },
  { 
    nombre: 'Tailwind', 
    icono: <SiTailwindcss />, 
    descripcion: 'Estilos utility-first ultra rápidos',
    detalles: 'Framework CSS utility-first. Desarrollo rápido con clases predefinidas, customización total, purge automático y diseño responsive sin escribir CSS.',
    color: '#06B6D4' 
  },
  { 
    nombre: 'GraphQL', 
    icono: <SiGraphql />, 
    descripcion: 'APIs modernas y eficientes con queries flexibles',
    detalles: 'Lenguaje de consulta para APIs. Permite solicitar exactamente los datos necesarios, reduce overfetching, tipado fuerte y documentación auto-generada.',
    color: '#E10098' 
  }
];

function Tecnologias() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <>
      <section id="tecnologias" className="tecnologias-section">
        <div className="section-glass-card">
          <h2 className="tecnologias-titulo">
          <span className="tecnologias-highlight">Tecnologías</span> que dominamos
        </h2>
        <p className="tecnologias-subtitulo">
          Trabajamos con el stack más moderno y demandado de la industria para crear soluciones profesionales y escalables
        </p>

        <div className="tecnologias-grid">
          {tecnologias.map((tech, idx) => (
            <div
              key={idx}
              className="tech-card"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setSelectedTech(tech)}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div 
                className="tech-icono"
                style={{
                  transform: hoveredIdx === idx ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
                  color: tech.color
                }}
              >
                {tech.icono}
              </div>
              <div className="tech-nombre" style={{ color: tech.color }}>{tech.nombre}</div>
              <div className={`tech-descripcion ${hoveredIdx === idx ? 'visible' : ''}`}>
                {tech.descripcion}
              </div>
              <button className="tech-ver-mas">Ver más →</button>
            </div>
          ))}
        </div>

        <div className="tecnologias-cta">
          <p className="tecnologias-cta-texto">
            ¿No encuentras la tecnología que buscas? <strong>Adaptamos nuestro stack a tus necesidades específicas.</strong>
          </p>
        </div>
        </div>
      </section>

      {selectedTech && createPortal(
        <div className="tech-modal-overlay" onClick={() => setSelectedTech(null)}>
          <div className="tech-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tech-modal-close" onClick={() => setSelectedTech(null)}>
              ×
            </button>
            <div className="tech-modal-header" style={{ background: `linear-gradient(135deg, ${selectedTech.color}20, ${selectedTech.color}05)` }}>
              <div className="tech-modal-icon" style={{ color: selectedTech.color }}>
                {selectedTech.icono}
              </div>
              <h3 className="tech-modal-title" style={{ color: selectedTech.color }}>{selectedTech.nombre}</h3>
            </div>
            <div className="tech-modal-body">
              <p className="tech-modal-descripcion">{selectedTech.descripcion}</p>
              <div className="tech-modal-detalles">
                <h4>¿Por qué usamos {selectedTech.nombre}?</h4>
                <p>{selectedTech.detalles}</p>
              </div>
              <div className="tech-modal-badge" style={{ background: `${selectedTech.color}15`, color: selectedTech.color }}>
                ✓ Tecnología validada en producción
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Tecnologias;
