import React, { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Zap, 
  Sparkles,
  Rocket,
  FileText,
  Palette,
  Clock,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import './LandingPages.css';
import '../../src/section-glass-card.css';
import { seoConfig, createBreadcrumbSchema } from '../utils/seoConfig';

// Lazy load
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

// Datos de servicios de landing pages
const serviciosLanding = [
  {
    id: 'express-basic',
    icon: <Zap size={32} />,
    titulo: 'Landing Express Basic',
    descripcion: 'Tu página funcionando en 72 horas. Rápida, clara y efectiva.',
    color: '#4bb543',
    incluye: [
      'Hero + 2-3 secciones adicionales',
      'SEO básico configurado',
      'Responsive básico',
      'Carga de contenido provisto'
    ],
    entrega: '72 hs',
    destacado: false
  },
  {
    id: 'express-intermedia',
    icon: <Sparkles size={32} />,
    titulo: 'Landing Express Intermedia',
    descripcion: 'Landing moderna con microinteracciones y animaciones profesionales.',
    color: '#ffc107',
    incluye: [
      'Hasta 5 secciones completas',
      'Animaciones profesionales',
      'SEO intermedio',
      'Diseño premium optimizado'
    ],
    entrega: '5-10 días',
    destacado: false
  },
  {
    id: 'express-full',
    icon: <Rocket size={32} />,
    titulo: 'Landing Express Full',
    descripcion: 'Presencia digital completa para negocios que buscan escala.',
    color: '#ff5722',
    incluye: [
      '6 secciones + 1 página extra',
      'SEO avanzado optimizado',
      'Performance profesional',
      'Diseño optimizado para conversión'
    ],
    entrega: '1-2 semanas',
    destacado: false
  },
  {
    id: 'flyer-promo',
    icon: <FileText size={32} />,
    titulo: 'Landing Flyer Promo',
    descripcion: 'Tu anuncio digital en formato landing. Directo y vendedor.',
    color: '#9c27b0',
    incluye: [
      'Hero con mensaje y botón a WhatsApp',
      'PDF profesional creado por nosotros',
      'Diseño tipo flyer premium',
      'Optimizado para móviles'
    ],
    entrega: '3-5 días',
    destacado: false
  },
  {
    id: 'premium-medida',
    icon: <Palette size={32} />,
    titulo: 'Landing Premium a Medida',
    descripcion: 'Diseño 100% personalizado sin plantillas, hecho específicamente para tu marca.',
    color: '#3f51b5',
    incluye: [
      '5 secciones diseñadas a medida',
      '1 página extra incluida',
      'SEO profesional optimizado',
      'Microinteracciones premium'
    ],
    entrega: '2-3 semanas',
    destacado: true
  }
];

// Tabla comparativa
const comparadorData = [
  { feature: 'Número de secciones', basic: '3-4', intermedia: '5', full: '6+', premium: 'Sin límite' },
  { feature: 'Tiempo de entrega', basic: '72hs', intermedia: '5-10 días', full: '1-2 sem', premium: '2-3 sem' },
  { feature: 'Animaciones', basic: 'Básicas', intermedia: 'Profesionales', full: 'Avanzadas', premium: 'A medida' },
  { feature: 'SEO', basic: 'Básico', intermedia: 'Intermedio', full: 'Avanzado', premium: 'Premium' },
  { feature: 'Páginas extras', basic: '—', intermedia: '—', full: '1', premium: 'Según proyecto' },
  { feature: 'Diseño', basic: 'Plantilla', intermedia: 'Semi-custom', full: 'Profesional', premium: '100% a medida' }
];

// FAQs
const faqsData = [
  {
    pregunta: '¿Qué tipo de landing page necesito?',
    respuesta: 'Depende de tu objetivo y necesidades. Si necesitás presencia rápida: Express Basic. Si querés destacarte con animaciones: Intermedia. Si buscás una solución completa: Full. Y si tu marca necesita algo único: Premium a Medida.'
  },
  {
    pregunta: '¿Qué incluye cada landing page?',
    respuesta: 'Todas incluyen diseño responsive, hosting configurado, formulario de contacto, integración con redes sociales, y optimización SEO según el paquete elegido. Las versiones Express incluyen carga de contenido provisto, mientras que Premium incluye estrategia de contenido.'
  },
  {
    pregunta: '¿Puedo actualizar mi landing después?',
    respuesta: 'Sí, ofrecemos el Plan Evolución: empezás con una versión básica y podés mejorarla pagando solo el 50% de la diferencia. Por ejemplo, si empezás con Basic y querés pasar a Full, solo pagás la mitad de la diferencia.'
  },
  {
    pregunta: '¿Qué necesito para empezar?',
    respuesta: 'Para Express: textos, imágenes/fotos, logo, colores de marca (si los tenés). Para Premium: además de eso, hacemos sesiones de briefing para entender tu marca a fondo y diseñamos todo desde cero.'
  }
];

// Variantes de animación
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

function LandingPages() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="landing-pages-page">
      <Helmet>
        <title>{seoConfig.landingPages.title}</title>
        <meta 
          name="description" 
          content={seoConfig.landingPages.description}
        />
        <meta name="keywords" content={seoConfig.landingPages.keywords} />
        <meta property="og:title" content={seoConfig.landingPages.ogTitle} />
        <meta property="og:description" content={seoConfig.landingPages.ogDescription} />
        <link rel="canonical" href={seoConfig.landingPages.canonical} />
        <meta property="og:locale" content="es_AR" />
        
        <script type="application/ld+json">
          {JSON.stringify(seoConfig.landingPages.schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchema(seoConfig.landingPages.breadcrumb))}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="landing-hero-container">
          <Link to="/" className="landing-back-link">
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
          
          <div className="landing-badge">
            <Zap size={18} />
            Landing Pages
          </div>
          
          <h1 className="landing-hero-title">
            {seoConfig.landingPages.h1}
          </h1>
          
          <p className="landing-hero-description">
            Desde una landing express en 72 horas hasta un diseño premium 100% personalizado. Elegí el paquete que mejor se adapte a tus necesidades.
          </p>

          <div className="landing-hero-highlights">
            <div className="hero-highlight">
              <Clock size={20} />
              <span>Desde 72 horas</span>
            </div>
            <div className="hero-highlight">
              <CheckCircle size={20} />
              <span>Diseño responsive</span>
            </div>
            <div className="hero-highlight">
              <Rocket size={20} />
              <span>SEO optimizado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="landing-servicios-section">
        <div className="section-glass-card">
          <div className="landing-servicios-header">
            <h2>Nuestros paquetes de Landing Pages</h2>
            <p>
              Cada paquete está diseñado para diferentes necesidades y etapas de negocio. Todos incluyen diseño profesional, hosting y soporte post-lanzamiento.
            </p>
          </div>

          <div className="landing-servicios-grid">
            {serviciosLanding.map((servicio, index) => (
            <Motion.article
              key={servicio.id}
              className={`servicio-card ${servicio.destacado ? 'destacado' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
            >
              {servicio.destacado && (
                <div className="servicio-destacado-badge">Más elegido</div>
              )}

              <div 
                className="servicio-icon"
                style={{ 
                  background: `linear-gradient(135deg, ${servicio.color}, ${servicio.color}cc)` 
                }}
              >
                {servicio.icon}
              </div>

              <div className="servicio-header">
                <h3 className="servicio-titulo">{servicio.titulo}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>
              </div>

              <div className="servicio-incluye">
                <h4 className="servicio-incluye-titulo">
                  <CheckCircle size={18} />
                  Incluye:
                </h4>
                <ul className="servicio-incluye-list">
                  {servicio.incluye.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="servicio-footer">
                <div className="servicio-entrega">
                  <Clock size={18} />
                  <span>{servicio.entrega}</span>
                </div>
                <Link to="/#contacto" className="servicio-cta-button">
                  <MessageCircle size={18} />
                  Consultar
                </Link>
              </div>
            </Motion.article>
          ))}
        </div>
        </div>
      </section>

      {/* Comparador */}
      <section className="landing-comparador-section">
        <div className="section-glass-card">
          <div className="comparador-header">
            <h2>Comparador de paquetes</h2>
            <p>Encontrá rápido cuál se adapta mejor a tus necesidades</p>
          </div>

          <Motion.div 
            className="comparador-table-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <table className="comparador-table">
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Basic</th>
                  <th>Intermedia</th>
                  <th>Full</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparadorData.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.feature}</strong></td>
                    <td>{row.basic}</td>
                    <td>{row.intermedia}</td>
                    <td>{row.full}</td>
                    <td>{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="landing-faq-section">
        <div className="section-glass-card">
          <div className="faq-header">
            <h2>Preguntas frecuentes</h2>
          </div>

          <div className="faq-list">
            {faqsData.map((faq, index) => (
              <Motion.div
                key={index}
                className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                transition={{ delay: index * 0.05 }}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.pregunta}</span>
                  <div className="faq-toggle">+</div>
                </button>
                <div className="faq-answer">
                  <p>{faq.respuesta}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="landing-cta-final">
        <Motion.div 
          className="landing-cta-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 className="landing-cta-title">
            ¿Listo para tener tu landing page?
          </h2>
          <p className="landing-cta-description">
            Hablemos de tu proyecto. Te armamos un presupuesto sin compromiso en menos de 24 horas.
          </p>
          <Link to="/#contacto" className="landing-cta-button-large">
            <MessageCircle size={20} />
            Solicitar consulta
          </Link>
        </Motion.div>
      </section>

      {/* Footer */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default LandingPages;
