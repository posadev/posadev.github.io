import React from 'react';
import Win from '@/components/Win';

/* ── Data ─────────────────────────────────────────────────────────── */
const ATTENDANCE = [
  { year: "'17", count: 302 },
  { year: "'18", count: 247 },
  { year: "'19", count: 343 },
  { year: "'20", count: 1000, virtual: true },
  { year: "'21", count: 1000, virtual: true },
  { year: "'22", count: 259 },
  { year: "'23", count: 316 },
  { year: "'24", count: 350 },
  { year: "'25", count: 440 },
];

const EXPERIENCE = [
  { label: '1 - 3 años', pct: 51 },
  { label: '4 - 6 años', pct: 18 },
  { label: '7+ años',    pct: 30 },
];

const INTERESTS = [
  { label: 'Backend Developer',      pct: 22 },
  { label: 'Full Stack Developer',   pct: 19 },
  { label: 'Software Dev (General)', pct: 6  },
  { label: 'Frontend Developer',     pct: 6  },
  { label: 'DevOps / SRE',          pct: 6  },
  { label: 'QA / Testing',          pct: 5  },
  { label: 'Mobile Developer',       pct: 4  },
  { label: 'Otros',                  pct: 32 },
];

const GENDER = [
  { label: 'Hombre',          pct: 77, color: '#FF0A55' },
  { label: 'Mujer',           pct: 22, color: '#0E5C3A' },
  { label: 'No binario / NS', pct: 1,  color: '#D4AF37' },
];

const AGE = [
  { label: '18-24', pct: 40, color: '#FF0A55' },
  { label: '25-34', pct: 37, color: '#0E5C3A' },
  { label: '35-44', pct: 17, color: '#D4AF37' },
  { label: '45+',   pct: 6,  color: '#7A0428' },
];

const MAX_ATT = Math.max(...ATTENDANCE.map(d => d.count));
const CHART_H  = 220;

/* ── Pixel pie chart (SVG, crispEdges) ───────────────────────────── */
interface PieSlice { label: string; pct: number; color: string }

function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const PixelPie = ({ data, size = 160 }: { data: PieSlice[]; size?: number }) => {
  const cx = size / 2;
  const cy = size / 2;
  const r  = size / 2 - 4;

  let cumAngle = 0;
  const slices = data.map(d => {
    const startAngle = cumAngle;
    const sweep = (d.pct / 100) * 360;
    cumAngle += sweep;
    return { ...d, startAngle, sweep };
  });

  return (
    <svg
      width={size} height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ imageRendering: 'pixelated', display: 'block' }}
      shapeRendering="crispEdges"
    >
      {/* Pixel-grid overlay pattern */}
      <defs>
        <pattern id="px-grid" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" fill="transparent" />
          <rect x="0" y="0" width="2" height="2" fill="rgba(0,0,0,0.12)" />
        </pattern>
        {/* Scanline pattern per color */}
        {slices.map((s, i) => (
          <pattern key={i} id={`scan-${i}`} x="0" y="0" width="4" height="6" patternUnits="userSpaceOnUse">
            <rect width="4" height="6" fill={s.color} />
            <rect y="4" width="4" height="2" fill="rgba(0,0,0,0.22)" />
          </pattern>
        ))}
      </defs>

      {slices.map((s, i) => {
        if (s.sweep >= 360) {
          return (
            <g key={i}>
              <circle cx={cx} cy={cy} r={r} fill={`url(#scan-${i})`} stroke="var(--ink)" strokeWidth="2" />
              <circle cx={cx} cy={cy} r={r} fill="url(#px-grid)" />
            </g>
          );
        }
        const start   = polarToXY(cx, cy, r, s.startAngle);
        const end     = polarToXY(cx, cy, r, s.startAngle + s.sweep);
        const large   = s.sweep > 180 ? 1 : 0;
        const d = [
          `M ${cx} ${cy}`,
          `L ${start.x.toFixed(1)} ${start.y.toFixed(1)}`,
          `A ${r} ${r} 0 ${large} 1 ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
          'Z',
        ].join(' ');

        return (
          <g key={i}>
            <path d={d} fill={`url(#scan-${i})`} stroke="var(--ink)" strokeWidth="2" />
            <path d={d} fill="url(#px-grid)" />
          </g>
        );
      })}

      {/* Center hole — donut style */}
      <circle cx={cx} cy={cy} r={r * 0.38} fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
    </svg>
  );
};

/* ── Legend ──────────────────────────────────────────────────────── */
const PieLegend = ({ data }: { data: PieSlice[] }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'center' }}>
    {data.map(d => (
      <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{
          width: 12, height: 12, flexShrink: 0,
          background: `repeating-linear-gradient(0deg, ${d.color} 0 4px, rgba(0,0,0,.22) 4px 6px)`,
          border: '1.5px solid var(--ink)',
        }} />
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 13, color: 'var(--ink)', lineHeight: 1 }}>
          {d.label}
        </span>
        <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: 8, color: 'var(--ink-2)', marginLeft: 'auto' }}>
          {d.pct}%
        </span>
      </div>
    ))}
  </div>
);

/* ── Horizontal bar ──────────────────────────────────────────────── */
const HBar = ({ label, pct }: { label: string; pct: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
    <div style={{
      fontFamily: '"Space Grotesk", sans-serif', fontSize: 13,
      color: 'var(--ink)', width: '35%', flexShrink: 0, lineHeight: 1.35,
    }}>
      {label}
    </div>
    <div style={{
      flex: 1, height: 16, background: 'var(--paper-2)',
      border: '1.5px solid var(--ink)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, width: `${pct}%`,
        background: 'repeating-linear-gradient(0deg, var(--pink) 0 4px, rgba(0,0,0,.18) 4px 6px)',
      }} />
    </div>
    <div style={{
      fontFamily: '"Press Start 2P", monospace', fontSize: 9,
      color: 'var(--ink)', width: 34, textAlign: 'right', flexShrink: 0,
    }}>
      {pct}%
    </div>
  </div>
);

/* ── Chart panel wrapper ─────────────────────────────────────────── */
const ChartPanel = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{
    border: '2px solid var(--ink)', background: 'var(--paper)',
    boxShadow: 'var(--win-shadow-sm)', padding: '18px 20px',
  }}>
    <div style={{
      fontFamily: '"Pixelify Sans", monospace', fontWeight: 700,
      fontSize: 17, color: 'var(--ink)', marginBottom: 16,
    }}>
      {title}
    </div>
    {children}
  </div>
);

/* ── Main component ──────────────────────────────────────────────── */
const Estadisticas = () => (
  <section id="estadisticas" style={{ scrollMarginTop: 40 }}>
    <Win
      title="📊 Numeralia Posadev 2025.xls"
      footer={
        <>
          <span>4,257+ asistentes · 2017–2025</span>
          <span>fuente: registros históricos</span>
        </>
      }
    >

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="stats-intro">
        <h2 style={{
          fontFamily: '"Pixelify Sans", monospace', fontWeight: 700,
          fontSize: 'clamp(30px, 4.5vw, 54px)', lineHeight: 1.05, color: 'var(--ink)', margin: 0,
        }}>
          Quiero saber<br />los números<span style={{ color: 'var(--pink)' }}>.</span>
        </h2>
        <p style={{
          fontFamily: '"Space Grotesk", sans-serif', fontSize: 15,
          color: 'var(--ink-2)', lineHeight: 1.65, margin: 0, paddingTop: 6,
        }}>
          Datos históricos de Posadev 2017–2025 en Guadalajara.
          9 ediciones, más de 4,257 asistentes: esto es quiénes son,
          cuántos años llevan en la industria y qué tecnologías usan.
        </p>
      </div>

      {/* ── Stats grid ─────────────────────────────────────────── */}
      <div className="stats-kpi">
        <div className="stats-kpi-cell" style={{ background: 'var(--pink)' }}>
          <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: 7, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', marginBottom: 10, lineHeight: 1.6 }}>
            Asistentes acumulados
          </div>
          <div style={{ fontFamily: '"Pixelify Sans", monospace', fontWeight: 700, fontSize: 'clamp(28px,3vw,44px)', color: 'var(--paper)', lineHeight: 1, marginBottom: 10 }}>
            4,257<sup style={{ fontSize: '0.55em', verticalAlign: 'super' }}>+</sup>
          </div>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>
            Suma histórica 2017–2025 (incl. 2 ediciones virtuales).
          </div>
        </div>
        {[
          { label: 'Asistentes 2025',    n: '440', sub: 'Edición 2025 presencial · GDL.' },
          { label: 'Ediciones',          n: '9',   sub: '2017–2025 · 2 ediciones virtuales.' },
          { label: 'Tecnologías top',    n: 'JS',  sub: 'JavaScript · Java · Python.' },
        ].map(({ label, n, sub }) => (
          <div key={label} className="stats-kpi-cell" style={{ background: 'var(--paper)' }}>
            <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: 7, letterSpacing: '0.08em', color: 'var(--ink-2)', textTransform: 'uppercase', marginBottom: 10, lineHeight: 1.6 }}>
              {label}
            </div>
            <div style={{ fontFamily: '"Pixelify Sans", monospace', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,44px)', color: 'var(--ink)', lineHeight: 1, marginBottom: 10 }}>
              {n}
            </div>
            <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.4 }}>
              {sub}
            </div>
          </div>
        ))}
      </div>

      {/* ── Attendance bar chart ────────────────────────────────── */}
      <div className="stats-bar-outer">
      <div className="stats-bar-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontFamily: '"Pixelify Sans", monospace', fontWeight: 700, fontSize: 20, color: 'var(--ink)' }}>
            Asistencia por edición
          </div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            {[
              { label: 'PRESENCIAL', green: false },
              { label: 'VIRTUAL',    green: true  },
            ].map(({ label, green }) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: '"Press Start 2P", monospace', fontSize: 7, color: 'var(--ink-2)' }}>
                <span style={{
                  width: 12, height: 12, display: 'inline-block', border: '1.5px solid var(--ink)',
                  background: green
                    ? 'repeating-linear-gradient(0deg, #0E5C3A 0 4px, rgba(0,0,0,.2) 4px 6px)'
                    : 'repeating-linear-gradient(0deg, var(--pink) 0 4px, rgba(0,0,0,.2) 4px 6px)',
                }} />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          {[250, 500, 750, 1000].map(v => (
            <div key={v} style={{ position: 'absolute', left: 0, right: 0, bottom: 24 + (v / MAX_ATT) * CHART_H, borderTop: '1px dashed rgba(0,0,0,0.12)', zIndex: 0 }} />
          ))}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: CHART_H + 24, paddingBottom: 24, borderBottom: '2px solid var(--ink)', position: 'relative', zIndex: 1 }}>
            {ATTENDANCE.map(({ year, count, virtual: isVirtual }) => {
              const h = Math.round((count / MAX_ATT) * CHART_H);
              return (
                <div key={year} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                  <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: 6, color: 'var(--ink-2)', marginBottom: 4, textAlign: 'center' }}>{isVirtual ? '1k+' : count}</div>
                  <div style={{
                    width: '78%', height: h, border: '2px solid var(--ink)',
                    background: isVirtual
                      ? 'repeating-linear-gradient(0deg, #0E5C3A 0 5px, rgba(0,0,0,.18) 5px 7px)'
                      : 'repeating-linear-gradient(0deg, var(--pink) 0 5px, rgba(0,0,0,.18) 5px 7px)',
                  }} />
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
            {ATTENDANCE.map(({ year }) => (
              <div key={year} style={{ flex: 1, textAlign: 'center', fontFamily: '"Press Start 2P", monospace', fontSize: 7, color: 'var(--ink-2)' }}>{year}</div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* ── Pie charts row ──────────────────────────────────────── */}
      <div className="stats-2col">
        <ChartPanel title="Identidad de género">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <PixelPie data={GENDER} size={130} />
            <PieLegend data={GENDER} />
          </div>
        </ChartPanel>
        <ChartPanel title="Distribución por edad">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <PixelPie data={AGE} size={130} />
            <PieLegend data={AGE} />
          </div>
        </ChartPanel>
      </div>

      {/* ── Horizontal bars row ─────────────────────────────────── */}
      <div className="stats-2col">
        <ChartPanel title="Experiencia en la industria">
          {EXPERIENCE.map(d => <HBar key={d.label} {...d} />)}
        </ChartPanel>
        <ChartPanel title="Área de interés principal">
          {INTERESTS.map(d => <HBar key={d.label} {...d} />)}
        </ChartPanel>
      </div>

    </Win>
  </section>
);

export default Estadisticas;