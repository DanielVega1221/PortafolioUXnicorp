'use client';


import { useEffect } from 'react';
import Image from 'next/image';
import TransitionLink from '@/components/TransitionLink';
import { useRouter } from 'next/navigation';
import { usePageTransition } from '@/components/TransitionProvider';
import { motion as Motion } from 'framer-motion';
import {
  ArrowRight,
  Home,
  ExternalLink,
  Type,
  Palette,
  Maximize2,
  MessageSquare,
  BarChart3,
  Layout,
  Layers,
  Users,
  Search,
  Zap,
  TrendingUp,
} from 'lucide-react';
import '../../../conceptos/arquitectura/Arquitectura.css';

const fondoARQ       = '/conceptos/arq/fondoARQ.webp';
const BRUNNdemo      = '/conceptos/arq/BRUNNdemo.webp';
const fondoCardARQ   = '/conceptos/arq/fondocardarq.webp';
const fondoCardPlano = '/conceptos/arq/fondocardplano.webp';

const texto = {
  hero: {
    titulo: 'Strategic digital development',
    subtitulo:
      'We create digital structures that allow architecture studios to communicate their projects with clarity, criteria and professional coherence.',
    btn1: 'Request diagnosis',
    btn2: 'View case study ↓',
  },
  validacion: {
    label: 'Why choose us',
    titulo: 'We understand your process',
    intro:
      'We know the real tensions an architecture studio faces when seeking digital presence.',
    bloques: [
      {
        titulo: 'Process, not just result',
        texto:
          "A building isn't just an image. It's decisions, materiality and context. Your website shouldn't reduce your work to a simple gallery either.",
      },
      {
        titulo: 'Conceptual vs. commercial tension',
        texto:
          "You want to attract clients without compromising your discourse. We understand that tension because we've analyzed it in depth with architecture studios.",
      },
      {
        titulo: 'Independence from social media',
        texto:
          "Instagram can't be your only portfolio. You need a digital base that supports your professional identity long-term.",
      },
    ],
  },
  metodo: {
    label: 'What we analyze',
    intro: "We don't start from templates. Every project begins with specific research about the studio.",
    titulo: 'Before designing, we analyze',
    items: [
      { titulo: 'Your design identity', desc: 'We understand your approach, your way of thinking about space and your architectural discourse.' },
      { titulo: 'The type of work you develop', desc: 'Residential, commercial, public, renovations. Each type has its own narrative.' },
      { titulo: 'Your ideal client profile', desc: "Who you're talking to, what they're looking for, what they value, how they make decisions." },
      { titulo: 'How you present your projects today', desc: "What works, what doesn't, where there's friction, what's missing to communicate." },
      { titulo: 'Conceptual tensions', desc: 'The balance between the conceptual and the commercial, between showing and explaining.' },
      { titulo: 'Social media dependence', desc: "Whether your visibility depends exclusively on algorithms you don't control." },
    ],
  },
  demo: {
    label: 'Case study',
    titulo: 'BRÜNN STUDIO',
    lead: "Conceptual demo developed to demonstrate our deep understanding of the architecture and design sector. It's not a real client — it's a research exercise and application of specific UX principles.",
    investigacion: {
      label: 'Phase 01 — Research',
      titulo: 'Understand before designing.',
      intro: 'We studied 40+ architecture studio websites and conducted interviews with professionals to learn what frustrates and what converts.',
      insights: [
        {
          titulo: 'The problem',
          finding: 'Generic portfolios without narrative or process.',
          body: "Most studios show images, but don't explain how they arrived at them. The client doesn't understand the real value.",
        },
        {
          titulo: 'What they seek',
          finding: 'Filter the right clients before the first contact.',
          body: '"I need the site to speak for me. That whoever arrives already knows if we\'re aligned."',
        },
        {
          titulo: 'The solution',
          finding: 'Show methodology with the same strength as the renders.',
          body: "Industry references expose their creative process. The result attracts the ideal client and repels those who don't fit.",
        },
      ],
    },
    decisiones: {
      label: 'Phase 02 — Design decisions',
      titulo: 'Each element responds to a finding.',
      intro: 'Nothing is decorative. Typography, color, space and language were defined from what we found in research.',
      items: [
        { titulo: 'Technical typography', desc: 'Monospaced fonts that evoke blueprints. Communicates precision.' },
        { titulo: 'Monochromatic palette', desc: "Color doesn't compete with photos. Architecture is the protagonist." },
        { titulo: 'Generous spacing', desc: '2-3x larger padding. Architects value negative space.' },
        { titulo: 'Precise language', desc: 'No inflated marketing. Technical terms that speak to the professional.' },
        { titulo: 'Clear hierarchy', desc: 'Like a blueprint: information ordered by visual importance.' },
        { titulo: 'Optimized loading', desc: "High-quality images without sacrificing speed. Technology that doesn't interfere." },
      ],
    },
    estructura: {
      label: 'Phase 03 — Site structure',
      titulo: 'Information architecture that communicates and converts.',
      intro: 'Five sections, each with a specific goal. Nothing extra, nothing missing.',
      items: [
        { titulo: 'Home · First impression', desc: 'Architectural hero statement that positions the studio in 3 seconds. Visual manifesto that communicates design philosophy without redundant explanations.' },
        { titulo: 'Philosophy · How we think', desc: 'Work methodology clearly exposed. Not generic promises, but real conceptual process.' },
        { titulo: 'Works · Projects with context', desc: 'Portfolio structured by typology and scale. Each project includes: briefing, decisions, materiality and result. Not just photos, but project narrative.' },
        { titulo: 'Services · What we offer', desc: 'Technical capabilities and project scope. Studio specialties communicated with professional precision.' },
        { titulo: 'Contact · Smart pre-qualification', desc: 'Form that filters projects from the first contact. Strategic questions about budget, timing and expectations.' },
      ],
    },
    resultado: {
      label: 'Your turn',
      headline: 'Does your studio need something like this?',
      trust: [
        { label: 'Free diagnosis', desc: 'First consultation to understand your studio and what you need to communicate.' },
        { label: 'Delivery in 1-2 weeks', desc: 'Process with clear stages. You know at every moment where we are.' },
        { label: 'Research-based', desc: 'Every decision responds to data from your sector, not generic trends.' },
      ],
      btn1: 'Request diagnosis',
      btn2: 'View live demo',
      nota: 'BRÜNN STUDIO is a fictional case created for demonstrative purposes.',
    },
  },
  capacidades: {
    label: 'What we develop',
    titulo: 'Everything a studio needs to grow.',
    items: [
      { titulo: 'Digital identity', desc: 'Naming, palette, typography and tone of voice coordinated so the site speaks like your studio.' },
      { titulo: 'Narrative structures', desc: 'Digital spaces to explain processes, decisions and design thinking beyond imagery.' },
      { titulo: 'Smart inquiry filters', desc: 'Forms that qualify and organize contacts according to the project profile that interests you.' },
      { titulo: 'SEO optimization', desc: "Organic positioning to attract the type of client you're looking for by area and specialty." },
      { titulo: 'Stable infrastructure', desc: 'Solid, fast, scalable technology prepared to evolve with your studio.' },
      { titulo: 'Multilingual version', desc: 'Site in Spanish and English for studios working with international clients or competitions.' },
    ],
  },
  proceso: {
    label: 'How we work',
    titulo: 'A process built for demanding studios.',
    nota: 'Timelines are estimates based on complexity. We adjust them at the initial diagnosis.',
    items: [
      { titulo: 'Strategic diagnosis', desc: "In-depth conversation with the studio and analysis of design identity and current situation.", dur: '2 days' },
      { titulo: 'Structure definition', desc: "We design the site's digital architecture: hierarchies, narrative and information flow.", dur: '2 days' },
      { titulo: 'Visual design', desc: 'We build a visual proposal aligned with your design language and aesthetic criteria.', dur: '3 days' },
      { titulo: 'Technical development', desc: 'We implement a solid, optimized, self-manageable and scalable platform.', dur: '3 days' },
      { titulo: 'Launch + accompaniment', desc: "Go live, training and ongoing support during the site's evolution.", dur: 'Ongoing' },
    ],
  },
  beneficios: {
    label: 'Results',
    titulo: 'What changes when the structure is right',
    declaracion: "We don't promise immediate results. We build sustainable structures.",
    items: [
      { titulo: 'Greater clarity in presentation', desc: 'Your projects are better understood because the digital structure accompanies your architectural narrative.' },
      { titulo: 'Elevated professional perception', desc: 'A well-thought-out site communicates seriousness, criteria and professionalism from the first contact.' },
      { titulo: 'More aligned conversations', desc: "You attract inquiries closer to your work profile because your site pre-educates the client." },
      { titulo: 'Independence from social media', desc: "Your own digital base that doesn't depend on algorithms or third-party platforms." },
      { titulo: 'Solid long-term foundation', desc: 'Infrastructure that grows with your studio and adapts to new needs without rebuilding everything.' },
    ],
  },
  cta: {
    label: 'Next step',
    headline: 'A digital presence coherent with your design identity',
    body1: 'Every studio has its own logic. Our work consists of translating that logic into the digital environment with respect and criteria.',
    body2: "If you feel your studio needs a digital structure at the level of its work, we can analyze it together.",
    btn1: 'Request strategic diagnosis',
    btn2: 'View more services',
  },
};

export default function ArquitecturaEN() {
  const router = useRouter();
  const { navigate } = usePageTransition();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSolicitarDiagnostico = () => {
    sessionStorage.setItem('uxn-scroll-to', 'contacto');
    navigate('/en');
  };

  const handleVerServicios = () => {
    router.push('/en/servicios');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const decisionIcons = [Type, Palette, Maximize2, MessageSquare, BarChart3, Zap];
  const capIcons      = [Layout, Layers, Users, Search, Zap, TrendingUp];

  return (
    <div className="arquitectura-page">
      <TransitionLink href="/en" className="btn-home-float" aria-label="Back to home">
        <Home size={20} strokeWidth={2} />
      </TransitionLink>

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
          position: 'relative',
        }}
      >
        <div className="hero-overlay" />
        <div className="section-number">01/08</div>
        <div className="hero-content">
          <Motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {texto.hero.titulo.split(' ').slice(0, 1).join(' ')}
            <br />
            {texto.hero.titulo.split(' ').slice(1).join(' ')}
          </Motion.h1>

          <Motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {texto.hero.subtitulo}
          </Motion.p>

          <div className="hero-divider" />

          <Motion.div
            className="hero-ctas"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
              {texto.hero.btn1}
              <ArrowRight size={18} />
            </button>
            <a href="#demo" className="btn-arq btn-arq-ghost">
              {texto.hero.btn2}
            </a>
          </Motion.div>
        </div>
      </Motion.section>

      <div className="section-separator" />

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
              position: 'relative',
            }}
          >
            <div className="validacion-overlay" />
            <h2 className="validacion-title">{texto.validacion.titulo}</h2>
          </div>

          <div className="validacion-col validacion-col-right">
            <div className="metodo-col-header">
              <span className="metodo-col-label">{texto.validacion.label}</span>
              <p className="metodo-col-intro">{texto.validacion.intro}</p>
            </div>
            {texto.validacion.bloques.map((bloque, i) => (
              <div className="validacion-block" key={i}>
                <h3 className="validacion-block-title">{bloque.titulo}</h3>
                <p className="validacion-block-text">{bloque.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      <section id="metodo" className="metodo-section arquitectura-section">
        <div className="section-number">03/08</div>
        <div className="section-card metodo-card">
          <div className="metodo-col metodo-col-right">
            <div className="metodo-col-header">
              <span className="metodo-col-label">{texto.metodo.label}</span>
              <p className="metodo-col-intro">{texto.metodo.intro}</p>
            </div>
            {texto.metodo.items.map((item, i) => (
              <div className="metodo-list-item" key={i}>
                <span className="metodo-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="metodo-content">
                  <h3>{item.titulo}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
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
            <div className="metodo-overlay" />
            <h2 className="metodo-col-title">{texto.metodo.titulo}</h2>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      <section id="demo" className="demo-completo-section arquitectura-section section-bg-alt">
        <div className="section-number">04/08</div>

        <div className="demo-intro">
          <span className="demo-label">{texto.demo.label}</span>
          <h2 className="demo-main-title">{texto.demo.titulo}</h2>
          <p className="demo-lead">{texto.demo.lead}</p>
        </div>

        <div className="demo-preview">
          <div className="demo-preview-image">
            <Image
              src={BRUNNdemo}
              alt="BRÜNN STUDIO - Architecture Digital Portfolio Demo"
              width={1600}
              height={900}
              className="demo-screenshot"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="demo-research">
          <div className="research-header">
            <span className="metodo-col-label">{texto.demo.investigacion.label}</span>
            <h2 className="research-section-title">{texto.demo.investigacion.titulo}</h2>
            <p className="research-section-intro">{texto.demo.investigacion.intro}</p>
          </div>
          <div className="demo-research-grid">
            {texto.demo.investigacion.insights.map((insight, i) => (
              <div className="demo-insight-card" key={i}>
                <span className="insight-number">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="insight-title">{insight.titulo}</h4>
                <p className="insight-finding">{insight.finding}</p>
                <p className="insight-body">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-decisions">
          <div className="research-header">
            <span className="metodo-col-label">{texto.demo.decisiones.label}</span>
            <h2 className="research-section-title">{texto.demo.decisiones.titulo}</h2>
            <p className="research-section-intro">{texto.demo.decisiones.intro}</p>
          </div>
          <div className="demo-decisions-grid">
            {texto.demo.decisiones.items.map((item, i) => {
              const Icon = decisionIcons[i];
              return (
                <div className="demo-decision-card" key={i}>
                  <Icon className="demo-decision-icon" size={32} strokeWidth={1.5} />
                  <h4>{item.titulo}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="demo-structure">
          <div className="research-header">
            <span className="metodo-col-label">{texto.demo.estructura.label}</span>
            <h2 className="research-section-title">{texto.demo.estructura.titulo}</h2>
            <p className="research-section-intro">{texto.demo.estructura.intro}</p>
          </div>
          <div className="demo-structure-timeline">
            {texto.demo.estructura.items.map((item, i) => (
              <div className="demo-structure-item" key={i}>
                <div className="demo-structure-marker">{String(i + 1).padStart(2, '0')}</div>
                <div className="demo-structure-content">
                  <h4>{item.titulo}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-result">
          <span className="metodo-col-label">{texto.demo.resultado.label}</span>
          <div className="demo-result-layout">
            <div className="demo-result-left">
              <h2 className="demo-result-headline">{texto.demo.resultado.headline}</h2>
            </div>
            <div className="demo-result-right">
              <div className="demo-trust-list">
                {texto.demo.resultado.trust.map((row, i) => (
                  <div className="demo-trust-row" key={i}>
                    <span className="demo-trust-label">{row.label}</span>
                    <span className="demo-trust-desc">{row.desc}</span>
                  </div>
                ))}
              </div>
              <div className="demo-cta-buttons">
                <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                  {texto.demo.resultado.btn1}
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://brnn-demoarq.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-arq btn-arq-secondary"
                >
                  {texto.demo.resultado.btn2}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="demo-disclaimer">
            <p><strong>Note:</strong> {texto.demo.resultado.nota}</p>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      <section id="capacidades" className="capacidades-section arquitectura-section">
        <div className="section-number">05/08</div>
        <div className="section-card">
          <div className="capacidades-header">
            <span className="metodo-col-label">{texto.capacidades.label}</span>
            <h2 className="capacidades-title">{texto.capacidades.titulo}</h2>
          </div>
          <div className="capacidades-grid">
            {texto.capacidades.items.map((item, i) => {
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
            })}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      <section id="proceso" className="proceso-section arquitectura-section section-bg-alt">
        <div className="section-card">
          <div className="capacidades-header">
            <span className="metodo-col-label">{texto.proceso.label}</span>
            <h2 className="capacidades-title">{texto.proceso.titulo}</h2>
          </div>
          <div className="proceso-timeline">
            {texto.proceso.items.map((step, i) => (
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
                  {i < texto.proceso.items.length - 1 && <div className="proceso-connector" />}
                </div>
                <div className="proceso-content">
                  <h3 className="proceso-step-title">{step.titulo}</h3>
                  <p className="proceso-description">{step.desc}</p>
                </div>
                <span className="proceso-duration">{step.dur}</span>
              </Motion.div>
            ))}
          </div>
          <p className="proceso-note">{texto.proceso.nota}</p>
        </div>
        <div className="section-number">06/08</div>
      </section>

      <div className="section-separator" />

      <section id="beneficios" className="beneficios-section arquitectura-section">
        <div className="section-card">
          <div className="capacidades-header">
            <span className="metodo-col-label">{texto.beneficios.label}</span>
            <h2 className="capacidades-title">{texto.beneficios.titulo}</h2>
          </div>
          <div className="beneficios-list">
            {texto.beneficios.items.map((item, i) => (
              <div className="beneficio-row" key={i}>
                <span className="beneficio-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="beneficio-body">
                  <h3 className="beneficio-row-title">{item.titulo}</h3>
                  <p className="beneficio-row-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="beneficios-statement">{texto.beneficios.declaracion}</p>
        </div>
        <div className="section-number">07/08</div>
      </section>

      <div className="section-separator" />

      <section id="cta" className="cta-final arquitectura-section section-bg-alt">
        <div className="cta-inner section-card">
          <div className="cta-col-title">
            <span className="metodo-col-label">{texto.cta.label}</span>
            <h2 className="cta-headline">{texto.cta.headline}</h2>
          </div>
          <div className="cta-col-content">
            <p className="cta-body">{texto.cta.body1}</p>
            <p className="cta-body">{texto.cta.body2}</p>
            <div className="cta-buttons-col">
              <button onClick={handleSolicitarDiagnostico} className="btn-arq btn-arq-primary">
                {texto.cta.btn1}
                <ArrowRight size={18} />
              </button>
              <button onClick={handleVerServicios} className="btn-arq btn-arq-secondary">
                {texto.cta.btn2}
              </button>
            </div>
          </div>
        </div>
        <div className="section-number">08/08</div>
      </section>
    </div>
  );
}
