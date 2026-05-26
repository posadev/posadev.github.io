import React from 'react';
import { sponsors } from '@/data/sponsors';
import SponsorsByTier from '@/components/sponsors/SponsorsByTier';
import Win from '@/components/Win';

const Sponsors = () => {
  const paidCount = sponsors.filter(s => s.isPaid).length;

  return (
    <Win
      title="🌟 Patrocinadores 2025.fldr"
      footer={
        <>
          <span>{paidCount} patrocinadores</span>
          <span>Edición 2025</span>
        </>
      }
    >
      <div className="sec-head">
        <h2>Patrocinadores<br />del 2025<em>.</em></h2>
        <p className="sec-sub">
          Empresas que apostaron por Posadev en la edicion anterior.
        </p>
      </div>
      <SponsorsByTier sponsors={sponsors} />
    </Win>
  );
};

export default Sponsors;