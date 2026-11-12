import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ICommunity } from "@/types/types.ts";
import SocialMedia from "@/components/SocialMedia.tsx";

interface CommunityAllyLogoProps {
  community: ICommunity;
}

const CommunityAllyLogo: React.FC<CommunityAllyLogoProps> = ({ community }) => {
  const [flipped, setFlipped] = useState(false);
  const socials = community.socials ?? [];
  const canFlip = socials.length > 0;

  const coin = (
    <div className={cn("ally-circle", flipped && "is-flipped")}>
      <div className="ally-circle-inner">
        <div className="ally-circle-face ally-circle-front">
          <img
            src={community.image}
            alt={community.name}
            loading="lazy"
            decoding="async"
            className={cn(community.sticker !== false && "sticker")}
          />
        </div>
        <div className="ally-circle-face ally-circle-back">
          <div className="ally-social-icons">
            {socials.map((link) => (
              <SocialMedia key={link.title} link={link} className="ally-social-icon" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const badge = canFlip ? (
    <button
      type="button"
      className="ally-circle-button"
      onClick={() => setFlipped((f) => !f)}
      aria-label={`Ver redes sociales de ${community.name}`}
      aria-pressed={flipped}
    >
      {coin}
    </button>
  ) : community.link ? (
    <a href={community.link} target="_blank" rel="noopener noreferrer" className="ally-circle-button" aria-label={community.name}>
      {coin}
    </a>
  ) : (
    <div className="ally-circle-button">{coin}</div>
  );

  return (
    <div className="ally-badge">
      {badge}
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
