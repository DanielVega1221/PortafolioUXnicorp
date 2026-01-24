import React, { lazy, Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ShoppingCart, CheckCircle, Clock, Info, HelpCircle } from 'lucide-react';
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
    id: 'ecommerce-basico',
    titulo: 'E-commerce Simple',
    descripcion: 'Tienda online funcional con carrito, pasarela de pagos y gestión de productos. La tienda ideal para emprendedores.',
    icon: ShoppingCart,
    precio: '$590.000 en 6 cuotas | $540.000 contado',
    duracion: '3 meses',
    incluye: [
      'Catálogo de productos ilimitado',
      'Carrito de compras funcional',
      'Integración Mercado Pago',
      'Gestión de stock',
      'Sistema de envíos',
      'Panel de administración',
      'Diseño responsive',
      'SEO básico para productos',
      'Hosting por 1 año',
      'Capacitación incluida'
    ],
    ideal: 'Emprendedores y pequeños negocios que quieren empezar a vender online',
    color: '#f37aa6',
    queEs: 'Es una tienda online completa con carrito, Mercado Pago integrado, gestión de stock y panel admin para que vendas por internet.',
    paraque: 'Sirve para empezar a vender online de forma profesional sin complicaciones técnicas. Todo listo para recibir pagos y gestionar tus productos.',
    comoFunciona: 'Desarrollamos la tienda, cargamos tus primeros 20 productos, integramos Mercado Pago, configuramos envíos y te capacitamos para que lo uses solo en 3 meses.',
    cuando: 'Es ideal cuando arrancas con e-commerce, cuando tenés un catálogo no muy grande o cuando querés probar vender online sin invertir fortunas.'
  },
  {
    id: 'ecommerce-premium',
    titulo: 'E-commerce Robusto',
    descripcion: 'Tienda completa con funcionalidades avanzadas: cupones, seguimiento, filtros y emails automatizados. Para negocios con categorías y filtros avanzados.',
    icon: ShoppingCart,
    precio: 'Desde $980.000 en 6 cuotas | Desde $890.000 contado',
    duracion: '3 meses',
    incluye: [
      'Todo lo de E-commerce Básico',
      'Sistema de cupones y descuentos',
      'Emails transaccionales automatizados',
      'Seguimiento de pedidos en tiempo real',
      'Sistema de reviews y calificaciones',
      'Filtros avanzados de búsqueda',
      'Múltiples métodos de pago',
      'Panel de reportes y analítica',
      'Integración con redes sociales',
      'Marketing automation básico',
      'Soporte prioritario 6 meses'
    ],
    ideal: 'Empresas establecidas, mayoristas, negocios con alto volumen de ventas',
    color: '#e0a6d8',
    queEs: 'Es una tienda online robusta con todas las funciones avanzadas: cupones, seguimiento en vivo, emails automatizados, filtros y sistema de reviews.',
    paraque: 'Sirve para negocios que ya venden y necesitan escalar con herramientas profesionales de marketing, automatización y analítica.',
    comoFunciona: 'Construimos una tienda completa con módulos avanzados, integramos sistemas de marketing, configuramos emails automáticos y te damos reportes en tiempo real en 3 meses.',
    cuando: 'Es perfecto cuando ya tenés volumen de ventas, cuando necesitás filtros por categoría o cuando querés automatizar tu operación para vender más sin trabajar más.'
  }
];

function Ecommerce() {
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
        <title>{seoConfig.ecommerce.title}</title>
        <meta name="description" content={seoConfig.ecommerce.description} />
        <meta name="keywords" content={seoConfig.ecommerce.keywords} />
        <link rel="canonical" href={seoConfig.ecommerce.canonical} />
        <meta property="og:title" content={seoConfig.ecommerce.ogTitle} />
        <meta property="og:description" content={seoConfig.ecommerce.ogDescription} />
        <meta property="og:locale" content="es_AR" />
        
        <script type="application/ld+json">
          {JSON.stringify(seoConfig.ecommerce.schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchema(seoConfig.ecommerce.breadcrumb))}
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
              <ShoppingCart size={16} />
              Tiendas Online Completas
            </span>
            <h1 className="servicio-hero-title">
              {seoConfig.ecommerce.h1}
            </h1>
            <p className="servicio-hero-description">
              Tiendas online completas con carrito, pasarela de pagos, gestión de productos y envíos. Todo lo que necesitás para vender por internet de forma profesional.
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
          titulo="¿Querés empezar a vender online?"
          descripcion="Te asesoramos gratis sobre qué funcionalidades necesitás según tu tipo de productos y volumen de ventas"
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

export default Ecommerce;
