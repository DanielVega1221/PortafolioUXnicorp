/**
 * COMPONENTE: Preview de Sobre Nosotros en la home
 * 
 * IMPORTANTE: Este es el PREVIEW en la home, NO confundir con:
 * - src/pages/SobreNosotros.jsx (página completa con equipo)
 * 
 * Usado en:
 * - App.jsx (sección #sobre-nosotros de la home)
 * 
 * Contenido:
 * - "Por qué elegirnos" con 4 acordeones:
 *   1. Enfoque en resultados medibles
 *   2. Acompañamiento real
 *   3. Flexibilidad y adaptabilidad
 *   4. Innovación constante
 * - Imagen decorativa (card1.png)
 * - Acordeones con iconos custom de SVGIcons
 */

import React from "react";
import { useTranslation } from "react-i18next";
import AcordeonAnimado from "./AcordeonAnimado";
import "./SobreNosotros.css";
import "../../section-glass-card.css";
import card1Image from "../../assets/card1.png";
import OptimizedImage from "../OptimizedImage";
import { TargetIcon, BoltIcon, HandshakeIcon, DiamondIcon } from "../SVGIcons";

function SobreNosotros() {
  const { t } = useTranslation();
  return (
    <section id="sobre-nosotros" className="sobre-nosotros-section section-spacing" aria-labelledby="about-title">
      <div className="section-glass-card">
      <div className="sobre-nosotros-main-layout">
        <div className="sobre-nosotros-col sobre-nosotros-col-izq">
          <h2 id="about-title" className="porque-elegirnos-titulo">
            {t('sobreNosotros.titulo')} <span className="highlight-word">{t('sobreNosotros.tituloDestacado')}</span>{t('sobreNosotros.tituloFin')}
          </h2>
          <p className="porque-elegirnos-descripcion">
            {t('sobreNosotros.descripcion')}
          </p>
          <div className="porque-elegirnos-menus">
            <AcordeonAnimado titulo={
              <span className="acordeon-titulo-con-icono">
                <TargetIcon size={20} className="acordeon-icono" />
                {t('sobreNosotros.acordeon1Titulo')}
              </span>
            }>
              <p className="acordeon-descripcion">{t('sobreNosotros.acordeon1Desc')}</p>
            </AcordeonAnimado>
            <AcordeonAnimado titulo={
              <span className="acordeon-titulo-con-icono">
                <BoltIcon size={20} className="acordeon-icono" />
                {t('sobreNosotros.acordeon2Titulo')}
              </span>
            }>
              <p className="acordeon-descripcion">{t('sobreNosotros.acordeon2Desc')}</p>
            </AcordeonAnimado>
            <AcordeonAnimado titulo={
              <span className="acordeon-titulo-con-icono">
                <HandshakeIcon size={20} className="acordeon-icono" />
                {t('sobreNosotros.acordeon3Titulo')}
              </span>
            }>
              <p className="acordeon-descripcion">{t('sobreNosotros.acordeon3Desc')}</p>
            </AcordeonAnimado>
            <AcordeonAnimado titulo={
              <span className="acordeon-titulo-con-icono">
                <DiamondIcon size={20} className="acordeon-icono" />
                {t('sobreNosotros.acordeon4Titulo')}
              </span>
            }>
              <p className="acordeon-descripcion">{t('sobreNosotros.acordeon4Desc')}</p>
            </AcordeonAnimado>
          </div>
        </div>
        <div className="sobre-nosotros-col sobre-nosotros-col-der">
          <div className="sobre-nosotros-img-card">
            <OptimizedImage
              src={card1Image}
              alt={t('sobreNosotros.altImg')}
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
      <div className="metricas-grid" role="region" aria-label="Métricas de desempeño">
        <div className="metrica-card">
          <span className="metrica-numero rosa">{t('sobreNosotros.metrica1Numero')}</span>
          <div className="metrica-titulo">{t('sobreNosotros.metrica1Titulo')}</div>
        </div>
        <div className="metrica-card">
          <span className="metrica-numero rosa">{t('sobreNosotros.metrica2Numero')}</span>
          <div className="metrica-titulo">{t('sobreNosotros.metrica2Titulo')}</div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default SobreNosotros;

