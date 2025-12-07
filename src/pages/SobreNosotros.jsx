import React, { lazy, Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Target, Sparkles, Code, Zap, Coffee, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import './SobreNosotros.css';
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

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const porqueData = [
    { 
      title: 'Transparencia total', 
      preview: 'Sin letra chica ni sorpresas',
      fullText: 'Desde el primer contacto te explicamos todo: costos, tiempos, alcance. No hay "extras" ocultos. Si algo cambia durante el proyecto, lo hablamos, lo ajustamos y seguimos adelante juntos. La confianza es lo primero.',
      icon: <Sparkles size={32} />
    },
    { 
      title: 'Comunicación constante', 
      preview: 'Actualizaciones claras y frecuentes',
      fullText: 'No te dejamos en el aire. Te mantenemos al tanto del avance con reuniones regulares, capturas de progreso y acceso a un repositorio donde podés ver el trabajo en tiempo real. Siempre disponibles para responder dudas.',
      icon: <Heart size={32} />
    },
    { 
      title: 'Trato cercano', 
      preview: 'Abiertos al diálogo y dispuestos a escuchar',
      fullText: 'Hablás directamente con quienes están desarrollando tu proyecto. No hay intermediarios ni capas de burocracia. Escuchamos tus ideas, te guiamos si es necesario, y te involucramos en cada decisión importante.',
      icon: <Users size={32} />
    },
    { 
      title: 'Calidad profesional', 
      preview: 'Código limpio y soluciones escalables',
      fullText: 'Escribimos código pensando en el futuro: ordenado, documentado y fácil de mantener. Usamos las mejores prácticas de la industria y tecnologías modernas para que tu sitio sea rápido, seguro y preparado para crecer.',
      icon: <Target size={32} />
    },
    { 
      title: 'Atención humana', 
      preview: 'Atentos, pacientes y con buena onda',
      fullText: 'Sabemos que no todos hablan "en código". Te explicamos todo con paciencia y claridad, sin tecnicismos innecesarios. Si algo no te gusta, lo cambiamos. Si tenés dudas, las resolvemos con buena onda.',
      icon: <Coffee size={32} />
    },
    { 
      title: 'Compromiso real', 
      preview: 'Tu crecimiento es el nuestro',
      fullText: 'No entregamos el sitio y desaparecemos. Te damos garantía de 1 mes post-lanzamiento y te enseñamos a gestionar tu web. Tu éxito nos importa porque construimos relaciones, no solo proyectos.',
      icon: <Zap size={32} />
    }
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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const historiaData = [
    {
      title: "Los primeros pasos",
      preview: "Éramos dos amigos con ganas de crear algo propio...",
      fullText: "Todo empezó entre charlas y mates. Éramos dos amigos con ganas de hacer algo juntos, de crear proyectos propios y ayudar a emprendedores que, como nosotros en ese momento, necesitaban una web pero no querían algo genérico sacado de una plantilla. Queríamos hacer sitios a medida, con personalidad, que realmente representaran a las personas detrás de cada negocio. Sin oficina, sin inversión inicial, solo ganas y una notebook."
    },
    {
      title: "El impulso",
      preview: "Los primeros clientes confiaron en nosotros...",
      fullText: "Los primeros proyectos fueron un desafío hermoso. Cada cliente que confiaba en nosotros nos daba más motivación para seguir. Aprendimos un montón: desde cómo comunicar ideas técnicas de forma simple hasta cómo manejar tiempos, expectativas y entregar algo que realmente funcione. Nos dimos cuenta de que no solo hacíamos webs, estábamos construyendo relaciones. Y eso nos encantó."
    },
    {
      title: "Crecimiento y evolución",
      preview: "Con el tiempo, se sumó más gente...",
      fullText: "A medida que crecíamos, se fue sumando más gente: colaboradores, diseñadores, otros devs. Hoy somos un equipo más grande, pero mantenemos esa esencia de \"che, ¿y si hacemos algo copado?\". Nos especializamos más, mejoramos procesos, pero nunca perdimos la idea de que detrás de cada proyecto hay una persona con una historia, un sueño o una necesidad real."
    }
  ];

  return (
    <div className="historia-content">
      {/* Intro antes de las etapas */}
      <div className="historia-intro">
        <p>
          <strong>Antes de ser UXnicorp</strong>, éramos dos personas con ganas de crear. 
          No teníamos un plan maestro ni una estrategia corporativa. Solo teníamos una idea: 
          ayudar a emprendedores y negocios a tener presencia digital <em>de verdad</em>, 
          sin plantillas genéricas ni frialdad empresarial.
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
                <h4>{item.title}</h4>
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
        <h4>¿Dónde estamos hoy?</h4>
        <p>
          Hoy UXnicorp es un equipo consolidado que sigue trabajando con esa misma energía 
          del principio. Seguimos escuchando, aprendiendo, mejorando. No somos una agencia 
          gigante ni queremos serlo. Somos un equipo humano, accesible, comprometido con cada 
          proyecto como si fuera propio. Y lo mejor: <strong>seguimos disfrutándolo</strong>.
        </p>
      </div>
    </div>
  );
}

function SobreNosotros() {

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Equipo de Desarrollo Web - UXnicorp</title>
        <meta name="description" content="Conocé al equipo detrás de UXnicorp: desarrolladores apasionados que creen en las relaciones reales, la transparencia y en que tu éxito también es el nuestro." />
        <meta name="keywords" content="equipo desarrollo web, sobre nosotros, equipo UXnicorp, desarrolladores argentina, filosofía desarrollo web, valores empresa tecnología" />
        <link rel="canonical" href="https://uxnicorp.com/sobre-nosotros" />
        
        <meta property="og:title" content="Sobre Nosotros | Equipo de Desarrollo Web - UXnicorp" />
        <meta property="og:description" content="Somos un equipo que cree en crear tecnología con alma. Conocé nuestra historia, valores y filosofía de trabajo." />
        <meta property="og:url" content="https://uxnicorp.com/sobre-nosotros" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <main className="sobre-nosotros-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <Link to="/#main" className="back-link">
              <ArrowLeft size={18} />
              <span>Volver al inicio</span>
            </Link>

            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart size={16} />
              <span>Nosotros</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Creamos tecnología <br />
              <span className="gradient-text">con alma</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              No vendemos plantillas genéricas. Construimos soluciones a medida hechas por personas 
              que realmente quieren ver crecer a otras personas.
            </motion.p>
          </div>
        </section>

        {/* Quiénes Somos */}
        <section className="section quienes-section">
          <div className="section-glass-card">
            <div className="section-header centered">
              <span className="section-badge">
                <Lightbulb size={16} />
                Quiénes somos
              </span>
              <h2 className="section-title">
                La tecnología no debería <br />
                sentirse <span className="gradient-text">fría</span>
              </h2>
              <p className="section-description">
                Somos un equipo de desarrollo web que cree en crear soluciones con alma. 
                No vendemos plantillas, construimos relaciones.
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
                  <p>
                    En UXnicorp ayudamos a todo tipo de negocios: desde emprendedores que recién dan sus primeros 
                    pasos digitales hasta empresas consolidadas que buscan renovar su presencia online.
                  </p>
                  <p>
                    No buscamos "cerrar ventas". Buscamos crear relaciones que sumen, donde el cliente se sienta 
                    acompañado, valorado y escuchado en cada etapa del camino.
                  </p>
                </div>
              </div>

              <div className="quienes-highlights centered-highlights">
                <div className="highlight-item">
                  <Zap size={20} />
                  <span>De idea a realidad</span>
                </div>
                <div className="highlight-item">
                  <Users size={20} />
                  <span>Relaciones genuinas</span>
                </div>
                <div className="highlight-item">
                  <Lightbulb size={20} />
                  <span>Soluciones a medida</span>
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
                Nuestra filosofía
              </span>
              <h2 className="section-title">
                UXnicorp es <span className="gradient-text">apoyo</span>
              </h2>
              <p className="section-description">
                Más que desarrollar software, acompañamos personas. Estos son los valores que guían 
                cada decisión que tomamos.
              </p>
            </div>

            <div className="valores-wrapper">
              <div className="intro-card">
                <div className="intro-icon">
                  <Heart size={40} />
                </div>
                <p className="valores-intro">
                  Apoyo para negocios, emprendedores y profesionales que quieren dar el paso 
                  al mundo digital sin sentirse solos
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
                  <h3>Pasión genuina</h3>
                  <p>
                    Nos mueve la alegría y satisfacción de saber que lo que construimos ayuda a alguien 
                    a crecer, mejorar su negocio y sentirse acompañado.
                  </p>
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
                  <h3>Compromiso real</h3>
                  <p>
                    No queremos "entregar una web y listo". Queremos que funcione, impacte y potencie. 
                    Tu crecimiento también es el nuestro.
                  </p>
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
                  <h3>Trato humano</h3>
                  <p>
                    No trabajamos con frialdad empresarial. Escuchamos, preguntamos y nos tomamos el tiempo 
                    de entender. Explicamos con paciencia y buena onda.
                  </p>
                </motion.div>
              </div>

              <div className="callout-quote">
                <div className="quote-icon">
                  <Heart size={32} />
                </div>
                <blockquote>
                  "Para nosotros, cada proyecto es una relación humana. 
                  La página web no es el producto, <strong>la solución es el producto</strong>."
                </blockquote>
                <div className="quote-author">— El equipo de UXnicorp</div>
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
                Nuestra historia
              </span>
              <h2 className="section-title">
                Todo empezó con una <br />
                <span className="gradient-text">idea entre amigos</span>
              </h2>
              <p className="section-description">
                No fue un plan maestro. Fue ganas de crear algo propio y ayudar a otros a tener 
                presencia digital real, sin plantillas genéricas.
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
                Nuestro equipo
              </span>
              <h2 className="section-title">
                Personas <span className="gradient-text">reales</span> detrás del código
              </h2>
              <p className="section-description">
                No somos una corporación fría. Somos un equipo donde cada persona aporta su visión, 
                experiencia y personalidad al proyecto.
              </p>
            </div>

            <div className="team-description">
              <div className="team-intro-card">
                <div className="team-intro-icon">
                  <Users size={40} />
                </div>
                <div className="team-intro-text">
                  <h3>Un equipo multidisciplinario</h3>
                  <p>
                    Contamos con desarrolladores full-stack, especialistas en frontend, diseñadores UX/UI 
                    y expertos en SEO. Cada proyecto se arma con el equipo ideal según las necesidades 
                    específicas del cliente.
                  </p>
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
                  <h4>Desarrollo profesional</h4>
                  <p>Código limpio, buenas prácticas y tecnologías actualizadas</p>
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
                  <h4>Creatividad sin límites</h4>
                  <p>Diseños únicos y soluciones innovadoras para cada proyecto</p>
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
                  <h4>Trato cercano</h4>
                  <p>Comunicación directa, sin intermediarios ni burocracia</p>
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
                  <h4>Enfoque en resultados</h4>
                  <p>Tu éxito es nuestra prioridad, cada línea de código tiene propósito</p>
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
                Las caras del proyecto
              </span>
              <h2 className="section-title">
                Quienes <span className="gradient-text">lideran</span> tu proyecto
              </h2>
              <p className="section-description">
                Detrás de cada línea de código hay personas reales con historias, pasiones y el compromiso 
                de hacer que tu proyecto funcione. Conocé al equipo principal de UXnicorp.
              </p>
            </div>

            <div className="team-core-content">
              <div className="team-core-intro">
                <p>
                  <strong>¿Por qué mostramos nuestras caras?</strong> Porque creemos en la transparencia y en 
                  las relaciones humanas. Cuando trabajás con nosotros, sabés exactamente con quién estás hablando. 
                  Sin intermediarios, sin corporativismo frío. Somos el equipo principal que lidera cada proyecto 
                  junto a nuestros colaboradores especializados.
                </p>
              </div>

              <div className="founders-grid">
                <TeamMemberCard 
                  delay={0}
                  member={{
                    name: "Gonzalo",
                    role: "Full Stack Developer",
                    title: "Backend & Arquitectura",
                    bio: "Todo lo que no ves pero funciona perfecto, lo arma él. Infraestructura, lógica de negocio y soluciones sólidas. Gonzalo es quien se asegura de que todo esté estable, rápido y bien pensado desde adentro.",
                    icon: <Code size={48} />,
                    gradient: "linear-gradient(135deg, #f37aa6, #ff8cc8)",
                    foto: "daniel.webp",
                    badges: [
                      {
                        type: "professional",
                        label: "Arquitectura",
                        icon: <Target size={16} />,
                        detail: "Piensa en grande y diseña sistemas que escalan. Tu app puede crecer tranquila porque la base está sólida."
                      },
                      {
                        type: "professional",
                        label: "Backend",
                        icon: <Code size={16} />,
                        detail: "El cerebro detrás de todo lo que no ves: APIs que vuelan, bases de datos organizadas, lógica que simplemente funciona."
                      },
                      {
                        type: "personal",
                        label: "Música",
                        icon: <Heart size={16} />,
                        detail: "Le encanta la música en todos sus géneros. Entiende que el ritmo, la armonía y la estructura también importan en el código."
                      },
                      {
                        type: "personal",
                        label: "Arte & Diseño",
                        icon: <Sparkles size={16} />,
                        detail: "Le encanta el arte visual y el diseño gráfico. Entiende que el código también puede ser elegante y hermoso."
                      }
                    ]
                  }}
                />

                <TeamMemberCard 
                  delay={0.15}
                  member={{
                    name: "Ailín",
                    role: "Front End Developer",
                    title: "UI, UX e Interacción",
                    bio: "Diseño, experiencia e interacción. Lo que ves, sentís y usás, lo crea ella. Ailín combina estética y usabilidad para que cada proyecto se sienta intuitivo, moderno y con personalidad.",
                    icon: <Sparkles size={48} />,
                    gradient: "linear-gradient(135deg, #e0a6d8, #81ade7)",
                    foto: "ailin.webp",
                    badges: [
                      {
                        type: "professional",
                        label: "UI/UX Design",
                        icon: <Sparkles size={16} />,
                        detail: "Hace que todo se vea hermoso y funcione intuitivo. Si no sabés dónde clickear, algo está mal diseñado."
                      },
                      {
                        type: "professional",
                        label: "Frontend Dev",
                        icon: <Code size={16} />,
                        detail: "React, CSS mágico y animaciones fluidas. Escribe código que funciona perfecto en tu celu, tablet o lo que sea."
                      },
                      {
                        type: "personal",
                        label: "Taylor Swift Fan",
                        icon: <Heart size={16} />,
                        detail: "Swiftie confesa. Si Taylor cuida cada detalle de su música, ella cuida cada pixel de tus pantallas. 💜"
                      },
                      {
                        type: "personal",
                        label: "Nail Artist",
                        icon: <Sparkles size={16} />,
                        detail: "Tiene su propio emprendimiento de nail art. La misma precisión que usa en las uñas, la aplica al frontend."
                      }
                    ]
                  }}
                />

                <TeamMemberCard 
                  delay={0.3}
                  member={{
                    name: "Sol",
                    role: "Full Stack Developer",
                    title: "Frontend + Backend + Optimización",
                    bio: "Del diseño al código, Sol une ambos mundos. Se enfoca en optimización, eficiencia y detalles que marcan la diferencia. Le gusta ver los resultados que logra y cómo cada proyecto mejora la experiencia de quienes lo usan.",
                    icon: <Lightbulb size={48} />,
                    gradient: "linear-gradient(135deg, #ff8cc8, #e0a6d8)",
                    foto: "sol.webp",
                    badges: [
                      {
                        type: "professional",
                        label: "Full Stack",
                        icon: <Target size={16} />,
                        detail: "Maneja el paquete completo: frontend bonito + backend sólido. Un producto de punta a punta, sin intermediarios."
                      },
                      {
                        type: "professional",
                        label: "Optimización",
                        icon: <Sparkles size={16} />,
                        detail: "Experta en performance y buenas prácticas. Se asegura de que cada proyecto sea rápido, eficiente y con resultados medibles."
                      },
                      {
                        type: "personal",
                        label: "Viajera",
                        icon: <Lightbulb size={16} />,
                        detail: "Le encanta viajar y conocer lugares nuevos. Cada viaje le da nuevas perspectivas que aplica en su trabajo creativo."
                      },
                      {
                        type: "personal",
                        label: "Deportista",
                        icon: <Heart size={16} />,
                        detail: "Hace deporte y le gusta estar en contacto con la naturaleza. La disciplina del deporte se refleja en su enfoque profesional."
                      }
                    ]
                  }}
                />
              </div>

              <div className="team-core-note">
                <div className="note-icon">
                  <Users size={32} />
                </div>
                <div className="note-content">
                  <h4>Un equipo que crece con cada proyecto</h4>
                  <p>
                    Estamos en cada proyecto desde el día uno, liderando el desarrollo y asegurando la calidad. 
                    Pero no trabajamos solos: según las necesidades, sumamos diseñadores, especialistas en SEO, 
                    desarrolladores backend o frontend adicionales. El equipo se adapta a tu proyecto, no al revés.
                  </p>
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
                Por qué elegirnos
              </span>
              <h2 className="section-title">
                No queremos ser tu proveedor. <br />
                Queremos ser tu <span className="gradient-text">equipo</span>.
              </h2>
              <p className="section-description">
                Trabajar con nosotros no es solo contratar un servicio. Es sumar un equipo que se 
                compromete con tu proyecto como si fuera propio.
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
              <h2>Vos traés la <span className="gradient-text">idea</span></h2>
              <p className="mensaje-lead">
                Nosotros te acompañamos a convertirla en algo real, funcional y visualmente hermoso.
              </p>
              <div className="mensaje-features">
                <div className="mensaje-feature">
                  <Heart size={20} />
                  <span>Te escuchamos</span>
                </div>
                <div className="mensaje-feature">
                  <Target size={20} />
                  <span>Te guiamos</span>
                </div>
                <div className="mensaje-feature">
                  <Code size={20} />
                  <span>Construimos juntos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <Suspense fallback={<LoadingFallback />}>
          <CTASection 
            titulo="¿Tenés un proyecto en mente?"
            descripcion="Conversemos sin compromiso sobre cómo podemos ayudarte"
            textoBoton="Hablemos de tu proyecto"
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
