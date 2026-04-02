import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useLangNavigate } from '../hooks/useLangNavigate';
import LangLink from '../componentes/LangLink';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ShoppingCart, CheckCircle, Clock, Info, HelpCircle } from 'lucide-react';
import './ServicioCategoria.css';
import '../section-glass-card.css';
import GlosarioTecnico from '../componentes/Contenido/GlosarioTecnico';
import ServicioModal from '../componentes/ServicioModal';
import { seoConfig, createBreadcrumbSchema, getSeoData } from '../utils/seoConfig';
import LanguageToggle from '../componentes/LanguageToggle';
import { useTranslation } from 'react-i18next';

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
  const navigate = useLangNavigate();
  const { t, i18n } = useTranslation();
  const { lang: urlLang } = useParams();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';
  const seoData = getSeoData('ecommerce', lang) || seoConfig.ecommerce;
  const serviciosItems = t('paginas.ecommerce.items', { returnObjects: true });
  const serviciosT = Array.isArray(serviciosItems)
    ? servicios.map((s, i) => ({ ...s, ...serviciosItems[i] }))
    : servicios;
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

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const handleConsultar = (servicio) => {
    navigate('/', { state: { servicioInteres: servicio.titulo } });
  };

  return (
    <div className="servicio-categoria-page">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoConfig.ecommerce.keywords} />
        <link rel="canonical" href={`https://www.uxnicorp.com.ar/${lang}/servicios/ecommerce`} />
        <link rel="alternate" hrefLang="es" href="https://www.uxnicorp.com.ar/es/servicios/ecommerce" />
        <link rel="alternate" hrefLang="en" href="https://www.uxnicorp.com.ar/en/servicios/ecommerce" />
        <link rel="alternate" hrefLang="x-default" href="https://www.uxnicorp.com.ar/es/servicios/ecommerce" />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.uxnicorp.com.ar/${lang}/servicios/ecommerce`} />
        <meta property="og:image" content="https://www.uxnicorp.com.ar/og-image.jpg" />
        <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_AR'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.ogTitle} />
        <meta name="twitter:description" content={seoData.ogDescription} />
        <meta name="twitter:image" content="https://www.uxnicorp.com.ar/og-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(seoConfig.ecommerce.schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchema(seoConfig.ecommerce.breadcrumb, lang))}
        </script>
      </Helmet>
      <LanguageToggle />

      {/* Hero Section */}
      <section className="servicio-hero">
        <div className="servicio-hero-container">
          <LangLink to="/servicios" className="servicio-back-link">
            <ArrowLeft size={18} />
            {t('paginas.comun.verCategorias')}
          </LangLink>

          <div>
            <span className="servicio-badge">
              <ShoppingCart size={16} />
              {t('paginas.ecommerce.heroBadge')}
            </span>
            <h1 className="servicio-hero-title">
              {t('paginas.ecommerce.heroTitulo')}
            </h1>
            <p className="servicio-hero-description">
              {t('paginas.ecommerce.heroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="servicios-detalle-section">
        <div className="servicios-detalle-container">
          {serviciosT.map((servicio) => {
            const IconComponent = servicio.icon;
            return (
              <article
                key={servicio.id}
                id={servicio.id}
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
                      {t('paginas.comun.queEsto')}
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
                  <span><strong>{t('paginas.comun.idealPara')}</strong> {servicio.ideal}</span>
                </div>

                <div className="servicio-detalle-incluye">
                  <h3>{t('paginas.comun.queIncluye')}</h3>
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
                  {t('paginas.comun.solicitar')}
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
          titulo={t('paginas.ecommerce.ctaTitulo')}
          descripcion={t('paginas.ecommerce.ctaDesc')}
          textoBoton={t('paginas.ecommerce.ctaBoton')}
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
