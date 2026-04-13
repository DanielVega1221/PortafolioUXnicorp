import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import LangLink from '../componentes/LangLink';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Zap, Heart, CheckCircle, ArrowDown } from 'lucide-react';
import './ComoTrabajamos.css';
import LanguageToggle from '../componentes/LanguageToggle';
import { useTranslation } from 'react-i18next';
import '../../src/App.css';
import '../../src/section-glass-card.css';

const Culture = lazy(() => import('../componentes/Contenido/Culture'));
const Metodologia = lazy(() => import('../componentes/Contenido/Metodologia'));
const FAQ = lazy(() => import('../componentes/Contenido/FAQ'));
const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const pageVariants = {
  initial: {
    opacity: 0,
    x: 20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

function ComoTrabajamos() {
  const { t, i18n } = useTranslation();
  const { lang: urlLang } = useParams();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';
  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
      <Helmet>
        <title>{lang === 'en' ? 'How We Work | Transparent Web Development Process | UXnicorp' : 'Cómo Trabajamos | Proceso de Desarrollo Web Transparente | UXnicorp'}</title>
        <meta name="description" content={lang === 'en' ? 'Transparent web development process: initial meeting, clear proposal, agile development, weekly deliveries, support included. Proven methodology in Argentina.' : 'Proceso de desarrollo web transparente: Reunión inicial, Propuesta clara, Desarrollo ágil, Entregas semanales, Soporte incluido. Metodología probada en Argentina.'} />
        <meta name="keywords" content="metodología desarrollo web, proceso desarrollo software, metodología ágil argentina, clean code, testing software, agile development, scrum, desarrollo profesional argentina, arquitectura software, como trabajamos" />
        <link rel="canonical" href={`https://www.uxnicorp.com.ar/${lang}/como-trabajamos`} />
        <link rel="alternate" hrefLang="es" href="https://www.uxnicorp.com.ar/es/como-trabajamos" />
        <link rel="alternate" hrefLang="en" href="https://www.uxnicorp.com.ar/en/como-trabajamos" />
        <link rel="alternate" hrefLang="x-default" href="https://www.uxnicorp.com.ar/es/como-trabajamos" />
        
        <meta property="og:title" content={lang === 'en' ? 'How We Work - Transparent Web Development Process' : 'Proceso de Desarrollo Web | Metodología Ágil - UXnicorp'} />
        <meta property="og:description" content={lang === 'en' ? 'Agile methodology, weekly deliveries, constant communication. Fully transparent process.' : 'Metodología de desarrollo ágil: código limpio, testing exhaustivo y entregas continuas. Transparencia total.'} />
        <meta property="og:url" content={`https://www.uxnicorp.com.ar/${lang}/como-trabajamos`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_AR'} />
      </Helmet>
      <LanguageToggle />
      
      <main className="main-cards-wrapper">
        {/* Hero Section */}
        <section className="hero-clean">
          <div className="section-glass-card">
            <LangLink to="/" className="back-button">
              <ArrowLeft size={20} />
              {t('paginas.comun.volverInicio')}
            </LangLink>

            <div className="hero-content-centered">
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles size={16} />
                <span>{t('paginas.comoTrabajamos.badge')}</span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t('paginas.comoTrabajamos.h1')}
              </motion.h1>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('paginas.comoTrabajamos.descripcion')}
              </motion.p>

              <motion.div
                className="hero-key-points"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="key-point">
                  <CheckCircle size={20} />
                  <span>{t('paginas.comoTrabajamos.punto1')}</span>
                </div>
                <div className="key-point">
                  <CheckCircle size={20} />
                  <span>{t('paginas.comoTrabajamos.punto2')}</span>
                </div>
                <div className="key-point">
                  <CheckCircle size={20} />
                  <span>{t('paginas.comoTrabajamos.punto3')}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <Suspense fallback={<LoadingFallback />}>
          <Culture />
        </Suspense>

        {/* Metodología */}
        <Suspense fallback={<LoadingFallback />}>
          <Metodologia />
        </Suspense>

        {/* FAQ */}
        <Suspense fallback={<LoadingFallback />}>
          <FAQ />
        </Suspense>

        {/* CTA Final */}
        <Suspense fallback={<LoadingFallback />}>
          <CTASection 
            titulo={t('paginas.comoTrabajamos.ctaTitulo')}
            descripcion={t('paginas.comoTrabajamos.ctaDesc')}
            textoBoton={t('paginas.comoTrabajamos.ctaBoton')}
            linkTo="/#contact"
          />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
      </motion.div>
    </div>
  );
}

export default ComoTrabajamos;
