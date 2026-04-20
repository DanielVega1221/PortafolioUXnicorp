'use client';

/**
 * PÁGINA: Arquitectura
 *
 * Migrada de React + React Router + i18n → Next.js 15 App Router
 * CSS 100% aislado — clases preservadas tal como estaban en el original
 */

import { useEffect } from 'react';
import TransitionLink from '@/components/TransitionLink';
import { useRouter } from 'next/navigation';
import { usePageTransition } from '@/components/TransitionProvider';
import { motion as Motion } from 'framer-motion';
import {
  ArrowRight,
  Home,
  ExternalLink,
  Type,
  Palette,
  Maximize2,
  MessageSquare,
  BarChart3,
  Layout,
  Layers,
  Users,
  Search,
  Zap,
  TrendingUp,
} from 'lucide-react';
import './Arquitectura.css';

/* ─── Rutas de imágenes (movidas a /public) ─── */
const fondoARQ       = '/conceptos/arq/fondoARQ.webp';
const BRUNNdemo      = '/conceptos/arq/BRUNNdemo.webp';
const fondoCardARQ   = '/conceptos/arq/fondocardarq.webp';
const fondoCardPlano = '/conceptos/arq/fondocardplano.webp';

/* ─── Contenido (del es.json original) ─── */
const texto = {
  hero: {
    titulo: 'Desarrollo digital estratégico',
    subtitulo:
      'Creamos estructuras digitales que permiten comunicar proyectos con claridad, criterio y coherencia profesional para estudios de arquitectura.',
    btn1: 'Solicitar diagnóstico',
    btn2: 'Ver caso de estudio ↓',
  },
  validacion: {
    label: 'Por qué elegirnos',
    titulo: 'Entendemos tu proceso',
    intro:
      'Conocemos las tensiones reales que vive un estudio de arquitectura al buscar presencia digital.',
    bloques: [
      {
        titulo: 'Proceso, no solo resultado',
        texto:
          'Una obra no es solo imagen. Es decisiones, materialidad y contexto. Tu sitio web tampoco debería reducir tu trabajo a una simple galería.',
      },
      {
        titulo: 'Tensión conceptual vs. comercial',
        texto:
          'Querés atraer clientes sin comprometer tu discurso. Entendemos esa tensión porque la hemos analizado en profundidad con estudios de arquitectura.',
      },
      {
        titulo: 'Independencia de redes sociales',
        texto:
          'Instagram no puede ser tu único portafolio. Necesitás una base digital que respalde tu identidad profesional a largo plazo.',
      },
    ],
  },
  metodo: {
    label: 'Lo que analizamos',
    intro: 'No partimos de plantillas. Cada proyecto comienza con investigación específica sobre el estudio.',
    titulo: 'Antes de diseñar, analizamos',
    items: [
      { titulo: 'Tu identidad proyectual', desc: 'Comprendemos tu enfoque, tu manera de pensar el espacio y tu discurso arquitectónico.' },
      { titulo: 'El tipo de obra que desarrollás', desc: 'Vivienda, comercial, público, refacciones. Cada tipo tiene su narrativa.' },
      { titulo: 'Tu perfil de cliente ideal', desc: 'A quién le hablás, qué buscan, qué valoran, cómo toman decisiones.' },
      { titulo: 'Cómo presentás tus proyectos hoy', desc: 'Qué funciona, qué no, dónde hay fricción, qué falta comunicar.' },
      { titulo: 'Las tensiones conceptuales', desc: 'El balance entre lo conceptual y lo comercial, entre mostrar y explicar.' },
      { titulo: 'Dependencia de redes sociales', desc: 'Si tu visibilidad depende exclusivamente de algoritmos que no controlás.' },
    ],
  },
  demo: {
    label: 'Caso de estudio',
    titulo: 'BRÜNN STUDIO',
    lead: 'Demo conceptual desarrollada para demostrar nuestra comprensión profunda del sector de arquitectura. No es un cliente real, es un ejercicio de investigación y aplicación de principios UX específicos.',
    investigacion: {
      label: 'Fase 01 — Investigación',
      titulo: 'Entender antes de diseñar.',
      intro: 'Estudiamos 40+ sitios de estudios de arquitectura e hicimos entrevistas con profesionales para saber qué frustra y qué convierte.',
      insights: [
        {
          titulo: 'El problema',
          finding: 'Portfolios genéricos sin narrativa ni proceso.',
          body: 'La mayoría de estudios muestra imágenes, pero no explica cómo llegó a ellas. El cliente no entiende el valor real.',
        },
        {
          titulo: 'Lo que buscan',
          finding: 'Filtrar clientes correctos antes del primer contacto.',
          body: '"Necesito que el sitio hable por mí. Que quien llegue ya sepa si estamos alineados."',
        },
        {
          titulo: 'La solución',
          finding: 'Mostrar metodología con la misma fuerza que los renders.',
          body: 'Los referentes del rubro exponen su proceso creativo. El resultado atrae al cliente ideal y aleja al que no encaja.',
        },
      ],
    },
    decisiones: {
      label: 'Fase 02 — Decisiones de diseño',
      titulo: 'Cada elemento responde a un hallazgo.',
      intro: 'Nada es decorativo. Tipografía, color, espacio y lenguaje fueron definidos a partir de lo que encontramos en la investigación.',
      items: [
        { titulo: 'Tipografía técnica', desc: 'Fuentes monoespaciadas que evocan planos. Comunica precisión.' },
        { titulo: 'Paleta monocromática', desc: 'El color no compite con las fotos. La arquitectura es la protagonista.' },
        { titulo: 'Espacio generoso', desc: 'Padding 2-3x más grande. Los arquitectos valoran el espacio negativo.' },
        { titulo: 'Lenguaje preciso', desc: 'Sin marketing inflado. Términos técnicos que hablan al profesional.' },
        { titulo: 'Jerarquía clara', desc: 'Como en un plano: información ordenada por importancia visual.' },
        { titulo: 'Carga optimizada', desc: 'Imágenes de alta calidad sin sacrificar velocidad. Tecnología que no estorba.' },
      ],
    },
    estructura: {
      label: 'Fase 03 — Estructura del sitio',
      titulo: 'Arquitectura de información que comunica y convierte.',
      intro: 'Cinco secciones, cada una con un objetivo específico. Nada sobra, nada falta.',
      items: [
        { titulo: 'Home · Primer impacto', desc: 'Hero statement arquitectónico que posiciona al estudio en 3 segundos. Manifiesto visual que comunica filosofía de diseño sin explicaciones redundantes.' },
        { titulo: 'Filosofía · Cómo pensamos', desc: 'Metodología de trabajo expuesta con claridad. No promesas genéricas, sino proceso conceptual real.' },
        { titulo: 'Obras · Proyectos con contexto', desc: 'Portfolio estructurado por tipología y escala. Cada proyecto incluye: briefing, decisiones, materialidad y resultado. No solo fotos, sino narrativa proyectual.' },
        { titulo: 'Servicios · Qué ofrecemos', desc: 'Capacidades técnicas y alcance de proyectos. Especialidades del estudio comunicadas con precisión profesional.' },
        { titulo: 'Contacto · Pre-calificación inteligente', desc: 'Formulario que filtra proyectos desde el primer contacto. Preguntas estratégicas sobre presupuesto, timing y expectativas.' },
      ],
    },
    resultado: {
      label: 'Tu turno',
      headline: '¿Tu estudio necesita algo así?',
      trust: [
        { label: 'Diagnóstico sin costo', desc: 'Primera consulta para entender tu estudio y qué necesitás comunicar.' },
        { label: 'Entrega en 1-2 semanas', desc: 'Proceso con etapas claras. Sabés en todo momento dónde estamos.' },
        { label: 'Basado en investigación', desc: 'Cada decisión responde a datos de tu sector, no a tendencias genéricas.' },
      ],
      btn1: 'Solicitar diagnóstico',
      btn2: 'Ver demo live',
      nota: 'BRÜNN STUDIO es un caso ficticio creado con fines demostrativos.',
    },
  },
  capacidades: {
    label: 'Qué desarrollamos',
    titulo: 'Todo lo que necesita un estudio para crecer.',
    items: [
      { titulo: 'Identidad digital', desc: 'Naming, paleta, tipografía y tono de voz coordinados para que el sitio hable igual que tu estudio.' },
      { titulo: 'Estructuras narrativas', desc: 'Espacios digitales para explicar procesos, decisiones y pensamiento proyectual más allá de la imagen.' },
      { titulo: 'Filtros de consulta inteligentes', desc: 'Formularios que califican y organizan contactos según el perfil de proyecto que te interesa.' },
      { titulo: 'Optimización SEO', desc: 'Posicionamiento orgánico para atraer el tipo de cliente que buscás según tu zona y especialidad.' },
      { titulo: 'Infraestructura estable', desc: 'Tecnología sólida, rápida, escalable y preparada para evolucionar con tu estudio.' },
      { titulo: 'Versión multiidioma', desc: 'Sitio en español e inglés para estudios que trabajan con clientes o concursos internacionales.' },
    ],
  },
  proceso: {
    label: 'Cómo trabajamos',
    titulo: 'Un proceso hecho para estudios exigentes.',
    nota: 'Los plazos son estimados según complejidad. Los ajustamos en el diagnóstico inicial.',
    items: [
      { titulo: 'Diagnóstico estratégico', desc: 'Conversación profunda con el estudio y análisis de identidad proyectual y situación actual.', dur: '2 días' },
      { titulo: 'Definición de estructura', desc: 'Diseñamos la arquitectura digital del sitio: jerarquías, narrativa y flujo de información.', dur: '2 días' },
      { titulo: 'Diseño visual', desc: 'Construimos una propuesta visual alineada con tu lenguaje proyectual y criterio estético.', dur: '3 días' },
      { titulo: 'Desarrollo técnico', desc: 'Implementamos una plataforma sólida, optimizada, autogestionable y escalable.', dur: '3 días' },
      { titulo: 'Lanzamiento + acompañamiento', desc: 'Puesta en línea, capacitación y seguimiento continuo durante la evolución del sitio.', dur: 'Ongoing' },
    ],
  },
  beneficios: {
    label: 'Resultados',
    titulo: 'Qué cambia cuando la estructura es correcta',
    declaracion: 'No prometemos resultados inmediatos. Construimos estructuras sostenibles.',
    items: [
      { titulo: 'Mayor claridad en la presentación', desc: 'Tus proyectos se comprenden mejor porque la estructura digital acompaña tu narrativa arquitectónica.' },
      { titulo: 'Percepción profesional elevada', desc: 'Un sitio bien pensado comunica seriedad, criterio y profesionalismo desde el primer contacto.' },
      { titulo: 'Conversaciones más alineadas', desc: 'Atraés consultas más cercanas a tu perfil de trabajo porque tu sitio pre-educa al cliente.' },
      { titulo: 'Independencia de redes sociales', desc: 'Una base digital propia que no depende de algoritmos ni de plataformas de terceros.' },
      { titulo: 'Base sólida a largo plazo', desc: 'Infraestructura que crece con tu estudio y se adapta a nuevas necesidades sin rehacerlo todo.' },
    ],
  },
  cta: {
    label: 'Próximo paso',
    headline: 'Una presencia digital coherente con tu identidad proyectual',
    body1: 'Cada estudio tiene una lógica propia. Nuestro trabajo consiste en traducir esa lógica al entorno digital con respeto y criterio.',
    body2: 'Si sentís que tu estudio necesita una estructura digital a la altura de su trabajo, podemos analizarlo juntos.',
    btn1: 'Solicitar diagnóstico estratégico',
    btn2: 'Ver más servicios',
  },
};

export default function Arquitectura() {
  const router = useRouter();
  const { navigate } = usePageTransition();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSolicitarDiagnostico = () => {
    sessionStorage.setItem('uxn-scroll-to', 'contacto');
    navigate('/');
  };

  const handleVerServicios = () => {
    router.push('/servicios');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const decisionIcons = [Type, Palette, Maximize2, MessageSquare, BarChart3, Zap];
  const capIcons      = [Layout, Layers, Users, Search, Zap, TrendingUp];

  return (
    <div className="arquitectura-page">
      {/* Botón flotante volver a Home */}
      <TransitionLink href="/" className="btn-home-float" aria-label="Volver al inicio">
        <Home size={20} strokeWidth={2} />
      </TransitionLink>

      {/* ── 01/08 HERO ── */}
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
          position: 'relative',
        }}
      >
        <div className="hero-overlay" />
        <div className="section-number">01/08</div>
        <div className="hero-content">
          <Motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {texto.hero.titulo.split(' ').slice(0, 1).join(' ')}
            <br />
            {texto.hero.titulo.split(' ').slice(1).join(' ')}
          </Motion.h1>

          <Motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {texto.hero.subtitulo}
          </Motion.p>

          <div className="hero-divider" />

          <Motion.div
            className="hero-ctas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
              {texto.hero.btn1}
              <ArrowRight size={18} />
            </button>
            <a href="#demo" className="btn-arq btn-arq-ghost">
              {texto.hero.btn2}
            </a>
          </Motion.div>
        </div>
      </Motion.section>

      <div className="section-separator" />

      {/* ── 02/08 VALIDACIÓN ── */}
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
              position: 'relative',
            }}
          >
            <div className="validacion-overlay" />
            <h2 className="validacion-title">{texto.validacion.titulo}</h2>
          </div>

          <div className="validacion-col validacion-col-right">
            <div className="metodo-col-header">
              <span className="metodo-col-label">{texto.validacion.label}</span>
              <p className="metodo-col-intro">{texto.validacion.intro}</p>
            </div>
            {texto.validacion.bloques.map((bloque, i) => (
              <div className="validacion-block" key={i}>
                <h3 className="validacion-block-title">{bloque.titulo}</h3>
                <p className="validacion-block-text">{bloque.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* ── 03/08 MÉTODO ── */}
      <section id="metodo" className="metodo-section arquitectura-section">
        <div className="section-number">03/08</div>
        <div className="section-card metodo-card">
          <div className="metodo-col metodo-col-right">
            <div className="metodo-col-header">
              <span className="metodo-col-label">{texto.metodo.label}</span>
              <p className="metodo-col-intro">{texto.metodo.intro}</p>
            </div>
            {texto.metodo.items.map((item, i) => (
              <div className="metodo-list-item" key={i}>
                <span className="metodo-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="metodo-content">
                  <h3>{item.titulo}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
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
            <div className="metodo-overlay" />
            <h2 className="metodo-col-title">{texto.metodo.titulo}</h2>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* ── 04/08 DEMO ── */}
      <section id="demo" className="demo-completo-section arquitectura-section section-bg-alt">
        <div className="section-number">04/08</div>

        <div className="demo-intro">
          <span className="demo-label">{texto.demo.label}</span>
          <h2 className="demo-main-title">{texto.demo.titulo}</h2>
          <p className="demo-lead">{texto.demo.lead}</p>
        </div>

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

        {/* Investigación */}
        <div className="demo-research">
          <div className="research-header">
            <span className="metodo-col-label">{texto.demo.investigacion.label}</span>
            <h2 className="research-section-title">{texto.demo.investigacion.titulo}</h2>
            <p className="research-section-intro">{texto.demo.investigacion.intro}</p>
          </div>
          <div className="demo-research-grid">
            {texto.demo.investigacion.insights.map((insight, i) => (
              <div className="demo-insight-card" key={i}>
                <span className="insight-number">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="insight-title">{insight.titulo}</h4>
                <p className="insight-finding">{insight.finding}</p>
                <p className="insight-body">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decisiones de diseño */}
        <div className="demo-decisions">
          <div className="research-header">
            <span className="metodo-col-label">{texto.demo.decisiones.label}</span>
            <h2 className="research-section-title">{texto.demo.decisiones.titulo}</h2>
            <p className="research-section-intro">{texto.demo.decisiones.intro}</p>
          </div>
          <div className="demo-decisions-grid">
            {texto.demo.decisiones.items.map((item, i) => {
              const Icon = decisionIcons[i];
              return (
                <div className="demo-decision-card" key={i}>
                  <Icon className="demo-decision-icon" size={32} strokeWidth={1.5} />
                  <h4>{item.titulo}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Estructura */}
        <div className="demo-structure">
          <div className="research-header">
            <span className="metodo-col-label">{texto.demo.estructura.label}</span>
            <h2 className="research-section-title">{texto.demo.estructura.titulo}</h2>
            <p className="research-section-intro">{texto.demo.estructura.intro}</p>
          </div>
          <div className="demo-structure-timeline">
            {texto.demo.estructura.items.map((item, i) => (
              <div className="demo-structure-item" key={i}>
                <div className="demo-structure-marker">{String(i + 1).padStart(2, '0')}</div>
                <div className="demo-structure-content">
                  <h4>{item.titulo}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA resultado */}
        <div className="demo-result">
          <span className="metodo-col-label">{texto.demo.resultado.label}</span>
          <div className="demo-result-layout">
            <div className="demo-result-left">
              <h2 className="demo-result-headline">{texto.demo.resultado.headline}</h2>
            </div>
            <div className="demo-result-right">
              <div className="demo-trust-list">
                {texto.demo.resultado.trust.map((row, i) => (
                  <div className="demo-trust-row" key={i}>
                    <span className="demo-trust-label">{row.label}</span>
                    <span className="demo-trust-desc">{row.desc}</span>
                  </div>
                ))}
              </div>
              <div className="demo-cta-buttons">
                <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                  {texto.demo.resultado.btn1}
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://brnn-demoarq.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-arq btn-arq-secondary"
                >
                  {texto.demo.resultado.btn2}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="demo-disclaimer">
            <p><strong>Nota:</strong> {texto.demo.resultado.nota}</p>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* ── 05/08 CAPACIDADES ── */}
      <section id="capacidades" className="capacidades-section arquitectura-section">
        <div className="section-number">05/08</div>
        <div className="section-card">
          <div className="capacidades-header">
            <span className="metodo-col-label">{texto.capacidades.label}</span>
            <h2 className="capacidades-title">{texto.capacidades.titulo}</h2>
          </div>
          <div className="capacidades-grid">
            {texto.capacidades.items.map((item, i) => {
              const Icon = capIcons[i];
              return (
                <div className="capacidad-item" key={i}>
                  <div className="capacidad-item-inner">
                    <Icon className="capacidad-icon" strokeWidth={1.5} />
                    <div>
                      <h3 className="capacidad-title">{item.titulo}</h3>
                      <p className="capacidad-description">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* ── 06/08 PROCESO ── */}
      <section id="proceso" className="proceso-section arquitectura-section section-bg-alt">
        <div className="section-card">
          <div className="capacidades-header">
            <span className="metodo-col-label">{texto.proceso.label}</span>
            <h2 className="capacidades-title">{texto.proceso.titulo}</h2>
          </div>
          <div className="proceso-timeline">
            {texto.proceso.items.map((step, i) => (
              <Motion.div
                key={i}
                className="proceso-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="proceso-marker">
                  <span className="proceso-marker-num">{String(i + 1).padStart(2, '0')}</span>
                  {i < texto.proceso.items.length - 1 && <div className="proceso-connector" />}
                </div>
                <div className="proceso-content">
                  <h3 className="proceso-step-title">{step.titulo}</h3>
                  <p className="proceso-description">{step.desc}</p>
                </div>
                <span className="proceso-duration">{step.dur}</span>
              </Motion.div>
            ))}
          </div>
          <p className="proceso-note">{texto.proceso.nota}</p>
        </div>
        <div className="section-number">06/08</div>
      </section>

      <div className="section-separator" />

      {/* ── 07/08 BENEFICIOS ── */}
      <section id="beneficios" className="beneficios-section arquitectura-section">
        <div className="section-card">
          <div className="capacidades-header">
            <span className="metodo-col-label">{texto.beneficios.label}</span>
            <h2 className="capacidades-title">{texto.beneficios.titulo}</h2>
          </div>
          <div className="beneficios-list">
            {texto.beneficios.items.map((item, i) => (
              <div className="beneficio-row" key={i}>
                <span className="beneficio-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="beneficio-body">
                  <h3 className="beneficio-row-title">{item.titulo}</h3>
                  <p className="beneficio-row-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="beneficios-statement">{texto.beneficios.declaracion}</p>
        </div>
        <div className="section-number">07/08</div>
      </section>

      <div className="section-separator" />

      {/* ── 08/08 CTA FINAL ── */}
      <section id="cta" className="cta-final arquitectura-section section-bg-alt">
        <div className="cta-inner section-card">
          <div className="cta-col-title">
            <span className="metodo-col-label">{texto.cta.label}</span>
            <h2 className="cta-headline">{texto.cta.headline}</h2>
          </div>
          <div className="cta-col-content">
            <p className="cta-body">{texto.cta.body1}</p>
            <p className="cta-body">{texto.cta.body2}</p>
            <div className="cta-buttons-col">
              <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                {texto.cta.btn1}
                <ArrowRight size={18} />
              </button>
              <button onClick={handleVerServicios} className="btn-arq btn-arq-secondary">
                {texto.cta.btn2}
              </button>
            </div>
          </div>
        </div>
        <div className="section-number">08/08</div>
      </section>
    </div>
  );
}
