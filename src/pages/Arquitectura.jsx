/**
 * PÁGINA: Arquitectura
 * 
 * Landing específica para estudios de arquitectura
 * Diseño arquitectónico: espacios negativos, jerarquía, composiciones únicas
 * CSS 100% aislado para no afectar el resto del sitio
 * 
 * Ruta: /arquitectura
 */

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion as Motion } from 'framer-motion';
import { 
  ArrowRight,
  Home,
  ExternalLink,
  Type,
  Palette,
  Maximize2,
  MessageSquare,
  BarChart3
} from 'lucide-react';
import { Layout, Layers, Users, Search, Zap, TrendingUp } from 'lucide-react';
import { seoConfig } from '../utils/seoConfig';
import fondoARQ from '../assets/ARQ/fondoARQ.webp';
import BRUNNdemo from '../assets/ARQ/BRUNNdemo.webp';
import fondoCardARQ from '../assets/ARQ/fondocardarq.webp';
import fondoCardPlano from '../assets/ARQ/fondocardplano.webp';
import './Arquitectura.css';

function Arquitectura() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSolicitarDiagnostico = () => {
    navigate('/', { state: { servicioInteres: 'Diagnóstico para estudio de Arquitectura' } });
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  };

  const handleVerServicios = () => {
    navigate('/servicios');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const seo = seoConfig.arquitectura || {
    title: 'Desarrollo Digital para Estudios de Arquitectura | UXnicorp',
    description: 'Estructuras digitales que comunican proyectos con claridad, criterio y coherencia profesional. Plataformas autogestionables para arquitectos.',
    keywords: 'desarrollo web arquitectos, portfolio arquitectura, sitio web estudio arquitectura, plataforma proyectos arquitectura',
    canonical: 'https://www.uxnicorp.com.ar/arquitectura'
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={seo.ogTitle || seo.title} />
        <meta property="og:description" content={seo.ogDescription || seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seo.ogImage || 'https://www.uxnicorp.com.ar/og-image.jpg'} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="UXnicorp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.ogTitle || seo.title} />
        <meta name="twitter:description" content={seo.ogDescription || seo.description} />
        <meta name="twitter:image" content={seo.ogImage || 'https://www.uxnicorp.com.ar/og-image.jpg'} />

        {/* Schema Service */}
        {seo.schema && (
          <script type="application/ld+json">
            {JSON.stringify(seo.schema)}
          </script>
        )}

        {/* Schema FAQ */}
        {seo.faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(seo.faqSchema)}
          </script>
        )}

        {/* Schema Breadcrumb */}
        {seo.breadcrumb && (
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': seo.breadcrumb.map((item, i) => ({
                '@type': 'ListItem',
                'position': i + 1,
                'name': item.name,
                'item': `https://www.uxnicorp.com.ar${item.url}`
              }))
            })}
          </script>
        )}
      </Helmet>

      <div className="arquitectura-page">
        {/* Botón flotante volver a Home */}
        <Link to="/" className="btn-home-float" aria-label="Volver al inicio">
          <Home size={20} strokeWidth={2} />
        </Link>

        {/* HERO - Composición Asimétrica */}
        <Motion.section 
          id="hero"
          className="hero-arquitectura arquitectura-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `url(${fondoARQ})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          }}
        >
          <div className="hero-overlay"></div>
          <div className="section-number">01/08</div>
          <div className="hero-content">
            <Motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Desarrollo<br />
              digital<br />
              estratégico
            </Motion.h1>
            
            <Motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Creamos estructuras digitales que permiten comunicar proyectos con claridad, criterio y coherencia profesional para estudios de arquitectura.
            </Motion.p>

            <div className="hero-divider" />

            <Motion.div 
              className="hero-ctas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                Solicitar diagnóstico
                <ArrowRight size={18} />
              </button>
              <a 
                href="#demo" 
                className="btn-arq btn-arq-ghost"
              >
                Ver caso de estudio ↓
              </a>
            </Motion.div>
          </div>

        </Motion.section>

        {/* SEPARADOR */}
        <div className="section-separator"></div>

        {/* VALIDACIÓN - Layout Editorial */}
        <section id="validacion" className="validacion-section arquitectura-section section-bg-alt">
          <div className="section-number">02/08</div>
          <div className="section-card validacion-card">
            <div 
              className="validacion-col validacion-col-left"
              style={{
                backgroundImage: `url(${fondoCardARQ})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
              }}
            >
              <div className="validacion-overlay"></div>
              <h2 className="validacion-title">
                Entendemos tu proceso
              </h2>
            </div>

            <div className="validacion-col validacion-col-right">
              <div className="metodo-col-header">
                <span className="metodo-col-label">Por qué nos eligen</span>
                <p className="metodo-col-intro">Conocemos las tensiones reales que vive un estudio de arquitectura al buscar presencia digital.</p>
              </div>
            <div className="validacion-block">
              <h3 className="validacion-block-title">
                Proceso, no solo resultado
              </h3>
              <p className="validacion-block-text">
                Una obra no es solo imagen. Es decisiones, materialidad y contexto. Tu sitio web tampoco debería reducir tu trabajo a una simple galería.
              </p>
            </div>

            <div className="validacion-block">
              <h3 className="validacion-block-title">
                Tensión conceptual vs. comercial
              </h3>
              <p className="validacion-block-text">
                Querés atraer clientes sin comprometer tu discurso. Entendemos esa tensión porque la hemos analizado en profundidad con estudios de arquitectura.
              </p>
            </div>

            <div className="validacion-block">
              <h3 className="validacion-block-title">
                Independencia de redes sociales
              </h3>
              <p className="validacion-block-text">
                Instagram no puede ser tu único portafolio. Necesitás una base digital que respalde tu identidad profesional a largo plazo.
              </p>
            </div>

            </div>
          </div>
        </section>

        {/* SEPARADOR */}
        <div className="section-separator"></div>

        {/* MÉTODO - Split Card igual que validacion */}
        <section id="metodo" className="metodo-section arquitectura-section">
          <div className="section-number">03/08</div>
          <div className="section-card metodo-card">
            <div className="metodo-col metodo-col-right">
              <div className="metodo-col-header">
                <span className="metodo-col-label">Lo que analizamos</span>
                <p className="metodo-col-intro">No partimos de plantillas. Cada proyecto comienza con investigación específica sobre el estudio.</p>
              </div>
              <div className="metodo-list-item">
                <span className="metodo-number">01</span>
                <div className="metodo-content">
                  <h3>Tu identidad proyectual</h3>
                  <p>Comprendemos tu enfoque, tu manera de pensar el espacio y tu discurso arquitectónico.</p>
                </div>
              </div>
              <div className="metodo-list-item">
                <span className="metodo-number">02</span>
                <div className="metodo-content">
                  <h3>El tipo de obra que desarrollás</h3>
                  <p>Vivienda, comercial, público, refacciones. Cada tipo tiene su narrativa.</p>
                </div>
              </div>
              <div className="metodo-list-item">
                <span className="metodo-number">03</span>
                <div className="metodo-content">
                  <h3>Tu perfil de cliente ideal</h3>
                  <p>A quién le hablás, qué buscan, qué valoran, cómo toman decisiones.</p>
                </div>
              </div>
              <div className="metodo-list-item">
                <span className="metodo-number">04</span>
                <div className="metodo-content">
                  <h3>Cómo presentás tus proyectos hoy</h3>
                  <p>Qué funciona, qué no, dónde hay fricción, qué falta comunicar.</p>
                </div>
              </div>
              <div className="metodo-list-item">
                <span className="metodo-number">05</span>
                <div className="metodo-content">
                  <h3>Las tensiones conceptuales</h3>
                  <p>El balance entre lo conceptual y lo comercial, entre mostrar y explicar.</p>
                </div>
              </div>
              <div className="metodo-list-item">
                <span className="metodo-number">06</span>
                <div className="metodo-content">
                  <h3>Dependencia de redes sociales</h3>
                  <p>Si tu visibilidad depende exclusivamente de algoritmos que no controlás.</p>
                </div>
              </div>
            </div>

            <div
              className="metodo-col metodo-col-image"
              style={{
                backgroundImage: `url(${fondoCardPlano})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="metodo-overlay"></div>
              <h2 className="metodo-col-title">
                Antes de diseñar, analizamos
              </h2>
            </div>
          </div>
        </section>

        {/* SEPARADOR */}
        <div className="section-separator"></div>

        {/* DEMO - Caso de Estudio Completo */}
        <section id="demo" className="demo-completo-section arquitectura-section section-bg-alt">
          <div className="section-number">04/08</div>
          {/* INTRO */}
          <div className="demo-intro">
            <span className="demo-label">Caso de estudio</span>
            <h2 className="demo-main-title">BRÜNN STUDIO</h2>
            <p className="demo-lead">
              Demo conceptual desarrollada para demostrar nuestra comprensión profunda del sector de arquitectura. 
              No es un cliente real, es un ejercicio de investigación y aplicación de principios UX específicos para estudios de arquitectura.
            </p>
          </div>

          {/* PREVIEW VISUAL */}
          <div className="demo-preview">
            <div className="demo-preview-image">
              <img 
                src={BRUNNdemo} 
                alt="BRÜNN STUDIO - Demo Portfolio Digital" 
                className="demo-screenshot"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* PROCESO DE INVESTIGACIÓN */}
          <div className="demo-research">
            <div className="research-header">
              <span className="metodo-col-label">Fase 01 — Investigación</span>
              <h2 className="research-section-title">Entender antes de diseñar.</h2>
              <p className="research-section-intro">
                Estudiamos 40+ sitios de estudios de arquitectura e hicimos entrevistas con profesionales para saber qué frustra y qué convierte.
              </p>
            </div>

            <div className="demo-research-grid">
              <div className="demo-insight-card">
                <span className="insight-number">01</span>
                <h4 className="insight-title">El problema</h4>
                <p className="insight-finding">Portfolios genéricos sin narrativa ni proceso.</p>
                <p className="insight-body">La mayoría de estudios muestra imágenes, pero no explica cómo llegó a ellas. El cliente no entiende el valor real.</p>
              </div>

              <div className="demo-insight-card">
                <span className="insight-number">02</span>
                <h4 className="insight-title">Lo que buscan</h4>
                <p className="insight-finding">Filtrar clientes correctos antes del primer contacto.</p>
                <p className="insight-body">"Necesito que el sitio hable por mí. Que quien llegue ya sepa si estamos alineados."</p>
              </div>

              <div className="demo-insight-card">
                <span className="insight-number">03</span>
                <h4 className="insight-title">La solución</h4>
                <p className="insight-finding">Mostrar metodología con la misma fuerza que los renders.</p>
                <p className="insight-body">Los referentes del rubro exponen su proceso creativo. El resultado atrae al cliente ideal y aleja al que no encaja.</p>
              </div>
            </div>
          </div>

          {/* DECISIONES DE DISEÑO */}
          <div className="demo-decisions">
            <div className="research-header">
              <span className="metodo-col-label">Fase 02 — Decisiones de diseño</span>
              <h2 className="research-section-title">Cada elemento responde a un hallazgo.</h2>
              <p className="research-section-intro">
                Nada es decorativo. Tipografía, color, espacio y lenguaje fueron definidos a partir de lo que encontramos en la investigación.
              </p>
            </div>

            <div className="demo-decisions-grid">
              <div className="demo-decision-card">
                <Type className="demo-decision-icon" size={32} strokeWidth={1.5} />
                <h4>Tipografía técnica</h4>
                <p>Fuentes monoespaciadas que evocan planos. Comunica precisión.</p>
              </div>

              <div className="demo-decision-card">
                <Palette className="demo-decision-icon" size={32} strokeWidth={1.5} />
                <h4>Paleta monocromática</h4>
                <p>El color no compite con las fotos. La arquitectura es la protagonista.</p>
              </div>

              <div className="demo-decision-card">
                <Maximize2 className="demo-decision-icon" size={32} strokeWidth={1.5} />
                <h4>Espacio generoso</h4>
                <p>Padding 2-3x más grande. Los arquitectos valoran el espacio negativo.</p>
              </div>

              <div className="demo-decision-card">
                <MessageSquare className="demo-decision-icon" size={32} strokeWidth={1.5} />
                <h4>Lenguaje preciso</h4>
                <p>Sin marketing inflado. Términos técnicos que hablan al profesional.</p>
              </div>

              <div className="demo-decision-card">
                <BarChart3 className="demo-decision-icon" size={32} strokeWidth={1.5} />
                <h4>Jerarquía clara</h4>
                <p>Como en un plano: información ordenada por importancia visual.</p>
              </div>

              <div className="demo-decision-card">
                <Zap className="demo-decision-icon" size={32} strokeWidth={1.5} />
                <h4>Carga optimizada</h4>
                <p>Imágenes de alta calidad sin sacrificar velocidad. Tecnología que no estorba.</p>
              </div>
            </div>
          </div>

          {/* ESTRUCTURA DEL SITIO */}
          <div className="demo-structure">
            <div className="research-header">
              <span className="metodo-col-label">Fase 03 — Estructura del sitio</span>
              <h2 className="research-section-title">Arquitectura de información que comunica y convierte.</h2>
              <p className="research-section-intro">
                Cinco secciones, cada una con un objetivo específico. Nada sobra, nada falta.
              </p>
            </div>
            
            <div className="demo-structure-timeline">
              <div className="demo-structure-item">
                <div className="demo-structure-marker">01</div>
                <div className="demo-structure-content">
                  <h4>Home · Primer impacto</h4>
                  <p>Hero statement arquitectónico que posiciona al estudio en 3 segundos. Manifiesto visual que comunica filosofía de diseño sin explicaciones redundantes.</p>
                </div>
              </div>

              <div className="demo-structure-item">
                <div className="demo-structure-marker">02</div>
                <div className="demo-structure-content">
                  <h4>Filosofía · Cómo pensamos</h4>
                  <p>Metodología de trabajo expuesta con claridad. No promesas genéricas, sino proceso conceptual real. Tensión entre lo artístico y lo funcional explicada honestamente.</p>
                </div>
              </div>

              <div className="demo-structure-item">
                <div className="demo-structure-marker">03</div>
                <div className="demo-structure-content">
                  <h4>Obras · Proyectos con contexto</h4>
                  <p>Portfolio estructurado por tipología y escala. Cada proyecto incluye: briefing inicial, decisiones de diseño, materialidad, restricciones y resultado final. No solo fotos, sino narrativa proyectual.</p>
                </div>
              </div>

              <div className="demo-structure-item">
                <div className="demo-structure-marker">04</div>
                <div className="demo-structure-content">
                  <h4>Servicios · Qué ofrecemos</h4>
                  <p>Capacidades técnicas y alcance de proyectos. Desde anteproyecto hasta dirección de obra. Especialidades del estudio comunicadas con precisión profesional.</p>
                </div>
              </div>

              <div className="demo-structure-item">
                <div className="demo-structure-marker">05</div>
                <div className="demo-structure-content">
                  <h4>Contacto · Pre-calificación inteligente</h4>
                  <p>Formulario que filtra proyectos desde el primer contacto. Preguntas estratégicas sobre presupuesto, timing y expectativas. Ahorra tiempo para ambas partes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="demo-result">
            <span className="metodo-col-label">Tu turno</span>

            <div className="demo-result-layout">
              <div className="demo-result-left">
                <h2 className="demo-result-headline">
                  ¿Tu estudio necesita algo así?
                </h2>
              </div>

              <div className="demo-result-right">
                <div className="demo-trust-list">
                  <div className="demo-trust-row">
                    <span className="demo-trust-label">Diagnóstico sin costo</span>
                    <span className="demo-trust-desc">Primera consulta para entender tu estudio y qué necesitás comunicar.</span>
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-label">Entrega en 3–4 semanas</span>
                    <span className="demo-trust-desc">Proceso con etapas claras. Sabés en todo momento dónde estamos.</span>
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-label">Basado en investigación</span>
                    <span className="demo-trust-desc">Cada decisión responde a datos de tu sector, no a tendencias genéricas.</span>
                  </div>
                </div>

                <div className="demo-cta-buttons">
                  <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                    Solicitar diagnóstico
                    <ArrowRight size={18} />
                  </button>
                  <a 
                    href="https://brnn-demoarq.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-arq btn-arq-secondary"
                  >
                    Ver demo live
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="demo-disclaimer">
              <p><strong>Nota:</strong> BRÜNN STUDIO es un caso ficticio creado con fines demostrativos.</p>
            </div>
          </div>
        </section>

        {/* SEPARADOR */}
        <div className="section-separator"></div>

        {/* CAPACIDADES - Grid Sin Bordes */}
        <section id="capacidades" className="capacidades-section arquitectura-section">
          <div className="section-number">05/08</div>
          <div className="section-card">

            <div className="capacidades-header">
              <span className="metodo-col-label">Qué desarrollamos</span>
              <h2 className="capacidades-title">Todo lo que necesita<br />un estudio para crecer.</h2>
            </div>

            <div className="capacidades-grid">
              <div className="capacidad-item">
                <div className="capacidad-item-inner">
                  <Layout className="capacidad-icon" strokeWidth={1.5} />
                  <div>
                    <h3 className="capacidad-title">Identidad digital</h3>
                    <p className="capacidad-description">Naming, paleta, tipografía y tono de voz coordinados para que el sitio hable igual que tu estudio.</p>
                  </div>
                </div>
              </div>

              <div className="capacidad-item">
                <div className="capacidad-item-inner">
                  <Layers className="capacidad-icon" strokeWidth={1.5} />
                  <div>
                    <h3 className="capacidad-title">Estructuras narrativas</h3>
                    <p className="capacidad-description">Espacios digitales para explicar procesos, decisiones y pensamiento proyectual más allá de la imagen.</p>
                  </div>
                </div>
              </div>

              <div className="capacidad-item">
                <div className="capacidad-item-inner">
                  <Users className="capacidad-icon" strokeWidth={1.5} />
                  <div>
                    <h3 className="capacidad-title">Filtros de consulta inteligentes</h3>
                    <p className="capacidad-description">Formularios que califican y organizan contactos según el perfil de proyecto que te interesa.</p>
                  </div>
                </div>
              </div>

              <div className="capacidad-item">
                <div className="capacidad-item-inner">
                  <Search className="capacidad-icon" strokeWidth={1.5} />
                  <div>
                    <h3 className="capacidad-title">Optimización SEO</h3>
                    <p className="capacidad-description">Posicionamiento orgánico para atraer el tipo de cliente que buscás según tu zona y especialidad.</p>
                  </div>
                </div>
              </div>

              <div className="capacidad-item">
                <div className="capacidad-item-inner">
                  <Zap className="capacidad-icon" strokeWidth={1.5} />
                  <div>
                    <h3 className="capacidad-title">Infraestructura estable</h3>
                    <p className="capacidad-description">Tecnología sólida, rápida, escalable y preparada para evolucionar con tu estudio.</p>
                  </div>
                </div>
              </div>

              <div className="capacidad-item">
                <div className="capacidad-item-inner">
                  <TrendingUp className="capacidad-icon" strokeWidth={1.5} />
                  <div>
                    <h3 className="capacidad-title">Versión multiidioma</h3>
                    <p className="capacidad-description">Sitio en español e inglés para estudios que trabajan con clientes o concursos internacionales.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SEPARADOR */}
        <div className="section-separator"></div>

        {/* PROCESO - Timeline Vertical */}
        <section id="proceso" className="proceso-section arquitectura-section section-bg-alt">
          <div className="section-card">

            <div className="capacidades-header">
              <span className="metodo-col-label">Cómo trabajamos</span>
              <h2 className="capacidades-title">Un proceso hecho<br />para estudios exigentes.</h2>
            </div>

            <div className="proceso-timeline">
              {[
                { n: '01', title: 'Diagnóstico estratégico', desc: 'Conversación profunda con el estudio y análisis de identidad proyectual y situación actual.', dur: '2 días' },
                { n: '02', title: 'Definición de estructura', desc: 'Diseñamos la arquitectura digital del sitio: jerarquías, narrativa y flujo de información.', dur: '2 días' },
                { n: '03', title: 'Diseño visual', desc: 'Construimos una propuesta visual alineada con tu lenguaje proyectual y criterio estético.', dur: '3 días' },
                { n: '04', title: 'Desarrollo técnico', desc: 'Implementamos una plataforma sólida, optimizada, autogestionable y escalable.', dur: '3 días' },
                { n: '05', title: 'Lanzamiento + acompañamiento', desc: 'Puesta en línea, capacitación y seguimiento continuo durante la evolución del sitio.', dur: 'Ongoing' },
              ].map((step, i) => (
                <Motion.div
                  key={step.n}
                  className="proceso-item"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="proceso-marker">
                    <span className="proceso-marker-num">{step.n}</span>
                    {i < 4 && <div className="proceso-connector" />}
                  </div>
                  <div className="proceso-content">
                    <h3 className="proceso-step-title">{step.title}</h3>
                    <p className="proceso-description">{step.desc}</p>
                  </div>
                  <span className="proceso-duration">{step.dur}</span>
                </Motion.div>
              ))}
            </div>

            <p className="proceso-note">
              Los plazos son estimados según complejidad. Los ajustamos en el diagnóstico inicial.
            </p>
          </div>

          <div className="section-number">06/08</div>
        </section>

        {/* SEPARADOR */}
        <div className="section-separator"></div>

        {/* BENEFICIOS - Lista Editorial */}
        <section id="beneficios" className="beneficios-section arquitectura-section">
          <div className="section-card">
            <div className="capacidades-header">
              <span className="metodo-col-label">Resultados</span>
              <h2 className="capacidades-title">
                Qué cambia cuando<br />la estructura es correcta
              </h2>
            </div>

            <div className="beneficios-list">
              {[
                { num: "01", title: "Mayor claridad en la presentación", desc: "Tus proyectos se comprenden mejor porque la estructura digital acompaña tu narrativa arquitectónica." },
                { num: "02", title: "Percepción profesional elevada",     desc: "Un sitio bien pensado comunica seriedad, criterio y profesionalismo desde el primer contacto." },
                { num: "03", title: "Conversaciones más alineadas",       desc: "Atraés consultas más cercanas a tu perfil de trabajo porque tu sitio pre-educa al cliente." },
                { num: "04", title: "Independencia de redes sociales",    desc: "Una base digital propia que no depende de algoritmos ni de plataformas de terceros." },
                { num: "05", title: "Base sólida a largo plazo",          desc: "Infraestructura que crece con tu estudio y se adapta a nuevas necesidades sin rehacerlo todo." },
              ].map((item) => (
                <div className="beneficio-row" key={item.num}>
                  <span className="beneficio-num">{item.num}</span>
                  <div className="beneficio-body">
                    <h3 className="beneficio-row-title">{item.title}</h3>
                    <p className="beneficio-row-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="beneficios-statement">
              No prometemos resultados inmediatos.&nbsp;&nbsp;Construimos estructuras sostenibles.
            </p>
          </div>

          <div className="section-number">07/08</div>
        </section>

        {/* SEPARADOR */}
        <div className="section-separator"></div>

        {/* CTA FINAL */}
        <section id="cta" className="cta-final arquitectura-section section-bg-alt">
          <div className="cta-inner section-card">
            <div className="cta-col-title">
              <span className="metodo-col-label">Próximo paso</span>
              <h2 className="cta-headline">
                Una presencia digital coherente con tu identidad proyectual
              </h2>
            </div>

            <div className="cta-col-content">
              <p className="cta-body">
                Cada estudio tiene una lógica propia.<br />
                Nuestro trabajo consiste en traducir esa lógica al entorno digital con respeto y criterio.
              </p>
              <p className="cta-body">
                Si sentís que tu estudio necesita una estructura digital a la altura de su trabajo, podemos analizarlo juntos.
              </p>

              <div className="cta-buttons-col">
                <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                  Solicitar diagnóstico estratégico
                  <ArrowRight size={18} />
                </button>
                <button onClick={handleVerServicios} className="btn-arq btn-arq-secondary">
                  Ver más servicios
                </button>
              </div>
            </div>
          </div>

          <div className="section-number">08/08</div>
        </section>


      </div>
    </>
  );
}

export default Arquitectura;
