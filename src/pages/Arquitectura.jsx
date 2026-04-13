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
import { Link, useParams } from 'react-router-dom';
import { useLangNavigate } from '../hooks/useLangNavigate';
import LangLink from '../componentes/LangLink';
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
import { seoConfig, getSeoData, createBreadcrumbSchema } from '../utils/seoConfig';
import LanguageToggle from '../componentes/LanguageToggle';
import { useTranslation } from 'react-i18next';
import fondoARQ from '../assets/ARQ/fondoARQ.webp';
import BRUNNdemo from '../assets/ARQ/BRUNNdemo.webp';
import fondoCardARQ from '../assets/ARQ/fondocardarq.webp';
import fondoCardPlano from '../assets/ARQ/fondocardplano.webp';
import './Arquitectura.css';

function Arquitectura() {
  const navigate = useLangNavigate();
  const { t, i18n } = useTranslation();

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

  const { lang: urlLang } = useParams();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';
  const seo = getSeoData('arquitectura', lang) || seoConfig.arquitectura;

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

        {/* Open Graph */}
        <meta property="og:title" content={seo.ogTitle || seo.title} />
        <meta property="og:description" content={seo.ogDescription || seo.description} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={seo.ogImage || 'https://www.uxnicorp.com.ar/og-image.jpg'} />
        <meta property="og:locale" content={seo.ogLocale || 'es_AR'} />
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
            {JSON.stringify(createBreadcrumbSchema(seo.breadcrumb, lang))}
          </script>
        )}
      </Helmet>

      <div className="arquitectura-page">
        <LanguageToggle />
        {/* Botón flotante volver a Home */}
        <LangLink to="/" className="btn-home-float" aria-label="Volver al inicio">
          <Home size={20} strokeWidth={2} />
        </LangLink>

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
              {t('paginas.arquitectura.hero.titulo').split(' ').slice(0,1).join(' ')}<br />
              {t('paginas.arquitectura.hero.titulo').split(' ').slice(1).join(' ')}
            </Motion.h1>
            
            <Motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('paginas.arquitectura.hero.subtitulo')}
            </Motion.p>

            <div className="hero-divider" />

            <Motion.div 
              className="hero-ctas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                {t('paginas.arquitectura.hero.btn1')}
                <ArrowRight size={18} />
              </button>
              <a 
                href="#demo" 
                className="btn-arq btn-arq-ghost"
              >
                {t('paginas.arquitectura.hero.btn2')}
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
                {t('paginas.arquitectura.validacion.titulo')}
              </h2>
            </div>

            <div className="validacion-col validacion-col-right">
              <div className="metodo-col-header">
                <span className="metodo-col-label">{t('paginas.arquitectura.validacion.label')}</span>
                <p className="metodo-col-intro">{t('paginas.arquitectura.validacion.intro')}</p>
              </div>
            {(() => {
              const bloques = t('paginas.arquitectura.validacion.bloques', { returnObjects: true });
              return Array.isArray(bloques) ? bloques.map((bloque, i) => (
                <div className="validacion-block" key={i}>
                  <h3 className="validacion-block-title">{bloque.titulo}</h3>
                  <p className="validacion-block-text">{bloque.texto}</p>
                </div>
              )) : null;
            })()}
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
                <span className="metodo-col-label">{t('paginas.arquitectura.metodo.label')}</span>
                <p className="metodo-col-intro">{t('paginas.arquitectura.metodo.intro')}</p>
              </div>
              {(() => {
                const items = t('paginas.arquitectura.metodo.items', { returnObjects: true });
                return Array.isArray(items) ? items.map((item, i) => (
                  <div className="metodo-list-item" key={i}>
                    <span className="metodo-number">{String(i + 1).padStart(2, '0')}</span>
                    <div className="metodo-content">
                      <h3>{item.titulo}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                )) : null;
              })()}
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
                {t('paginas.arquitectura.metodo.titulo')}
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
            <span className="demo-label">{t('paginas.arquitectura.demo.label')}</span>
            <h2 className="demo-main-title">{t('paginas.arquitectura.demo.titulo')}</h2>
            <p className="demo-lead">
              {t('paginas.arquitectura.demo.lead')}
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
              <span className="metodo-col-label">{t('paginas.arquitectura.demo.investigacion.label')}</span>
              <h2 className="research-section-title">{t('paginas.arquitectura.demo.investigacion.titulo')}</h2>
              <p className="research-section-intro">
                {t('paginas.arquitectura.demo.investigacion.intro')}
              </p>
            </div>

            <div className="demo-research-grid">
              {(() => {
                const insights = t('paginas.arquitectura.demo.investigacion.insights', { returnObjects: true });
                return Array.isArray(insights) ? insights.map((insight, i) => (
                  <div className="demo-insight-card" key={i}>
                    <span className="insight-number">{String(i + 1).padStart(2, '0')}</span>
                    <h4 className="insight-title">{insight.titulo}</h4>
                    <p className="insight-finding">{insight.finding}</p>
                    <p className="insight-body">{insight.body}</p>
                  </div>
                )) : null;
              })()}
            </div>
          </div>

          {/* DECISIONES DE DISEÑO */}
          <div className="demo-decisions">
            <div className="research-header">
              <span className="metodo-col-label">{t('paginas.arquitectura.demo.decisiones.label')}</span>
              <h2 className="research-section-title">{t('paginas.arquitectura.demo.decisiones.titulo')}</h2>
              <p className="research-section-intro">
                {t('paginas.arquitectura.demo.decisiones.intro')}
              </p>
            </div>

            <div className="demo-decisions-grid">
              {[Type, Palette, Maximize2, MessageSquare, BarChart3, Zap].map((Icon, i) => {
                const items = t('paginas.arquitectura.demo.decisiones.items', { returnObjects: true });
                const item = Array.isArray(items) ? items[i] : null;
                return item ? (
                  <div className="demo-decision-card" key={i}>
                    <Icon className="demo-decision-icon" size={32} strokeWidth={1.5} />
                    <h4>{item.titulo}</h4>
                    <p>{item.desc}</p>
                  </div>
                ) : null;
              })}
            </div>
          </div>

          {/* ESTRUCTURA DEL SITIO */}
          <div className="demo-structure">
            <div className="research-header">
              <span className="metodo-col-label">{t('paginas.arquitectura.demo.estructura.label')}</span>
              <h2 className="research-section-title">{t('paginas.arquitectura.demo.estructura.titulo')}</h2>
              <p className="research-section-intro">
                {t('paginas.arquitectura.demo.estructura.intro')}
              </p>
            </div>
            
            <div className="demo-structure-timeline">
              {(() => {
                const items = t('paginas.arquitectura.demo.estructura.items', { returnObjects: true });
                return Array.isArray(items) ? items.map((item, i) => (
                  <div className="demo-structure-item" key={i}>
                    <div className="demo-structure-marker">{String(i + 1).padStart(2, '0')}</div>
                    <div className="demo-structure-content">
                      <h4>{item.titulo}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                )) : null;
              })()}
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="demo-result">
            <span className="metodo-col-label">{t('paginas.arquitectura.demo.resultado.label')}</span>

            <div className="demo-result-layout">
              <div className="demo-result-left">
                <h2 className="demo-result-headline">
                  {t('paginas.arquitectura.demo.resultado.headline')}
                </h2>
              </div>

              <div className="demo-result-right">
                <div className="demo-trust-list">
                  {(() => {
                    const trust = t('paginas.arquitectura.demo.resultado.trust', { returnObjects: true });
                    return Array.isArray(trust) ? trust.map((row, i) => (
                      <div className="demo-trust-row" key={i}>
                        <span className="demo-trust-label">{row.label}</span>
                        <span className="demo-trust-desc">{row.desc}</span>
                      </div>
                    )) : null;
                  })()}
                </div>

                <div className="demo-cta-buttons">
                  <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                    {t('paginas.arquitectura.demo.resultado.btn1')}
                    <ArrowRight size={18} />
                  </button>
                  <a 
                    href="https://brnn-demoarq.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-arq btn-arq-secondary"
                  >
                    {t('paginas.arquitectura.demo.resultado.btn2')}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="demo-disclaimer">
              <p><strong>Nota:</strong> {t('paginas.arquitectura.demo.resultado.nota')}</p>
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
              <span className="metodo-col-label">{t('paginas.arquitectura.capacidades.label')}</span>
              <h2 className="capacidades-title">{t('paginas.arquitectura.capacidades.titulo')}</h2>
            </div>

            <div className="capacidades-grid">
              {(() => {
                const capIcons = [Layout, Layers, Users, Search, Zap, TrendingUp];
                const items = t('paginas.arquitectura.capacidades.items', { returnObjects: true });
                return Array.isArray(items) ? items.map((item, i) => {
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
                }) : null;
              })()}
            </div>

          </div>
        </section>

        {/* SEPARADOR */}
        <div className="section-separator"></div>

        {/* PROCESO - Timeline Vertical */}
        <section id="proceso" className="proceso-section arquitectura-section section-bg-alt">
          <div className="section-card">

            <div className="capacidades-header">
              <span className="metodo-col-label">{t('paginas.arquitectura.proceso.label')}</span>
              <h2 className="capacidades-title">{t('paginas.arquitectura.proceso.titulo')}</h2>
            </div>

            <div className="proceso-timeline">
              {(() => {
                const steps = t('paginas.arquitectura.proceso.items', { returnObjects: true });
                return Array.isArray(steps) ? steps.map((step, i) => (
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
                      {i < steps.length - 1 && <div className="proceso-connector" />}
                    </div>
                    <div className="proceso-content">
                      <h3 className="proceso-step-title">{step.title}</h3>
                      <p className="proceso-description">{step.desc}</p>
                    </div>
                    <span className="proceso-duration">{step.dur}</span>
                  </Motion.div>
                )) : null;
              })()}
            </div>

            <p className="proceso-note">
              {t('paginas.arquitectura.proceso.nota')}
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
              <span className="metodo-col-label">{t('paginas.arquitectura.beneficios.label')}</span>
              <h2 className="capacidades-title">
                {t('paginas.arquitectura.beneficios.titulo')}
              </h2>
            </div>

            <div className="beneficios-list">
              {(() => {
                const items = t('paginas.arquitectura.beneficios.items', { returnObjects: true });
                return Array.isArray(items) ? items.map((item, i) => (
                  <div className="beneficio-row" key={i}>
                    <span className="beneficio-num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="beneficio-body">
                      <h3 className="beneficio-row-title">{item.title}</h3>
                      <p className="beneficio-row-desc">{item.desc}</p>
                    </div>
                  </div>
                )) : null;
              })()}
            </div>

            <p className="beneficios-statement">
              {t('paginas.arquitectura.beneficios.declaracion')}
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
              <span className="metodo-col-label">{t('paginas.arquitectura.cta.label')}</span>
              <h2 className="cta-headline">
                {t('paginas.arquitectura.cta.headline')}
              </h2>
            </div>

            <div className="cta-col-content">
              <p className="cta-body">
                {t('paginas.arquitectura.cta.body1')}
              </p>
              <p className="cta-body">
                {t('paginas.arquitectura.cta.body2')}
              </p>

              <div className="cta-buttons-col">
                <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                  {t('paginas.arquitectura.cta.btn1')}
                  <ArrowRight size={18} />
                </button>
                <button onClick={handleVerServicios} className="btn-arq btn-arq-secondary">
                  {t('paginas.arquitectura.cta.btn2')}
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
