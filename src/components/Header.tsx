import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const go = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <header className="menubar" role="banner">
        <span className="menubar-apple" title="Posadev 2026">
          <span className="menubar-star" aria-hidden="true" />
        </span>
        <button className="menubar-item" onClick={() => go('/')}>Inicio</button>
        <button className="menubar-item" onClick={() => go('/#patrocinadores')}>Patrocinadores</button>
        <button className="menubar-item" onClick={() => go('/estadisticas')}>Estadísticas</button>
        <button className="menubar-item" onClick={() => go('/code-of-conduct')}>Conducta</button>
        <button
          className="menubar-hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span /><span /><span />
        </button>
        <div className="menubar-right" aria-hidden="true">
          <span className="menubar-dot" />
          <span>posadev.org/2026</span>
          <span>·</span>
          <time>{time}</time>
        </div>
      </header>
      <nav id="mobile-nav" className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Menú principal">
        <button className="mobile-nav-item" onClick={() => go('/')}>Inicio</button>
        <button className="mobile-nav-item primary" onClick={() => go('/#patrocinadores')}>
          Únete como Patrocinador
        </button>
        <button className="mobile-nav-item" onClick={() => go('/estadisticas')}>Estadísticas</button>
        <button className="mobile-nav-item" onClick={() => go('/code-of-conduct')}>Código de Conducta</button>
        <a href="/posadev_brochure2026_03.pdf" download className="mobile-nav-item">
          Descargar Brochure
        </a>
      </nav>
    </>
  );
};

export default Header;