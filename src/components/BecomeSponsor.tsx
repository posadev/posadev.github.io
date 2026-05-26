import React from 'react';
import { useToast } from '@/hooks/use-toast';
import Win from '@/components/Win';

/* ── Shared tokens ──────────────────────────────────────────────── */
const INK    = 'var(--ink)';
const PINK   = 'var(--pink)';
const PAPER  = 'var(--paper)';
const PAPER2 = 'var(--paper-2)';

const REASONS = [
  {
    icon: '$',
    title: 'Visibilidad de marca',
    text: 'Expón tu marca ante cientos de desarrolladores y profesionales de la tecnología.',
  },
  {
    icon: '⌘',
    title: 'Networking real',
    text: 'Expande tus redes de comunidades de desarrolladores.'
  },
  {
    icon: '♥',
    title: 'Impacto en la comunidad',
    text: 'Contribuye al crecimiento de las comunidades de la región.',
  },
];

/* ── Brochure CTA ────────────────────────────────────────────────── */
const BrochureCta = () => {
  const { toast } = useToast();
  return (
    <div style={{
      border: `2px solid ${INK}`,
      boxShadow: `6px 6px 0 ${INK}`,
      padding: '18px 22px',
      background: PINK,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Scanline overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        background: 'repeating-linear-gradient(0deg, rgba(122,4,40,.35) 0 1px, transparent 1px 2px)',
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <h4 style={{
          fontFamily: '"Pixelify Sans", monospace', fontWeight: 700,
          fontSize: 22, color: PAPER, marginBottom: 8,
        }}>
          Descarga el brochure
        </h4>
        <p style={{
          fontFamily: '"Space Grotesk", sans-serif', fontSize: 13.5,
          color: 'rgba(255,200,215,0.92)', lineHeight: 1.55,
          maxWidth: 360, marginBottom: 16,
        }}>
          Tiers, beneficios, métricas de la edición pasada y plazos de entrega
          de materiales en un PDF de 12 páginas.
        </p>
        <a
          href="/posadev_brochure2026_02.pdf"
          download
          onClick={() => toast({ title: 'Descargando brochure...', description: 'El documento se está descargando.' })}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            height: 42, padding: '0 18px',
            background: PAPER, border: `2px solid ${INK}`,
            boxShadow: `3px 3px 0 ${INK}`, textDecoration: 'none',
            cursor: 'pointer', transition: 'transform 80ms, box-shadow 80ms',
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translate(3px,3px)'; el.style.boxShadow = 'none'; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = ''; el.style.boxShadow = `3px 3px 0 ${INK}`; }}
        >
          <span style={{ fontFamily: '"Pixelify Sans", monospace', fontWeight: 700, fontSize: 14, color: INK }}>
            Descargar brochure
          </span>
          <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: 10, color: PINK }}>
            ↓
          </span>
        </a>
      </div>
    </div>
  );
};

/* ── Main component ──────────────────────────────────────────────── */
const BecomeSponsor = () => (
  <Win
    title="💰 Patrocina Posadev.pdf"
    footer={
      <>
        <span>Edición IX · 2026</span>
        <span>brochure · 12 pp</span>
      </>
    }
  >
    <div className="patron-grid">

      {/* ══ Left column ═══════════════════════════════════════════ */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        {/* Eyebrow */}
        <div style={{
          fontFamily: '"Press Start 2P", monospace', fontSize: 10,
          textTransform: 'uppercase', color: PINK,
          letterSpacing: '0.05em', marginBottom: 16, lineHeight: 1.8,
        }}>
          ▸ Invitación · cupo limitado de marcas
        </div>

        {/* H2 */}
        <h2 style={{
          fontFamily: '"Pixelify Sans", monospace', fontWeight: 700,
          fontSize: 'clamp(40px, 5vw, 68px)', lineHeight: 0.95,
          color: INK, marginBottom: 16,
        }}>
          Únete como<br />
          patrocinador<em style={{ fontStyle: 'normal', color: PINK }}>.</em>
        </h2>

        {/* Subhead */}
        <p style={{
          fontFamily: '"Space Grotesk", sans-serif', fontSize: 16,
          color: 'var(--ink-2)', lineHeight: 1.6,
          maxWidth: 520, marginBottom: 28,
        }}>
        </p>

        {/* Reasons list */}
        <div style={{
          border: `2px solid ${INK}`, background: PAPER, marginBottom: 20,
        }}>
          {REASONS.map(({ icon, title, text }, i) => (
            <div key={title} style={{
              display: 'flex', alignItems: 'flex-start',
              borderTop: i > 0 ? `1px solid ${INK}` : 'none',
              padding: '14px 16px', gap: 16,
            }}>
              {/* Icon tile */}
              <div style={{
                width: 54, height: 54, flexShrink: 0,
                background: PAPER2, border: `2px solid ${INK}`,
                boxShadow: `3px 3px 0 ${INK}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Press Start 2P", monospace', fontSize: 14, color: INK,
              }}>
                {icon}
              </div>
              {/* Text */}
              <div>
                <div style={{
                  fontFamily: '"Pixelify Sans", monospace', fontWeight: 700,
                  fontSize: 18, color: INK, marginBottom: 4,
                }}>
                  {title}
                </div>
                <p style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5,
                }}>
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brochure CTA — pushed to bottom */}
        <div style={{ marginTop: 'auto' }}>
          <BrochureCta />
        </div>
      </div>

      {/* ══ Right column — poster card ════════════════════════════ */}
      <div className="patron-poster">

        {/* Art zone */}
        <div className="patron-art">
          {/* Meta line */}
          <div style={{
            position: 'absolute', top: 20, left: 22,
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: '"Press Start 2P", monospace', fontSize: 9, color: INK,
            zIndex: 3, lineHeight: 1,
          }}>
          </div>

          {/* Duck — overflows card intentionally */}
          <img
            src="/media-kit/posadev-duck.png"
            alt="Pato mascota de Posadev con lentes"
            className="patron-duck"
          />

          {/* Shout sticker */}
          <div className="patron-sticker">
            <span style={{
              fontFamily: '"Press Start 2P", monospace', fontSize: 10,
              color: PINK, lineHeight: 1.7, marginBottom: 6, display: 'block',
            }}>
              // si aún no recibiste el brochure
            </span>
            <span style={{
              fontFamily: '"Pixelify Sans", monospace', fontWeight: 700,
              fontSize: 'clamp(34px, 4.2vw, 52px)', lineHeight: 1,
              textTransform: 'uppercase', display: 'block', color: INK,
            }}>
              Become a<br />
              <span style={{
                color: PINK,
                WebkitTextStroke: '1.5px var(--ink)',
              }}>
                *sponsor*
              </span>
            </span>
            {/* Triangle tail — downward, bottom-left */}
            <div style={{
              position: 'absolute', bottom: -25, left: 18,
              width: 0, height: 0,
              borderLeft: '18px solid transparent',
              borderRight: '18px solid transparent',
              borderTop: `22px solid ${INK}`,
            }} />
            <div style={{
              position: 'absolute', bottom: -20, left: 21,
              width: 0, height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: `17px solid ${PAPER}`,
            }} />
          </div>
        </div>

        {/* Poster footer */}
        <div style={{
          background: '#0a0a0a', padding: '18px 22px',
          display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          <p style={{
            fontFamily: '"Space Grotesk", sans-serif', fontSize: 13.5,
            color: '#dadada', lineHeight: 1.55, margin: 0,
          }}>
            ¿Interesado en patrocinar nuestro evento?{' '}
            Escríbenos y te mandamos paquetes y disponibilidad.
          </p>

          {/* Mail pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            alignSelf: 'flex-start',
            background: PAPER, border: `2px solid ${PAPER}`,
            boxShadow: `3px 3px 0 ${PINK}`, padding: '10px 14px',
          }}>
            {/* Envelope icon */}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
              <rect x="0.75" y="0.75" width="12.5" height="8.5" stroke={INK} strokeWidth="1.5" />
              <line x1="0.5" y1="0.5" x2="7" y2="6" stroke={INK} strokeWidth="1.5" />
              <line x1="13.5" y1="0.5" x2="7" y2="6" stroke={INK} strokeWidth="1.5" />
            </svg>
            <span style={{
              fontFamily: '"JetBrains Mono", "Space Grotesk", monospace',
              fontWeight: 600, fontSize: 14, color: INK,
            }}>
              sponsors@posadev.org
            </span>
          </div>

          {/* Primary CTA */}
          <a
            href="mailto:sponsors@posadev.org?subject=Patrocinio%20Posadev%202026"
            className="patron-cta"
          >
            ▸ Contáctanos
          </a>
        </div>
      </div>

    </div>
  </Win>
);

export default BecomeSponsor;