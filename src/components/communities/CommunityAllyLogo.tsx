import React from "react";
import { ICommunity } from "@/types/types.ts";

interface CommunityAllyLogoProps {
  community: ICommunity;
}

const CommunityAllyLogo: React.FC<CommunityAllyLogoProps> = ({ community }) => {
  const badge = (
    <div className="ally-circle">
      <div className="ally-circle-inner">
        <img src={community.image} alt={community.name} />
      </div>
    </div>
  );

  return (
    <div className="ally-badge">
      {community.link ? (
        <a href={community.link} target="_blank" rel="noopener noreferrer" aria-label={community.name}>
          {badge}
        </a>
      ) : badge}
      {community.link ? (
        <a href={community.link} target="_blank" rel="noopener noreferrer" className="ally-name">
          {community.name}
        </a>
      ) : (
        <span className="ally-name">{community.name}</span>
      )}
      {community.description && <p className="ally-desc">{community.description}</p>}
    </div>
  );
};

export default CommunityAllyLogo;
