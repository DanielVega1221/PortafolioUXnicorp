import React, { useState } from "react";
import AcordeonAnimadoMetodologia from "./AcordeonAnimadoMetodologia";
import "./Metodologia.css";
import ojito from "../../assets/ojito.png";

const pasos = [
  {
    titulo: "1. 📝 Definición y Análisis",
    desc: (
      <>
        Analizamos a fondo el proyecto para entender el alcance y sus desafíos:<br />
        <ul>
          <li>Evaluamos tamaño, costos y dificultad.</li>
          <li>Definimos herramientas, frameworks y tecnologías a usar.</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  },
  {
    titulo: "2. 🗂️ Planificación",
    desc: (
      <>
        Dividimos el proyecto en tareas concretas dentro de sprints semanales:<br />
        <ul>
          <li>Modularizamos por funcionalidades.</li>
          <li>Estimamos tiempos y estrategias de abordaje.</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  },
  {
    titulo: "3. 🎨 Diseño del Sistema",
    desc: (
      <>
        Prototipamos experiencias y estructuras:<br />
        <ul>
          <li>UI/UX.</li>
          <li>Arquitectura de módulos.</li>
          <li>Diagramas y flujos de interacción.</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  },
  {
    titulo: "4. 🔍 Revisión y Pruebas Iniciales",
    desc: (
      <>
        Validamos ideas con pruebas de concepto:<br />
        <ul>
          <li>Caja blanca y caja negra.</li>
          <li>Evaluación de reacciones esperadas y cobertura funcional.</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  },
  {
    titulo: "5. 👨‍💻 Desarrollo del Código",
    desc: (
      <>
        Construimos el sistema sprint a sprint:<br />
        <ul>
          <li>Trabajo en equipo con versionado.</li>
          <li>Notaciones y documentación técnica.</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  },
  {
    titulo: "6. ✅ Testing",
    desc: (
      <>
        Verificamos que todo funcione como debe:<br />
        <ul>
          <li>Pruebas unitarias, funcionales y de integración.</li>
          <li>Control de calidad y debugging.</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  },
  {
    titulo: "7. 📢 Preparación de Contenido",
    desc: (
      <>
        Mientras el sistema cobra vida:<br />
        <ul>
          <li>Marketing, textos e identidad visual.</li>
          <li>Coordinación de campañas de lanzamiento.</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  },
  {
    titulo: "8. 🚀 Publicación",
    desc: (
      <>
        Subimos el sistema al mundo real:<br />
        <ul>
          <li>Hosting, backups, dominios y despliegues.</li>
          <li>Pruebas en producción (demo, staging, real).</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  },
  {
    titulo: "9. 🔁 Evaluación y Optimización",
    desc: (
      <>
        Aprendemos de la experiencia real:<br />
        <ul>
          <li>Feedback de usuarios y stakeholders.</li>
          <li>Mejoras continuas de UX, rendimiento y arquitectura.</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  },
  {
    titulo: "10. 🛠️ Mantenimiento",
    desc: (
      <>
        Acompañamos el ciclo de vida del sistema:<br />
        <ul>
          <li>Parches, mejoras y actualizaciones.</li>
          <li>Planificación de mantenimientos y evolución del producto.</li>
        </ul>
      </>
    ),
    color: "#f37aa6"
  }
];

function Metodologia() {
  const [openIdx, setOpenIdx] = useState(null);
  const [pendingIdx, setPendingIdx] = useState(null);

  const handleToggle = idx => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else if (openIdx === null) {
      setOpenIdx(idx);
    } else {
      setOpenIdx(null);
      setPendingIdx(idx);
    }
  };

  React.useEffect(() => {
    if (openIdx === null && pendingIdx !== null) {
      const timer = setTimeout(() => {
        setOpenIdx(pendingIdx);
        setPendingIdx(null);
      }, 450); // igual al tiempo de la transición CSS
      return () => clearTimeout(timer);
    }
  }, [openIdx, pendingIdx]);

  return (
    <section id="metodologia" className="metodologia-section metodologia-layout">
      <div className="section-spacing">
      <div className="metodologia-pasos-card">
        {/* IZQUIERDA: texto + imagen */}
        <div className="metodologia-pasos-card-izq">
          <h2 className="metodologia-title metodologia-title-metodologia">Nuestra Metodología</h2>
          <div className="metodologia-desc-unificada">
            En UXNicorn no seguimos fórmulas.<br />
            Seguimos personas, ideas, propósitos.<br /><br />
            Creemos que cada proyecto es único y merece un proceso que lo acompañe desde el primer boceto hasta su mejor versión.<br />
            Nuestra metodología es clara, flexible y humana.<br />
            Está pensada para construir productos digitales que no solo funcionen, sino que conecten y perduren.<br /><br />
            <span style={{color: '#f37aa6', fontWeight: 600}}>
              Diseñamos con empatía, desarrollamos con propósito y evolucionamos con vos.
            </span>
          </div>
          <div className="metodologia-imagen-card">
            <img src={ojito} alt="Decoración metodología" className="metodologia-imagen" />
          </div>
        </div>
        {/* DERECHA: acordeones */}
        <div className="metodologia-pasos-card-der">
          {pasos.map((paso, idx) => (
            <AcordeonAnimadoMetodologia
              key={idx}
              titulo={paso.titulo}
              abierto={openIdx === idx}
              onClick={() => handleToggle(idx)}
            >
              <div className="acordeon-descripcion">
                {paso.desc}
              </div>
            </AcordeonAnimadoMetodologia>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default Metodologia;
