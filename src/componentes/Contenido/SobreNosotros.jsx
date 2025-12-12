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
import AcordeonAnimado from "./AcordeonAnimado";
import "./SobreNosotros.css";
import "../../section-glass-card.css";
import card1Image from "../../assets/card1.png";
import OptimizedImage from "../OptimizedImage";
import { TargetIcon, BoltIcon, HandshakeIcon, DiamondIcon } from "../SVGIcons";

function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="sobre-nosotros-section section-spacing" aria-labelledby="about-title">
      <div className="section-glass-card">
      <div className="sobre-nosotros-main-layout">
        <div className="sobre-nosotros-col sobre-nosotros-col-izq">
          <h2 id="about-title" className="porque-elegirnos-titulo">
            ¿Por qué <span className="highlight-word">elegirnos</span>?
          </h2>
          <p className="porque-elegirnos-descripcion">
            Más que código y diseño, ofrecemos soluciones completas. Entendemos los desafíos de emprender en el mundo digital y te acompañamos con tecnología, estrategia y compromiso real desde el primer contacto.
          </p>
          <div className="porque-elegirnos-menus">
            <AcordeonAnimado titulo={
              <span className="acordeon-titulo-con-icono">
                <TargetIcon size={20} className="acordeon-icono" />
                Enfoque en resultados medibles
              </span>
            }>
              <p className="acordeon-descripcion">
                No solo entregamos un sitio web bonito. Desarrollamos soluciones pensadas para convertir visitantes en clientes, con análisis de métricas, optimización constante y feedback continuo para maximizar tu ROI.
              </p>
            </AcordeonAnimado>
            <AcordeonAnimado titulo={
              <span className="acordeon-titulo-con-icono">
                <BoltIcon size={20} className="acordeon-icono" />
                Tecnología de vanguardia y escalable
              </span>
            }>
              <p className="acordeon-descripcion">
                Utilizamos las últimas tecnologías y frameworks modernos (React, Node.js, bases de datos optimizadas) para crear plataformas rápidas, seguras y preparadas para crecer junto a tu negocio. Tu proyecto está construido pensando en el futuro.
              </p>
            </AcordeonAnimado>
            <AcordeonAnimado titulo={
              <span className="acordeon-titulo-con-icono">
                <HandshakeIcon size={20} className="acordeon-icono" />
                Acompañamiento integral y transparente
              </span>
            }>
              <p className="acordeon-descripcion">
                Te explicamos cada paso del proceso en lenguaje claro. Nuestro equipo está disponible para asesorarte, ajustar estrategias y garantizar que tu inversión genere el impacto que buscas. Trabajamos como tu aliado, no como un proveedor más.
              </p>
            </AcordeonAnimado>
            <AcordeonAnimado titulo={
              <span className="acordeon-titulo-con-icono">
                <DiamondIcon size={20} className="acordeon-icono" />
                Precios justos con planes flexibles
              </span>
            }>
              <p className="acordeon-descripcion">
                Ofrecemos desarrollo profesional a precios competitivos, con opciones de pago adaptadas a tu presupuesto. Calidad premium sin comprometer tus finanzas, porque creemos que toda empresa merece tecnología de primer nivel.
              </p>
            </AcordeonAnimado>
          </div>
        </div>
        <div className="sobre-nosotros-col sobre-nosotros-col-der">
          <div className="sobre-nosotros-img-card">
            <OptimizedImage
              src={card1Image}
              alt="Imagen representativa de nuestros servicios"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
      <div className="metricas-grid" role="region" aria-label="Métricas de desempeño">
        <div className="metrica-card">
          <span className="metrica-numero rosa">+10</span>
          <div className="metrica-titulo">Proyectos exitosos lanzados y funcionando</div>
        </div>
        <div className="metrica-card">
          <span className="metrica-numero rosa">100%</span>
          <div className="metrica-titulo">De clientes satisfechos recomiendan nuestros servicios</div>
        </div>
        <div className="metrica-card">
          <span className="metrica-numero rosa">&lt;24h</span>
          <div className="metrica-titulo">Tiempo promedio de respuesta a consultas y soporte</div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default SobreNosotros;

