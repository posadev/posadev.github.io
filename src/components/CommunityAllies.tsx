import React from 'react';
import Win from '@/components/Win';
import { communitiesAllies } from '@/data/communites';
import CommunityAllyLogo from '@/components/communities/CommunityAllyLogo';

const sortedCommunities = [...communitiesAllies].sort((a, b) =>
  (a.name ?? '').localeCompare(b.name ?? '')
);

const CommunityAllies = () => (
  <Win
    title="🤝 Comunidades-aliadas.txt"
    footer={
      <>
        <span>{sortedCommunities.length} comunidades aliadas</span>
        <span>orden alfabético</span>
      </>
    }
  >
    <div className="sec-head">
      <h2>Comunidades<br />aliadas<em>.</em></h2>
      <p className="sec-sub">Las comunidades que nos apoyan difundiendo el evento.</p>
    </div>
    <div className="ally-grid">
      {sortedCommunities.map((community) => (
        <CommunityAllyLogo key={community.name} community={community} />
      ))}
    </div>
  </Win>
);

export default CommunityAllies;
