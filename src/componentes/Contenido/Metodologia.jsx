/**
 * COMPONENTE: Sección de metodología con pasos expandibles
 * 
 * Usado en:
 * - ComoTrabajamos.jsx (página completa)
 * 
 * Funcionalidad:
 * - 10 pasos del proceso de desarrollo
 * - Acordeones controlados (solo uno abierto a la vez)
 * - Cada paso muestra: número, título, descripción, lista de detalles
 * - Iconos custom de SVGIcons.jsx
 * 
 * Data:
 * - Array 'pasos' con toda la info de cada etapa
 * - Cada paso tiene: numero, titulo, icono, descripcion, detalles[], color
 */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Metodologia.css";
import "../../section-glass-card.css";
import { 
  SearchIcon, 
  NotesIcon, 
  PencilIcon, 
  TestTubeIcon, 
  CodeBracketIcon, 
  CheckCircleIcon, 
  MegaphoneIcon, 
  CloudIcon, 
  BarChartIcon, 
  ToolIcon 
} from "../SVGIcons";

function Metodologia() {
  const [selectedStep, setSelectedStep] = useState(null);
  const { t } = useTranslation();

  const staticData = [
    { numero: "01", icono: <SearchIcon size={32} />, color: "#f37aa6" },
    { numero: "02", icono: <NotesIcon size={32} />, color: "#81ade7" },
    { numero: "03", icono: <PencilIcon size={32} />, color: "#e0a6d8" },
    { numero: "04", icono: <TestTubeIcon size={32} />, color: "#f7d6f2" },
    { numero: "05", icono: <CodeBracketIcon size={32} />, color: "#c9def9" },
    { numero: "06", icono: <CheckCircleIcon size={32} />, color: "#dbc9c9" },
    { numero: "07", icono: <MegaphoneIcon size={32} />, color: "#fee0d6" },
    { numero: "08", icono: <CloudIcon size={32} />, color: "#e1d1ec" },
    { numero: "09", icono: <BarChartIcon size={32} />, color: "#f37aa6" },
    { numero: "10", icono: <ToolIcon size={32} />, color: "#81ade7" }
  ];

  const pasosT = t('metodologia.pasos', { returnObjects: true });
  const pasos = Array.isArray(pasosT)
    ? staticData.map((s, i) => ({ ...s, ...(pasosT[i] || {}) }))
    : staticData;

  return (
    <section id="metodologia" className="metodologia-section-modern">
      <div className="section-glass-card">
        <h2 className="metodologia-titulo-modern">
          {t('metodologia.titulo')} <span className="metodologia-highlight">{t('metodologia.tituloDestacado')}</span> {t('metodologia.tituloFin')}
        </h2>
        <p className="metodologia-subtitulo-modern">
          {t('metodologia.subtitulo')}
        </p>

      <div className="metodologia-timeline">
        {pasos.map((paso, idx) => (
          <div 
            key={idx} 
            className={`metodologia-step ${selectedStep === idx ? 'active' : ''}`}
            onClick={() => setSelectedStep(selectedStep === idx ? null : idx)}
          >
            <div className="metodologia-step-header">
              <div className="metodologia-step-numero" style={{ background: paso.color }}>
                {paso.numero}
              </div>
              <div className="metodologia-step-icon" style={{ color: paso.color }}>
                {paso.icono}
              </div>
              <div className="metodologia-step-info">
                <h3 className="metodologia-step-titulo">{paso.titulo}</h3>
                <p className="metodologia-step-descripcion">{paso.descripcion}</p>
              </div>
              <div className="metodologia-step-toggle">
                {selectedStep === idx ? '−' : '+'}
              </div>
            </div>
            
            <div className={`metodologia-step-detalles ${selectedStep === idx ? 'visible' : ''}`}>
              <ul className="metodologia-step-lista">
                {paso.detalles.map((detalle, dIdx) => (
                  <li key={dIdx}>
                    <CheckCircleIcon size={20} style={{ color: paso.color }} />
                    <span>{detalle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="metodologia-cta-card">
        <h3>{t('metodologia.ctaH3')}</h3>
        <p>{t('metodologia.ctaP')}</p>
      </div>
      </div>
    </section>
  );
}

export default Metodologia;
