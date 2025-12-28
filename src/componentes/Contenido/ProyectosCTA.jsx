import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./ProyectosCTA.css";
import "../../section-glass-card.css";

function ProyectosCTA() {
  return (
    <section id="proyectos" className="proyectos-cta-section section-spacing">
      <div className="section-glass-card proyectos-cta-card">
        <div className="proyectos-cta-content">
          <h2 className="proyectos-cta-title">
            ¿Querés ver nuestro trabajo en acción?
          </h2>
          <p className="proyectos-cta-subtitle">
            Descubrí proyectos reales con resultados medibles: landing pages, sistemas de gestión y plataformas completas
          </p>
          <Link to="/casos-reales" className="proyectos-cta-button">
            Ver casos de éxito <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProyectosCTA;
