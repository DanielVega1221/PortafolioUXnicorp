import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./Proyectos.css";
import "../../section-glass-card.css";
import OptimizedImage from "../OptimizedImage";
import Demo2Img from "../../assets/demo2.png";
import Demo3Img from "../../assets/demo3.png";
import Demo4Img from "../../assets/demo4.png";
import GlamDemoImg from "../../assets/glam-at-nails-landing-preview.png";
import { StarIcon, ArrowRightIcon } from "../SVGIcons";
import { ExternalLink } from "lucide-react";

const proyectos = [
  {
    idea: "Landing Profesional para Instalaciones Eléctricas",
    ideaDesc: "Sitio web corporativo moderno para empresa de instalaciones eléctricas con portafolio de proyectos, formulario de cotización y diseño responsive.",
    solucion: "Web Corporativa Premium",
    solucionDesc: "Landing page profesional con galería de trabajos realizados, sistema de cotización online y optimización SEO local para captar clientes en la zona.",
    tags: ["React", "Node.js", "Maps API", "SEO Local"],
    resultado: "+65% consultas",
    tiempo: "4 semanas",
    modalContent: `Desarrollamos una landing page profesional para una empresa de instalaciones eléctricas enfocada en generar confianza y conversiones.

El proyecto incluye:
• Diseño profesional que transmite confianza y experiencia técnica
• Galería de proyectos con antes/después y casos de éxito
• Formulario inteligente de cotización con campos específicos del rubro
• Integración con Google Maps para mostrar zona de cobertura
• Sección de servicios con descripción detallada de cada especialidad
• Testimonios de clientes verificados con fotos reales
• Certificaciones y habilitaciones destacadas
• WhatsApp Business integrado para consultas rápidas
• Optimización SEO local para aparecer en búsquedas geográficas
• Velocidad de carga optimizada para móviles (usuarios en obra)

Stack tecnológico: React, Node.js, Google Maps API, WhatsApp Business API, Cloudflare CDN.
Resultado: Incremento del 65% en solicitudes de presupuesto en los primeros 2 meses y mejor posicionamiento en búsquedas locales.`,
    color: "#ffc107",
    imagen: Demo4Img,
    modalImagen: "/modal4.webp",
    link: "https://www.electropowerok.com.ar/"
  },
  {
    idea: "Landing Profesional de Belleza y Estética",
    ideaDesc: "Sitio web moderno para estudio de uñas profesional con galería de trabajos reales, sistema de reservas y diseño enfocado en conversión.",
    solucion: "Landing Page Premium",
    solucionDesc: "Plataforma web profesional con galería visual impactante, optimización SEO local para Boedo (CABA) y contacto directo vía WhatsApp para maximizar reservas.",
    tags: ["React", "Bootstrap", "SEO Local", "WhatsApp API"],
    resultado: "+75% reservas",
    tiempo: "3 semanas",
    modalContent: `Desarrollamos una landing page profesional para Glam at Nails, estudio de uñas en Boedo, enfocada en generar confianza y convertir visitantes en clientas.

El proyecto incluye:
• Diseño visual moderno alineado a la identidad de marca del estudio
• Galería de trabajos reales optimizada para mostrar técnicas y resultados
• Sección de servicios clara y detallada con precios y duración
• Optimización SEO local para búsquedas en Boedo y CABA
• Integración con WhatsApp Business para reservas instantáneas
• Diseño responsive mobile-first (mayoría de búsquedas desde móviles)
• Copy persuasivo orientado a generar acción y reservas
• Sección de beneficios destacando turnos personalizados
• Testimonios de clientas reales con fotos de resultados
• Velocidad de carga optimizada con lazy loading de imágenes

Stack tecnológico: React, Bootstrap, WhatsApp Business API, SEO Local optimizado.
Resultado: Incremento del 75% en reservas mensuales y posicionamiento #1 en búsquedas locales de "manicura Boedo".

🔗 Sitio web: https://glamatnails.com.ar/`,
    color: "#f37aa6",
    imagen: GlamDemoImg,
    modalImagen: "/glam-at-nails-sitio-completo.webp",
    link: "https://glamatnails.com.ar/"
  },
  {
    idea: "Sistema de Gestión Empresarial",
    ideaDesc:
      "Plataforma web completa para administración de inventario, ventas, clientes y reportes en tiempo real para comercio minorista.",
    solucion: "ERP Cloud-Based Personalizado",
    solucionDesc:
      "Sistema integral de gestión con dashboard analítico, control de stock automatizado y módulo de ventas con facturación electrónica.",
    tags: ["React", "MongoDB", "Express", "AWS"],
    resultado: "-60% tiempo admin",
    tiempo: "12 semanas",
    modalContent:
      `Creamos un sistema de gestión empresarial (ERP) personalizado desde cero para optimizar las operaciones de un comercio.

Módulos desarrollados:
• Dashboard con métricas en tiempo real (ventas, stock crítico, top productos)
• Gestión de inventario con alertas automáticas de reposición
• Módulo de ventas con generación de presupuestos y facturas
• CRM integrado para seguimiento de clientes y historial de compras
• Sistema de usuarios con roles y permisos (admin, vendedor, contador)
• Reportes exportables en PDF y Excel con gráficos interactivos
• Integración con proveedores de envío (tracking de pedidos)
• Backup automático diario de base de datos
• Sistema de notificaciones push para eventos críticos

Stack tecnológico: React, Node.js, Express, MongoDB, JWT Auth, Chart.js, AWS S3.
Resultado: Reducción de 60% en tiempo de gestión administrativa y eliminación de errores de stock.`,
    color: "#f37aa6",
    imagen: Demo2Img,
    modalImagen: "/modal2.webp"
  },
  {
    idea: "Plataforma Fintech MVP",
    ideaDesc:
      "Landing interactiva con dashboard funcional para startup de inversiones, diseñada como producto mínimo viable escalable.",
    solucion: "Fintech Dashboard con Analytics",
    solucionDesc:
      "MVP completo con landing de presentación, panel de usuario con visualización de rendimientos y simulador de inversiones.",
    tags: ["TypeScript", "PostgreSQL", "Docker", "Redis"],
    resultado: "500 usuarios",
    tiempo: "16 semanas",
    modalContent:
      `Desarrollamos el MVP de una plataforma fintech desde la conceptualización hasta el deploy en producción.

Características principales:
• Landing page persuasiva con diseño profesional y CTAs estratégicos
• Dashboard de usuario con autenticación segura (OAuth 2.0)
• Visualización de portafolio de inversiones con gráficos interactivos
• Simulador de rendimientos con diferentes escenarios
• Historial de transacciones con filtros avanzados
• Calculadora de ROI y proyecciones financieras
• Integración con APIs de datos financieros en tiempo real
• Sistema de notificaciones por email de movimientos importantes
• Panel administrativo para gestión de usuarios y operaciones
• Arquitectura preparada para escalar (microservicios)

Stack tecnológico: React, TypeScript, Node.js, PostgreSQL, Redis, Docker, AWS EC2.
Resultado: MVP lanzado exitosamente, captó primeros 500 usuarios en 2 meses y atrajo inversión seed.`,
    color: "#e0a6d8",
    imagen: Demo3Img,
    modalImagen: "/modal3.webp"
  }
];

const Proyectos = () => {
  const [actual, setActual] = useState(0);
  const [fade, setFade] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const cambiarCard = (dir) => {
    setFade(true);
    setTimeout(() => {
      if (dir === "next") {
        setActual((prev) => (prev + 1) % proyectos.length);
      } else {
        setActual((prev) => (prev - 1 + proyectos.length) % proyectos.length);
      }
      setFade(false);
    }, 300);
  };

  const proy = proyectos[actual];

  return (
    <>
      <section id="proyectos" className="proyectos-section" aria-labelledby="projects-title">
        <div className="section-glass-card">
          <h2 id="projects-title" className="proyectos-titulo">
            <span className="proyectos-titulo-celeste">Casos de éxito</span>, <span className="proyectos-titulo-rosa">resultados comprobados</span>
          </h2>
          <p className="proyectos-descripcion">
            Proyectos reales que transformaron negocios. Cada uno con desafíos únicos, soluciones a medida y resultados que hablan por sí mismos.
          </p>

        <div className="proyectos-carrusel-wrapper" role="region" aria-label="Carrusel de proyectos" aria-live="polite">
          <button 
            className="proyecto-nav proyecto-nav-izq" 
            onClick={() => cambiarCard('prev')}
            aria-label="Proyecto anterior"
          >
            ←
          </button>

          <div className={`proyecto-card-modern ${fade ? 'fade-out' : 'fade-in'}`}>
            <div className="proyecto-card-header">
              <div className="proyecto-badge" style={{ background: `${proy.color}20`, color: proy.color }}>
                {proy.solucion}
              </div>
              <div className="proyecto-stats">
                <div className="proyecto-stat">
                  <span className="proyecto-stat-icon">⚡</span>
                  <span className="proyecto-stat-text">{proy.tiempo}</span>
                </div>
                <div className="proyecto-stat">
                  <span className="proyecto-stat-icon">📈</span>
                  <span className="proyecto-stat-text">{proy.resultado}</span>
                </div>
              </div>
            </div>

            <div className="proyecto-card-body">
              <div className="proyecto-card-content">
                <h3 className="proyecto-titulo-modern">{proy.idea}</h3>
                <p className="proyecto-descripcion-modern">{proy.solucionDesc}</p>
                <div className="proyecto-tags">
                  {proy.tags.map((tag, idx) => (
                    <span key={idx} className="proyecto-tag" style={{ borderColor: proy.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="proyecto-btn-modern" onClick={() => setShowModal(true)}>
                  Ver detalles completos
                  <ArrowRightIcon size={20} className="proyecto-btn-icon" />
                </button>
              </div>

              <div className="proyecto-card-image">
                <div className="proyecto-image-wrapper">
                  <OptimizedImage src={proy.imagen} alt={proy.idea} className="proyecto-img-modern" />
                  <div className="proyecto-image-overlay" style={{ background: `linear-gradient(135deg, ${proy.color}40, ${proy.color}10)` }}></div>
                </div>
              </div>
            </div>
          </div>

          <button 
            className="proyecto-nav proyecto-nav-der" 
            onClick={() => cambiarCard('next')}
            aria-label="Proyecto siguiente"
          >
            →
          </button>
        </div>

        <div className="proyectos-indicadores" role="tablist" aria-label="Navegación de proyectos">
          {proyectos.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === actual}
              aria-label={`Proyecto ${idx + 1} de ${proyectos.length}`}
              className={`proyecto-indicador ${idx === actual ? 'activo' : ''}`}
              style={{ background: idx === actual ? proyectos[idx].color : 'rgba(0,0,0,0.2)' }}
              onClick={() => {
                setFade(true);
                setTimeout(() => {
                  setActual(idx);
                  setFade(false);
                }, 300);
              }}
            />
          ))}
        </div>

        {/* Botón de ver todos los casos */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link 
            to="/casos-reales" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #81ade7, #f37aa6)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(129, 173, 231, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ExternalLink size={20} />
            Ver todos nuestros casos de éxito
          </Link>
        </div>
        </div>
      </section>

      {showModal && createPortal(
        <div className="proyecto-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="proyecto-modal-modern" onClick={(e) => e.stopPropagation()}>
            <button className="proyecto-modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            
            <div className="proyecto-modal-header-modern">
              <div className="proyecto-modal-image-section">
                <OptimizedImage src={proy.modalImagen} alt={proy.idea} className="proyecto-modal-img" loading="eager" />
              </div>
              <div className="proyecto-modal-info-section">
                <div className="proyecto-modal-badge" style={{ background: `${proy.color}20`, color: proy.color }}>
                  {proy.solucion}
                </div>
                <h3 className="proyecto-modal-titulo">{proy.idea}</h3>
                <div className="proyecto-modal-meta">
                  <div className="proyecto-modal-meta-item">
                    <span className="proyecto-modal-meta-label">Duración</span>
                    <span className="proyecto-modal-meta-value">{proy.tiempo}</span>
                  </div>
                  <div className="proyecto-modal-meta-item">
                    <span className="proyecto-modal-meta-label">Resultado</span>
                    <span className="proyecto-modal-meta-value">{proy.resultado}</span>
                  </div>
                </div>
                <div className="proyecto-modal-tags">
                  {proy.tags.map((tag, idx) => (
                    <span key={idx} className="proyecto-modal-tag" style={{ borderColor: proy.color, color: proy.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="proyecto-modal-body">
              <p className="proyecto-modal-descripcion">{proy.modalContent}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Proyectos;