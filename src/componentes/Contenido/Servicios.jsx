
import React from "react";
import "./Servicios.css";
import sonrisita from '../../assets/sonrisita.png';
import corazoncito from '../../assets/corazoncito.png';

const aplicaciones = [
  { icono: "🛒", titulo: "Plataformas de venta adaptadas a tu industria", descripcion: "Desde e-commerce para ropa hasta sistemas de pedido para librerías técnicas." },
  { icono: "📅", titulo: "Gestión de turnos y agendas inteligentes", descripcion: "Ideal para salones, clínicas, estudios o atención personalizada." },
  { icono: "🛡️", titulo: "Sistemas de membresía", descripcion: "Protección de contenido premium, control de accesos, gestión de usuarios con distintos roles." },
  { icono: "🏨", titulo: "Reservas, pagos y calendario para hoteles, hostales o alquileres", descripcion: "Todo en un solo lugar para simplificar tu gestión." },
  { icono: "🧠", titulo: "Blogs personales o profesionales", descripcion: "Para que puedas expresarte o posicionarte como referente en tu nicho." },
  { icono: "🏛️", titulo: "Páginas institucionales", descripcion: "Para ONGs, escuelas, estudios jurídicos, fundaciones." },
  { icono: "📣", titulo: "Sitios promocionales o de presentación de marca", descripcion: "Landing pages optimizadas para campañas de marketing o lanzamientos." },
  { icono: "🎉", titulo: "Páginas de eventos", descripcion: "Entradas, agenda, mapa del lugar, links a redes sociales, y más." },
  { icono: "🎓", titulo: "Plataformas de cursos online", descripcion: "Ofrecé tus conocimientos en formato de clases, con registro de usuarios, seguimiento de progreso, contenidos protegidos y pagos integrados." }
];

function Servicios() {
  return (
    <div id="servicios">
      <div className="servicios-wrapper">
        <img src={sonrisita} alt="Sonrisa" className="decoracion-esquina decoracion-izquierda" />
        <img src={corazoncito} alt="Corazón" className="decoracion-esquina decoracion-derecha" />
        <div className="servicios-main-card">
          <h1 className="titulo">Nuestros <span>servicios</span></h1>
          <h3 className="subtitulo">Diseñamos, desarrollamos y evolucionamos tu presencia digital</h3>

          <div className="servicios-cards">
            {aplicaciones.map((app, idx) => (
              <div key={idx} className="servicio-card">
                <span className="servicio-card-icono">{app.icono}</span>
                <span className="servicio-card-titulo">{app.titulo}</span>
                <span className="servicio-card-descripcion">{app.descripcion}</span>
              </div>
            ))}
          </div>

          <div className="servicio-info-card">
            <span className="servicio-info-icono">✅</span>
            <span className="servicio-info-texto">Todo lo que hacemos puede ser administrable y escalable.</span>
          </div>

          <div className="servicio-acompanamiento-bloque">
            <h3 className="subtitulo">
              <span className="servicios-titulo-rosita">Acompañamiento</span> <span className="y-gris">y</span> <span className="servicios-titulo-rosita">asesoramiento</span>
            </h3>
            <p className="descripcion">
              Te ayudamos a bajar tus ideas a tierra. Si todavía no sabés qué necesitás, te escuchamos y te proponemos opciones realistas y alineadas a tu presupuesto.
            </p>
            <div className="servicio-acompanamiento-card">
              <span className="servicio-acompanamiento-card-texto">No hace falta que tengas la solución: nosotros la pensamos con vos.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
