import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  Briefcase, 
  CheckCircle, 
  Layers,
  Building2,
  Zap
} from 'lucide-react';
import './CasosReales.css';
import '../../src/section-glass-card.css';
import OptimizedImage from '../componentes/OptimizedImage';

// Lazy load de componentes pesados
const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

// Datos de casos reales (extraídos de Proyectos.jsx)
const casosData = [
  {
    id: 'landing-educativa',
    titulo: 'Landing Educativa de Alto Impacto',
    subtitulo: 'Plataforma Web Institucional',
    descripcion: 'Sitio web institucional moderno para instituto educativo con diseño responsive, animaciones interactivas y sistema de inscripciones online.',
    imagen: '/src/assets/modal1.png',
    imagenDetalle: '/src/assets/modal1.png',
    color: '#81ade7',
    tags: ['React', 'Node.js', 'EmailJS', 'SEO'],
    tipo: 'Landing Page',
    industria: 'Educación',
    metricas: {
      tipo: 'Landing Page',
      industria: 'Educación'
    },
    detalles: [
      'Diseño responsive optimizado para mobile-first',
      'Animaciones CSS y JavaScript para mejorar la experiencia de usuario',
      'Sistema de formularios con validación en tiempo real',
      'Sección de carreras con filtros dinámicos',
      'Galería de imágenes optimizada con lazy loading',
      'Integración con Google Analytics',
      'Optimización SEO completa (meta tags, schema markup)',
      'Velocidad de carga <2 segundos'
    ],
    stack: 'React, Node.js, EmailJS, CSS3 Animations, Vercel hosting',
    impacto: '40% de aumento en solicitudes de información en los primeros 3 meses.'
  },
  {
    id: 'sistema-gestion',
    titulo: 'Sistema de Gestión Empresarial',
    subtitulo: 'ERP Cloud-Based Personalizado',
    descripcion: 'Plataforma web completa para administración de inventario, ventas, clientes y reportes en tiempo real para comercio minorista.',
    imagen: '/src/assets/modal2.png',
    imagenDetalle: '/src/assets/modal2.png',
    color: '#f37aa6',
    tags: ['React', 'MongoDB', 'Express', 'AWS'],
    tipo: 'Sistema ERP',
    industria: 'Retail',
    metricas: {
      tipo: 'Sistema ERP',
      industria: 'Retail'
    },
    detalles: [
      'Dashboard con métricas en tiempo real',
      'Gestión de inventario con alertas automáticas',
      'Módulo de ventas con generación de presupuestos',
      'CRM integrado para seguimiento de clientes',
      'Sistema de usuarios con roles y permisos',
      'Reportes exportables en PDF y Excel',
      'Integración con proveedores de envío',
      'Backup automático diario',
      'Sistema de notificaciones push'
    ],
    stack: 'React, Node.js, Express, MongoDB, JWT Auth, Chart.js, AWS S3',
    impacto: 'Reducción de 60% en tiempo de gestión administrativa y eliminación de errores de stock.'
  },
  {
    id: 'plataforma-fintech',
    titulo: 'Plataforma Fintech MVP',
    subtitulo: 'Fintech Dashboard con Analytics',
    descripcion: 'Landing interactiva con dashboard funcional para startup de inversiones, diseñada como producto mínimo viable escalable.',
    imagen: '/src/assets/modal3.png',
    imagenDetalle: '/src/assets/modal3.png',
    color: '#e0a6d8',
    tags: ['TypeScript', 'PostgreSQL', 'Docker', 'Redis'],
    tipo: 'Plataforma Web',
    industria: 'Fintech',
    metricas: {
      tipo: 'Plataforma Web',
      industria: 'Fintech'
    },
    detalles: [
      'Landing page persuasiva con CTAs estratégicos',
      'Dashboard con autenticación segura (OAuth 2.0)',
      'Visualización de portafolio con gráficos interactivos',
      'Simulador de rendimientos financieros',
      'Historial de transacciones con filtros avanzados',
      'Calculadora de ROI y proyecciones',
      'Integración con APIs financieras en tiempo real',
      'Notificaciones por email de movimientos',
      'Panel administrativo completo',
      'Arquitectura preparada para escalar'
    ],
    stack: 'React, TypeScript, Node.js, PostgreSQL, Redis, Docker, AWS EC2',
    impacto: 'MVP lanzado exitosamente, captó primeros 500 usuarios en 2 meses y atrajo inversión seed.'
  },
  {
    id: 'landing-electricista',
    titulo: 'Landing Profesional para Instalaciones Eléctricas',
    subtitulo: 'Web Corporativa Premium',
    descripcion: 'Sitio web corporativo moderno para empresa de instalaciones eléctricas con portafolio de proyectos y sistema de cotización.',
    imagen: '/src/assets/modal4.png',
    imagenDetalle: '/src/assets/modal4.png',
    color: '#ffc107',
    tags: ['React', 'Node.js', 'Maps API', 'SEO Local'],
    tipo: 'Web Corporativa',
    industria: 'Servicios',
    metricas: {
      tipo: 'Web Corporativa',
      industria: 'Servicios'
    },
    detalles: [
      'Diseño profesional que transmite confianza',
      'Galería de proyectos con antes/después',
      'Formulario inteligente de cotización',
      'Integración con Google Maps para cobertura',
      'Sección de servicios detallada',
      'Testimonios de clientes verificados',
      'Certificaciones y habilitaciones destacadas',
      'WhatsApp Business integrado',
      'Optimización SEO local',
      'Velocidad optimizada para móviles'
    ],
    stack: 'React, Node.js, Google Maps API, WhatsApp Business API, Cloudflare CDN',
    impacto: 'Incremento del 65% en solicitudes de presupuesto en 2 meses y mejor posicionamiento local.'
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

function CasosReales() {
  const navigate = useNavigate();

  const handleEmpezarProyecto = () => {
    navigate('/');
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  };

  return (
    <div className="casos-reales-page">
      <Helmet>
        <title>Casos de Éxito Argentina | Proyectos Web Reales con Resultados - UXnicorp</title>
        <meta 
          name="description" 
          content="Casos de éxito de desarrollo web en Argentina: Landing pages educativas, E-commerce, ERPs y Fintech. Proyectos reales para clientes en Argentina y LATAM con impacto medible." 
        />
        <meta name="keywords" content="casos éxito desarrollo web argentina, proyectos web argentina, portfolio web argentina, landing pages casos éxito, ecommerce argentina casos, ejemplos desarrollo web" />
        <meta property="og:title" content="Casos de Éxito Argentina | Proyectos Web Reales - UXnicorp" />
        <meta property="og:description" content="Proyectos reales de desarrollo web: Landing pages, E-commerce, Sistemas de Gestión y Fintech con resultados comprobados." />
        <meta property="og:locale" content="es_AR" />
        <link rel="canonical" href="https://uxnicorp.com/casos-reales" />
      </Helmet>

      {/* Hero Section */}
      <section className="casos-hero">
        <div className="casos-hero-container">
          <Link to="/" className="casos-back-link">
            <ArrowLeft size={20} />
            Volver al inicio
          </Link>
          
          <div className="casos-badge">
            <Briefcase size={18} />
            Casos de Éxito
          </div>
          
          <h1 className="casos-hero-title">
            Proyectos <span style={{background: 'linear-gradient(135deg, #81ade7 0%, #f37aa6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>reales</span>, resultados <span style={{background: 'linear-gradient(135deg, #f37aa6 0%, #e0a6d8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>comprobados</span>
          </h1>
          
          <p className="casos-hero-description">
            Algunos de nuestros proyectos más destacados. Cada uno con una historia única y un impacto real en los negocios de nuestros clientes.
          </p>
        </div>
      </section>

      {/* Casos Grid */}
      <section className="casos-section">
        <div className="section-glass-card">
          <div className="casos-grid">
            {casosData.map((caso, index) => (
              <motion.article
                key={caso.id}
                className="caso-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
              >
                {/* Imagen */}
                <div className="caso-image-wrapper">
                  <OptimizedImage 
                    src={caso.imagen} 
                    alt={caso.titulo}
                    className="caso-image"
                  />
                  <div 
                    className="caso-badge-overlay" 
                    style={{ background: `${caso.color}dd` }}
                  >
                    {caso.subtitulo}
                  </div>
                </div>

                {/* Contenido */}
                <div className="caso-content">
                  <header className="caso-header">
                    <h2 className="caso-title">{caso.titulo}</h2>
                    <p className="caso-subtitle">{caso.subtitulo}</p>
                  </header>

                  <p className="caso-description">{caso.descripcion}</p>

                  {/* Tags */}
                  <div className="caso-tags">
                    {caso.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="caso-tag"
                        style={{ 
                          borderColor: caso.color,
                          color: caso.color 
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="caso-stats">
                    <div className="caso-stat">
                      <span className="caso-stat-label">
                        <Layers size={16} style={{ display: 'inline', marginRight: '4px' }} />
                        Tipo
                      </span>
                      <span className="caso-stat-value">{caso.tipo}</span>
                    </div>
                    <div className="caso-stat">
                      <span className="caso-stat-label">
                        <Building2 size={16} style={{ display: 'inline', marginRight: '4px' }} />
                        Industria
                      </span>
                      <span className="caso-stat-value">{caso.industria}</span>
                    </div>
                  </div>

                  {/* Detalles */}
                  <div className="caso-details-section">
                    <h3 className="caso-details-title">
                      <CheckCircle size={20} />
                      Lo que incluye
                    </h3>
                    <ul className="caso-details-list">
                      {caso.detalles.slice(0, 5).map((detalle, idx) => (
                        <li key={idx}>{detalle}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="casos-cta-section">
        <motion.div 
          className="casos-cta-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 className="casos-cta-title">
            ¿Tu proyecto puede ser el próximo?
          </h2>
          <p className="casos-cta-description">
            Cada uno de estos proyectos empezó con una idea y una conversación. Hablemos de la tuya.
          </p>
          <button onClick={handleEmpezarProyecto} className="casos-cta-button" style={{ cursor: 'pointer' }}>
            <Zap size={20} />
            Empezar mi proyecto
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default CasosReales;
