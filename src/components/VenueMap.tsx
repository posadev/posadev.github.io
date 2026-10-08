import React from 'react';
import Win from '@/components/Win';

const VENUE_FACTS = [
  { label: 'Aforo', value: '350 personas' },
  { label: 'Qué hay cerca', value: 'Plaza del Sol y plaza La Perla · 6 min' },
  { label: 'Bici', value: 'MiBici Avenida Moctezuma (ZPN-080)' },
  { label: 'Rutas de transporte', value: 'C70, T11B, T04-B, V2, C130, T04-B, TL-1, T10' },
  { label: 'Accesibilidad', value: 'Elevador' },
];

const MAP_QUERY = encodeURIComponent(
  'Holiday Inn Guadalajara Expo by IHG, Av. Lopez Mateos Sur 2500, Cd del Sol, 45050 Zapopan, Jal.'
);

const VenueMap = () => (
  <Win
    title="📍 Sede.map"
    footer={
      <>
        <span>Holiday Inn Guadalajara Expo by IHG</span>
        <span>Zapopan, Jal.</span>
      </>
    }
  >
    <div className="sec-head">
      <h2>Dónde<br />nos vemos<em>.</em></h2>
    </div>
    <div className="venue-grid">
      <div className="venue-map-frame">
        <iframe
          src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
          title="Mapa de ubicación de Holiday Inn Guadalajara Expo by IHG"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="venue-info">
        <h3 className="venue-name">Holiday Inn Guadalajara Expo<br />by IHG</h3>
        <p className="venue-address">
          Ave. Lopez Mateos Sur 2500, Cd del Sol, 45050 Zapopan, Jal.
        </p>
        <div className="venue-facts">
          {VENUE_FACTS.map(({ label, value }) => (
            <div className="venue-fact-row" key={label}>
              <span className="venue-fact-label">{label}</span>
              <span className="venue-fact-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Win>
);

export default VenueMap;
