import React from 'react';
import { sponsors } from '@/data/sponsors';
import SponsorsByTier from '@/components/sponsors/SponsorsByTier';
import Win from '@/components/Win';

const Sponsors = () => {
  const paidCount = sponsors.filter(s => s.isPaid).length;
  const tierCount = new Set(sponsors.filter(s => s.isPaid).map(s => s.type)).size;

  return (
    <Win
      title="💰 Patrocinadores.doc"
      footer={
        <>
          <span>{paidCount} patrocinadores</span>
          <span>{tierCount} tiers · edición 2026</span>
        </>
      }
    >
      <div className="sec-head sponsors-head">
        <div>
          <h2>Nuestros<br />Sponsors<em>.</em></h2>
        </div>
        <img
          src="/media-kit/posadev-duck.png"
          alt=""
          aria-hidden="true"
          className="sponsors-duck"
        />
      </div>
      <SponsorsByTier sponsors={sponsors} />
    </Win>
  );
};

export default Sponsors;
