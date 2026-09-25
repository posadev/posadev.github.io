import React from "react";
import { ISponsor } from "@/types/types.ts";

interface SponsorProps {
  sponsor: ISponsor;
}

const Sponsor: React.FC<SponsorProps> = ({ sponsor }) => {
  if (!sponsor.isPaid) return null;

  const content = sponsor.image ? (
    <img src={sponsor.image} alt={sponsor.name} className="sponsor-logo" />
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
