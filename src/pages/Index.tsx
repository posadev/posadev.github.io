import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import { useLocation } from 'react-router-dom';
import BecomeSponsor from '@/components/BecomeSponsor';
import Sponsors from '@/components/Sponsors';
import Estadisticas from '@/pages/Estadisticas';

const STRIPE_ITEMS = [
  'POSADEV 2026',
  '1 DÍA · 4 TRACKS',
  '30+ CHARLAS',
  '6 COMUNIDADES',
  '$500 MXN',
  'COMIDA INCLUIDA',
  'HOLIDAY INN GUADALAJARA EXPO',
  'SÁB 28 NOV',
];

const Stripe = () => {
  const row = (
    <span>
      {STRIPE_ITEMS.map((item, i) => (
        <React.Fragment key={i}>
          <span className="stripe-item">{item}</span>
          <span className="stripe-star" aria-hidden="true" />
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="stripe" aria-hidden="true">
      <div className="stripe-track">{row}{row}</div>
    </div>
  );
};

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - 60, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="desktop">
      <div className="desktop-wrap">
        <Hero />
        <Stripe />
        <Estadisticas />
        <section id="patrocinadores">
          <BecomeSponsor />
          <div style={{ marginTop: 36 }}>
            <Sponsors />
          </div>
        </section>
        <Gallery />
      </div>
    </div>
  );
};

export default Index;