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

const pasos = [
  {
    numero: "01",
    titulo: "Discovery y Análisis",
    icono: <SearchIcon size={32} />,
    descripcion: "Evaluamos alcance, definimos stack tecnológico y establecemos KPIs de éxito",
    detalles: [
      "Análisis de objetivos de negocio",
      "Evaluación de viabilidad técnica",
      "Definición de tecnologías óptimas",
      "Identificación de métricas clave"
    ],
    color: "#f37aa6"
  },
  {
    numero: "02",
    titulo: "Planificación Ágil",
    icono: <NotesIcon size={32} />,
    descripcion: "Sprints de trabajo con metodología SCRUM y entregas incrementales",
    detalles: [
      "División en módulos priorizados",
      "Backlog con historias de usuario",
      "Estimación de tiempos realistas",
      "Arquitectura escalable"
    ],
    color: "#81ade7"
  },
  {
    numero: "03",
    titulo: "Diseño UX/UI",
    icono: <PencilIcon size={32} />,
    descripcion: "Wireframes, mockups y prototipos clickeables en Figma",
    detalles: [
      "Mockups interactivos",
      "Design System consistente",
      "Prototipo validado",
      "Diseño responsive"
    ],
    color: "#e0a6d8"
  },
  {
    numero: "04",
    titulo: "Validación y POC",
    icono: <TestTubeIcon size={32} />,
    descripcion: "Testing de conceptos clave y validación de integraciones",
    detalles: [
      "Proof of Concept",
      "Testing de usabilidad",
      "Validación de APIs",
      "Ajustes por feedback"
    ],
    color: "#f7d6f2"
  },
  {
    numero: "05",
    titulo: "Desarrollo",
    icono: <CodeBracketIcon size={32} />,
    descripcion: "Código limpio, modular y documentado con Git",
    detalles: [
      "Código escalable",
      "Versionado con Git",
      "Code reviews",
      "Optimización SEO"
    ],
    color: "#c9def9"
  },
  {
    numero: "06",
    titulo: "Testing QA",
    icono: <CheckCircleIcon size={32} />,
    descripcion: "Testing unitario, integración y performance",
    detalles: [
      "Testing unitario",
      "Testing de integración",
      "Testing de carga",
      "Testing de seguridad"
    ],
    color: "#dbc9c9"
  },
  {
    numero: "07",
    titulo: "SEO & Contenido",
    icono: <MegaphoneIcon size={32} />,
    descripcion: "Optimización On-Page y estrategia de contenido",
    detalles: [
      "Estrategia de keywords",
      "Meta tags optimizados",
      "Copywriting persuasivo",
      "Analytics integrados"
    ],
    color: "#fee0d6"
  },
  {
    numero: "08",
    titulo: "Deploy",
    icono: <CloudIcon size={32} />,
    descripcion: "Infraestructura cloud con SSL y CDN global",
    detalles: [
      "Hosting optimizado",
      "Certificados SSL",
      "CDN global",
      "Backups automáticos"
    ],
    color: "#e1d1ec"
  },
  {
    numero: "09",
    titulo: "Monitoreo",
    icono: <BarChartIcon size={32} />,
    descripcion: "Analytics avanzados y optimización continua",
    detalles: [
      "Google Analytics 4",
      "A/B testing",
      "Reportes mensuales",
      "Ajustes basados en datos"
    ],
    color: "#f37aa6"
  },
  {
    numero: "10",
    titulo: "Soporte",
    icono: <ToolIcon size={32} />,
    descripcion: "Mantenimiento, actualizaciones y soporte técnico",
    detalles: [
      "Actualizaciones de seguridad",
      "Nuevas funcionalidades",
      "Soporte prioritario",
      "Capacitación continua"
    ],
    color: "#81ade7"
  }
];

function Metodologia() {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <section id="metodologia" className="metodologia-section-modern">
      <div className="section-glass-card">
        <h2 className="metodologia-titulo-modern">
        Nuestra <span className="metodologia-highlight">Metodología</span> de Trabajo
      </h2>
      <p className="metodologia-subtitulo-modern">
        Proceso estructurado y transparente basado en metodologías ágiles para garantizar resultados consistentes
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
        <h3>Trabajamos con sprints de 1-2 semanas</h3>
        <p>Entregas incrementales y feedback continuo para que veas el progreso real desde el primer día</p>
      </div>
      </div>
    </section>
  );
}

export default Metodologia;
