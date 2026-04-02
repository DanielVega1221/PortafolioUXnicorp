import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useLangNavigate } from '../hooks/useLangNavigate';
import LangLink from '../componentes/LangLink';
import { Helmet } from 'react-helmet-async';
import { seoConfig, createBreadcrumbSchema } from '../utils/seoConfig';
import { ArrowLeft, Globe, Briefcase, CheckCircle, Clock, Info, HelpCircle, ExternalLink, Utensils, Building2 } from 'lucide-react';
import './ServicioCategoria.css';
import '../section-glass-card.css';
import GlosarioTecnico from '../componentes/Contenido/GlosarioTecnico';
import ServicioModal from '../componentes/ServicioModal';
import LanguageToggle from '../componentes/LanguageToggle';
import { useTranslation } from 'react-i18next';

const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

const servicios = [
  {
    id: 'web-institucional',
    titulo: 'Web Institucional Completa',
    descripcion: 'Sitio web profesional de múltiples páginas para negocios que quieren construir autoridad y credibilidad online.',
    icon: Globe,
    duracion: '15-25 días',
    incluye: [
      'Hasta 8 páginas completas',
      'Blog integrado',
      'Sección de servicios y propuesta de valor',
      'Equipo y quiénes somos',
      'Múltiples formularios contextuales',
      'SEO avanzado página por página',
      'Google Analytics configurado',
      'Schema markup implementado',
      'Mapa y datos de contacto',
      'Diseño responsive mobile-first',
      '3 rondas de ajustes',
    ],
    ideal: 'Empresas de servicios, estudios profesionales y consultoras que quieren posicionarse con autoridad',
    color: '#C8DBF7',
    queEs: 'Es un sitio web completo de múltiples páginas que refleja quién sos, qué hacés y por qué elegirte. Va más allá de una landing: es tu presencia digital completa.',
    paraque: 'Sirve para construir credibilidad, mejorar tu posicionamiento en Google y tener múltiples puntos de conversión para distintos servicios o productos.',
    comoFunciona: 'Diseñamos y desarrollamos cada página con estrategia de contenido y SEO, integramos Analytics, configuramos formularios y te entregamos el sitio listo en 15-25 días.',
    cuando: 'Es ideal cuando tu negocio ya tiene trayectoria y necesitás una presencia digital seria, cuando tenés varios servicios que comunicar o cuando querés rankear en Google.',
  },
  {
    id: 'web-portfolio',
    titulo: 'Web Portfolio Profesional',
    descripcion: 'Web de alto impacto visual diseñada para mostrar tu trabajo y generar confianza instantánea en clientes potenciales.',
    icon: Briefcase,
    duracion: '10-20 días',
    incluye: [
      'Galería de proyectos con filtros',
      'Ficha de proyecto detallada',
      'Sección sobre el estudio o profesional',
      'Formulario de consulta integrado',
      'Integración con redes sociales',
      'SEO orientado a búsquedas de servicio',
      'Diseño visual de alta calidad',
      'Carga optimizada de imágenes',
      '2 rondas de ajustes',
    ],
    ideal: 'Arquitectos, diseñadores de interiores, fotógrafos, artistas, creativos y estudios de diseño',
    color: '#e8a848',
    queEs: 'Es una web diseñada para impactar visualmente y mostrar tu trabajo de forma que genere confianza y consultas espontáneas.',
    paraque: 'Sirve para que tu trabajo hable por vos. Cuando los clientes ven proyectos reales y resultados concretos, la venta se da sola.',
    comoFunciona: 'Diseñamos una web visual premium, organizamos tu portfolio con filtros por categoría, optimizamos imágenes y te damos un sitio que impresiona en 10-20 días.',
    cuando: 'Es perfecta cuando tu trabajo es visual, cuando necesitás mostrar casos de éxito o cuando querés que los clientes lleguen con intención clara de contratarte.',
  },
];

const SECTOR_DEMOS = [
  {
    id: 'gastronomia',
    titulo: 'Gastronomía',
    descripcion: 'Carta digital, pedidos online, eventos y SEO local para restaurantes, bares y cafés.',
    icon: Utensils,
    color: '#e8a848',
    link: '/gastronomia',
    tag: 'Demo en vivo disponible',
  },
  {
    id: 'arquitectura',
    titulo: 'Estudios de Arquitectura',
    descripcion: 'Portfolio visual de alto impacto para arquitectos. Proyectos, planos y contacto que pre-califica al cliente.',
    icon: Building2,
    color: '#C8DBF7',
    link: '/arquitectura',
    tag: 'Demo en vivo disponible',
  },
];

function WebsProfesionales() {
  const navigate = useLangNavigate();
  const { t, i18n } = useTranslation();
  const { lang: urlLang } = useParams();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';
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
        <title>{seoConfig.websProfesionales.title}</title>
        <meta name="description" content={seoConfig.websProfesionales.description} />
        <meta name="keywords" content={seoConfig.websProfesionales.keywords} />
        <link rel="canonical" href={`https://www.uxnicorp.com.ar/${lang}/servicios/webs-profesionales`} />
        <link rel="alternate" hrefLang="es" href="https://www.uxnicorp.com.ar/es/servicios/webs-profesionales" />
        <link rel="alternate" hrefLang="en" href="https://www.uxnicorp.com.ar/en/servicios/webs-profesionales" />
        <link rel="alternate" hrefLang="x-default" href="https://www.uxnicorp.com.ar/es/servicios/webs-profesionales" />
        <meta property="og:title" content={seoConfig.websProfesionales.ogTitle} />
        <meta property="og:description" content={seoConfig.websProfesionales.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.uxnicorp.com.ar/${lang}/servicios/webs-profesionales`} />
        <meta property="og:image" content="https://www.uxnicorp.com.ar/og-image.jpg" />
        <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_AR'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.websProfesionales.ogTitle} />
        <meta name="twitter:description" content={seoConfig.websProfesionales.ogDescription} />
        <meta name="twitter:image" content="https://www.uxnicorp.com.ar/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(seoConfig.websProfesionales.schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchema(seoConfig.websProfesionales.breadcrumb, lang))}
        </script>
      </Helmet>
      <LanguageToggle />

      {/* Hero */}
      <section className="servicio-hero">
        <div className="servicio-hero-container">
          <LangLink to="/servicios" className="servicio-back-link">
            <ArrowLeft size={18} />
            {t('paginas.comun.verCategorias')}
          </LangLink>

          <div>
            <span className="servicio-badge">
              <Globe size={16} />
              Webs Profesionales
            </span>
            <h1 className="servicio-hero-title">
              Tu presencia digital<br />
              <span style={{ color: '#C8DBF7' }}>completa y estratégica</span>
            </h1>
            <p className="servicio-hero-description">
              Más allá de una landing page. Sitios web de múltiples páginas y portfolios visuales de alto impacto para construir autoridad online.
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
              <article key={servicio.id} id={servicio.id} className="servicio-detalle-card">
                <div className="servicio-detalle-header">
                  <div
                    className="servicio-detalle-icon"
                    style={{ backgroundColor: `${servicio.color}20`, border: `2px solid ${servicio.color}40` }}
                  >
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
                        transition: 'all 0.2s ease',
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

                <button
                  onClick={() => handleConsultar(servicio)}
                  className="servicio-detalle-cta"
                  style={{ background: servicio.color, border: 'none', cursor: 'pointer', width: '100%', textAlign: 'center' }}
                >
                  {t('paginas.comun.solicitar')}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Demos por sector */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 2rem 4rem' }}>
        <h2 style={{ textAlign: 'center', fontFamily: "'Source Code Pro', monospace", fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '0.75rem' }}>
          También hacemos webs especializadas
        </h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
          Industrias donde tenemos un proceso probado y demos en vivo para que veas el resultado.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {SECTOR_DEMOS.map((demo) => {
            const Icon = demo.icon;
            return (
              <LangLink
                key={demo.id}
                to={demo.link}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    border: `2px solid ${demo.color}30`,
                    borderRadius: '20px',
                    padding: '2rem',
                    background: `${demo.color}08`,
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = demo.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 12px 32px ${demo.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${demo.color}30`;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ background: `${demo.color}20`, borderRadius: '12px', padding: '10px', display: 'flex' }}>
                      <Icon size={24} style={{ color: demo.color }} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1a1a1a' }}>{demo.titulo}</div>
                      <div style={{ fontSize: '0.75rem', color: demo.color, fontWeight: 600 }}>{demo.tag}</div>
                    </div>
                  </div>
                  <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.55, margin: 0 }}>{demo.descripcion}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', color: demo.color, fontWeight: 600, fontSize: '0.88rem' }}>
                    <ExternalLink size={14} />
                    Ver demo completo
                  </div>
                </div>
              </LangLink>
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
          titulo="¿Necesitás una web que construya autoridad?"
          descripcion="Contanos tu proyecto y te decimos qué tipo de web es la ideal para vos."
          textoBoton="Consultar gratis"
          linkTo="/#contact"
        />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>

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

export default WebsProfesionales;
