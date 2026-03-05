import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import './SolucionesSector.css';
import '../../section-glass-card.css';
import fondoArq from '../../assets/fondoServiciosEspecificosARQ.webp';

const sectores = [
  {
    id: 'arquitectura',
    label: 'Para estudios de arquitectura',
    descripcion: 'No todos los estudios necesitan lo mismo. Desarrollamos plataformas digitales que comunican proyectos arquitectónicos con jerarquía visual, narrativa proyectual y un sistema de contacto que pre-califica al cliente antes del primer llamado.',
    tag: 'Portfolio + Identidad digital',
    icon: Building2,
    fondo: fondoArq,
    link: '/arquitectura',
    textoBoton: 'Ver enfoque completo',
  },
  // Próximos sectores...
];

function SolucionesSector() {
  return (
    <section className="soluciones-sector-section section-spacing">
      <div className="section-glass-card soluciones-sector-card">
        <div className="soluciones-sector-header">
          <span className="soluciones-sector-tag">Enfoques por industria</span>
          <h2 className="soluciones-sector-title">
            Creamos <span className="soluciones-highlight-word">soluciones</span> para cada tipo de negocio
          </h2>

          <p className="soluciones-sector-intro">
            Estas son algunas de las industrias donde ya tenemos un camino trazado:
          </p>
        </div>

        <div className="soluciones-sector-grid">
          {sectores.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                key={sector.id}
                to={sector.link}
                className="sector-card"
                style={sector.fondo ? { backgroundImage: `url(${sector.fondo})` } : {}}
              >
                {sector.fondo && <div className="sector-card-overlay" />}
                <div className="sector-card-content">
                  <div className="sector-card-top">
                    <span className="sector-icon-wrap">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    {sector.tag && <span className="sector-tag">{sector.tag}</span>}
                  </div>
                  <div className="sector-info">
                    <h3 className="sector-label">{sector.label}</h3>
                    <p className="sector-desc">{sector.descripcion}</p>
                  </div>
                  <span className="sector-cta">
                    {sector.textoBoton} <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SolucionesSector;
