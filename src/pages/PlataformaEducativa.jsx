import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useLangNavigate } from '../hooks/useLangNavigate';
import LangLink from '../componentes/LangLink';
import { Helmet } from 'react-helmet-async';
import { seoConfig, createBreadcrumbSchema, getSeoData } from '../utils/seoConfig';
import { ArrowLeft, GraduationCap, CheckCircle, Clock, Info, HelpCircle } from 'lucide-react';
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
    id: 'plataforma-educativa',
    titulo: 'Plataforma Educativa',
    descripcion: 'Plataforma completa para lanzar y gestionar cursos online con usuarios, progreso, videos y pagos integrados.',
    icon: GraduationCap,
    duracion: '30-60 días',
    incluye: [
      'Sistema de cursos y módulos',
      'Login y perfil de alumnos',
      'Reproductor de video integrado',
      'Seguimiento de progreso',
      'Certificados automáticos',
      'Pagos y acceso por membresía',
      'Panel de administración',
      'Foro o comunidad interna (opcional)',
    ],
    ideal: 'Formadores, coaches, academias y profesionales que quieren vender su conocimiento online',
    color: '#D966B2',
    queEs: 'Es una plataforma educativa completa donde tus alumnos tienen su perfil, ven el progreso en los cursos y vos gestionás todo desde un panel simple.',
    paraque: 'Sirve para convertir tu conocimiento en ingresos escalables. Una vez grabado el curso, puede venderse y consumirse sin que tengas que estar presente.',
    comoFunciona: 'Desarrollamos la plataforma, cargamos tu primer curso, configuramos pagos y te damos un panel para gestionar alumnos, módulos y métricas en 30-60 días.',
    cuando: 'Es ideal cuando querés generar ingresos pasivos, cuando tenés conocimiento que puede enseñarse online o cuando tu audiencia demanda una experiencia de aprendizaje estructurada.',
  },
];

function PlataformaEducativa() {
  const navigate = useLangNavigate();
  const { t, i18n } = useTranslation();
  const { lang: urlLang } = useParams();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';
  const seoData = getSeoData('plataformaEducativa', lang) || seoConfig.plataformaEducativa;
  const serviciosItems = t('paginas.plataformaEducativa.items', { returnObjects: true });
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
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonical} />
        <link rel="alternate" hrefLang="es" href={seoData.hreflangEs} />
        <link rel="alternate" hrefLang="en" href={seoData.hreflangEn} />
        <link rel="alternate" hrefLang="x-default" href={seoData.hreflangEs} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:locale" content={seoData.ogLocale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.ogTitle} />
        <meta name="twitter:description" content={seoData.ogDescription} />
        <meta name="twitter:image" content={seoData.ogImage} />
        <script type="application/ld+json">
          {JSON.stringify(seoData.schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchema(seoData.breadcrumb, lang))}
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
              <GraduationCap size={16} />
              {t('paginas.plataformaEducativa.heroBadge')}
            </span>
            <h1 className="servicio-hero-title">
              {t('paginas.plataformaEducativa.heroTitulo')}<br />
              <span style={{ color: '#D966B2' }}>{t('paginas.plataformaEducativa.heroTituloSpan')}</span>
            </h1>
            <p className="servicio-hero-description">
              {t('paginas.plataformaEducativa.heroDesc')}
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

      {/* Glosario */}
      <Suspense fallback={<LoadingFallback />}>
        <GlosarioTecnico />
      </Suspense>

      {/* CTA */}
      <Suspense fallback={<LoadingFallback />}>
        <CTASection
          titulo={t('paginas.plataformaEducativa.ctaTitulo')}
          descripcion={t('paginas.plataformaEducativa.ctaDesc')}
          textoBoton={t('paginas.plataformaEducativa.ctaBoton')}
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

export default PlataformaEducativa;
