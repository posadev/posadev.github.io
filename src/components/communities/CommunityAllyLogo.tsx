import React from "react";
import { cn } from "@/lib/utils";
import { ICommunity } from "@/types/types.ts";

interface CommunityAllyLogoProps {
  community: ICommunity;
}

const CommunityAllyLogo: React.FC<CommunityAllyLogoProps> = ({ community }) => {
  const content = (
    <img src={community.image} alt={community.name} />
  );

  const className = cn("ally-logo", community.darkBg && "dark");

  if (!community.link) {
    return (
      <div className={className} aria-label={community.name}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={community.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={community.name}
      className={className}
    >
      {content}
    </a>
  );
};

export default CommunityAllyLogo;
