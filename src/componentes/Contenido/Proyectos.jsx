import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./Proyectos.css";
import Demo1Img from "../../assets/demo1.png";
import Demo2Img from "../../assets/demo2.png";
import Demo3Img from "../../assets/demo3.png";
import Modal1Img from "../../assets/modal1.png";
import Modal2Img from "../../assets/modal2.png";
import Modal3Img from "../../assets/modal3.png";

const proyectos = [
  {
    idea: "Landing Educativa Interactiva",
    ideaDesc:
      "Sitio institucional para un instituto educativo, con diseño moderno, animaciones interactivas, y formulario de contacto.",
    ideaBtn: "Ver más",
    solucion: "Landing para Instituto",
    solucionDesc:
      "Una landing atractiva y funcional, con secciones animadas, presentación de carreras y formulario de inscripción.",
    modalContent:
      `Este proyecto consistió en el diseño y desarrollo de una landing page moderna para un instituto educativo.
Incluye animaciones suaves, presentación de las carreras, información institucional y formulario de contacto que envía datos directamente por correo. 
Fue optimizado tanto para dispositivos móviles como para computadoras, y busca captar alumnos de forma efectiva.`,
    bgColor: "#d1e7dd",
    imagen: Demo1Img,
    modalImagen: Modal1Img
  },
  {
    idea: "Sistema de Gestión Comercial",
    ideaDesc:
      "Aplicación web para administrar ventas, stock y clientes de un negocio.",
    ideaBtn: "Ver más",
    solucion: "Gestión de Stock y Ventas",
    solucionDesc:
      "Sistema completo para controlar inventario, ventas, usuarios y reportes de forma eficiente.",
    modalContent:
      `Desarrollamos un sistema integral de gestión para un comercio con control de productos, historial de ventas, stock en tiempo real y administración de clientes.
La plataforma incluye un login seguro, múltiples roles de usuario y generación de reportes automáticos para ayudar a la toma de decisiones.
Funciona desde el navegador y no requiere instalación.`,
    bgColor: "#fce4b9",
    imagen: Demo2Img,
    modalImagen: Modal2Img
  },
  {
    idea: "Plataforma de Inversiones",
    ideaDesc:
      "Landing funcional con panel para mostrar datos financieros, diseñada como MVP de una futura fintech.",
    ideaBtn: "Ver más",
    solucion: "Gestión Financiera Web",
    solucionDesc:
      "Landing + dashboard con métricas, rendimiento de inversiones y atractiva interfaz de usuario.",
    modalContent:
      `El proyecto se pensó como un producto mínimo viable (MVP) para una plataforma de inversiones.
Se diseñó una landing para presentar la idea de negocio y se integró un panel interactivo donde el usuario puede ver sus rendimientos, balances e historial de inversión.
Todo el diseño está orientado a transmitir confianza y modernidad.`,
    bgColor: "#d7c5f2",
    imagen: Demo3Img,
    modalImagen: Modal3Img
  }
];


function getDegradeColor(bgColor) {
  switch (bgColor) {
    case '#dbc9c9':
      return '#f3e6e6';
    case '#e0a6d8':
      return '#f7d6f2';
    case '#c9def9':
      return '#eaf3fb';
    default:
      return '#f5e7d2';
  }
}

const Proyectos = () => {
  const [actual, setActual] = useState(0);
  const [fade, setFade] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const cambiarCard = (dir) => {
    setFade(true);
    setTimeout(() => {
      setActual((prev) => {
        if (dir === "next") return (prev + 1) % proyectos.length;
        if (dir === "prev") return (prev - 1 + proyectos.length) % proyectos.length;
        return prev;
      });
      setFade(false);
    }, 250);
  };

  const proy = proyectos[actual];

  return (
    <>
      <section id="proyectos" className="proyectos-section">
        <h2 className="proyectos-titulo" style={{color: '#4A4A4A'}}>
          <span className="proyectos-titulo-celeste">Proyectos reales</span>
          <span style={{color: '#4A4A4A'}}>, </span>
          <span className="proyectos-titulo-rosa">soluciones a medida</span>
          <span style={{color: '#4A4A4A'}}>.</span>
        </h2>
        <div className="proyectos-descripcion">
          Cada historia es distinta, pero todas tienen algo en común: resultados que hablan por sí solos.
        </div>

        <div className="proyectos-carrusel">
          <div className={`proyecto-card${fade ? ' fade-out' : ' fade-in'}`}> 
            <div className="proyecto-card-col-izq">
              <div className={`proyecto-card-texto${fade ? ' slide-out-izq' : ' slide-in-izq'}`}> 
                <div className="proyecto-card-solucion">{proy.solucion}</div>
                <h3 className="proyecto-card-idea">{proy.idea}</h3>
                <div className="proyecto-card-soluciondesc">{proy.solucionDesc}</div>
                <p className="proyecto-card-ideadesc">{proy.ideaDesc}</p>
              </div>
              <button className="proyecto-card-btn" onClick={e => { e.stopPropagation(); setShowModal(true); }}>
                ¡Ver más! <span role="img" aria-label="estrella">⭐</span>
              </button>
            </div>
            <div className="proyecto-card-col-der">
              <div className="proyecto-card-imgwrap">
                <img src={proy.imagen} alt={`demo${actual + 1}`} className="proyecto-card-img" />
              </div>
              <div className="proyecto-card-carrusel-botones">
                <button className="carrusel-nav-izq" onClick={() => cambiarCard('prev')} aria-label="Anterior">
                  &#8592;
                </button>
                <button className="carrusel-nav-der" onClick={() => cambiarCard('next')} aria-label="Siguiente">
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && createPortal(
        <div className="proyecto-card-modal-bg" onClick={e => { e.stopPropagation(); setShowModal(false); }}>
          <div className="proyecto-card-modal" onClick={e => e.stopPropagation()}>
            <button className="proyecto-modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <div className="proyecto-modal-content">
              <div className="proyecto-modal-imagen">
                <img src={proy.modalImagen} alt={proy.idea} className="proyecto-modal-img" />
              </div>
              <div className="proyecto-modal-info">
                <h4 className="proyecto-modal-titulo">{proy.idea}</h4>
                <div className="proyecto-modal-solucion">{proy.solucion}</div>
                <p className="proyecto-modal-descripcion">
                  {proy.modalContent}
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Proyectos;