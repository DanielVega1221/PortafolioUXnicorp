import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Building2, Utensils } from 'lucide-react';
import LangLink from '../LangLink';
import './SolucionesSector.css';
import '../../section-glass-card.css';
import fondoArq from '../../assets/fondoServiciosEspecificosARQ.webp';
import fondoGastro from '../../assets/Gastronomia/fondocard.webp';

function SolucionesSector() {
  const { t } = useTranslation();

  const sectores = [
    {
      id: 'arquitectura',
      label: t('solucionesSector.arq.label'),
      descripcion: t('solucionesSector.arq.descripcion'),
      tag: t('solucionesSector.arq.tag'),
      icon: Building2,
      fondo: fondoArq,
      link: '/arquitectura',
      textoBoton: t('solucionesSector.arq.boton'),
    },
    {
      id: 'gastronomia',
      label: t('solucionesSector.gastro.label'),
      descripcion: t('solucionesSector.gastro.descripcion'),
      tag: t('solucionesSector.gastro.tag'),
      icon: Utensils,
      fondo: fondoGastro,
      link: '/gastronomia',
      textoBoton: t('solucionesSector.gastro.boton'),
    },
  ];

  return (
    <section className="soluciones-sector-section section-spacing">
      <div className="section-glass-card soluciones-sector-card">
        <div className="soluciones-sector-header">
          <span className="soluciones-sector-tag">{t('solucionesSector.tag')}</span>
          <h2 className="soluciones-sector-title">
            {t('solucionesSector.titulo1')} <span className="soluciones-highlight-word">{t('solucionesSector.tituloDestacado')}</span> {t('solucionesSector.titulo2')}
          </h2>
          <p className="soluciones-sector-intro">{t('solucionesSector.intro')}</p>
        </div>

        <div className="soluciones-sector-grid">
          {sectores.map((sector) => {
            const Icon = sector.icon;
            return (
              <LangLink
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
              </LangLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SolucionesSector;
