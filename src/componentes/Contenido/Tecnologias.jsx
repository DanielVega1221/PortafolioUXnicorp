import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
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

function Tecnologias() {
  const { t } = useTranslation();
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);

  const tecnologias = [
    { key: 'react', nombre: 'React', icono: <FaReact />, color: '#61DAFB' },
    { key: 'nodejs', nombre: 'Node.js', icono: <FaNodeJs />, color: '#339933' },
    { key: 'typescript', nombre: 'TypeScript', icono: <SiTypescript />, color: '#3178C6' },
    { key: 'mongodb', nombre: 'MongoDB', icono: <SiMongodb />, color: '#47A248' },
    { key: 'postgresql', nombre: 'PostgreSQL', icono: <SiPostgresql />, color: '#4169E1' },
    { key: 'aws', nombre: 'AWS', icono: <FaAws />, color: '#FF9900' },
    { key: 'docker', nombre: 'Docker', icono: <FaDocker />, color: '#2496ED' },
    { key: 'git', nombre: 'Git', icono: <FaGitAlt />, color: '#F05032' },
    { key: 'figma', nombre: 'Figma', icono: <FaFigma />, color: '#F24E1E' },
    { key: 'nextjs', nombre: 'Next.js', icono: <SiNextdotjs />, color: '#000000' },
    { key: 'tailwind', nombre: 'Tailwind', icono: <SiTailwindcss />, color: '#06B6D4' },
    { key: 'graphql', nombre: 'GraphQL', icono: <SiGraphql />, color: '#E10098' },
  ];

  return (
    <>
      <section id="tecnologias" className="tecnologias-section">
        <div className="section-glass-card">
          <h2 className="tecnologias-titulo">
          <span className="tecnologias-highlight">{t('tecnologias.tituloDestacado')}</span> {t('tecnologias.titulo')}
        </h2>
        <p className="tecnologias-subtitulo">
          {t('tecnologias.subtitulo')}
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
                {t(`tecnologias.${tech.key}.descripcion`)}
              </div>
              <button className="tech-ver-mas">{t('tecnologias.verMas')}</button>
            </div>
          ))}
        </div>

        <div className="tecnologias-cta">
          <p className="tecnologias-cta-texto" dangerouslySetInnerHTML={{ __html: t('tecnologias.ctaTexto') }} />
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
              <p className="tech-modal-descripcion">{t(`tecnologias.${selectedTech.key}.descripcion`)}</p>
              <div className="tech-modal-detalles">
                <h4>{t('tecnologias.porQueUsamos', { nombre: selectedTech.nombre })}</h4>
                <p>{t(`tecnologias.${selectedTech.key}.detalles`)}</p>
              </div>
              <div className="tech-modal-badge" style={{ background: `${selectedTech.color}15`, color: selectedTech.color }}>
                {t('tecnologias.validada')}
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
