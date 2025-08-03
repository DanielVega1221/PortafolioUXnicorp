
import React from "react";
import AcordeonAnimado from "./AcordeonAnimado";
import "./SobreNosotros.css";
import card1Image from "../../assets/card1.png";

function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="sobre-nosotros-section section-spacing">
      <div className="sobre-nosotros-main-layout">
        <div className="sobre-nosotros-col sobre-nosotros-col-izq">
          <h2 className="porque-elegirnos-titulo">¿Por qué <span className="highlight-word">elegirnos</span>?</h2>
          <p className="porque-elegirnos-descripcion">
            Entendemos lo difícil que es emprender sin apoyo. Estamos acá para simplificarte el camino, acompañarte paso a paso y potenciar el crecimiento de tu negocio desde adentro.
          </p>
          <div className="porque-elegirnos-menus">
            <AcordeonAnimado titulo="Compromiso y proactividad">
              <p className="acordeon-descripcion">Brindamos constantes análisis y asesoramiento para que tengas toda la información que pueda ayudarte, haciendo tu proyecto crezca.</p>
            </AcordeonAnimado>
            <AcordeonAnimado titulo="Solución personalizada a medida">
              <p className="acordeon-descripcion">Te otorgamos un diseño profesional, adaptado a lo que tu proyecto requiere y necesita, garantizándote seguridad y mantenimiento constante del mismo.</p>
            </AcordeonAnimado>
            <AcordeonAnimado titulo="Precios competitivos y accesibles">
              <p className="acordeon-descripcion">Ofrecemos servicios de alto valor a precios justos del mercado, con planes flexibles de pago para que puedas avanzar sin comprometer tu presupuesto.</p>
            </AcordeonAnimado>
          </div>
        </div>
        <div className="sobre-nosotros-col sobre-nosotros-col-der">
          <div className="sobre-nosotros-img-card">
            <img
              src={card1Image}
              alt="Imagen representativa de nuestros servicios"
            />
          </div>
        </div>
      </div>
      <div className="metricas-grid">
        <div className="metrica-card">
          <span className="metrica-numero rosa">+10</span>
          <div className="metrica-titulo">Proyectos entregados y funcionando</div>
        </div>
        <div className="metrica-card">
          <span className="metrica-numero rosa">100%</span>
          <div className="metrica-titulo">De satisfacción con nuestros servicios</div>
        </div>
        <div className="metrica-card">
          <span className="metrica-numero rosa">&lt;24h</span>
          <div className="metrica-titulo">En responder a tus dudas con la mejor atención</div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;

