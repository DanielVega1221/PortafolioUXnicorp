import React, { lazy, Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Settings, CheckCircle, Clock, Info, HelpCircle } from 'lucide-react';
import './ServicioCategoria.css';
import '../section-glass-card.css';
import GlosarioTecnico from '../componentes/Contenido/GlosarioTecnico';
import ServicioModal from '../componentes/ServicioModal';
import { seoConfig, createBreadcrumbSchema } from '../utils/seoConfig';

const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

const servicios = [
  {
    id: 'sistema-gestion-medida',
    titulo: 'Sistema de Gestión a Medida',
    descripcion: 'CRM, ERP o sistema personalizado según las necesidades específicas de tu empresa. Desde soluciones básicas hasta plataformas complejas con múltiples módulos integrados.',
    icon: Settings,
    duracion: 'Entre 6 y 24 semanas',
    incluye: [
      'Dashboard con métricas personalizadas',
      'Gestión de clientes (CRM)',
      'Gestión de ventas y presupuestos',
      'Control de inventario y stock',
      'Módulo de facturación electrónica (opcional)',
      'Integración con AFIP (opcional)',
      'Sistema de compras y proveedores',
      'Gestión de recursos humanos',
      'Control de proyectos y tareas',
      'Generación de reportes PDF y Excel',
      'Reportes avanzados con gráficos interactivos',
      'Sistema de usuarios, roles y permisos',
      'API REST para integraciones externas',
      'App móvil iOS/Android (opcional)',
      'Arquitectura escalable y modular',
      'Backup automático diario',
      'Base de datos segura y optimizada',
      'Capacitación completa del equipo',
      'Documentación técnica',
      'Soporte post-lanzamiento incluido'
    ],
    ideal: 'Empresas de cualquier tamaño que necesitan automatizar procesos específicos de su operación',
    color: '#81ade7',
    queEs: 'Es un sistema personalizado (CRM, ERP o software a medida) diseñado específicamente para automatizar los procesos de tu empresa.',
    paraque: 'Sirve para dejar de hacer todo manual, organizar información, gestionar clientes, ventas, inventario y tener control total de tu operación en un solo lugar.',
    comoFunciona: 'Analizamos tus procesos, diseñamos el sistema según tus necesidades exactas, desarrollamos módulos personalizados, capacitamos a tu equipo y te dejamos con documentación completa.',
    cuando: 'Es ideal cuando Excel ya no alcanza, cuando perdés información, cuando necesitás que tu equipo trabaje ordenado o cuando querés escalar tu negocio sin contratar más gente.'
  }
];

function SistemasGestion() {
  const navigate = useNavigate();
  const [modalAbierto, setModalAbierto] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const abrirModal = (servicio) => {
    setServicioSeleccionado(servicio);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setServicioSeleccionado(null);
  };

  const handleConsultar = (servicio) => {
    navigate('/', { state: { servicioInteres: servicio.titulo } });
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  };

  return (
    <div className="servicio-categoria-page">
      <Helmet>
        <title>{seoConfig.sistemasGestion.title}</title>
        <meta name="description" content={seoConfig.sistemasGestion.description} />
        <meta name="keywords" content={seoConfig.sistemasGestion.keywords} />
        <link rel="canonical" href={seoConfig.sistemasGestion.canonical} />
        <meta property="og:title" content={seoConfig.sistemasGestion.ogTitle} />
        <meta property="og:description" content={seoConfig.sistemasGestion.ogDescription} />
        <meta property="og:locale" content="es_AR" />
        
        <script type="application/ld+json">
          {JSON.stringify(seoConfig.sistemasGestion.schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchema(seoConfig.sistemasGestion.breadcrumb))}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="servicio-hero">
        <div className="servicio-hero-container">
          <Link to="/servicios" className="servicio-back-link">
            <ArrowLeft size={18} />
            Ver todas las categorías
          </Link>

          <div>
            <span className="servicio-badge">
              <Settings size={16} />
              Sistemas de Gestión Empresarial
            </span>
            <h1 className="servicio-hero-title">
              {seoConfig.sistemasGestion.h1}
            </h1>
            <p className="servicio-hero-description">
              Sistemas personalizados para administrar clientes, ventas, inventario y toda tu operación. Desarrollamos desde CRM básico hasta ERP completo con múltiples módulos integrados. <strong>Cada proyecto se diseña según tus necesidades específicas.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="servicios-detalle-section">
        <div className="servicios-detalle-container">
          {servicios.map((servicio) => {
            const IconComponent = servicio.icon;
            return (
              <article
                key={servicio.id}
                className="servicio-detalle-card"
              >
                <div className="servicio-detalle-header">
                  <div className="servicio-detalle-icon" style={{ backgroundColor: `${servicio.color}20`, border: `2px solid ${servicio.color}40` }}>
                    <IconComponent size={32} style={{ color: servicio.color }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 className="servicio-detalle-titulo">{servicio.titulo}</h2>
                    <p className="servicio-detalle-descripcion">{servicio.descripcion}</p>
                    <button 
                      onClick={() => abrirModal(servicio)}
                      style={{
                        background: `${servicio.color}15`,
                        border: `1.5px solid ${servicio.color}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color: servicio.color,
                        padding: '0.5rem 1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginTop: '0.75rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = servicio.color;
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${servicio.color}15`;
                        e.currentTarget.style.color = servicio.color;
                      }}
                    >
                      <HelpCircle size={18} />
                      ¿Qué es esto?
                    </button>
                  </div>
                </div>

                <div className="servicio-detalle-meta">
                  <div className="servicio-detalle-duracion">
                    <Clock size={16} />
                    {servicio.duracion}
                  </div>
                </div>

                <div className="servicio-detalle-ideal">
                  <Info size={16} />
                  <span><strong>Ideal para:</strong> {servicio.ideal}</span>
                </div>

                <div className="servicio-detalle-incluye">
                  <h3>Alcance del servicio (desde básico hasta avanzado)</h3>
                  <p style={{ fontSize: '0.95rem', opacity: 0.9, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                    Los módulos y funcionalidades se adaptan según tu presupuesto y necesidades:
                  </p>
                  <ul>
                    {servicio.incluye.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button onClick={() => handleConsultar(servicio)} className="servicio-detalle-cta" style={{ background: servicio.color, border: 'none', cursor: 'pointer', width: '100%', textAlign: 'center' }}>
                  Consultar precio según proyecto
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Glosario */}
      <Suspense fallback={<LoadingFallback />}>
        <GlosarioTecnico />
      </Suspense>

      {/* CTA */}
      <Suspense fallback={<LoadingFallback />}>
        <CTASection 
          titulo="¿Necesitás un sistema personalizado?"
          descripcion="Contanos qué procesos querés automatizar y te armamos una propuesta con precio ajustado a tu presupuesto y alcance específico"
          textoBoton="Consultar precio"
          linkTo="/#contact"
        />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>

      {/* Modal */}
      {servicioSeleccionado && (
        <ServicioModal 
          isOpen={modalAbierto}
          onClose={cerrarModal}
          servicio={servicioSeleccionado}
        />
      )}
    </div>
  );
}

export default SistemasGestion;
