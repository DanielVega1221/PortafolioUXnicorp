'use client';

/**
 * PÁGINA: Gastronomía
 *
 * Migrada de React + React Router + i18n → Next.js 15 App Router
 * CSS 100% aislado — clases preservadas tal como estaban en el original
 */

import { useEffect } from 'react';
import TransitionLink from '@/components/TransitionLink';
import { usePageTransition } from '@/components/TransitionProvider';
import { motion as Motion } from 'framer-motion';
import {
  ArrowRight,
  Home,
  ExternalLink,
  BookOpen,
  Star,
  Clock,
  MapPin,
  Zap,
  Calendar,
  Utensils,
  Wine,
  Search,
} from 'lucide-react';
import './Gastronomia.css';

/* ─── Rutas de imágenes (movidas a /public) ─── */
const fondoRestaurante = '/conceptos/gastronomia/fondo.webp';
const kitchenImage     = '/conceptos/gastronomia/kitchen.webp';
const musicImage       = '/conceptos/gastronomia/music.webp';
const eventImage       = '/conceptos/gastronomia/event.webp';
const espressoImg      = '/conceptos/gastronomia/espresso.webp';
const negroniImg       = '/conceptos/gastronomia/negroni.webp';
const cevicheImg       = '/conceptos/gastronomia/ceviche.webp';
const tiramisuImg      = '/conceptos/gastronomia/tiramisu.webp';

const MAREA_DEMO_URL = 'https://marea-nine.vercel.app/';

/* ─── Contenido (del es.json original) ─── */
const texto = {
  hero: {
    eyebrow: 'La decisión de visitar un restaurante suele tomarse antes de salir de casa. Casi siempre empieza con una búsqueda.',
    titulo: 'Tu restaurante tiene alma.',
    sub: 'La pregunta es si tu presencia digital logra transmitirla.',
    btn1: 'Diagnóstico sin costo',
    btn2: 'Ver caso de estudio ↓',
  },
  realidad: {
    quote: 'Sabemos que dirigir un restaurante deja poco tiempo para pensar en la web.',
    label: 'La realidad del sector',
    titulo: 'La experiencia que vivís adentro no siempre llega antes que el cliente.',
    friccion1Titulo: 'Instagram como única vitrina',
    friccion1Texto: 'Las publicaciones desaparecen, la información se pierde y los clientes terminan llamando para preguntar cosas que ya deberían saber.',
    friccion2Titulo: 'La experiencia no se comunica online',
    friccion2Texto: 'El ambiente, la música, la cocina de autor, la selección de vinos. Todo eso define tu propuesta, y rara vez aparece con coherencia en lo digital.',
    friccion3Titulo: 'Información dispersa, cliente frustrado',
    friccion3Texto: 'Horarios en Google Maps, carta en un PDF viejo, eventos en Stories que ya vencieron. Cuando no encuentra lo que busca en segundos, elige otro lugar.',
  },
  mep: {
    label: 'Antes de diseñar',
    titulo: 'Entendemos tu lugar antes de tocar el código.',
    intro: 'Cada espacio gastronómico funciona distinto. Por eso empezamos escuchando.',
    items: [
      { titulo: 'El concepto del lugar', desc: 'Café de especialidad, restó de autor, bar de coctelería o espacio híbrido. Cada propuesta necesita una narrativa distinta.' },
      { titulo: 'Los momentos del día', desc: 'Muchos espacios cambian completamente entre mañana, tarde y noche. La web tiene que mostrar esa evolución.' },
      { titulo: 'Tu público real', desc: 'Vecinos, turistas, trabajadores, público nocturno. Entender quién llega cambia completamente cómo presentamos la información.' },
      { titulo: 'Cómo te descubren', desc: 'La mayoría de las visitas comienza en Google, redes sociales o una recomendación. Analizamos ese recorrido antes de diseñar.' },
      { titulo: 'La experiencia del espacio', desc: 'Terraza, música en vivo, menú degustación, galería. Identificamos qué hace que las personas quieran volver.' },
      { titulo: 'Los puntos de fricción', desc: 'Dónde se pierden clientes hoy: no encuentran el menú, no saben si hay reservas, no saben si el lugar está abierto.' },
    ],
  },
  marea: {
    label: 'Caso de estudio',
    titulo: 'MAREA',
    subtitulo: 'Café · Cocina · Bar',
    lead: 'Demo conceptual creada para mostrar cómo puede estructurarse digitalmente un restaurante contemporáneo. No es un cliente real — es un ejercicio de investigación aplicado al sector gastronómico.',
    investigacion: {
      label: 'Fase 01 — Investigación',
      titulo: 'Cómo buscan las personas dónde comer.',
      intro: 'Estudiamos el recorrido real de alguien que quiere encontrar un lugar para comer: qué consulta, qué mira y en qué momento decide.',
      insights: [
        { finding: 'Qué consulta.', body: 'Buscan por barrio, tipo de cocina o momento del día. Pocas veces buscan el nombre de un lugar — buscan una experiencia y comparan opciones.' },
        { finding: 'Qué mira.', body: 'Fotos del espacio, carta, horarios y ambiente. En ese orden, y en segundos. Si falta alguno, llenan el hueco con suposiciones — casi siempre negativas.' },
        { finding: 'En qué momento decide.', body: 'Antes de salir de casa. La visita ya está elegida —o descartada— mucho antes de llegar a la puerta. La web es el momento de la decisión.' },
      ],
    },
    decisiones: {
      label: 'Fase 02 — Decisiones de diseño',
      titulo: 'Cada elemento responde a cómo las personas descubren restaurantes.',
      items: [
        { titulo: 'Tipografía editorial', desc: 'Inspirada en publicaciones gastronómicas. La jerarquía visual guía al visitante antes que el texto.' },
        { titulo: 'Imágenes protagonistas', desc: 'La comida y el espacio cuentan la historia. El diseño no compite con ellas, las enmarca.' },
        { titulo: 'Narrativa del día', desc: 'El sitio muestra cómo evoluciona el restaurante: mañana de café, tarde de cocina, noche de bar.' },
        { titulo: 'Información siempre visible', desc: 'Menú, horarios, ubicación. Lo que el cliente busca primero, disponible en un clic, sin buscar.' },
        { titulo: 'Carga instantánea', desc: 'Imágenes optimizadas sin perder calidad. En mobile, un sitio lento es un cliente que ya cerró la pestaña.' },
        { titulo: 'Agenda integrada', desc: 'Jazz nights, brunchs, degustaciones, cenas especiales. Visibles, actualizables, sin depender de nadie.' },
      ],
    },
    estructura: {
      label: 'Fase 03 — Estructura del sitio',
      titulo: 'Una arquitectura pensada para tomar decisiones rápido.',
      items: [
        { titulo: 'Home', desc: 'Primera impresión clara del concepto del restaurante. El visitante entiende quién sos en los primeros segundos.' },
        { titulo: 'Experiencia', desc: 'Cómo cambia el lugar a lo largo del día. El mismo espacio contado en tres momentos distintos.' },
        { titulo: 'Carta', desc: 'Exploración simple de platos y bebidas por categoría, con imágenes reales que predisponen antes de llegar.' },
        { titulo: 'Eventos', desc: 'Agenda de actividades y noches especiales. Que el cliente descubra razones nuevas para volver.' },
        { titulo: 'Contacto', desc: 'Ubicación, horarios y reservas siempre visibles. Sin llamar, sin buscar en tres plataformas distintas.' },
      ],
    },
    cta: {
      label: 'Tu turno',
      headline: '¿Tu restaurante necesita algo así?',
      trust1: 'Diagnóstico sin costo',
      trust2: 'Proceso claro',
      trust3: 'Basado en investigación',
      btn1: 'Solicitar diagnóstico',
      btn2: 'Ver demo live',
      nota: 'MAREA es un caso ficticio creado con fines demostrativos.',
    },
  },
  menuDigital: {
    label: 'Qué desarrollamos',
    titulo: 'Todo lo que tu restaurante necesita para estar donde están tus clientes.',
    items: [
      { titulo: 'Cartas digitales bien estructuradas', desc: 'Menúes por categoría, con imágenes, precios y descripciones. Actualizables sin depender de nadie.' },
      { titulo: 'Agenda de eventos integrada', desc: 'Jazz nights, brunchs, cenas de degustación, pop-ups. Visibles, con fecha, sin hacer un Story que dura 24 horas.' },
      { titulo: 'SEO local estratégico', desc: 'Para aparecer cuando alguien busca "café de especialidad en [tu barrio]" o "restó con terraza en [tu ciudad]".' },
      { titulo: 'Identidad digital coherente', desc: 'Paleta, tipografía y tono de voz que hablan igual que tu espacio físico. Consistencia entre lo que se vive y lo que se ve.' },
      { titulo: 'Integración con reservas', desc: 'Sistemas de reserva online conectados a tu web. El cliente reserva en el momento; vos no dependés del teléfono.' },
      { titulo: 'Infraestructura rápida y estable', desc: 'Velocidad de carga optimizada, diseño mobile-first. La mayoría de tus clientes potenciales te busca desde el celular.' },
    ],
  },
  cambios: {
    label: 'Resultados',
    titulo: 'Qué cambia cuando la web habla por vos.',
    items: [
      'Los clientes entienden el concepto del lugar antes de entrar.',
      'La percepción de calidad aumenta antes de la primera visita.',
      'Encontrar información deja de ser un problema para el cliente.',
      'El contacto directo con el cliente no depende del alcance de una publicación.',
      'La presencia digital refleja la identidad real del espacio.',
    ],
  },
  cierre: {
    label: 'Una última cosa',
    titulo: 'Cada restaurante tiene su propio carácter.',
    sub: 'Nuestro trabajo consiste en traducir ese carácter al entorno digital.',
    cards: [
      { titulo: 'Basado en investigación real', desc: 'No intuiciones. Decisiones respaldadas en cómo las personas realmente descubren restaurantes.' },
      { titulo: 'Primera reunión sin costo', desc: 'Empezamos con una conversación para entender tu propuesta gastronómica y cómo se presenta hoy.' },
      { titulo: 'Proceso transparente', desc: 'Etapas claras y tiempos definidos. Sabés en todo momento en qué está tu proyecto.' },
    ],
    ctaCopy: 'Si sentís que tu presencia online no refleja lo que pasa dentro del lugar, podemos analizarlo juntos — sin costo y sin compromiso.',
    ctaBtn: 'Solicitar diagnóstico estratégico',
  },
};

const decisionIcons = [BookOpen, Star, Clock, MapPin, Zap, Calendar];
const menuIcons     = [Utensils, Calendar, Search, BookOpen, Wine, Zap];

export default function Gastronomia() {
  const { navigate } = usePageTransition();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSolicitarDiagnostico = () => {
    sessionStorage.setItem('uxn-scroll-to', 'contacto');
    navigate('/');
  };

  return (
    <div className="gastronomia-page">
      {/* Botón flotante volver */}
      <TransitionLink href="/" className="btn-home-gastro" aria-label="Volver al inicio">
        <Home size={20} strokeWidth={2} />
      </TransitionLink>

      {/* ── 01/07 HERO ── */}
      <Motion.section
        className="hero-gastro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-label="Hero gastronomía"
      >
        <div
          className="hero-gastro-bg"
          style={{
            backgroundImage: `url(${fondoRestaurante})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="hero-gastro-overlay" />
        <div className="section-tag section-tag-light">01 / 07</div>

        <div className="hero-gastro-content">
          <Motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {texto.hero.eyebrow}
          </Motion.p>

          <Motion.h1
            className="hero-gastro-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {texto.hero.titulo}
          </Motion.h1>

          <Motion.p
            className="hero-gastro-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {texto.hero.sub}
          </Motion.p>

          <Motion.div
            className="hero-gastro-ctas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button onClick={handleSolicitarDiagnostico} className="btn-gastro btn-gastro-primary">
              {texto.hero.btn1}
              <ArrowRight size={18} />
            </button>
            <a href="#marea" className="btn-gastro btn-gastro-ghost">
              {texto.hero.btn2}
            </a>
          </Motion.div>
        </div>
      </Motion.section>

      <div className="gastro-separator" />

      {/* ── 02/07 REALIDAD ── */}
      <section className="realidad-section" aria-label="La realidad del sector gastronómico">
        <div className="section-tag">02 / 07</div>
        <div className="realidad-card">
          <div
            className="realidad-col realidad-col-imagen"
            style={{
              backgroundImage: `url(${kitchenImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="realidad-col-overlay" />
            <blockquote className="realidad-quote">{texto.realidad.quote}</blockquote>
          </div>

          <div className="realidad-col realidad-col-texto">
            <div className="realidad-header">
              <span className="gastro-label">{texto.realidad.label}</span>
              <h2 className="realidad-titulo">{texto.realidad.titulo}</h2>
            </div>
            <div className="realidad-friccion">
              <div className="friccion-item">
                <h3>{texto.realidad.friccion1Titulo}</h3>
                <p>{texto.realidad.friccion1Texto}</p>
              </div>
              <div className="friccion-item">
                <h3>{texto.realidad.friccion2Titulo}</h3>
                <p>{texto.realidad.friccion2Texto}</p>
              </div>
              <div className="friccion-item">
                <h3>{texto.realidad.friccion3Titulo}</h3>
                <p>{texto.realidad.friccion3Texto}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gastro-separator" />

      {/* ── 03/07 MISE EN PLACE ── */}
      <section className="mep-section gastro-section" aria-label="Mise en place — análisis previo">
        <div className="section-tag">03 / 07</div>
        <span className="section-folio" aria-hidden="true">03</span>

        <div className="mep-header">
          <span className="gastro-label">{texto.mep.label}</span>
          <h2 className="mep-titulo">{texto.mep.titulo}</h2>
          <p className="mep-intro">{texto.mep.intro}</p>
        </div>

        <div className="mep-grid">
          {texto.mep.items.map((item, i) => (
            <div className="mep-item" key={i}>
              <span className="mep-numero">{String(i + 1).padStart(2, '0')}</span>
              <div className="mep-content">
                <h3>{item.titulo}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gastro-separator" />

      {/* ── 04/07 MAREA (caso de estudio) ── */}
      <section id="marea" className="marea-section" aria-label="Caso de estudio: MAREA">
        <div className="section-tag section-tag-light">04 / 07</div>

        <div className="marea-intro">
          <span className="gastro-label-light">{texto.marea.label}</span>
          <h2 className="marea-titulo">{texto.marea.titulo}</h2>
          <p className="marea-subtitulo">{texto.marea.subtitulo}</p>
          <p className="marea-lead">{texto.marea.lead}</p>
        </div>

        {/* Mosaico visual */}
        <div className="marea-mosaic" aria-hidden="true">
          <div className="mosaic-item mosaic-tall" data-label="CAFÉ">
            <img src={espressoImg} alt="Espresso — Marea café" loading="lazy" decoding="async" />
          </div>
          <div className="mosaic-item mosaic-a" data-label="BAR">
            <img src={negroniImg} alt="Negroni clásico — Marea bar" loading="lazy" decoding="async" />
          </div>
          <div className="mosaic-item mosaic-b" data-label="COCINA">
            <img src={cevicheImg} alt="Ceviche — Marea cocina" loading="lazy" decoding="async" />
          </div>
          <div className="mosaic-item mosaic-c" data-label="EVENTOS">
            <img src={eventImage} alt="Eventos en Marea" loading="lazy" decoding="async" />
          </div>
          <div className="mosaic-item mosaic-d" data-label="POSTRES">
            <img src={tiramisuImg} alt="Tiramisú — Marea postres" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Fases */}
        <div className="marea-fases">
          {/* Fase 01 */}
          <div className="marea-fase">
            <div className="fase-header">
              <span className="gastro-label-light">{texto.marea.investigacion.label}</span>
              <h3 className="fase-titulo">{texto.marea.investigacion.titulo}</h3>
              <p className="fase-intro">{texto.marea.investigacion.intro}</p>
            </div>
            <div className="fase-insights">
              {texto.marea.investigacion.insights.map((ins, i) => (
                <div className="insight-card" key={i}>
                  <span className="insight-n">{String(i + 1).padStart(2, '0')}</span>
                  <p className="insight-finding">{ins.finding}</p>
                  <p>{ins.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fase 02 */}
          <div className="marea-fase">
            <div className="fase-header">
              <span className="gastro-label-light">{texto.marea.decisiones.label}</span>
              <h3 className="fase-titulo">{texto.marea.decisiones.titulo}</h3>
            </div>
            <div className="fase-decisions">
              {texto.marea.decisiones.items.map((item, i) => {
                const Icon = decisionIcons[i];
                return (
                  <div className="decision-card" key={i}>
                    <Icon size={28} strokeWidth={1.5} />
                    <h4>{item.titulo}</h4>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fase 03 */}
          <div className="marea-fase">
            <div className="fase-header">
              <span className="gastro-label-light">{texto.marea.estructura.label}</span>
              <h3 className="fase-titulo">{texto.marea.estructura.titulo}</h3>
            </div>
            <div className="fase-timeline">
              {texto.marea.estructura.items.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div>
                  <div className="timeline-body">
                    <h4>{item.titulo}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA dentro del caso */}
        <div className="marea-cta-block">
          <div className="marea-cta-header">
            <span className="gastro-label-light">{texto.marea.cta.label}</span>
            <h3 className="marea-cta-headline">{texto.marea.cta.headline}</h3>
          </div>
          <div className="marea-trust-row">
            <div className="trust-pill">
              <span className="trust-pill-dot" />
              {texto.marea.cta.trust1}
            </div>
            <div className="trust-pill">
              <span className="trust-pill-dot" />
              {texto.marea.cta.trust2}
            </div>
            <div className="trust-pill">
              <span className="trust-pill-dot" />
              {texto.marea.cta.trust3}
            </div>
          </div>
          <div className="marea-cta-buttons">
            <button
              onClick={handleSolicitarDiagnostico}
              className="btn-gastro btn-gastro-primary btn-gastro-lg"
            >
              {texto.marea.cta.btn1}
              <ArrowRight size={18} />
            </button>
            <a
              href={MAREA_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gastro btn-gastro-ghost-light btn-gastro-lg"
            >
              {texto.marea.cta.btn2}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <p className="marea-disclaimer">
          <strong>Nota:</strong> {texto.marea.cta.nota}
        </p>
      </section>

      {/* ── 05/07 MENÚ DIGITAL ── */}
      <section className="menu-digital-section gastro-section" aria-label="Qué desarrollamos">
        <div className="section-tag">05 / 07</div>
        <span className="section-folio" aria-hidden="true">05</span>

        <div className="menu-digital-header">
          <span className="gastro-label">{texto.menuDigital.label}</span>
          <h2 className="menu-digital-titulo">{texto.menuDigital.titulo}</h2>
        </div>

        <div className="menu-digital-grid">
          {texto.menuDigital.items.map((item, i) => {
            const Icon = menuIcons[i];
            return (
              <div className="menu-digital-item" key={i}>
                <Icon className="menu-icon" size={30} strokeWidth={1.5} />
                <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="gastro-separator" />

      {/* ── 06/07 QUÉ CAMBIA ── */}
      <section
        className="cambios-section"
        style={{
          backgroundImage: `url(${musicImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Resultados"
      >
        <div className="cambios-overlay" />
        <div className="section-tag section-tag-light">06 / 07</div>

        <div className="cambios-content">
          <div className="cambios-left">
            <span className="gastro-label-light">{texto.cambios.label}</span>
            <h2 className="cambios-titulo">{texto.cambios.titulo}</h2>
          </div>
          <div className="cambios-lista">
            {texto.cambios.items.map((item, i) => (
              <div className="cambio-item" key={i}>
                <span className="cambio-n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gastro-separator" />

      {/* ── 07/07 CIERRE ── */}
      <section className="cierre-section gastro-section" aria-label="Cierre">
        <div className="section-tag section-tag-light">07 / 07</div>

        <div className="cierre-headline">
          <span className="gastro-label-light">{texto.cierre.label}</span>
          <h2 className="cierre-titulo">{texto.cierre.titulo}</h2>
          <p className="cierre-sub">{texto.cierre.sub}</p>
        </div>

        <div className="cierre-cards">
          {texto.cierre.cards.map((card, i) => (
            <div className="cierre-card" key={i}>
              <span className="cierre-card-n">{String(i + 1).padStart(2, '0')}</span>
              <strong>{card.titulo}</strong>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="cierre-cta">
          <p className="cierre-cta-copy">{texto.cierre.ctaCopy}</p>
          <button
            onClick={handleSolicitarDiagnostico}
            className="btn-gastro btn-gastro-primary btn-gastro-lg"
          >
            {texto.cierre.ctaBtn}
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
