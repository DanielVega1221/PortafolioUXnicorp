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
import { Link, useParams } from 'react-router-dom';
import { useLangNavigate } from '../hooks/useLangNavigate';
import LangLink from '../componentes/LangLink';
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
import { seoConfig, getSeoData } from '../utils/seoConfig';
import LanguageToggle from '../componentes/LanguageToggle';
import { useTranslation } from 'react-i18next';

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
  const navigate = useLangNavigate();
  const { t, i18n } = useTranslation();

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

  const { lang: urlLang } = useParams();
  const seo = getSeoData('gastronomia', urlLang || i18n.language?.slice(0, 2) || 'es') || seoConfig.gastronomia;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />
        <link rel="alternate" hreflang="es" href={seo.hreflangEs} />
        <link rel="alternate" hreflang="en" href={seo.hreflangEn} />
        <link rel="alternate" hreflang="x-default" href={seo.hreflangEs} />

        <meta property="og:title" content={seo.ogTitle || seo.title} />
        <meta property="og:description" content={seo.ogDescription || seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seo.ogImage || 'https://www.uxnicorp.com.ar/og-image.jpg'} />
        <meta property="og:locale" content={seo.ogLocale || 'es_AR'} />
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
        <LanguageToggle />

        {/* Botón flotante volver */}
        <LangLink to="/" className="btn-home-gastro" aria-label="Volver al inicio">
          <Home size={20} strokeWidth={2} />
        </LangLink>

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
              {t('paginas.gastronomia.hero.eyebrow')}
            </Motion.p>

            <Motion.h1
              className={`hero-gastro-title${i18n.language === 'en' ? ' hero-gastro-title--en' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t('paginas.gastronomia.hero.titulo')}
            </Motion.h1>

            <Motion.p
              className="hero-gastro-sub"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('paginas.gastronomia.hero.sub')}
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
                {t('paginas.gastronomia.hero.btn1')}
                <ArrowRight size={18} />
              </button>
              <a href="#marea" className="btn-gastro btn-gastro-ghost">
                {t('paginas.gastronomia.hero.btn2')}
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
                {t('paginas.gastronomia.realidad.quote')}
              </blockquote>
            </div>

            {/* Columna derecha — texto */}
            <div className="realidad-col realidad-col-texto">
              <div className="realidad-header">
                <span className="gastro-label">{t('paginas.gastronomia.realidad.label')}</span>
                <h2 className="realidad-titulo">
                  {t('paginas.gastronomia.realidad.titulo')}
                </h2>
              </div>

              <div className="realidad-friccion">
                <div className="friccion-item">
                  <h3>{t('paginas.gastronomia.realidad.friccion1Titulo')}</h3>
                  <p>{t('paginas.gastronomia.realidad.friccion1Texto')}</p>
                </div>
                <div className="friccion-item">
                  <h3>{t('paginas.gastronomia.realidad.friccion2Titulo')}</h3>
                  <p>{t('paginas.gastronomia.realidad.friccion2Texto')}</p>
                </div>
                <div className="friccion-item">
                  <h3>{t('paginas.gastronomia.realidad.friccion3Titulo')}</h3>
                  <p>{t('paginas.gastronomia.realidad.friccion3Texto')}</p>
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
            <span className="gastro-label">{t('paginas.gastronomia.mep.label')}</span>
            <h2 className="mep-titulo">
              {t('paginas.gastronomia.mep.titulo')}
            </h2>
            <p className="mep-intro">
              {t('paginas.gastronomia.mep.intro')}
            </p>
          </div>

          <div className="mep-grid">
            {(() => {
              const items = t('paginas.gastronomia.mep.items', { returnObjects: true });
              return Array.isArray(items) ? items.map((item, i) => (
                <div className="mep-item" key={i}>
                  <span className="mep-numero">{String(i + 1).padStart(2, '0')}</span>
                  <div className="mep-content">
                    <h3>{item.titulo}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              )) : null;
            })()}
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
            <span className="gastro-label-light">{t('paginas.gastronomia.marea.label')}</span>
            <h2 className="marea-titulo">{t('paginas.gastronomia.marea.titulo')}</h2>
            <p className="marea-subtitulo">{t('paginas.gastronomia.marea.subtitulo')}</p>
            <p className="marea-lead">
              {t('paginas.gastronomia.marea.lead')}
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
                <span className="gastro-label-light">{t('paginas.gastronomia.marea.investigacion.label')}</span>
                <h3 className="fase-titulo">{t('paginas.gastronomia.marea.investigacion.titulo')}</h3>
                <p className="fase-intro">
                  {t('paginas.gastronomia.marea.investigacion.intro')}
                </p>
              </div>

              <div className="fase-insights">
                {(() => {
                  const insights = t('paginas.gastronomia.marea.investigacion.insights', { returnObjects: true });
                  return Array.isArray(insights) ? insights.map((ins, i) => (
                    <div className="insight-card" key={i}>
                      <span className="insight-n">{String(i + 1).padStart(2, '0')}</span>
                      <p className="insight-finding">{ins.finding}</p>
                      <p>{ins.body}</p>
                    </div>
                  )) : null;
                })()}
              </div>
            </div>

            {/* Fase 02 — Decisiones de diseño */}
            <div className="marea-fase">
              <div className="fase-header">
                <span className="gastro-label-light">{t('paginas.gastronomia.marea.decisiones.label')}</span>
                <h3 className="fase-titulo">
                  {t('paginas.gastronomia.marea.decisiones.titulo')}
                </h3>
              </div>

              <div className="fase-decisions">
                {[BookOpen, Star, Clock, MapPin, Zap, Calendar].map((Icon, i) => {
                  const items = t('paginas.gastronomia.marea.decisiones.items', { returnObjects: true });
                  const item = Array.isArray(items) ? items[i] : null;
                  return item ? (
                    <div className="decision-card" key={i}>
                      <Icon size={28} strokeWidth={1.5} />
                      <h4>{item.titulo}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            {/* Fase 03 — Estructura */}
            <div className="marea-fase">
              <div className="fase-header">
                <span className="gastro-label-light">{t('paginas.gastronomia.marea.estructura.label')}</span>
                <h3 className="fase-titulo">
                  {t('paginas.gastronomia.marea.estructura.titulo')}
                </h3>
              </div>

              <div className="fase-timeline">
                {(() => {
                  const items = t('paginas.gastronomia.marea.estructura.items', { returnObjects: true });
                  return Array.isArray(items) ? items.map((item, i) => (
                    <div className="timeline-item" key={i}>
                      <div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div>
                      <div className="timeline-body">
                        <h4>{item.titulo}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  )) : null;
                })()}
              </div>
            </div>
          </div>

          {/* CTA dentro del caso de estudio */}
          <div className="marea-cta-block">
            <div className="marea-cta-header">
              <span className="gastro-label-light">{t('paginas.gastronomia.marea.cta.label')}</span>
              <h3 className="marea-cta-headline">
                {t('paginas.gastronomia.marea.cta.headline')}
              </h3>
            </div>

            <div className="marea-trust-row">
              <div className="trust-pill">
                <span className="trust-pill-dot" />
                {t('paginas.gastronomia.marea.cta.trust1')}
              </div>
              <div className="trust-pill">
                <span className="trust-pill-dot" />
                {t('paginas.gastronomia.marea.cta.trust2')}
              </div>
              <div className="trust-pill">
                <span className="trust-pill-dot" />
                {t('paginas.gastronomia.marea.cta.trust3')}
              </div>
            </div>

            <div className="marea-cta-buttons">
              <button
                onClick={handleSolicitarDiagnostico}
                className="btn-gastro btn-gastro-primary btn-gastro-lg"
              >
                {t('paginas.gastronomia.marea.cta.btn1')}
                <ArrowRight size={18} />
              </button>
              <a
                href={MAREA_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gastro btn-gastro-ghost-light btn-gastro-lg"
              >
                {t('paginas.gastronomia.marea.cta.btn2')}
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <p className="marea-disclaimer">
            <strong>Nota:</strong> {t('paginas.gastronomia.marea.cta.nota')}
          </p>
        </section>

        {/* ──────────────────────────────────────────────────────────
            05 / 07 — MENÚ DIGITAL (capacidades)
        ────────────────────────────────────────────────────────── */}
        <section className="menu-digital-section gastro-section" aria-label="Qué desarrollamos">
          <div className="section-tag">05 / 07</div>
          <span className="section-folio" aria-hidden="true">05</span>

          <div className="menu-digital-header">
            <span className="gastro-label">{t('paginas.gastronomia.menuDigital.label')}</span>
            <h2 className="menu-digital-titulo">
              {t('paginas.gastronomia.menuDigital.titulo')}
            </h2>
          </div>

          <div className="menu-digital-grid">
            {[Utensils, Calendar, Search, BookOpen, Wine, Zap].map((Icon, i) => {
              const items = t('paginas.gastronomia.menuDigital.items', { returnObjects: true });
              const item = Array.isArray(items) ? items[i] : null;
              return item ? (
                <div className="menu-digital-item" key={i}>
                  <Icon className="menu-icon" size={30} strokeWidth={1.5} />
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ) : null;
            })}
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
              <span className="gastro-label-light">{t('paginas.gastronomia.cambios.label')}</span>
              <h2 className="cambios-titulo">
                {t('paginas.gastronomia.cambios.titulo')}
              </h2>
            </div>

            <div className="cambios-lista">
              {(() => {
                const items = t('paginas.gastronomia.cambios.items', { returnObjects: true });
                return Array.isArray(items) ? items.map((item, i) => (
                  <div className="cambio-item" key={i}>
                    <span className="cambio-n" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p>{item}</p>
                  </div>
                )) : null;
              })()}
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
            <span className="gastro-label-light">{t('paginas.gastronomia.cierre.label')}</span>
            <h2 className="cierre-titulo">
              {t('paginas.gastronomia.cierre.titulo')}
            </h2>
            <p className="cierre-sub">
              {t('paginas.gastronomia.cierre.sub')}
            </p>
          </div>

          <div className="cierre-cards">
            {(() => {
              const cards = t('paginas.gastronomia.cierre.cards', { returnObjects: true });
              return Array.isArray(cards) ? cards.map((card, i) => (
                <div className="cierre-card" key={i}>
                  <span className="cierre-card-n">{String(i + 1).padStart(2, '0')}</span>
                  <strong>{card.titulo}</strong>
                  <p>{card.desc}</p>
                </div>
              )) : null;
            })()}
          </div>

          <div className="cierre-cta">
            <p className="cierre-cta-copy">
              {t('paginas.gastronomia.cierre.ctaCopy')}
            </p>
            <button
              onClick={handleSolicitarDiagnostico}
              className="btn-gastro btn-gastro-primary btn-gastro-lg"
            >
              {t('paginas.gastronomia.cierre.ctaBtn')}
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

      </div>
    </>
  );
}

export default Gastronomia;
