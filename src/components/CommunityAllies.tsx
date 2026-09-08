import React from 'react';
import Win from '@/components/Win';
import { communitiesAllies } from '@/data/communites';
import CommunityAllyLogo from '@/components/communities/CommunityAllyLogo';

const CommunityAllies = () => (
  <Win
    title="🤝 Comunidades-aliadas.fldr"
    footer={
      <>
        <span>{communitiesAllies.length} comunidades aliadas</span>
        <span>Edición 2026</span>
      </>
    }
  >
    <div className="sec-head">
      <h2>Comunidades<br />aliadas<em>.</em></h2>
      <p className="sec-sub">
        Comunidades tech que se suman a Posadev para construir esta edición juntos.
        Da clic en un logo para conocerlas.
      </p>
    </div>
    <div className="ally-grid">
      {communitiesAllies.map((community) => (
        <CommunityAllyLogo key={community.name} community={community} />
      ))}
    </div>
  </Win>
);

export default CommunityAllies;
