import React from "react";
import { cn } from "@/lib/utils";
import { ISponsor } from "@/types/types.ts";

interface SponsorProps {
  sponsor: ISponsor;
}

const Sponsor: React.FC<SponsorProps> = ({ sponsor }) => {
  if (!sponsor.isPaid) return null;

  const content = sponsor.image ? (
    <img
      src={sponsor.image}
      alt={sponsor.name}
      loading="lazy"
      decoding="async"
      className={cn("sponsor-logo", sponsor.type && `sponsor-logo--${sponsor.type}`)}
    />
  ) : (
    <span className="sponsor-name">{sponsor.name}</span>
  );

  if (sponsor.link) {
    return (
      <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="sponsor-item">
        {content}
      </a>
    );
  }

  return <div className="sponsor-item">{content}</div>;
};

export default Sponsor;
