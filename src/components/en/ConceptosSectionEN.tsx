'use client';

import TransitionLink from '@/components/TransitionLink';

export default function ConceptosSectionEN() {
  return (
    <section style={{ padding: '7rem 5vw', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#F37AA6', marginBottom: '0.75rem' }}>
          INDUSTRY APPROACHES
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.15, color: '#1a1a1a', marginBottom: '1rem', maxWidth: '640px' }}>
          We create{' '}
          <span style={{ color: '#F37AA6', textDecoration: 'underline', textDecorationColor: 'rgba(243,122,166,0.4)', textUnderlineOffset: '6px', textDecorationThickness: '2px' }}>
            solutions
          </span>{' '}
          for every type of business
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.6, maxWidth: '520px' }}>
          These are some of the industries where we already have a proven approach:
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>

        <TransitionLink href="/en/conceptos/arquitectura" style={{ textDecoration: 'none' }}>
          <div
            style={{ position: 'relative', borderRadius: '1.25rem', overflow: 'hidden', minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem', background: '#1a1a1a', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.25)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
          >
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/conceptos/arq/fondocardarq.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.45 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.1) 100%)' }} />
            <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(243,122,166,0.15)', border: '1px solid rgba(243,122,166,0.35)', color: '#F37AA6', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', padding: '0.35rem 0.85rem', borderRadius: '99px', backdropFilter: 'blur(8px)' }}>
              Portfolio + Digital identity
            </span>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem', lineHeight: 1.2 }}>
                For architecture firms
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Digital structures that communicate projects with criteria, narrative and professional coherence.
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 600, color: '#F37AA6' }}>
                See full approach →
              </span>
            </div>
          </div>
        </TransitionLink>

        <TransitionLink href="/en/conceptos/gastronomia" style={{ textDecoration: 'none' }}>
          <div
            style={{ position: 'relative', borderRadius: '1.25rem', overflow: 'hidden', minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem', background: '#1a1a1a', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.25)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
          >
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/conceptos/gastronomia/fondocard.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.45 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.1) 100%)' }} />
            <span style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(243,122,166,0.15)', border: '1px solid rgba(243,122,166,0.35)', color: '#F37AA6', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', padding: '0.35rem 0.85rem', borderRadius: '99px', backdropFilter: 'blur(8px)' }}>
              Digital presence + Local SEO
            </span>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.6rem', lineHeight: 1.2 }}>
                For restaurants and bars
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Websites that convey the identity of the place before the customer even walks through the door.
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 600, color: '#F37AA6' }}>
                See full approach →
              </span>
            </div>
          </div>
        </TransitionLink>

      </div>
    </section>
  );
}
