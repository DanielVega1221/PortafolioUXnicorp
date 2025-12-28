import React, { lazy, Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Zap, Package, CheckCircle, Clock, Info, HelpCircle } from 'lucide-react';
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
    id: 'landing-express-basic',
    titulo: 'Landing Express Basic',
    descripcion: 'Página web de una sola página lista en 72 horas con lo esencial para arrancar.',
    icon: Zap,
    precio: '$180.000 ARS',
    duracion: '72 horas',
    incluye: [
      '1 página de aterrizaje (3-4 secciones)',
      'Diseño responsive mobile-first',
      'Formulario de contacto',
      'Botón directo a WhatsApp',
      'Dominio propio (.com.ar o .com)',
      'Hosting por 1 año incluido',
      'SSL certificado (https)',
      '1 ronda de ajustes'
    ],
    ideal: 'Profesionales, freelancers, pequeños negocios que necesitan presencia digital rápida',
    color: '#81ade7',
    queEs: 'Es una landing page lista en 72 horas con lo esencial: hero, servicios/productos, contacto y WhatsApp directo.',
    paraque: 'Sirve para tener presencia digital rápida sin complicaciones. Es perfecta cuando necesitás estar online YA.',
    comoFunciona: 'Vos nos das tu contenido (textos e imágenes), nosotros armamos el diseño en base a templates probados y en 72 horas tenés tu página funcionando.',
    cuando: 'Es ideal cuando arrancás, cuando necesitás algo rápido o cuando querés probar una idea sin invertir mucho tiempo ni dinero.'
  },
  {
    id: 'landing-express-intermedia',
    titulo: 'Landing Express Intermedia',
    descripcion: 'Landing más completa y moderna con hasta 5 secciones y animaciones profesionales.',
    icon: Zap,
    precio: '$250.000 ARS',
    duracion: '5-10 días',
    incluye: [
      '1 página de aterrizaje (5-6 secciones)',
      'Animaciones al scroll (Framer Motion)',
      'Diseño UX/UI premium',
      'Galería de imágenes optimizada',
      'Formularios con validación',
      'Integración con Google Analytics',
      'SEO básico implementado',
      'Hosting + dominio por 1 año',
      '2 rondas de ajustes'
    ],
    ideal: 'Estudios profesionales, consultores, agencias que quieren destacarse',
    color: '#f37aa6',
    queEs: 'Es una landing page moderna con hasta 5 secciones, animaciones suaves y diseño profesional premium.',
    paraque: 'Sirve para destacarte de tu competencia con una web que se ve y funciona mejor. Ideal para generar más confianza y profesionalismo.',
    comoFunciona: 'Diseñamos dentro de templates premium, agregamos animaciones al scroll, optimizamos imágenes y te entregamos una landing visualmente atractiva en 5-10 días.',
    cuando: 'Es perfecta cuando querés algo más trabajado que lo básico, cuando tu competencia tiene webs mejores o cuando querés causar una primera impresión sólida.'
  },
  {
    id: 'landing-express-full',
    titulo: 'Landing Express Full',
    descripcion: 'Versión completa: landing de 6 secciones + 1 página adicional, optimizada para Google.',
    icon: Package,
    precio: '$300.000 ARS',
    duracion: '1-2 semanas',
    incluye: [
      'Landing principal (6-7 secciones)',
      '1 página adicional (Sobre nosotros / Portfolio)',
      'SEO técnico completo',
      'Optimización de velocidad (90+ en Google)',
      'Estrategia de contenido incluida',
      'Schema markup implementado',
      'Blog básico (opcional)',
      'Integración con CRM',
      'Hosting + dominio por 1 año',
      '3 rondas de ajustes',
      'Capacitación de uso incluida'
    ],
    ideal: 'Empresas de servicios, clínicas, estudios jurídicos que van en serio',
    color: '#e0a6d8',
    queEs: 'Es una presencia digital completa: landing principal de 6 secciones + 1 página extra (como "Nosotros" o "Servicios") con SEO avanzado.',
    paraque: 'Sirve para tener una web profesional optimizada para Google, lista para posicionar y generar leads de forma constante.',
    comoFunciona: 'Trabajamos tu contenido con estrategia, optimizamos cada sección para SEO, agregamos schema markup y te entregamos una web lista para rankear en 1-2 semanas.',
    cuando: 'Es ideal cuando tu negocio ya está funcionando y querés invertir en algo serio que te traiga clientes a largo plazo sin depender sólo de publicidad paga.'
  },
  {
    id: 'landing-flyer-promo',
    titulo: 'Landing Flyer Promo',
    descripcion: 'Anuncio digital en formato web para promociones puntuales y campañas específicas.',
    icon: Zap,
    precio: '$120.000 ARS',
    duracion: '3-5 días',
    incluye: [
      'Página simple estilo flyer digital',
      'Diseño enfocado en conversión',
      'Botón directo a WhatsApp',
      'PDF descargable de la promo',
      'Contador regresivo (opcional)',
      'Formulario de captura de leads',
      'Hosting temporal 3 meses',
      'Optimizado para compartir en redes'
    ],
    ideal: 'Promociones, Black Friday, lanzamientos, eventos temporales',
    color: '#ffc107',
    queEs: 'Es un anuncio digital en formato landing: una sola página tipo flyer premium con tu oferta, botón de WhatsApp y PDF descargable.',
    paraque: 'Sirve para promociones puntuales, lanzamientos o eventos donde necesitás algo rápido, directo y enfocado 100% en la conversión.',
    comoFunciona: 'Creamos un diseño tipo flyer adaptado a web, lo optimizamos para compartir en redes y te entregamos el PDF de la promo en 3-5 días.',
    cuando: 'Es perfecto para Black Friday, lanzamientos de productos, eventos especiales o campañas con fecha límite donde necesitás algo rápido y efectivo.'
  },
  {
    id: 'landing-premium-medida',
    titulo: 'Landing Premium a Medida',
    descripcion: 'Desarrollo 100% personalizado con funcionalidades específicas según tu negocio.',
    icon: Package,
    precio: '$360.000 ARS',
    duracion: '2-3 semanas',
    incluye: [
      'Diseño 100% personalizado',
      'Funcionalidades específicas a medida',
      'Integraciones con sistemas externos',
      'Panel de administración',
      'Animaciones avanzadas',
      'SEO avanzado',
      'Testing A/B incluido',
      'Estrategia de marketing digital',
      'Capacitación del equipo',
      'Soporte prioritario 3 meses',
      'Ajustes ilimitados durante desarrollo'
    ],
    ideal: 'Empresas grandes, startups con necesidades específicas, proyectos complejos',
    color: '#81ade7',
    queEs: 'Es una landing 100% personalizada, sin plantillas, diseñada específicamente para tu marca, tu estilo y tus objetivos de negocio.',
    paraque: 'Sirve cuando querés algo único que refleje tu identidad, con funcionalidades específicas como integraciones, paneles admin o características avanzadas.',
    comoFunciona: 'Diseñamos desde cero según tu brief, desarrollamos funcionalidades personalizadas, integramos con tus sistemas y te entregamos algo único en 2-3 semanas.',
    cuando: 'Es ideal cuando tenés un presupuesto más alto, cuando necesitás algo que no existe en templates o cuando querés diferenciarte completamente de tu competencia.'
  }
];

function LandingPagesServicios() {
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
        <title>Landing Pages Argentina | Desde $180.000 - Diseño Web Profesional - UXnicorp</title>
        <meta name="description" content="Creamos landing pages profesionales en Argentina desde $180k. Entrega en 72hs. Responsive, SEO optimizado, integración formularios. 5 opciones disponibles. Todo LATAM." />
        <meta name="keywords" content="landing page argentina, landing page precio argentina, diseño landing argentina, crear landing page, landing page express argentina, landing profesional, página web rápida" />
        <link rel="canonical" href="https://uxnicorp.com/servicios/landing-pages" />
        <meta property="og:title" content="Landing Pages Argentina desde $180k - UXnicorp" />
        <meta property="og:description" content="Diseñamos tu landing page profesional en 72hs. Responsive y optimizada para conversiones." />
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
              <Zap size={16} />
              Landing Pages Profesionales
            </span>
            <h1 className="servicio-hero-title">
              Landing Pages <span style={{background: 'linear-gradient(135deg, #81ade7 0%, #f37aa6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>en 72 Horas</span>
            </h1>
            <p className="servicio-hero-description">
              Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Desde landing express lista en 3 días hasta soluciones premium 100% personalizadas.
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
          titulo="¿No sabés qué tipo de landing necesitás?"
          descripcion="Contactanos y te ayudamos a elegir el paquete perfecto según tu presupuesto y objetivos"
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

export default LandingPagesServicios;
