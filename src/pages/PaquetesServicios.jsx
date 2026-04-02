import React, { lazy, Suspense, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLangNavigate } from '../hooks/useLangNavigate';
import LangLink from '../componentes/LangLink';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Package, TrendingUp, CheckCircle, Clock, Info, HelpCircle } from 'lucide-react';
import './ServicioCategoria.css';
import '../section-glass-card.css';
import GlosarioTecnico from '../componentes/Contenido/GlosarioTecnico';
import LanguageToggle from '../componentes/LanguageToggle';
import { useTranslation } from 'react-i18next';
import ServicioModal from '../componentes/ServicioModal';
import { seoConfig, createBreadcrumbSchema, getSeoData } from '../utils/seoConfig';

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
    cuando: 'Es ideal cuando arrancas tu negocio, cuando necesitás presencia digital rápida o cuando querés empezar de forma ágil con algo profesional.'
  },
  {
    id: 'paquete-crecimiento',
    titulo: 'Paquete Auditoría Integral / Revisión Estratégica',
    descripcion: 'Auditoría UX/UI + Informe CRO. Para negocios que quieren saber qué falla en su web (UX, estrategia, conversión).',
    icon: TrendingUp,
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
    duracion: 'Variable según nivel',
    incluye: [
      'Landing Express Basic como base',
      'Evolución a Intermedia disponible',
      'Evolución a Full disponible',
      'Agregado de secciones y animaciones',
      '6 secciones + 1 página extra (Full)',
      'Animaciones premium progresivas',
      'SEO avanzado en versión Full',
      'Plan de upgrade simplificado',
      'Ideal para startups que crecen',
      'Migración incluida'
    ],
    ideal: 'Startups o negocios que quieren empezar simple y crecer profesionalmente según su momento',
    color: '#e0a6d8',
    queEs: 'Es un modelo de escalamiento progresivo: empezás con lo básico y vas evolucionando tu web a medida que creces.',
    paraque: 'Sirve para no tener que rehacer todo cuando necesites más funcionalidades. Tu web crece con vos.',
    comoFunciona: 'Arrancas con Landing Express Basic, y si después querés más secciones o funciones, tenemos un plan de evolución simplificado.',
    cuando: 'Es perfecto para startups, negocios nuevos o cuando sabés que vas a crecer y necesitarás más funcionalidades.'
  }
];

function PaquetesServicios() {
  const navigate = useLangNavigate();
  const { t, i18n } = useTranslation();
  const { lang: urlLang } = useParams();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';
  const seoData = getSeoData('paquetes', lang) || seoConfig.paquetes;
  const serviciosItems = t('paginas.paquetes.items', { returnObjects: true });
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
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoConfig.paquetes.keywords} />
        <link rel="canonical" href={`https://www.uxnicorp.com.ar/${lang}/servicios/paquetes`} />
        <link rel="alternate" hrefLang="es" href="https://www.uxnicorp.com.ar/es/servicios/paquetes" />
        <link rel="alternate" hrefLang="en" href="https://www.uxnicorp.com.ar/en/servicios/paquetes" />
        <link rel="alternate" hrefLang="x-default" href="https://www.uxnicorp.com.ar/es/servicios/paquetes" />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_AR'} />
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchema(seoConfig.paquetes.breadcrumb, lang))}
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
              <Package size={16} />
              {t('paginas.paquetes.heroBadge')}
            </span>
            <h1 className="servicio-hero-title">
              {t('paginas.paquetes.heroTitulo')}
            </h1>
            <p className="servicio-hero-description">
              {t('paginas.paquetes.heroDesc')}
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
          titulo={t('paginas.paquetes.ctaTitulo')}
          descripcion={t('paginas.paquetes.ctaDesc')}
          textoBoton={t('paginas.paquetes.ctaBoton')}
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

export default PaquetesServicios;
