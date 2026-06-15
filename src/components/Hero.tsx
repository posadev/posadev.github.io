import React from 'react';
import posadevLogo from '/media-kit/posadev_logo_blanco.png';
import Win from '@/components/Win';

const Hero = () => (
  <section id="inicio" aria-labelledby="hero-title">
    <Win
      title="📁 Posadev 2026.app"
      showScrollbar
      footer={
        <>
          <span>1 ítem · Sáb 28.11.2026</span>
          <span>Cupo 350 · $600 MXN</span>
        </>
      }
    >
      {/* Eyebrow */}
      <div className="hero-eyebrow">
        <span className="hero-eyebrow-dot" aria-hidden="true" />
        <span>Sáb 28 Noviembre 2026</span>
        <span className="hero-eyebrow-div" aria-hidden="true" />
        <span>Holiday Inn Guadalajara Expo</span>
        <span className="hero-eyebrow-div" aria-hidden="true" />
        <span>$600 MXN · cupo 350</span>
      </div>

      {/* Logo + COMUNIDADES.JOIN() en la misma caja rosa con scanlines */}
      <div className="hero-logo" id="hero-title" aria-label="POSADEV — COMUNIDADES.JOIN()">
        <img
          src={posadevLogo}
          alt="POSADEV 2026"
        />
      </div>

      {/* Descripción en color rosa */}
      <p className="hero-tag">
        <span className="hero-tag-code">// </span>
        Una conferencia de software organizada por y para
        developers — un día entero, cuatro tracks, una piñata.
      </p>

      {/* Meta grid */}
      <div className="hero-meta" role="list" aria-label="Detalles del evento">
        <div className="hero-meta-cell" role="listitem">
          <div className="hero-meta-key">Cuándo</div>
          <div className="hero-meta-val">Sáb 28 Nov <em>· 9:00 —<br />21:00</em></div>
        </div>
        <div className="hero-meta-cell" role="listitem">
          <div className="hero-meta-key">Dónde</div>
          <div className="hero-meta-val">Holiday Inn Guadalajara Expo</div>
        </div>
        <div className="hero-meta-cell" role="listitem">
          <div className="hero-meta-key">Cuánto</div>
          <div className="hero-meta-val"><em>$600</em> MXN</div>
        </div>
        <div className="hero-meta-cell" role="listitem">
          <div className="hero-meta-key">CFP</div>
          <div className="hero-meta-val">Cierra 25 sep</div>
        </div>
      </div>

      {/* CTAs */}
      <div className="hero-ctas">
        <a href="/#patrocinadores" className="retro-btn primary">
          <span className="hero-btn-square" aria-hidden="true" />
          Patrocinar Posadev
        </a>
        {/*<a href="#programa" className="retro-btn ghost">Ver programa</a>*/}
        {/*<a href="#cfp" className="retro-btn ghost">Postular charla</a>*/}
      </div>
    </Win>
  </section>
);

export default Hero;