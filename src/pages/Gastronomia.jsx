/**
 * PÁGINA: Gastronomía
 *
 * Landing para restaurantes, bares y cafés.
 * Diseño: editorial gastronómico, cálido, sensorial.
 * No es un copy de Arquitectura — tiene su propio lenguaje visual.
 *
 * Ruta: /gastronomia
 */

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import { seoConfig } from '../utils/seoConfig';

/* ─── Imágenes MAREA (demo conceptual) ─── */
import fondoRestaurante  from '../assets/Gastronomia/fondo.webp';
import kitchenImage      from '../assets/Gastronomia/kitchen.webp';
import musicImage        from '../assets/Gastronomia/music.webp';
import eventImage        from '../assets/Gastronomia/event.webp';
import espressoImg       from '../assets/Gastronomia/espresso.webp';
import negroniImg        from '../assets/Gastronomia/negroni.webp';
import cevicheImg        from '../assets/Gastronomia/ceviche.webp';
import tiramisuImg       from '../assets/Gastronomia/tiramisu.webp';

import './Gastronomia.css';

/* URL de la demo en vivo de MAREA — actualizar cuando esté publicada */
const MAREA_DEMO_URL = 'https://marea-nine.vercel.app/';

function Gastronomia() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSolicitarDiagnostico = () => {
    navigate('/', { state: { servicioInteres: 'Diagnóstico para restaurante / gastronomía' } });
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  };

  const seo = seoConfig.gastronomia || {
    title: 'Desarrollo Digital para Restaurantes y Gastronomía | UXnicorp',
    description: 'Presencia digital para restaurantes, bares y cafés. Cartas digitales, agenda de eventos y SEO local. Traducimos la experiencia gastronómica al entorno digital.',
    keywords: 'desarrollo web restaurantes argentina, sitio web bar, presencia digital gastronomía, carta digital restaurante, seo local restaurante argentina',
    canonical: 'https://www.uxnicorp.com.ar/gastronomia',
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />

        <meta property="og:title" content={seo.ogTitle || seo.title} />
        <meta property="og:description" content={seo.ogDescription || seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seo.ogImage || 'https://www.uxnicorp.com.ar/og-image.jpg'} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:site_name" content="UXnicorp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.ogTitle || seo.title} />
        <meta name="twitter:description" content={seo.ogDescription || seo.description} />
        <meta name="twitter:image" content={seo.ogImage || 'https://www.uxnicorp.com.ar/og-image.jpg'} />

        {seo.schema && (
          <script type="application/ld+json">{JSON.stringify(seo.schema)}</script>
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

      <div className="gastronomia-page">

        {/* Botón flotante volver */}
        <Link to="/" className="btn-home-gastro" aria-label="Volver al inicio">
          <Home size={20} strokeWidth={2} />
        </Link>

        {/* ──────────────────────────────────────────────────────────
            01 / 07 — HERO
            "La decisión de visitarte ya se tomó antes de llegar."
        ────────────────────────────────────────────────────────── */}
        <Motion.section
          className="hero-gastro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          aria-label="Hero gastronomía"
        >
          {/* Fondo separado para poder aplicar filter: blur() */}
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
              La decisión de visitar un restaurante suele tomarse
              antes de salir de casa. Casi siempre empieza con una búsqueda.
            </Motion.p>

            <Motion.h1
              className="hero-gastro-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Tu restaurante<br />
              tiene alma.
            </Motion.h1>

            <Motion.p
              className="hero-gastro-sub"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              La pregunta es si tu presencia digital logra transmitirla.
            </Motion.p>

            <Motion.div
              className="hero-gastro-ctas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                onClick={handleSolicitarDiagnostico}
                className="btn-gastro btn-gastro-primary"
              >
                Diagnóstico sin costo
                <ArrowRight size={18} />
              </button>
              <a href="#marea" className="btn-gastro btn-gastro-ghost">
                Ver caso de estudio ↓
              </a>
            </Motion.div>
          </div>
        </Motion.section>

        <div className="gastro-separator" />

        {/* ──────────────────────────────────────────────────────────
            02 / 07 — LA REALIDAD
            Split card: imagen con quote / texto con puntos de fricción
        ────────────────────────────────────────────────────────── */}
        <section className="realidad-section" aria-label="La realidad del sector gastronómico">
          <div className="section-tag">02 / 07</div>

          <div className="realidad-card">
            {/* Columna izquierda — imagen + quote */}
            <div
              className="realidad-col realidad-col-imagen"
              style={{
                backgroundImage: `url(${kitchenImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="realidad-col-overlay" />
              <blockquote className="realidad-quote">
                "Sabemos que dirigir un restaurante deja poco tiempo
                para pensar en la web."
              </blockquote>
            </div>

            {/* Columna derecha — texto */}
            <div className="realidad-col realidad-col-texto">
              <div className="realidad-header">
                <span className="gastro-label">La realidad del sector</span>
                <h2 className="realidad-titulo">
                  La experiencia que vivís adentro
                  <br />no siempre llega antes que el cliente.
                </h2>
              </div>

              <div className="realidad-friccion">
                <div className="friccion-item">
                  <h3>Instagram como única vitrina</h3>
                  <p>
                    Las publicaciones desaparecen, la información se pierde
                    y los clientes terminan llamando para preguntar cosas
                    que ya deberían saber.
                  </p>
                </div>
                <div className="friccion-item">
                  <h3>La experiencia no se comunica online</h3>
                  <p>
                    El ambiente, la música, la cocina de autor, la selección
                    de vinos. Todo eso define tu propuesta, y rara vez
                    aparece con coherencia en lo digital.
                  </p>
                </div>
                <div className="friccion-item">
                  <h3>Información dispersa, cliente frustrado</h3>
                  <p>
                    Horarios en Google Maps, carta en un PDF viejo, eventos
                    en Stories que ya vencieron. Cuando no encuentra lo que
                    busca en segundos, elige otro lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gastro-separator" />


        {/* ──────────────────────────────────────────────────────────
            03 / 07 — MISE EN PLACE
            Lo que analizamos antes de diseñar
        ────────────────────────────────────────────────────────── */}
        <section className="mep-section gastro-section" aria-label="Mise en place — análisis previo">
          <div className="section-tag">03 / 07</div>
          <span className="section-folio" aria-hidden="true">03</span>

          <div className="mep-header">
            <span className="gastro-label">Antes de diseñar</span>
            <h2 className="mep-titulo">
              Entendemos tu lugar<br />
              antes de tocar el código.
            </h2>
            <p className="mep-intro">
              Cada espacio gastronómico funciona distinto. Por eso empezamos escuchando.
            </p>
          </div>

          <div className="mep-grid">
            {[
              {
                n: '01',
                t: 'El concepto del lugar',
                b: 'Café de especialidad, restó de autor, bar de coctelería o espacio híbrido. Cada propuesta necesita una narrativa distinta.',
              },
              {
                n: '02',
                t: 'Los momentos del día',
                b: 'Muchos espacios cambian completamente entre mañana, tarde y noche. La web tiene que mostrar esa evolución, no solo un pedazo de ella.',
              },
              {
                n: '03',
                t: 'Tu público real',
                b: 'Vecinos, turistas, trabajadores, público nocturno. Entender quién llega cambia completamente cómo presentamos la información.',
              },
              {
                n: '04',
                t: 'Cómo te descubren',
                b: 'La mayoría de las visitas comienza en Google, redes sociales o una recomendación. Analizamos ese recorrido antes de diseñar.',
              },
              {
                n: '05',
                t: 'La experiencia del espacio',
                b: 'Terraza, música en vivo, menú degustación, galería. Identificamos qué hace que las personas quieran volver.',
              },
              {
                n: '06',
                t: 'Los puntos de fricción',
                b: 'Dónde se pierden clientes hoy: no encuentran el menú, no saben si hay reservas, no saben si el lugar está abierto.',
              },
            ].map((item) => (
              <div className="mep-item" key={item.n}>
                <span className="mep-numero">{item.n}</span>
                <div className="mep-content">
                  <h3>{item.t}</h3>
                  <p>{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="gastro-separator" />

        {/* ──────────────────────────────────────────────────────────
            04 / 07 — MAREA (caso de estudio)
            Sección oscura — contraste máximo con el resto de la página
        ────────────────────────────────────────────────────────── */}
        <section
          id="marea"
          className="marea-section"
          aria-label="Caso de estudio: MAREA"
        >
          <div className="section-tag section-tag-light">04 / 07</div>

          {/* Cabecera */}
          <div className="marea-intro">
            <span className="gastro-label-light">Caso de estudio</span>
            <h2 className="marea-titulo">MAREA</h2>
            <p className="marea-subtitulo">Café · Cocina · Bar</p>
            <p className="marea-lead">
              Demo conceptual creada para mostrar cómo puede estructurarse
              digitalmente un restaurante contemporáneo. No es un cliente
              real — es un ejercicio de investigación aplicado al sector gastronómico.
            </p>
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

          {/* Fases del caso de estudio */}
          <div className="marea-fases">

            {/* Fase 01 — Investigación */}
            <div className="marea-fase">
              <div className="fase-header">
                <span className="gastro-label-light">Fase 01 — Investigación</span>
                <h3 className="fase-titulo">Cómo buscan las personas dónde comer.</h3>
                <p className="fase-intro">
                  Estudiamos el recorrido real de alguien que quiere encontrar un lugar
                  para comer: qué consulta, qué mira y en qué momento decide.
                </p>
              </div>

              <div className="fase-insights">
                <div className="insight-card">
                  <span className="insight-n">01</span>
                  <p className="insight-finding">Qué consulta.</p>
                  <p>Buscan por barrio, tipo de cocina o momento del día. Pocas veces buscan el nombre de un lugar — buscan una experiencia y comparan opciones.</p>
                </div>

                <div className="insight-card">
                  <span className="insight-n">02</span>
                  <p className="insight-finding">Qué mira.</p>
                  <p>Fotos del espacio, carta, horarios y ambiente. En ese orden, y en segundos. Si falta alguno, llenan el hueco con suposiciones — casi siempre negativas.</p>
                </div>

                <div className="insight-card">
                  <span className="insight-n">03</span>
                  <p className="insight-finding">En qué momento decide.</p>
                  <p>Antes de salir de casa. La visita ya está elegida —o descartada— mucho antes de llegar a la puerta. La web es el momento de la decisión.</p>
                </div>
              </div>
            </div>

            {/* Fase 02 — Decisiones de diseño */}
            <div className="marea-fase">
              <div className="fase-header">
                <span className="gastro-label-light">Fase 02 — Decisiones de diseño</span>
                <h3 className="fase-titulo">
                  Cada elemento responde a cómo las personas descubren restaurantes.
                </h3>
              </div>

              <div className="fase-decisions">
                <div className="decision-card">
                  <BookOpen size={28} strokeWidth={1.5} />
                  <h4>Tipografía editorial</h4>
                  <p>Inspirada en publicaciones gastronómicas. La jerarquía visual guía al visitante antes que el texto.</p>
                </div>
                <div className="decision-card">
                  <Star size={28} strokeWidth={1.5} />
                  <h4>Imágenes protagonistas</h4>
                  <p>La comida y el espacio cuentan la historia. El diseño no compite con ellas, las enmarca.</p>
                </div>
                <div className="decision-card">
                  <Clock size={28} strokeWidth={1.5} />
                  <h4>Narrativa del día</h4>
                  <p>El sitio muestra cómo evoluciona el restaurante: mañana de café, tarde de cocina, noche de bar.</p>
                </div>
                <div className="decision-card">
                  <MapPin size={28} strokeWidth={1.5} />
                  <h4>Información siempre visible</h4>
                  <p>Menú, horarios, ubicación. Lo que el cliente busca primero, disponible en un clic, sin buscar.</p>
                </div>
                <div className="decision-card">
                  <Zap size={28} strokeWidth={1.5} />
                  <h4>Carga instantánea</h4>
                  <p>Imágenes optimizadas sin perder calidad. En mobile, un sitio lento es un cliente que ya cerró la pestaña.</p>
                </div>
                <div className="decision-card">
                  <Calendar size={28} strokeWidth={1.5} />
                  <h4>Agenda integrada</h4>
                  <p>Jazz nights, brunchs, degustaciones, cenas especiales. Visibles, actualizables, sin depender de nadie.</p>
                </div>
              </div>
            </div>

            {/* Fase 03 — Estructura */}
            <div className="marea-fase">
              <div className="fase-header">
                <span className="gastro-label-light">Fase 03 — Estructura del sitio</span>
                <h3 className="fase-titulo">
                  Una arquitectura pensada para tomar decisiones rápido.
                </h3>
              </div>

              <div className="fase-timeline">
                {[
                  {
                    n: '01',
                    t: 'Home',
                    d: 'Primera impresión clara del concepto del restaurante. El visitante entiende quién sos en los primeros segundos.',
                  },
                  {
                    n: '02',
                    t: 'Experiencia',
                    d: 'Cómo cambia el lugar a lo largo del día. El mismo espacio contado en tres momentos distintos.',
                  },
                  {
                    n: '03',
                    t: 'Carta',
                    d: 'Exploración simple de platos y bebidas por categoría, con imágenes reales que predisponen antes de llegar.',
                  },
                  {
                    n: '04',
                    t: 'Eventos',
                    d: 'Agenda de actividades y noches especiales. Que el cliente descubra razones nuevas para volver.',
                  },
                  {
                    n: '05',
                    t: 'Contacto',
                    d: 'Ubicación, horarios y reservas siempre visibles. Sin llamar, sin buscar en tres plataformas distintas.',
                  },
                ].map((item) => (
                  <div className="timeline-item" key={item.n}>
                    <div className="timeline-marker">{item.n}</div>
                    <div className="timeline-body">
                      <h4>{item.t}</h4>
                      <p>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA dentro del caso de estudio */}
          <div className="marea-cta-block">
            <div className="marea-cta-header">
              <span className="gastro-label-light">Tu turno</span>
              <h3 className="marea-cta-headline">
                ¿Tu restaurante<br />necesita algo así?
              </h3>
            </div>

            <div className="marea-trust-row">
              <div className="trust-pill">
                <span className="trust-pill-dot" />
                Diagnóstico sin costo
              </div>
              <div className="trust-pill">
                <span className="trust-pill-dot" />
                Proceso claro
              </div>
              <div className="trust-pill">
                <span className="trust-pill-dot" />
                Basado en investigación
              </div>
            </div>

            <div className="marea-cta-buttons">
              <button
                onClick={handleSolicitarDiagnostico}
                className="btn-gastro btn-gastro-primary btn-gastro-lg"
              >
                Solicitar diagnóstico
                <ArrowRight size={18} />
              </button>
              <a
                href={MAREA_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gastro btn-gastro-ghost-light btn-gastro-lg"
              >
                Ver demo live
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <p className="marea-disclaimer">
            <strong>Nota:</strong> MAREA es un caso ficticio creado con fines demostrativos.
          </p>
        </section>

        {/* ──────────────────────────────────────────────────────────
            05 / 07 — MENÚ DIGITAL (capacidades)
        ────────────────────────────────────────────────────────── */}
        <section className="menu-digital-section gastro-section" aria-label="Qué desarrollamos">
          <div className="section-tag">05 / 07</div>
          <span className="section-folio" aria-hidden="true">05</span>

          <div className="menu-digital-header">
            <span className="gastro-label">Qué desarrollamos</span>
            <h2 className="menu-digital-titulo">
              Todo lo que tu restaurante necesita<br />
              para estar donde están tus clientes.
            </h2>
          </div>

          <div className="menu-digital-grid">
            <div className="menu-digital-item">
              <Utensils className="menu-icon" size={30} strokeWidth={1.5} />
              <div>
                <h3>Cartas digitales bien estructuradas</h3>
                <p>Menúes por categoría, con imágenes, precios y descripciones. Actualizables sin depender de nadie.</p>
              </div>
            </div>

            <div className="menu-digital-item">
              <Calendar className="menu-icon" size={30} strokeWidth={1.5} />
              <div>
                <h3>Agenda de eventos integrada</h3>
                <p>Jazz nights, brunchs, cenas de degustación, pop-ups. Visibles, con fecha, sin hacer un Story que dura 24 horas.</p>
              </div>
            </div>

            <div className="menu-digital-item">
              <Search className="menu-icon" size={30} strokeWidth={1.5} />
              <div>
                <h3>SEO local estratégico</h3>
                <p>Para aparecer cuando alguien busca "café de especialidad en [tu barrio]" o "restó con terraza en [tu ciudad]" y el lugar no es tuyo.</p>
              </div>
            </div>

            <div className="menu-digital-item">
              <BookOpen className="menu-icon" size={30} strokeWidth={1.5} />
              <div>
                <h3>Identidad digital coherente</h3>
                <p>Paleta, tipografía y tono de voz que hablan igual que tu espacio físico. Consistencia entre lo que se vive y lo que se ve.</p>
              </div>
            </div>

            <div className="menu-digital-item">
              <Wine className="menu-icon" size={30} strokeWidth={1.5} />
              <div>
                <h3>Integración con reservas</h3>
                <p>Sistemas de reserva online conectados a tu web. El cliente reserva en el momento; vos no dependés del teléfono.</p>
              </div>
            </div>

            <div className="menu-digital-item">
              <Zap className="menu-icon" size={30} strokeWidth={1.5} />
              <div>
                <h3>Infraestructura rápida y estable</h3>
                <p>Velocidad de carga optimizada, diseño mobile-first. La mayoría de tus clientes potenciales te busca desde el celular, muchas veces caminando.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="gastro-separator" />

        {/* ──────────────────────────────────────────────────────────
            06 / 07 — QUÉ CAMBIA (resultados)
            Sección con imagen de fondo — segundo contraste oscuro
        ────────────────────────────────────────────────────────── */}
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
              <span className="gastro-label-light">Resultados</span>
              <h2 className="cambios-titulo">
                Qué cambia
                cuando la web
                habla por vos.
              </h2>
            </div>

            <div className="cambios-lista">
              {[
                'Los clientes entienden el concepto del lugar antes de entrar.',
                'La percepción de calidad aumenta antes de la primera visita.',
                'Encontrar información deja de ser un problema para el cliente.',
                'El contacto directo con el cliente no depende del alcance de una publicación.',
                'La presencia digital refleja la identidad real del espacio.',
              ].map((item, i) => (
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

        {/* ──────────────────────────────────────────────────────────
            07 / 07 — CIERRE
        ────────────────────────────────────────────────────────── */}
        <section className="cierre-section gastro-section" aria-label="Cierre">
          <div className="section-tag section-tag-light">07 / 07</div>

          <div className="cierre-headline">
            <span className="gastro-label-light">Una última cosa</span>
            <h2 className="cierre-titulo">
              Cada restaurante tiene<br />su propio carácter.
            </h2>
            <p className="cierre-sub">
              Nuestro trabajo consiste en traducir ese carácter al entorno digital.
            </p>
          </div>

          <div className="cierre-cards">
            <div className="cierre-card">
              <span className="cierre-card-n">01</span>
              <strong>Basado en investigación real</strong>
              <p>No intuiciones. Decisiones respaldadas en cómo las personas realmente descubren restaurantes.</p>
            </div>
            <div className="cierre-card">
              <span className="cierre-card-n">02</span>
              <strong>Primera reunión sin costo</strong>
              <p>Empezamos con una conversación para entender tu propuesta gastronómica y cómo se presenta hoy.</p>
            </div>
            <div className="cierre-card">
              <span className="cierre-card-n">03</span>
              <strong>Proceso transparente</strong>
              <p>Etapas claras y tiempos definidos. Sabés en todo momento en qué está tu proyecto.</p>
            </div>
          </div>

          <div className="cierre-cta">
            <p className="cierre-cta-copy">
              Si sentís que tu presencia online no refleja lo que pasa dentro del lugar,<br />
              podemos analizarlo juntos — sin costo y sin compromiso.
            </p>
            <button
              onClick={handleSolicitarDiagnostico}
              className="btn-gastro btn-gastro-primary btn-gastro-lg"
            >
              Solicitar diagnóstico estratégico
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

      </div>
    </>
  );
}

export default Gastronomia;
