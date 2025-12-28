import React, { lazy, Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Package, TrendingUp, CheckCircle, Clock, Info, HelpCircle } from 'lucide-react';
import './ServicioCategoria.css';
import '../section-glass-card.css';
import GlosarioTecnico from '../componentes/Contenido/GlosarioTecnico';
import ServicioModal from '../componentes/ServicioModal';

const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

const servicios = [
  {
    id: 'paquete-emprendedor',
    titulo: 'Paquete Emprendedor / Presencia Rápida',
    descripcion: 'Landing Express Basic + Microbranding Web. Para negocios que quieren arrancar rápido con presencia profesional.',
    icon: Package,
    precio: '$250.000 ARS',
    duracion: '72 horas luego de recibir material',
    incluye: [
      'Landing Express Basic (3 secciones)',
      'Hero + 2 secciones extra',
      'SEO básico implementado',
      'Responsive mobile-first',
      'Microbranding Web (UI Base)',
      'Paleta de colores corporativa',
      'Tipografías seleccionadas',
      'Estilos base diseñados',
      'Hero de referencia',
      'Hosting + dominio 1 año'
    ],
    ideal: 'Emprendedores que arrancan y necesitan identidad completa más web',
    color: '#81ade7',
    queEs: 'Es un combo de Landing Express Basic + Microbranding Web: tu página funcionando + identidad visual básica lista en 72 horas.',
    paraque: 'Sirve para arrancar rápido con presencia digital profesional y coherente, sin tener que contratar diseñadores y desarrolladores por separado.',
    comoFunciona: 'Te armamos la landing en 72 horas y te entregamos paleta de colores, tipografías y estilos base para que todo se vea consistente.',
    cuando: 'Es ideal cuando arrancas tu negocio, cuando necesitás presencia digital rápida o cuando tenés poco presupuesto pero querés algo profesional.'
  },
  {
    id: 'paquete-crecimiento',
    titulo: 'Paquete Auditoría Integral / Revisión Estratégica',
    descripcion: 'Auditoría UX/UI + Informe CRO. Para negocios que quieren saber qué falla en su web (UX, estrategia, conversión).',
    icon: TrendingUp,
    precio: '$190.000 ARS',
    duracion: '7-15 días',
    incluye: [
      'Auditoría UX/UI Profesional completa',
      'Diagnóstico de experiencia de usuario',
      'Análisis de jerarquía visual',
      'Evaluación de performance',
      'Informe CRO (Optimización de Conversión)',
      'Estrategia de conversión',
      'Análisis de estructura comercial',
      'Identificación de puntos de fuga',
      'Recomendaciones priorizadas',
      'Reunión de devolución'
    ],
    ideal: 'Negocios que ya tienen web y quieren optimizar experiencia, ventas y rendimiento sin tocar código',
    color: '#f37aa6',
    queEs: 'Es un combo de Auditoría UX/UI + Informe CRO: te decimos qué anda mal en experiencia y por qué no convertís.',
    paraque: 'Sirve para saber exactamente qué arreglar en tu web sin tocar código. Te damos el diagnóstico completo de UX y conversión en un solo paquete.',
    comoFunciona: 'Analizamos tu sitio desde dos ángulos (UX y ventas), te entregamos dos informes con prioridades y hacemos una reunión de devolución en 7-15 días.',
    cuando: 'Es ideal cuando tenés una web funcionando pero sentís que algo falla y querés un diagnóstico completo antes de invertir en cambios.'
  },
  {
    id: 'paquete-enterprise',
    titulo: 'Paquete Plan Evolución / Escalá tu Web',
    descripcion: 'Empezá con Landing Express Basic y escalá a Intermedia o Full pagando solo la diferencia.',
    icon: Package,
    precio: 'Inicial $180.000 + evolución',
    duracion: 'Variable según nivel',
    incluye: [
      'Landing Express Basic como base ($180k)',
      'Evolución a Intermedia: +$40.000',
      'Evolución a Full: +$60.000',
      'Agregado de secciones y animaciones',
      '6 secciones + 1 página extra (Full)',
      'Animaciones premium progresivas',
      'SEO avanzado en versión Full',
      'Pagás solo la mitad de la diferencia',
      'Ideal para startups que crecen',
      'Sin costo de migración'
    ],
    ideal: 'Startups o negocios que quieren empezar simple y crecer profesionalmente, pagando solo lo necesario según su momento',
    color: '#e0a6d8',
    queEs: 'Es un modelo de escalamiento progresivo: empezás con lo básico y vas evolucionando tu web pagando solo la diferencia.',
    paraque: 'Sirve para no gastar de más al principio y poder ir mejorando tu web a medida que tu negocio crece, sin tener que rehacer todo.',
    comoFunciona: 'Arrancas con Landing Express Basic por $180k, y si después querés más secciones o funciones, pagás solo la mitad de la diferencia para evolucionar.',
    cuando: 'Es perfecto para startups, negocios nuevos o cuando no estás seguro de cuánto necesitás invertir al principio pero sabés que vas a crecer.'
  }
];

function PaquetesServicios() {
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
        <title>Paquetes de Desarrollo Web Argentina | Soluciones Completas desde $180k - UXnicorp</title>
        <meta name="description" content="Paquetes web todo incluido en Argentina: Emprendedor (Landing+Branding $250k), Auditoría Integral ($190k), Plan Evolución escalable. Ahorra tiempo y dinero. LATAM." />
        <meta name="keywords" content="paquete desarrollo web argentina, landing mas branding, auditoría completa, plan desarrollo web, combo web argentina, paquete emprendedor argentina" />
        <link rel="canonical" href="https://uxnicorp.com/servicios/paquetes" />
        <meta property="og:title" content="Paquetes Web Argentina desde $180k - UXnicorp" />
        <meta property="og:description" content="Soluciones completas para emprendedores y empresas. Landing + Branding, Auditorías y planes escalables." />
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
              <Package size={16} />
              Paquetes Completos
            </span>
            <h1 className="servicio-hero-title">
              Soluciones <span style={{background: 'linear-gradient(135deg, #81ade7 0%, #f37aa6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Todo en Uno</span>
            </h1>
            <p className="servicio-hero-description">
              Combinaciones inteligentes de servicios: web + branding, web + SEO, o soluciones enterprise completas. Ahorrá tiempo, dinero y obtené resultados consistentes.
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
          titulo="¿Necesitás una combinación personalizada?"
          descripcion="Podemos armar un paquete a tu medida combinando los servicios que realmente necesitás"
          textoBoton="Consultar ahora"
          linkTo="/contacto"
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

export default PaquetesServicios;
