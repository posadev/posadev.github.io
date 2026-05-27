import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-logo">
        Posa<span>dev</span>
        <span style={{ fontSize: 11, fontFamily: '"Press Start 2P", monospace', marginLeft: 10, color: 'var(--ink-2)' }}>
          2017–2026
        </span>
      </div>

      <nav className="site-footer-links" aria-label="Enlaces del pie de página">
        <a onClick={() => navigate('/privacy-policy')} style={{ cursor: 'pointer' }}>Privacidad</a>
        <a onClick={() => navigate('/code-of-conduct')} style={{ cursor: 'pointer' }}>Conducta</a>
        <a href="mailto:info@posadev.org">info@posadev.org</a>
        <a href="https://maps.app.goo.gl/8ayZ57xJf9Uvod6o7" target="_blank" rel="noopener noreferrer">
          GDL
        </a>
      </nav>

      <small className="site-footer-copy">
        // comunidades<span style={{ color: 'var(--pink)' }}>.join()</span>
      </small>
    </footer>
  );
};

export default Footer;