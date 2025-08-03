
import Inicio from "./componentes/Contenido/Inicio";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Contenido/Footer";
import SobreNosotros from "./componentes/Contenido/SobreNosotros";
import Proyectos from "./componentes/Contenido/Proyectos";
import Metodologia from "./componentes/Contenido/Metodologia";
import Servicios from "./componentes/Contenido/Servicios";

import React, { useState, useEffect } from "react";



import "./App.css";
import "./section-glass-card.css";

const sections = [
  { id: "home", title: "Inicio" },
  { id: "about", title: "Sobre Nosotros" },
  { id: "projects", title: "Proyectos" },
  { id: "methodology", title: "Metodología" },
  { id: "services", title: "Servicios" }
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Detectar scroll y actualizar sección activa
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 2;
          // Detectar sección activa
          sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + offsetHeight
              ) {
                setActiveSection(section.id);
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Ejecutar al cargar
    // Limpieza del event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar si el usuario está en el footer (al fondo de la página)
  const [isAtFooter, setIsAtFooter] = useState(false);
  useEffect(() => {
    const handleScrollFooter = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        // Oculta el Navbar cuando la mitad superior del footer ya es visible
        setIsAtFooter(rect.top < window.innerHeight - rect.height / 2);
      } else {
        setIsAtFooter(false);
      }
    };
    window.addEventListener("scroll", handleScrollFooter, { passive: true });
    handleScrollFooter();
    return () => window.removeEventListener("scroll", handleScrollFooter);
  }, []);

  return (
    <>
      <div id="home">
        <Inicio />
      </div>
      {/* Navbar siempre montado, pero con animación de fade-out si corresponde */}
      <Navbar activeSection={activeSection} hidden={activeSection === "home" || isAtFooter} />
      <div className="main-cards-wrapper">
        <div className="section-glass-card" id="about">
          <SobreNosotros />
        </div>
        <div className="section-glass-card" id="projects">
          <Proyectos />
        </div>
        <div className="section-glass-card" id="methodology">
          <Metodologia />
        </div>
        <div className="section-glass-card" id="services">
          <Servicios />
        </div>
      </div>

      
      <div style={{ height: '100px' }} />
      <Footer/>
      
    </>
  );
}
export default App;
