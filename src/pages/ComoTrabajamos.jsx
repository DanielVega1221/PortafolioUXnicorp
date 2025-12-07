import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Zap, Heart, CheckCircle, ArrowDown } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Navbar from '../componentes/Navbar/Navbar';
import './ComoTrabajamos.css';
import '../App.css';
import '../section-glass-card.css';

const Culture = lazy(() => import('../componentes/Contenido/Culture'));
const Metodologia = lazy(() => import('../componentes/Contenido/Metodologia'));
const FAQ = lazy(() => import('../componentes/Contenido/FAQ'));
const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));

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
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Proceso de Desarrollo Web | Metodología Ágil - UXnicorp</title>
        <meta name="description" content="Conocé cómo trabajamos: metodología ágil, código limpio, testing exhaustivo y comunicación constante. Proceso transparente de desarrollo web profesional paso a paso." />
        <meta name="keywords" content="metodología desarrollo web, proceso desarrollo software, metodología ágil, clean code, testing software, agile development, scrum, desarrollo profesional, arquitectura software" />
        <link rel="canonical" href="https://uxnicorp.com/como-trabajamos" />
        
        <meta property="og:title" content="Proceso de Desarrollo Web | Metodología Ágil - UXnicorp" />
        <meta property="og:description" content="Conocé nuestra metodología de desarrollo: código limpio, testing exhaustivo y entregas continuas. Transparencia total en cada fase del proyecto." />
        <meta property="og:url" content="https://uxnicorp.com/como-trabajamos" />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <main className="main-cards-wrapper">
        {/* Hero Section */}
        <section className="hero-clean">
          <div className="section-glass-card">
            <Link to="/#main" className="back-button">
              <ArrowLeft size={20} />
              Volver al inicio
            </Link>

            <div className="hero-content-centered">
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles size={16} />
                <span>Nuestro enfoque</span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Desarrollo web con{' '}
                <span className="highlight-word">código que habla por sí mismo</span>
              </motion.h1>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                No creemos en magia ni en promesas vacías. Creemos en arquitecturas sólidas, 
                testing exhaustivo y comunicación honesta. Cada línea de código es una decisión 
                consciente pensada para el presente y el futuro de tu producto.
              </motion.p>

              <motion.div
                className="hero-key-points"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="key-point">
                  <CheckCircle size={20} />
                  <span>Código revisado y testeado en cada etapa</span>
                </div>
                <div className="key-point">
                  <CheckCircle size={20} />
                  <span>Documentación clara para que no dependas de nosotros</span>
                </div>
                <div className="key-point">
                  <CheckCircle size={20} />
                  <span>Actualizaciones constantes sin necesidad de perseguirnos</span>
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
            titulo="¿Listo para empezar tu proyecto?"
            descripcion="Conversemos sin compromiso sobre cómo podemos ayudarte"
            textoBoton="Hablemos de tu proyecto"
            linkTo="/#contact"
          />
        </Suspense>
      </main>
    </motion.div>
  );
}

export default ComoTrabajamos;
