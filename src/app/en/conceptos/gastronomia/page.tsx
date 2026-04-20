'use client';

/**
 * PAGE: Gastronomy (EN)
 *
 * English version of the Gastronomy demo page.
 * Shares CSS with the ES version.
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
import '../../../conceptos/gastronomia/Gastronomia.css';

/* ─── Image paths ─── */
const fondoRestaurante = '/conceptos/gastronomia/fondo.webp';
const kitchenImage     = '/conceptos/gastronomia/kitchen.webp';
const musicImage       = '/conceptos/gastronomia/music.webp';
const eventImage       = '/conceptos/gastronomia/event.webp';
const espressoImg      = '/conceptos/gastronomia/espresso.webp';
const negroniImg       = '/conceptos/gastronomia/negroni.webp';
const cevicheImg       = '/conceptos/gastronomia/ceviche.webp';
const tiramisuImg      = '/conceptos/gastronomia/tiramisu.webp';

const MAREA_DEMO_URL = 'https://marea-nine.vercel.app/';

/* ─── EN content ─── */
const texto = {
  hero: {
    eyebrow: 'The decision to visit a restaurant is usually made before leaving home. It almost always starts with a search.',
    titulo: 'Your restaurant has soul.',
    sub: 'The question is whether your digital presence manages to convey it.',
    btn1: 'Free diagnosis',
    btn2: 'View case study ↓',
  },
  realidad: {
    quote: "We know that running a restaurant leaves little time to think about the website.",
    label: 'The industry reality',
    titulo: "The experience inside doesn't always reach the customer first.",
    friccion1Titulo: 'Instagram as the only showcase',
    friccion1Texto: "Posts disappear, information gets lost and clients end up calling to ask things they should already know.",
    friccion2Titulo: "The experience isn't communicated online",
    friccion2Texto: "The atmosphere, the music, the chef's cooking, the wine selection. All of that defines your offering, and it rarely appears coherently in the digital world.",
    friccion3Titulo: 'Scattered information, frustrated customer',
    friccion3Texto: "Hours on Google Maps, menu in an old PDF, events in Stories that already expired. When they can't find what they're looking for in seconds, they choose another place.",
  },
  mep: {
    label: 'Before designing',
    titulo: 'We understand your place before touching a line of code.',
    intro: "Every gastronomic space works differently. That's why we start by listening.",
    items: [
      { titulo: 'The concept of the place', desc: "Specialty coffee, chef's restaurant, cocktail bar or hybrid space. Each offering needs a different narrative." },
      { titulo: 'The moments of the day', desc: 'Many spaces change completely between morning, afternoon and night. The website has to show that evolution.' },
      { titulo: 'Your real audience', desc: 'Neighbors, tourists, workers, night crowd. Understanding who arrives completely changes how we present the information.' },
      { titulo: 'How they discover you', desc: 'Most visits start on Google, social media or a recommendation. We analyze that journey before designing.' },
      { titulo: 'The experience of the space', desc: 'Terrace, live music, tasting menu, gallery. We identify what makes people want to come back.' },
      { titulo: 'The friction points', desc: "Where clients are lost today: they can't find the menu, don't know if there are reservations, don't know if the place is open." },
    ],
  },
  marea: {
    label: 'Case study',
    titulo: 'MAREA',
    subtitulo: 'Café · Kitchen · Bar',
    lead: "Conceptual demo created to show how a contemporary restaurant can be structured digitally. It's not a real client — it's a research exercise applied to the gastronomy sector.",
    investigacion: {
      label: 'Phase 01 — Research',
      titulo: 'How people search for where to eat.',
      intro: 'We studied the real journey of someone who wants to find a place to eat: what they search for, what they look at and when they decide.',
      insights: [
        { finding: 'What they search for.', body: "They search by neighborhood, cuisine type or time of day. Rarely by name — they search for an experience and compare options." },
        { finding: 'What they look at.', body: "Photos of the venue, menu, hours and atmosphere. In that order, and in seconds. If any is missing, they fill the gap with assumptions — almost always negative." },
        { finding: 'When they decide.', body: "Before leaving home. The visit is already chosen — or rejected — long before reaching the door. The website is the moment of decision." },
      ],
    },
    decisiones: {
      label: 'Phase 02 — Design decisions',
      titulo: 'Each element responds to how people discover restaurants.',
      items: [
        { titulo: 'Editorial typography', desc: 'Inspired by gastronomy publications. Visual hierarchy guides the visitor before the text.' },
        { titulo: 'Protagonist images', desc: "The food and the space tell the story. The design doesn't compete with them, it frames them." },
        { titulo: 'Narrative of the day', desc: 'The site shows how the restaurant evolves: morning coffee, afternoon kitchen, night bar.' },
        { titulo: 'Always visible information', desc: "Menu, hours, location. What the client looks for first, available in one click, without searching." },
        { titulo: 'Instant loading', desc: 'Optimized images without losing quality. On mobile, a slow site means a client who already closed the tab.' },
        { titulo: 'Integrated calendar', desc: 'Jazz nights, brunches, tastings, special dinners. Visible, updatable, without depending on anyone.' },
      ],
    },
    estructura: {
      label: 'Phase 03 — Site structure',
      titulo: 'An architecture designed for quick decisions.',
      items: [
        { titulo: 'Home', desc: "Clear first impression of the restaurant's concept. The visitor understands who you are in the first seconds." },
        { titulo: 'Experience', desc: 'How the place changes throughout the day. The same space told in three different moments.' },
        { titulo: 'Menu', desc: 'Simple exploration of dishes and drinks by category, with real images that set expectations before arriving.' },
        { titulo: 'Events', desc: 'Calendar of activities and special nights. So the client discovers new reasons to come back.' },
        { titulo: 'Contact', desc: 'Location, hours and reservations always visible. No calling, no searching across three different platforms.' },
      ],
    },
    cta: {
      label: 'Your turn',
      headline: 'Does your restaurant need something like this?',
      trust1: 'Free diagnosis',
      trust2: 'Clear process',
      trust3: 'Research-based',
      btn1: 'Request diagnosis',
      btn2: 'View live demo',
      nota: 'MAREA is a fictional case created for demonstrative purposes.',
    },
  },
  menuDigital: {
    label: 'What we develop',
    titulo: 'Everything your restaurant needs to be where your customers are.',
    items: [
      { titulo: 'Well-structured digital menus', desc: 'Menus by category, with images, prices and descriptions. Updatable without depending on anyone.' },
      { titulo: 'Integrated events calendar', desc: "Jazz nights, brunches, tasting dinners, pop-ups. Visible, with dates, without making a Story that lasts 24 hours." },
      { titulo: 'Strategic local SEO', desc: 'To appear when someone searches for "specialty coffee in [your neighborhood]" or "restaurant with terrace in [your city]".' },
      { titulo: 'Coherent digital identity', desc: 'Palette, typography and tone of voice that speak the same language as your physical space. Consistency between what is experienced and what is seen.' },
      { titulo: 'Reservations integration', desc: "Online booking systems connected to your website. The client books in the moment; you don't depend on the phone." },
      { titulo: 'Fast and stable infrastructure', desc: 'Optimized loading speed, mobile-first design. Most of your potential clients are searching from their phone.' },
    ],
  },
  cambios: {
    label: 'Results',
    titulo: 'What changes when your website speaks for you.',
    items: [
      'Clients understand the concept of the place before entering.',
      'The perception of quality increases before the first visit.',
      'Finding information stops being a problem for the client.',
      "Direct contact with the client doesn't depend on the reach of a publication.",
      'The digital presence reflects the real identity of the space.',
    ],
  },
  cierre: {
    label: 'One last thing',
    titulo: 'Every restaurant has its own character.',
    sub: 'Our work is to translate that character into the digital environment.',
    cards: [
      { titulo: 'Based on real research', desc: "Not intuitions. Decisions backed by how people really discover restaurants." },
      { titulo: 'First meeting at no cost', desc: "We start with a conversation to understand your gastronomic offering and how it's presented today." },
      { titulo: 'Transparent process', desc: 'Clear stages and defined timelines. You know at every moment what stage your project is at.' },
    ],
    ctaCopy: "If you feel your online presence doesn't reflect what happens inside the venue, we can analyze it together — at no cost and no obligation.",
    ctaBtn: 'Request strategic diagnosis',
  },
};

const decisionIcons = [BookOpen, Star, Clock, MapPin, Zap, Calendar];
const menuIcons     = [Utensils, Calendar, Search, BookOpen, Wine, Zap];

export default function GastronomiaEN() {
  const { navigate } = usePageTransition();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSolicitarDiagnostico = () => {
    sessionStorage.setItem('uxn-scroll-to', 'contacto');
    navigate('/en');
  };

  return (
    <div className="gastronomia-page">
      {/* Floating back button */}
      <TransitionLink href="/en" className="btn-home-gastro" aria-label="Back to home">
        <Home size={20} strokeWidth={2} />
      </TransitionLink>

      {/* ── 01/07 HERO ── */}
      <Motion.section
        className="hero-gastro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-label="Hero gastronomy"
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

      {/* ── 02/07 REALITY ── */}
      <section className="realidad-section" aria-label="The industry reality">
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
      <section className="mep-section gastro-section" aria-label="Before designing — prior analysis">
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

      {/* ── 04/07 MAREA (case study) ── */}
      <section id="marea" className="marea-section" aria-label="Case study: MAREA">
        <div className="section-tag section-tag-light">04 / 07</div>

        <div className="marea-intro">
          <span className="gastro-label-light">{texto.marea.label}</span>
          <h2 className="marea-titulo">{texto.marea.titulo}</h2>
          <p className="marea-subtitulo">{texto.marea.subtitulo}</p>
          <p className="marea-lead">{texto.marea.lead}</p>
        </div>

        {/* Visual mosaic */}
        <div className="marea-mosaic" aria-hidden="true">
          <div className="mosaic-item mosaic-tall" data-label="CAFÉ">
            <img src={espressoImg} alt="Espresso — Marea café" loading="lazy" decoding="async" />
          </div>
          <div className="mosaic-item mosaic-a" data-label="BAR">
            <img src={negroniImg} alt="Classic Negroni — Marea bar" loading="lazy" decoding="async" />
          </div>
          <div className="mosaic-item mosaic-b" data-label="KITCHEN">
            <img src={cevicheImg} alt="Ceviche — Marea kitchen" loading="lazy" decoding="async" />
          </div>
          <div className="mosaic-item mosaic-c" data-label="EVENTS">
            <img src={eventImage} alt="Events at Marea" loading="lazy" decoding="async" />
          </div>
          <div className="mosaic-item mosaic-d" data-label="DESSERTS">
            <img src={tiramisuImg} alt="Tiramisu — Marea desserts" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Phases */}
        <div className="marea-fases">
          {/* Phase 01 */}
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

          {/* Phase 02 */}
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

          {/* Phase 03 */}
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

        {/* CTA inside case study */}
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
          <strong>Note:</strong> {texto.marea.cta.nota}
        </p>
      </section>

      {/* ── 05/07 DIGITAL MENU ── */}
      <section className="menu-digital-section gastro-section" aria-label="What we develop">
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

      {/* ── 06/07 WHAT CHANGES ── */}
      <section
        className="cambios-section"
        style={{
          backgroundImage: `url(${musicImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Results"
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

      {/* ── 07/07 CLOSING ── */}
      <section className="cierre-section gastro-section" aria-label="Closing">
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
