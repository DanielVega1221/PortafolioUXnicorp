/**
 * PÁGINA: Diagnóstico Digital Interactivo
 *
 * Herramienta de diagnóstico automático que guía al usuario a través de preguntas
 * adaptativas y le devuelve una recomendación personalizada con problemas detectados,
 * oportunidades e indicaciones estratégicas.
 *
 * Flujo:
 *   FASE 1 — Rubro (pantalla de tarjetas grandes)
 *   FASE 2 — Subtipo del rubro
 *   FASE 3 — Preguntas adaptativas (comunes + específicas del rubro)
 *   FASE 4 — Resultados con diagnóstico completo + CTA
 *
 * Ruta: /:lang/diagnostico
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Lightbulb,
  Target,
  ArrowRight,
  MessageCircle,
  Zap,
  Star,
  HelpCircle,
  Sparkles,
  Briefcase,
  UtensilsCrossed,
  ShoppingBag,
  GraduationCap,
  UserCircle2,
  Building2,
  Plane,
  Heart,
  Bot,
  TrendingUp as GrowthIcon,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LangLink from '../componentes/LangLink';
import LanguageToggle from '../componentes/LanguageToggle';
import {
  getRUBROS,
  getPreguntasParaRubro,
  generateDiagnostico,
  generateDiagnosticoLang,
} from '../utils/diagnosticoEngine';
import { getSeoData } from '../utils/seoConfig';
import './Diagnostico.css';

// ─── Mapa de iconos por rubro ──────────────────────────────────────────────────────────────
const RUBRO_ICONS = {
  servicios_profesionales: Briefcase,
  gastronomia:             UtensilsCrossed,
  comercio:                ShoppingBag,
  educacion:               GraduationCap,
  marca_personal:          UserCircle2,
  empresa_b2b:             Building2,
  turismo:                 Plane,
  bienestar:               Heart,
};

// ─── Helper para renderizar el icón de un rubro ───────────────────────────────────
function RubroIcon({ rubroId, size = 28 }) {
  const Icon = RUBRO_ICONS[rubroId];
  return Icon ? <Icon size={size} strokeWidth={1.6} /> : null;
}

// ─── Constantes de fases ───────────────────────────────────────────────────
const FASE = {
  RUBRO:      'rubro',
  SUBTIPO:    'subtipo',
  PREGUNTAS:  'preguntas',
  ANALIZANDO: 'analizando',
  RESULTADO:  'resultado',
};

// ─── Animación de slide ───────────────────────────────────────────────────
const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

const transition = { duration: 0.3, ease: 'easeInOut' };

// ─── Preguntas frecuentes (landing hero) ────────────────────────────────────────────
const FAQ_QUESTIONS_ES = [
  '¿Qué tipo de web le conviene a mi negocio?',
  '¿Vale la pena invertir en una página web propia?',
  '¿Necesito un sistema de gestión o alcanza con una web?',
  '¿Cuánto cuesta hacer una página web profesional?',
  '¿Cómo sé si estoy listo para vender online?',
  '¿Qué diferencia hay entre una landing page y un sitio web?',
];

const FAQ_QUESTIONS_EN = [
  'What type of website is best for my business?',
  'Is it worth investing in my own website?',
  'Do I need a management system or is a website enough?',
  'How much does a professional website cost?',
  'How do I know if I\'m ready to sell online?',
  'What\'s the difference between a landing page and a website?',
];

// Posiciones absolutas determinísticas para cada burbuja —
// distribuidas en los 4 cuadrantes alrededor del contenido central
const FAQ_POSITIONS = [
  { top: '8%',  left: '3%'  },   // 0 — arriba izquierda
  { top: '6%',  right: '4%' },   // 1 — arriba derecha
  { top: '30%', left: '1%'  },   // 2 — medio izquierda alta
  { top: '30%', right: '0%' },   // 3 — medio derecha alta
  { bottom: '18%', left: '2%'  },// 4 — abajo izquierda
  { bottom: '12%', right: '3%' },// 5 — abajo derecha
];

// Parámetros de flotado únicos por burbuja
const FAQ_FLOAT = [
  { y: -12, x:  5, r0: -2,   r1:  1  },
  { y: -10, x: -6, r0:  1.5, r1: -1  },
  { y:  -8, x:  4, r0: -1,   r1:  2  },
  { y: -14, x: -5, r0:  2,   r1: -1.5},
  { y:  -9, x:  6, r0: -1.5, r1:  1  },
  { y: -11, x: -4, r0:  1,   r1: -2  },
];

// ─── Pasos del análisis (pantalla de carga) ──────────────────────────────
const ANALYZING_STEPS_ES = [
  'Identificando tu tipo de negocio',
  'Evaluando tu madurez digital',
  'Detectando oportunidades clave',
  'Generando recomendación personalizada',
];

const ANALYZING_STEPS_EN = [
  'Identifying your business type',
  'Evaluating your digital maturity',
  'Detecting key opportunities',
  'Generating personalized recommendation',
];

// ─── Mensajes conversacionales por paso ───────────────────────────────────────────
const AI_MESSAGES = [
  'Cuando emprendés, el objetivo es tu brújula. ¿A qué apuntás principalmente?',
  'Anotado. ¿En qué etapa se encuentra tu negocio hoy?',
  'Perfecto. Vamos a ver cómo estás parado digitalmente...',
  'Bien. Quiero entender cómo se maneja la operación día a día.',
  'Interesante. ¿A qué escala estás operando actualmente?',
  'Casi terminamos. Una pregunta de presupuesto para que la recomendación sea concreta...',
  'Última pregunta, específica para tu tipo de negocio.',
];

// ─── Componente principal ─────────────────────────────────────────────────
function Diagnostico() {
  const { lang: urlLang } = useParams();
  const { t, i18n } = useTranslation();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';

  const RUBROS          = getRUBROS(lang);
  const FAQ_QUESTIONS   = lang === 'en' ? FAQ_QUESTIONS_EN : FAQ_QUESTIONS_ES;
  const ANALYZING_STEPS = lang === 'en' ? ANALYZING_STEPS_EN : ANALYZING_STEPS_ES;

  // ── Estado del flujo ──
  const [fase, setFase]             = useState(FASE.RUBRO);
  const [direction, setDirection]   = useState(1);   // 1 = forward, -1 = back

  // ── Selecciones del usuario ──
  const [rubroId, setRubroId]       = useState(null);
  const [subtipoId, setSubtipoId]   = useState(null);
  const [respuestas, setRespuestas] = useState({});   // { pregunta_id: opcion_id }
  const [stepIndex, setStepIndex]   = useState(0);   // índice dentro de PREGUNTAS

  // ── Resultado ──
  const [diagnostico, setDiagnostico] = useState(null);

  // ── Email capture ──
  const [email, setEmail]           = useState('');
  const [emailEnviado, setEmailEnviado] = useState(false);

  // ── UI local ──
  const [showTip, setShowTip]       = useState(false);
  const [showRubros, setShowRubros] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);
  useEffect(() => { setShowTip(false); }, [stepIndex]);

  // Preguntas calculadas para el rubro elegido
  const preguntas = rubroId ? getPreguntasParaRubro(rubroId, lang) : [];
  const totalSteps = preguntas.length;
  const preguntaActual = preguntas[stepIndex] || null;

  // ── Helpers de navegación ──
  const irA = useCallback((nuevaFase, dir = 1) => {
    setDirection(dir);
    setFase(nuevaFase);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSeleccionarRubro = (id) => {
    setRubroId(id);
    setSubtipoId(null);
    setRespuestas({});
    setStepIndex(0);
    setDiagnostico(null);
    irA(FASE.SUBTIPO);
  };

  const handleSeleccionarSubtipo = (id) => {
    setSubtipoId(id);
    irA(FASE.PREGUNTAS);
  };

  const handleResponder = useCallback((preguntaId, opcionId) => {
    const nuevasRespuestas = { ...respuestas, [preguntaId]: opcionId };
    setRespuestas(nuevasRespuestas);
    // Auto-avanza en todas las preguntas menos la última
    if (stepIndex < totalSteps - 1) {
      setTimeout(() => {
        setDirection(1);
        setStepIndex(i => i + 1);
        window.scrollTo({ top: 80, behavior: 'smooth' });
      }, 360);
    }
  }, [respuestas, stepIndex, totalSteps]);

  const handleVerDiagnostico = useCallback(() => {
    if (!preguntaActual || !respuestas[preguntaActual.id]) return;
    setDirection(1);
    setFase(FASE.ANALIZANDO);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const captura = { ...respuestas };
    setTimeout(() => {
      const result = lang === 'en'
        ? generateDiagnosticoLang(captura, rubroId, subtipoId, 'en')
        : generateDiagnostico(captura, rubroId, subtipoId);
      setDiagnostico(result);
      irA(FASE.RESULTADO);
    }, 4500);
  }, [respuestas, preguntaActual, rubroId, subtipoId, irA, lang]);

  const handleAtras = () => {
    if (fase === FASE.SUBTIPO) {
      irA(FASE.RUBRO, -1);
    } else if (fase === FASE.PREGUNTAS) {
      if (stepIndex > 0) {
        setDirection(-1);
        setStepIndex(i => i - 1);
        window.scrollTo({ top: 80, behavior: 'smooth' });
      } else {
        irA(FASE.SUBTIPO, -1);
      }
    } else if (fase === FASE.RESULTADO) {
      irA(FASE.PREGUNTAS, -1);
      setStepIndex(totalSteps - 1);
    }
  };

  const handleReiniciar = () => {
    setFase(FASE.RUBRO);
    setRubroId(null);
    setSubtipoId(null);
    setRespuestas({});
    setStepIndex(0);
    setDiagnostico(null);
    setEmail('');
    setEmailEnviado(false);
    setShowRubros(false);
    window.scrollTo(0, 0);
  };

  const rubroInfo   = RUBROS.find(r => r.id === rubroId);
  const subtipoInfo = rubroInfo?.subtipos.find(s => s.id === subtipoId);

  const progreso = fase === FASE.PREGUNTAS
    ? Math.round(((stepIndex + 1) / totalSteps) * 100)
    : (fase === FASE.RESULTADO || fase === FASE.ANALIZANDO) ? 100 : 0;

  // ─── Head ───────────────────────────────────────────────────────────────
  const seo  = getSeoData('diagnostico', lang) || {};

  return (
    <>
      <Helmet>
        <title>{seo.title || 'Diagnóstico Digital Gratuito | UXnicorp'}</title>
        <meta name="description" content={seo.description || ''} />
        <meta name="keywords" content={seo.keywords || ''} />
        <link rel="canonical" href={seo.canonical || `https://www.uxnicorp.com.ar/${lang}/diagnostico`} />
        <link rel="alternate" hrefLang="es" href="https://www.uxnicorp.com.ar/es/diagnostico" />
        <link rel="alternate" hrefLang="en" href="https://www.uxnicorp.com.ar/en/diagnostico" />
        <link rel="alternate" hrefLang="x-default" href="https://www.uxnicorp.com.ar/es/diagnostico" />
        <meta property="og:title" content={seo.ogTitle || seo.title || ''} />
        <meta property="og:description" content={seo.ogDescription || seo.description || ''} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.canonical || ''} />
        <meta property="og:image" content={seo.ogImage || 'https://www.uxnicorp.com.ar/og-image.jpg'} />
        <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_AR'} />
        <meta name="robots" content="index, follow" />
        {seo.schema && (
          <script type="application/ld+json">{JSON.stringify(seo.schema)}</script>
        )}
      </Helmet>

      <div className="diag-wrapper">

        {/* BOTÓN HOME FIJO */}
        <LangLink to="/" className="diag-home-btn">
          <ChevronLeft size={18} />
          <span>{t('diagnostico.inicio')}</span>
        </LangLink>

        {/* LANGUAGE TOGGLE FIJO */}
        <div className="diag-lang-toggle">
          <LanguageToggle />
        </div>

        {/* LÍNEA DE PROGRESO FIJA (sólo en fases activas) */}
        {(fase === FASE.PREGUNTAS || fase === FASE.ANALIZANDO || fase === FASE.RESULTADO) && (
          <div className="diag-progress-line">
            <Motion.div
              className="diag-progress-line-fill"
              initial={false}
              animate={{ width: `${progreso}%` }}
              transition={{ duration: fase === FASE.ANALIZANDO ? 1.8 : 0.4, ease: 'easeOut' }}
            />
          </div>
        )}

        {/* CONTENIDO PRINCIPAL */}
        <main className={[
          'diag-main',
          fase === FASE.RUBRO ? 'diag-main--landing' : '',
          (fase === FASE.SUBTIPO || fase === FASE.PREGUNTAS || fase === FASE.ANALIZANDO) ? 'diag-main--slide' : '',
        ].filter(Boolean).join(' ')}>
          <AnimatePresence mode="wait" custom={direction}>

            {/* ═══════════════════════════════════════════════════════════
                FASE 1 — HERO + SELECCIÓN DE RUBRO
            ═══════════════════════════════════════════════════════════ */}
            {fase === FASE.RUBRO && (
              <Motion.div
                key="fase-rubro"
                className="diag-rubro-page"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <AnimatePresence mode="wait">

                  {/* ── Vista A: Hero con FAQ scatter y CTA ── */}
                  {!showRubros && (
                    <Motion.section
                      key="hero-view"
                      className="diag-hero-fullscreen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Contenido central */}
                      <div className="diag-hero-center">
                        {/* Badge */}
                        <Motion.div
                          className="diag-intro-badge"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <Sparkles size={14} />
                          <span>{t('diagnostico.badge')}</span>
                        </Motion.div>

                        {/* Título principal */}
                        <Motion.h1
                          className="diag-hero-title"
                          initial={{ opacity: 0, y: 28 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {t('diagnostico.heroTitlePre')}{' '}
                          <span className="diag-highlight">{t('diagnostico.heroHighlight')}</span>
                          {t('diagnostico.heroTitlePost')}
                        </Motion.h1>

                        {/* Subtítulo */}
                        <Motion.p
                          className="diag-hero-desc"
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.35 }}
                        >
                          {t('diagnostico.heroDesc')}
                        </Motion.p>

                        {/* CTA principal */}
                        <Motion.button
                          className="diag-hero-cta"
                          onClick={() => setShowRubros(true)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.55, duration: 0.45 }}
                        >
                          <span>{t('diagnostico.heroCta')}</span>
                          <div className="diag-hero-cta-icon">
                            <ArrowRight size={18} />
                          </div>
                        </Motion.button>
                      </div>
                    </Motion.section>
                  )}

                  {/* ── Vista B: Grid de rubros ── */}
                  {showRubros && (
                    <Motion.section
                      key="rubros-view"
                      className="diag-rubros-view"
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                    >
                      <Motion.div
                        className="diag-rubros-header"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h2 className="diag-rubros-title">{t('diagnostico.rubrosTitle')}</h2>
                        <p className="diag-rubros-sub">{t('diagnostico.rubrosSub')}</p>
                      </Motion.div>

                      <div className="diag-rubros-grid">
                        {RUBROS.map((rubro, i) => (
                          <Motion.button
                            key={rubro.id}
                            className="diag-rubro-card"
                            onClick={() => handleSeleccionarRubro(rubro.id)}
                            initial={{ opacity: 0, y: 16, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: i * 0.055, duration: 0.3 }}
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <span className="diag-rubro-icon">
                              <RubroIcon rubroId={rubro.id} size={20} />
                            </span>
                            <span className="diag-rubro-label">{rubro.label}</span>
                            <span className="diag-rubro-desc">{rubro.descripcion}</span>
                          </Motion.button>
                        ))}
                      </div>

                      <button
                        className="diag-back-btn diag-back-btn--center"
                        onClick={() => setShowRubros(false)}
                      >
                        <ChevronLeft size={16} /> {t('diagnostico.volver')}
                      </button>
                    </Motion.section>
                  )}

                </AnimatePresence>
              </Motion.div>
            )}

            {/* ═══════════════════════════════════════════════════════════
                FASE 2 — SELECCIÓN DE SUBTIPO
            ═══════════════════════════════════════════════════════════ */}
            {fase === FASE.SUBTIPO && rubroInfo && (
              <Motion.section
                key="fase-subtipo"
                className="diag-slide"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <div className="diag-slide-header">
                  <button className="diag-back-btn" onClick={handleAtras}>
                    <ChevronLeft size={16} /> {t('diagnostico.cambiarRubro')}
                  </button>
                  <span className="diag-rubro-chip" style={{ marginLeft: 'auto' }}>
                    <RubroIcon rubroId={rubroId} size={13} /> {rubroInfo.label}
                  </span>
                </div>

                <div className="diag-slide-body">
                  <Motion.div
                    className="diag-slide-eyebrow"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {t('diagnostico.sobreTuNegocio')}
                  </Motion.div>

                  <Motion.h2
                    className="diag-slide-question"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.5 }}
                  >
                    {t('diagnostico.cualDescribeMejor')}
                  </Motion.h2>

                  <div className="diag-subtipo-grid">
                    {rubroInfo.subtipos.map((sub, i) => (
                      <Motion.button
                        key={sub.id}
                        className="diag-subtipo-card"
                        onClick={() => handleSeleccionarSubtipo(sub.id)}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.18 + i * 0.05, duration: 0.28 }}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="diag-subtipo-num">{String(i + 1).padStart(2, '0')}</span>
                        <span className="diag-subtipo-label">{sub.label}</span>
                        <ChevronRight size={20} className="diag-subtipo-arrow" />
                      </Motion.button>
                    ))}
                  </div>
                </div>
              </Motion.section>
            )}

            {/* ═══════════════════════════════════════════════════════════
                FASE 3 — PREGUNTAS ADAPTATIVAS
            ═══════════════════════════════════════════════════════════ */}
            {fase === FASE.PREGUNTAS && preguntaActual && (
              <Motion.section
                key={`pregunta-${stepIndex}`}
                className="diag-slide"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <div className="diag-slide-header">
                  <button className="diag-back-btn" onClick={handleAtras}>
                    <ChevronLeft size={18} /> {t('diagnostico.atras')}
                  </button>
                  <span className="diag-step-counter">{stepIndex + 1} / {totalSteps}</span>
                  <span className="diag-rubro-chip">
                    <RubroIcon rubroId={rubroId} size={14} /> {subtipoInfo?.label || rubroInfo?.label}
                  </span>
                </div>

                <div className="diag-slide-body">
                  <Motion.div
                    key={`num-${stepIndex}`}
                    className="diag-slide-step-num"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {String(stepIndex + 1).padStart(2, '0')}
                  </Motion.div>

                  <Motion.h2
                    key={`q-${stepIndex}`}
                    className="diag-slide-question"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    {preguntaActual.pregunta}
                  </Motion.h2>

                  {preguntaActual.subtexto && (
                    <Motion.p
                      className="diag-slide-sub"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {preguntaActual.subtexto}
                    </Motion.p>
                  )}

                  <div className="diag-options-stack">
                    {preguntaActual.opciones.map((opcion, i) => {
                      const seleccionada = respuestas[preguntaActual.id] === opcion.id;
                      return (
                        <Motion.button
                          key={opcion.id}
                          className={`diag-option-card${seleccionada ? ' diag-option-card--selected' : ''}`}
                          onClick={() => handleResponder(preguntaActual.id, opcion.id)}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.18 + i * 0.07, duration: 0.32 }}
                          whileHover={{ x: seleccionada ? 0 : 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="diag-option-card-letter">
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="diag-option-card-text">{opcion.label}</span>
                          {seleccionada && <CheckCircle size={20} className="diag-option-card-check" />}
                        </Motion.button>
                      );
                    })}
                  </div>

                  {/* Consejo contextual expandible */}
                  {preguntaActual.consejo && (
                    <div className="diag-tip-card">
                      <button
                        className="diag-tip-toggle"
                        onClick={() => setShowTip(v => !v)}
                      >
                        <Lightbulb size={14} />
                        <span>{t('diagnostico.porQuePregunto')}</span>
                        <Motion.div
                          animate={{ rotate: showTip ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ display: 'flex' }}
                        >
                          <ChevronDown size={14} />
                        </Motion.div>
                      </button>
                      <AnimatePresence>
                        {showTip && (
                          <Motion.p
                            key="tip"
                            className="diag-tip-text"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: '0.6rem' }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            {preguntaActual.consejo}
                          </Motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Botón solo en la última pregunta */}
                  {stepIndex === totalSteps - 1 && (
                    <div className="diag-nav-row">
                      <button
                        className="diag-continue-btn diag-continue-btn--final"
                        onClick={handleVerDiagnostico}
                        disabled={!respuestas[preguntaActual.id]}
                      >
                        <Sparkles size={18} /> {t('diagnostico.verDiagnostico')}
                      </button>
                    </div>
                  )}
                </div>
              </Motion.section>
            )}

            {/* ═══════════════════════════════════════════════════════════
                FASE 3.5 — ANALIZANDO
            ═══════════════════════════════════════════════════════════ */}
            {fase === FASE.ANALIZANDO && (
              <Motion.div
                key="fase-analizando"
                className="diag-slide diag-slide--analyzing"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <div className="diag-analyzing-core">
                  <div className="diag-analyzing-glow" />

                  <Motion.div
                    className="diag-analyzing-avatar"
                    animate={{ scale: [1, 1.09, 1] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  >
                    <Bot size={62} strokeWidth={1.3} />
                  </Motion.div>

                  <h2 className="diag-analyzing-title">{t('diagnostico.analizandoTitle')}</h2>
                  <p className="diag-analyzing-sub">
                    {t('diagnostico.analizandoSub')}
                  </p>

                  <div className="diag-analyzing-steps">
                    {ANALYZING_STEPS.map((step, i) => (
                      <Motion.div
                        key={i}
                        className="diag-analyzing-step-item"
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.85, duration: 0.4 }}
                      >
                        <Motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.85, type: 'spring', stiffness: 320 }}
                        >
                          <CheckCircle size={15} className="diag-analyzing-step-check" />
                        </Motion.div>
                        <span>{step}</span>
                      </Motion.div>
                    ))}
                  </div>

                  <div className="diag-analyzing-bar-wrap">
                    <Motion.div
                      className="diag-analyzing-bar"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4.2, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </Motion.div>
            )}

            {/* ═══════════════════════════════════════════════════════════
                FASE 4 — RESULTADO / DIAGNÓSTICO
            ═══════════════════════════════════════════════════════════ */}
            {fase === FASE.RESULTADO && diagnostico && (
              <Motion.section
                key="fase-resultado"
                className="diag-section diag-section--resultado"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                {/* ── Encabezado resultado ── */}
                <div className="diag-resultado-header">
                  <div className="diag-resultado-badge">
                    <CheckCircle size={16} />
                    {t('diagnostico.resultadoBadge')}
                  </div>
                  <h2 className="diag-resultado-title">
                    {t('diagnostico.resultadoTitle')}
                  </h2>
                  <p className="diag-resultado-intro">
                    {t('diagnostico.resultadoIntro')}
                  </p>
                  <div
                    className="diag-solucion-card"
                    style={{ '--sol-color': diagnostico.solucion.color }}
                  >
                    <div className="diag-solucion-top">
                      <span className="diag-solucion-etiqueta">{diagnostico.solucion.etiqueta}</span>
                      <span className="diag-solucion-tiempo">
                        <Zap size={13} /> {diagnostico.solucion.tiempo_estimado}
                      </span>
                    </div>
                    <h3 className="diag-solucion-nombre">{diagnostico.solucion.nombre}</h3>
                    <p className="diag-solucion-desc">{diagnostico.solucion.descripcion}</p>
                  </div>
                </div>

                {/* ── Beneficios de la solución ── */}
                <div className="diag-bloque diag-bloque--beneficios">
                  <div className="diag-bloque-header diag-bloque-header--success">
                    <Star size={18} />
                    <span>{t('diagnostico.porQueSolucion')}</span>
                  </div>
                  <ul className="diag-beneficios-list">
                    {diagnostico.solucion.beneficios.map((b, i) => (
                      <li key={i} className="diag-beneficio-item">
                        <CheckCircle size={15} className="diag-feature-check" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Diagnóstico narrativo ── */}
                <div className="diag-bloque">
                  <div className="diag-bloque-header">
                    <Target size={18} />
                    <span>{t('diagnostico.analisisSituacion')}</span>
                  </div>
                  <p className="diag-narrativo">{diagnostico.diagnosticoNarrativo}</p>
                </div>

                {/* ── Problemas detectados ── */}
                {diagnostico.problemas.length > 0 && (
                  <div className="diag-bloque">
                    <div className="diag-bloque-header diag-bloque-header--warning">
                      <AlertTriangle size={18} />
                      <span>{t('diagnostico.problemasDetectados')}</span>
                    </div>
                    <div className="diag-items-list">
                      {diagnostico.problemas.map((p) => (
                        <div key={p.id} className="diag-item diag-item--problem">
                          <div className="diag-item-title">
                            <AlertTriangle size={15} className="diag-item-icon diag-item-icon--warn" />
                            {p.texto}
                          </div>
                          <div className="diag-item-detail">{p.detalle}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Oportunidades ── */}
                {diagnostico.oportunidades.length > 0 && (
                  <div className="diag-bloque">
                    <div className="diag-bloque-header diag-bloque-header--success">
                      <TrendingUp size={18} />
                      <span>{t('diagnostico.oportunidadesId')}</span>
                    </div>
                    <div className="diag-items-list">
                      {diagnostico.oportunidades.map((o) => (
                        <div key={o.id} className="diag-item diag-item--opportunity">
                          <div className="diag-item-title">
                            <TrendingUp size={15} className="diag-item-icon diag-item-icon--opp" />
                            {o.texto}
                          </div>
                          <div className="diag-item-detail">{o.detalle}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Funcionalidades recomendadas ── */}
                <div className="diag-bloque">
                  <div className="diag-bloque-header">
                    <CheckCircle size={18} />
                    <span>{t('diagnostico.loQueIncluye')}</span>
                  </div>
                  <ul className="diag-features-list">
                    {diagnostico.solucion.funcionalidades.map((f, i) => (
                      <li key={i} className="diag-feature-item">
                        <CheckCircle size={14} className="diag-feature-check" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Estrategia recomendada ── */}
                <div className="diag-bloque">
                  <div className="diag-bloque-header diag-bloque-header--strategy">
                    <Lightbulb size={18} />
                    <span>{t('diagnostico.estrategiaSugerida')}</span>
                  </div>
                  <ol className="diag-strategy-list">
                    {diagnostico.estrategia.map((paso, i) => (
                      <li key={i} className="diag-strategy-item">
                        <span className="diag-strategy-num">{i + 1}</span>
                        <span>{paso}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* ── Alternativas ── */}
                {diagnostico.alternativas.length > 0 && (
                  <div className="diag-bloque">
                    <div className="diag-bloque-header">
                      <ArrowRight size={18} />
                      <span>{t('diagnostico.alternativas')}</span>
                    </div>
                    <div className="diag-alternativas">
                      {diagnostico.alternativas.map((alt) => (
                        <div key={alt.id} className="diag-alt-card" style={{ '--alt-color': alt.color }}>
                          <div className="diag-alt-nombre">{alt.nombre}</div>
                          <div className="diag-alt-desc">{alt.descripcion.slice(0, 100)}…</div>
                          <div className="diag-alt-tiempo">
                            <Zap size={12} /> {alt.tiempo_estimado}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── CTA Principal ── */}
                <div className="diag-cta-block">
                  <h3 className="diag-cta-title">
                    {t('diagnostico.ctaTitle')}
                  </h3>
                  <p className="diag-cta-desc">
                    {t('diagnostico.ctaDesc')}
                  </p>
                  <div className="diag-cta-buttons">
                    <LangLink
                      to="/"
                      state={{
                        servicioInteres: diagnostico.solucion.nombre,
                        diagnosticoResumen: diagnostico.diagnosticoNarrativo,
                        fromDiagnostico: true,
                      }}
                      className="diag-cta-btn-primary"
                    >
                      <MessageCircle size={18} />
                      {t('diagnostico.ctaBtnPrimary')}
                    </LangLink>
                    <LangLink
                      to={`/${diagnostico.solucion.slug_servicio}${diagnostico.solucion.item_id ? '#' + diagnostico.solucion.item_id : ''}`}
                      className="diag-cta-btn-secondary"
                    >
                      {t('diagnostico.ctaBtnSecondary')}
                      <ArrowRight size={16} />
                    </LangLink>
                  </div>
                </div>

                {/* ── Reiniciar ── */}
                <div className="diag-reiniciar-row">
                  <button className="diag-reiniciar-btn" onClick={handleReiniciar}>
                    <RotateCcw size={15} /> {t('diagnostico.reiniciar')}
                  </button>
                </div>
              </Motion.section>
            )}

          </AnimatePresence>
        </main>

      </div>
    </>
  );
}

export default Diagnostico;
