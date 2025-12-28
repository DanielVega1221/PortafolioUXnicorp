import React, { lazy, Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Search, TrendingUp, Code, CheckCircle, Clock, Info, HelpCircle } from 'lucide-react';
import ServicioModal from '../componentes/ServicioModal';
import './ServicioCategoria.css';
import '../section-glass-card.css';
import GlosarioTecnico from '../componentes/Contenido/GlosarioTecnico';

const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

const servicios = [
  {
    id: 'auditoria-ux-ui',
    titulo: 'Auditoría UX/UI Profesional',
    descripcion: 'Revisión completa de tu página web para identificar qué funciona y qué se puede mejorar, sin tocar código.',
    icon: Search,
    precio: '$120.000 ARS',
    duracion: '5-7 días',
    incluye: [
      'Análisis heurístico completo',
      'Revisión de usabilidad en móvil y desktop',
      'Evaluación de velocidad de carga',
      'Análisis de arquitectura de información',
      'Informe detallado con prioridades',
      'Recomendaciones accionables',
      'Sesión de consultoría incluida'
    ],
    ideal: 'Empresas con sitio web activo que quieren mejorar la experiencia de usuario',
    color: '#81ade7',
    queEs: 'Es una revisión completa de tu página web para ver qué anda bien y qué se puede mejorar, sin tocar el código.',
    paraque: 'Sirve para saber si tu página es fácil de usar, si se ve bien, si carga rápido y si funciona en todos los dispositivos. Te da un diagnóstico claro de qué arreglar.',
    comoFunciona: 'Navegamos tu sitio como lo haría un usuario real, tomamos nota de todo lo que se puede mejorar y te entregamos un informe detallado con soluciones priorizadas.',
    cuando: 'Es ideal cuando tenés una web funcionando pero sentís que algo no está bien, que la gente no la entiende o que querés mejorarla pero no sabés por dónde empezar.'
  },
  {
    id: 'auditoria-cro',
    titulo: 'Informe de Optimización de Conversión (CRO)',
    descripcion: 'Análisis enfocado en descubrir por qué los visitantes no convierten en clientes y cómo solucionarlo.',
    icon: TrendingUp,
    precio: '$120.000 ARS',
    duracion: '7-15 días',
    incluye: [
      'Análisis de embudos de conversión',
      'Revisión de CTAs y formularios',
      'Evaluación de copywriting',
      'Testing de hipótesis',
      'Heatmaps y grabaciones de sesiones',
      'Plan de acción priorizado',
      'Seguimiento de métricas'
    ],
    ideal: 'Negocios con tráfico pero baja conversión, e-commerce, sitios que venden servicios',
    color: '#f37aa6',
    queEs: 'Es un análisis estratégico de tu sitio para entender por qué la gente entra pero no compra, no contacta o no hace lo que vos querés que haga.',
    paraque: 'Sirve para encontrar los puntos exactos donde perdés clientes y diseñar un plan para convertir más visitantes en ventas reales.',
    comoFunciona: 'Estudiamos el recorrido de tus visitantes, analizamos dónde se van, qué no funciona y te damos recomendaciones concretas basadas en datos y psicología del consumidor.',
    cuando: 'Es perfecto cuando tu página recibe visitas pero no genera ventas, o cuando querés mejorar tu tasa de conversión sin gastar más en publicidad.'
  },
  {
    id: 'auditoria-tecnica',
    titulo: 'Revisión Técnica + Mini-Refactor',
    descripcion: 'Auditoría técnica del código más limpieza express de 1-2 módulos críticos.',
    icon: Code,
    precio: '$150.000 ARS',
    duracion: '7-15 días',
    incluye: [
      'Code review completo',
      'Análisis de performance',
      'Evaluación de arquitectura',
      'Refactor de 1-2 módulos críticos',
      'Optimización de consultas',
      'Documentación técnica',
      'Recomendaciones de escalabilidad'
    ],
    ideal: 'Empresas con sistemas legacy, sitios lentos, código mal documentado o difícil de mantener',
    color: '#e0a6d8',
    queEs: 'Es una auditoría técnica del código de tu sitio o sistema más una limpieza rápida de 1-2 partes críticas que estén generando problemas.',
    paraque: 'Sirve para ordenar código desorganizado, mejorar el rendimiento técnico y dejar tu proyecto más limpio y fácil de mantener a futuro.',
    comoFunciona: 'Revisamos tu código línea por línea, identificamos problemas, aplicamos mejoras en las partes más críticas y te dejamos todo documentado para que tu equipo pueda seguir trabajando sin problemas.',
    cuando: 'Es ideal cuando tu sistema anda lento, el código es un desastre, nadie entiende cómo está hecho o necesitás dejarlo en condiciones antes de seguir desarrollando.'
  }
];

function Auditorias() {
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
        <title>Auditorías UX/UI y CRO Argentina | Desde $120.000 ARS - UXnicorp</title>
        <meta name="description" content="Auditorías profesionales UX/UI y CRO en Argentina. Análisis de usabilidad, conversión y performance desde $120k. Entrega en 5-15 días. Clientes en todo LATAM." />
        <meta name="keywords" content="auditoría ux argentina, auditoría ui argentina, cro argentina, optimización conversión argentina, auditoría web argentina, revisión técnica web, usabilidad web argentina" />
        <link rel="canonical" href="https://uxnicorp.com/servicios/auditorias" />
        <meta property="og:title" content="Auditorías UX/UI y CRO Argentina - UXnicorp" />
        <meta property="og:description" content="Análisis profesional de usabilidad y conversión desde $120.000. Mejoramos tu sitio con datos reales." />
        <meta property="og:locale" content="es_AR" />
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
              <Search size={16} />
              Auditorías Profesionales
            </span>
            <h1 className="servicio-hero-title">
              Auditorías <span style={{background: 'linear-gradient(135deg, #81ade7 0%, #f37aa6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>UX/UI y CRO</span>
            </h1>
            <p className="servicio-hero-description">
              Analizamos tu sitio actual para identificar problemas de usabilidad, performance y conversión. Recibís un informe completo con mejoras priorizadas y accionables.
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
                  <div className="servicio-detalle-precio">{servicio.precio}</div>
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
                  <h3>¿Qué incluye?</h3>
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
                  Solicitar presupuesto
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
          titulo="¿No estás seguro cuál auditoría necesitás?"
          descripcion="Contactanos y te asesoramos gratis para identificar qué tipo de análisis es mejor para tu proyecto"
          textoBoton="Consultar ahora"
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

export default Auditorias;
