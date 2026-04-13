import React, { lazy, Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import LangLink from '../componentes/LangLink';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Users, Target, Sparkles, Code, Zap, Coffee, Lightbulb } from 'lucide-react';
import './SobreNosotros.css';
import LanguageToggle from '../componentes/LanguageToggle';
import { useTranslation } from 'react-i18next';
import '../App.css';
import '../section-glass-card.css';

const CTASection = lazy(() => import('../componentes/Contenido/CTASection'));
const Footer = lazy(() => import('../componentes/Contenido/Footer'));

const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
);

// Variantes para animaciones de scroll con Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Componente para miembro del equipo con badges expandibles
function TeamMemberCard({ member, delay = 0 }) {
  const [expandedBadge, setExpandedBadge] = useState(null);

  const toggleBadge = (index) => {
    setExpandedBadge(expandedBadge === index ? null : index);
  };

  return (
    <motion.div
      className="founder-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      transition={{ delay }}
    >
      <div className="founder-image-wrapper">
        {member.foto ? (
          <div className="founder-photo">
            <img 
              src={`/${member.foto}`} 
              alt={`${member.name} - ${member.role}`}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="founder-placeholder" style={{ background: member.gradient }}>
            {member.icon}
          </div>
        )}
        <div className="founder-badge">{member.role}</div>
      </div>
      <div className="founder-info">
        <h3>{member.name}</h3>
        <p className="founder-role">{member.title}</p>
        <p className="founder-bio">{member.bio}</p>
        
        {/* Badges clickeables */}
        <div className="founder-badges-grid">
          {member.badges.map((badge, idx) => (
            <div key={idx} className="badge-expandable-wrapper">
              <div 
                className={`badge-expandable ${badge.type} ${expandedBadge === idx ? 'active' : ''}`}
                onClick={() => toggleBadge(idx)}
              >
                <div className="badge-header">
                  {badge.icon}
                  <span>{badge.label}</span>
                  <div className="badge-toggle">{expandedBadge === idx ? '−' : '+'}</div>
                </div>
              </div>
              {expandedBadge === idx && (
                <motion.div 
                  className="badge-detail"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{badge.detail}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Componente de acordeón para Por Qué Elegirnos
function PorQueAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const porqueIcons = [<Sparkles size={32} />, <Heart size={32} />, <Users size={32} />, <Target size={32} />, <Coffee size={32} />, <Zap size={32} />];
  const porqueItemsT = t('paginas.sobreNosotros.porqueItems', { returnObjects: true });
  const porqueData = Array.isArray(porqueItemsT)
    ? porqueItemsT.map((item, i) => ({ ...item, icon: porqueIcons[i] }))
    : [
      { title: 'Transparencia total', preview: 'Sin letra chica ni sorpresas', fullText: 'La confianza es lo primero.', icon: <Sparkles size={32} /> },
      { title: 'Comunicación constante', preview: 'Actualizaciones claras y frecuentes', fullText: 'Siempre disponibles para responder dudas.', icon: <Heart size={32} /> },
      { title: 'Trato cercano', preview: 'Abiertos al diálogo y dispuestos a escuchar', fullText: 'Sin intermediarios ni burocracia.', icon: <Users size={32} /> },
      { title: 'Calidad profesional', preview: 'Código limpio y soluciones escalables', fullText: 'Usamos las mejores prácticas de la industria.', icon: <Target size={32} /> },
      { title: 'Atención humana', preview: 'Atentos, pacientes y con buena onda', fullText: 'Sin tecnicismos innecesarios.', icon: <Coffee size={32} /> },
      { title: 'Compromiso real', preview: 'Tu crecimiento es el nuestro', fullText: 'Construimos relaciones, no solo proyectos.', icon: <Zap size={32} /> }
    ];

  return (
    <div className="porque-wrapper">
      <div className="porque-accordion">
        {porqueData.map((item, idx) => (
          <motion.div
            key={idx}
            className={`porque-accordion-item ${activeIndex === idx ? 'active' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            transition={{ delay: idx * 0.08 }}
          >
            <div 
              className="porque-accordion-header"
              onClick={() => toggleItem(idx)}
            >
              <div className="porque-icon">{item.icon}</div>
              <div className="porque-text-wrapper">
                <h4>{item.title}</h4>
                <p className="porque-preview">{item.preview}</p>
              </div>
              <div className="porque-toggle-icon">
                {activeIndex === idx ? '−' : '+'}
              </div>
            </div>
            <div className={`porque-accordion-content ${activeIndex === idx ? 'open' : ''}`}>
              <p>{item.fullText}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Componente de acordeón para la historia
function HistoriaAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const historiaItemsT = t('paginas.sobreNosotros.historiaItems', { returnObjects: true });
  const historiaData = Array.isArray(historiaItemsT) ? historiaItemsT : [
    { titulo: 'Los primeros pasos', preview: 'Éramos dos amigos con ganas de crear algo propio...', fullText: 'Todo empezó entre charlas y mates.' },
    { titulo: 'El impulso', preview: 'Los primeros clientes confiaron en nosotros...', fullText: 'Los primeros proyectos fueron un desafío hermoso.' },
    { titulo: 'Crecimiento y evolución', preview: 'Con el tiempo, se sumó más gente...', fullText: 'Hoy somos un equipo más grande.' }
  ];

  return (
    <div className="historia-content">
      {/* Intro antes de las etapas */}
      <div className="historia-intro">
        <p>
          {t('paginas.sobreNosotros.historiaIntro')}
        </p>
      </div>

      {/* Acordeones */}
      <div className="historia-accordion">
        {historiaData.map((item, idx) => (
          <div 
            key={idx} 
            className={`accordion-item ${activeIndex === idx ? 'active' : ''}`}
          >
            <div 
              className="accordion-header"
              onClick={() => toggleAccordion(idx)}
            >
              <div className="accordion-number">{String(idx + 1).padStart(2, '0')}</div>
              <div className="accordion-title-wrapper">
                <h4>{item.titulo}</h4>
                <p className="accordion-preview">{item.preview}</p>
              </div>
              <div className="accordion-icon">
                {activeIndex === idx ? '−' : '+'}
              </div>
            </div>
            <div className={`accordion-content ${activeIndex === idx ? 'open' : ''}`}>
              <p>{item.fullText}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Conclusión después de las etapas */}
      <div className="historia-conclusion">
        <h4>{t('paginas.sobreNosotros.historiaConclusion')}</h4>
        <p>{t('paginas.sobreNosotros.historiaConclusionTexto')}</p>
      </div>
    </div>
  );
}

function SobreNosotros() {
  const { t, i18n } = useTranslation();
  const { lang: urlLang } = useParams();
  const lang = urlLang || i18n.language?.slice(0, 2) || 'es';

  return (
    <>
      <Helmet>
        <title>{lang === 'en' ? 'About UXnicorp | Web Development Agency Argentina' : 'Sobre UXnicorp | Agencia Desarrollo Web Argentina'}</title>
        <meta name="description" content={lang === 'en' ? 'Web development team in Argentina specialized in Landing Pages, E-commerce and ERP Systems. Transparency, fast delivery and agile methodology.' : 'Equipo de desarrollo web en Argentina especializado en Landing Pages, E-commerce y Sistemas ERP. Transparencia, entregas rápidas y metodología ágil.'} />
        <meta name="keywords" content="equipo desarrollo web, agencia desarrollo argentina, sobre nosotros, equipo UXnicorp, desarrolladores argentina, filosofía desarrollo web, valores empresa tecnología, agencia web buenos aires" />
        <link rel="canonical" href={`https://www.uxnicorp.com.ar/${lang}/sobre-nosotros`} />
        <link rel="alternate" hrefLang="es" href="https://www.uxnicorp.com.ar/es/sobre-nosotros" />
        <link rel="alternate" hrefLang="en" href="https://www.uxnicorp.com.ar/en/sobre-nosotros" />
        <link rel="alternate" hrefLang="x-default" href="https://www.uxnicorp.com.ar/es/sobre-nosotros" />
        
        <meta property="og:title" content={lang === 'en' ? 'About UXnicorp | Web Development Agency Argentina' : 'Sobre Nosotros | Equipo de Desarrollo Web - UXnicorp'} />
        <meta property="og:description" content={lang === 'en' ? 'Specialized web development team. Transparency, agile methodology and fast deliveries in Argentina.' : 'Equipo especializado en desarrollo web. Transparencia, metodología ágil y entregas rápidas en Argentina.'} />
        <meta property="og:url" content={`https://www.uxnicorp.com.ar/${lang}/sobre-nosotros`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'es_AR'} />
      </Helmet>
      <LanguageToggle />
      
      <main className="sobre-nosotros-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <LangLink to="/" className="back-link">
              <ArrowLeft size={18} />
              <span>{t('paginas.comun.volverInicio')}</span>
            </LangLink>

            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart size={16} />
              <span>{t('paginas.sobreNosotros.badge')}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="hero-title">
                {t('paginas.sobreNosotros.h1Pre')} <br />
                <span className="gradient-text">{t('paginas.sobreNosotros.h1Highlight')}</span>
              </h1>
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('paginas.sobreNosotros.descripcion')}
            </motion.p>
          </div>
        </section>

        {/* Quiénes Somos */}
        <section className="section quienes-section">
          <div className="section-glass-card">
            <div className="section-header centered">
              <span className="section-badge">
                <Lightbulb size={16} />
                {t('paginas.sobreNosotros.quienesBadge')}
              </span>
              <h2 className="section-title">
                {t('paginas.sobreNosotros.quienesH2')}
              </h2>
              <p className="section-description">
                {t('paginas.sobreNosotros.quienesDesc')}
              </p>
            </div>

            <div className="quienes-content">
              <div className="quienes-intro">
                <div className="intro-visual">
                  <div className="visual-circle">
                    <Lightbulb size={32} />
                  </div>
                </div>
                <div className="intro-text">
                  <p>{t('paginas.sobreNosotros.quienesIntro1')}</p>
                  <p>{t('paginas.sobreNosotros.quienesIntro2')}</p>
                </div>
              </div>

              <div className="quienes-highlights centered-highlights">
                <div className="highlight-item">
                  <Zap size={20} />
                  <span>{t('paginas.sobreNosotros.highlight1')}</span>
                </div>
                <div className="highlight-item">
                  <Users size={20} />
                  <span>{t('paginas.sobreNosotros.highlight2')}</span>
                </div>
                <div className="highlight-item">
                  <Lightbulb size={20} />
                  <span>{t('paginas.sobreNosotros.highlight3')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="section valores-section">
          <div className="section-glass-card">
            <div className="section-header centered">
              <span className="section-badge">
                <Target size={16} />
                {t('paginas.sobreNosotros.valoresBadge')}
              </span>
              <h2 className="section-title">
                {t('paginas.sobreNosotros.valoresH2')}
              </h2>
              <p className="section-description">
                {t('paginas.sobreNosotros.valoresDesc')}
              </p>
            </div>

            <div className="valores-wrapper">
              <div className="intro-card">
                <div className="intro-icon">
                  <Heart size={40} />
                </div>
                <p className="valores-intro">
                  {t('paginas.sobreNosotros.valoresIntro')}
                </p>
              </div>

              <div className="valores-grid">
                <motion.div
                  className="valor-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                >
                  <div className="valor-icon passion">
                    <Heart />
                  </div>
                  <h3>{t('paginas.sobreNosotros.valor1Titulo')}</h3>
                  <p>{t('paginas.sobreNosotros.valor1Desc')}</p>
                </motion.div>

                <motion.div
                  className="valor-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  transition={{ delay: 0.2 }}
                >
                  <div className="valor-icon commitment">
                    <Zap />
                  </div>
                  <h3>{t('paginas.sobreNosotros.valor2Titulo')}</h3>
                  <p>{t('paginas.sobreNosotros.valor2Desc')}</p>
                </motion.div>

                <motion.div
                  className="valor-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  transition={{ delay: 0.4 }}
                >
                  <div className="valor-icon human">
                    <Coffee />
                  </div>
                  <h3>{t('paginas.sobreNosotros.valor3Titulo')}</h3>
                  <p>{t('paginas.sobreNosotros.valor3Desc')}</p>
                </motion.div>
              </div>

              <div className="callout-quote">
                <div className="quote-icon">
                  <Heart size={32} />
                </div>
                <blockquote>
                  "{t('paginas.sobreNosotros.quote')}"
                </blockquote>
                <div className="quote-author">{t('paginas.sobreNosotros.quoteAuthor')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="section historia-section">
          <div className="section-glass-card">
            <div className="section-header centered">
              <span className="section-badge">
                <Sparkles size={16} />
                {t('paginas.sobreNosotros.historiaBadge')}
              </span>
              <h2 className="section-title">
                {t('paginas.sobreNosotros.historiaH2')}
              </h2>
              <p className="section-description">
                {t('paginas.sobreNosotros.historiaDesc')}
              </p>
            </div>

            <HistoriaAccordion />
          </div>
        </section>

        {/* Equipo */}
        <section className="section team-section">
          <div className="section-glass-card">
            <div className="section-header centered">
              <span className="section-badge">
                <Users size={16} />
                {t('paginas.sobreNosotros.equipoBadge')}
              </span>
              <h2 className="section-title">
                {t('paginas.sobreNosotros.equipoH2')}
              </h2>
              <p className="section-description">
                {t('paginas.sobreNosotros.equipoDesc')}
              </p>
            </div>

            <div className="team-description">
              <div className="team-intro-card">
                <div className="team-intro-icon">
                  <Users size={40} />
                </div>
                <div className="team-intro-text">
                  <h3>{t('paginas.sobreNosotros.equipoIntroH3')}</h3>
                  <p>{t('paginas.sobreNosotros.equipoIntroP')}</p>
                </div>
              </div>

              <div className="team-values-grid">
                <motion.div
                  className="team-value-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                >
                  <div className="team-value-icon">
                    <Code size={28} />
                  </div>
                  <h4>{t('paginas.sobreNosotros.equipoVal1Titulo')}</h4>
                  <p>{t('paginas.sobreNosotros.equipoVal1Desc')}</p>
                </motion.div>

                <motion.div
                  className="team-value-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  transition={{ delay: 0.15 }}
                >
                  <div className="team-value-icon">
                    <Sparkles size={28} />
                  </div>
                  <h4>{t('paginas.sobreNosotros.equipoVal2Titulo')}</h4>
                  <p>{t('paginas.sobreNosotros.equipoVal2Desc')}</p>
                </motion.div>

                <motion.div
                  className="team-value-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  transition={{ delay: 0.3 }}
                >
                  <div className="team-value-icon">
                    <Heart size={28} />
                  </div>
                  <h4>{t('paginas.sobreNosotros.equipoVal3Titulo')}</h4>
                  <p>{t('paginas.sobreNosotros.equipoVal3Desc')}</p>
                </motion.div>

                <motion.div
                  className="team-value-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  transition={{ delay: 0.45 }}
                >
                  <div className="team-value-icon">
                    <Target size={28} />
                  </div>
                  <h4>{t('paginas.sobreNosotros.equipoVal4Titulo')}</h4>
                  <p>{t('paginas.sobreNosotros.equipoVal4Desc')}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Conocé al equipo core */}
        <section className="section team-core-section">
          <div className="section-glass-card">
            <div className="section-header centered">
              <span className="section-badge">
                <Heart size={16} />
                {t('paginas.sobreNosotros.equipoCoreBadge')}
              </span>
              <h2 className="section-title">
                {t('paginas.sobreNosotros.equipoCoreH2')}
              </h2>
              <p className="section-description">
                {t('paginas.sobreNosotros.equipoCoreDesc')}
              </p>
            </div>

            <div className="team-core-content">
              <div className="team-core-intro">
                <p>{t('paginas.sobreNosotros.equipoCoreIntro')}</p>
              </div>

              <div className="founders-grid">
                {(() => {
                  const miembrosT = t('paginas.sobreNosotros.miembros', { returnObjects: true });
                  const staticData = [
                    { name: "Gonzalo", foto: "daniel.webp", icon: <Code size={48} />, gradient: "linear-gradient(135deg, #f37aa6, #ff8cc8)", badgeIcons: [<Target size={16} />, <Code size={16} />, <Heart size={16} />, <Sparkles size={16} />] },
                    { name: "Ailín",   foto: "ailin.webp",  icon: <Sparkles size={48} />, gradient: "linear-gradient(135deg, #e0a6d8, #81ade7)", badgeIcons: [<Sparkles size={16} />, <Code size={16} />, <Heart size={16} />, <Sparkles size={16} />] },
                    { name: "Sol",     foto: "sol.webp",    icon: <Lightbulb size={48} />, gradient: "linear-gradient(135deg, #ff8cc8, #e0a6d8)", badgeIcons: [<Target size={16} />, <Sparkles size={16} />, <Lightbulb size={16} />, <Heart size={16} />] }
                  ];
                  const badgeTypes = [
                    ["professional","professional","personal","personal"],
                    ["professional","professional","personal","personal"],
                    ["professional","professional","personal","personal"]
                  ];
                  const members = Array.isArray(miembrosT)
                    ? staticData.map((s, i) => ({
                        ...s,
                        role:  miembrosT[i]?.role  || s.name,
                        title: miembrosT[i]?.title || '',
                        bio:   miembrosT[i]?.bio   || '',
                        badges: (miembrosT[i]?.badges || []).map((b, bi) => ({
                          type:   badgeTypes[i][bi],
                          label:  b.label,
                          icon:   s.badgeIcons[bi],
                          detail: b.detail
                        }))
                      }))
                    : staticData;
                  return members.map((member, i) => (
                    <TeamMemberCard key={member.name} delay={i * 0.15} member={member} />
                  ));
                })()}
              </div>

              <div className="team-core-note">
                <div className="note-icon">
                  <Users size={32} />
                </div>
                <div className="note-content">
                  <h4>{t('paginas.sobreNosotros.equipoCoreNotaH4')}</h4>
                  <p>{t('paginas.sobreNosotros.equipoCoreNotaP')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="section porque-section">
          <div className="section-glass-card">
            <div className="section-header centered">
              <span className="section-badge">
                <Sparkles size={16} />
                {t('paginas.sobreNosotros.porqueBadge')}
              </span>
              <h2 className="section-title">
                {t('paginas.sobreNosotros.porqueH2')}
              </h2>
              <p className="section-description">
                {t('paginas.sobreNosotros.porqueDesc')}
              </p>
            </div>

            <PorQueAccordion />
          </div>
        </section>

        {/* Mensaje final */}
        <section className="mensaje-section">
          <div className="section-glass-card">
            <div className="mensaje-content">
              <div className="mensaje-icon-top">
                <Sparkles size={48} strokeWidth={1.5} />
              </div>
              <h2>{t('paginas.sobreNosotros.mensajeH2')}</h2>
              <p className="mensaje-lead">
                {t('paginas.sobreNosotros.mensajeLead')}
              </p>
              <div className="mensaje-features">
                <div className="mensaje-feature">
                  <Heart size={20} />
                  <span>{t('paginas.sobreNosotros.mensajeF1')}</span>
                </div>
                <div className="mensaje-feature">
                  <Target size={20} />
                  <span>{t('paginas.sobreNosotros.mensajeF2')}</span>
                </div>
                <div className="mensaje-feature">
                  <Code size={20} />
                  <span>{t('paginas.sobreNosotros.mensajeF3')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <Suspense fallback={<LoadingFallback />}>
          <CTASection 
            titulo={t('paginas.sobreNosotros.ctaTitulo')}
            descripcion={t('paginas.sobreNosotros.ctaDesc')}
            textoBoton={t('paginas.sobreNosotros.ctaBoton')}
            linkTo="/#contact"
          />
        </Suspense>
      </main>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default SobreNosotros;
