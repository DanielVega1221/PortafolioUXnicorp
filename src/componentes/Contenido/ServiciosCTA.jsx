import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./ServiciosCTA.css";
import "../../section-glass-card.css";

function ServiciosCTA() {
  return (
    <section id="servicios" className="servicios-cta-section section-spacing">
      <div className="section-glass-card servicios-cta-card">
        <div className="servicios-cta-content">
          <h2 className="servicios-cta-title">
            ¿Qué podemos hacer por tu negocio?
          </h2>
          <p className="servicios-cta-subtitle">
            Explorá nuestros servicios: auditorías, landing pages, e-commerce, sistemas de gestión y paquetes a medida
          </p>
          <Link to="/servicios" className="servicios-cta-button">
            Ver todos los servicios <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiciosCTA;
