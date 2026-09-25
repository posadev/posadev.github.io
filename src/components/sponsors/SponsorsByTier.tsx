import React from "react";
import Sponsor from "@/components/Sponsor.tsx";
import { ISponsor } from "@/types/types.ts";

interface SponsorsByTierProps {
  sponsors: ISponsor[];
}

const TIERS: { key: NonNullable<ISponsor["type"]>; label: string; icon: string }[] = [
  { key: "diamond", label: "Diamond", icon: "💎" },
  { key: "gold", label: "Gold", icon: "⭐" },
  { key: "silver", label: "Silver", icon: "🌟" },
  { key: "virtual", label: "Virtual", icon: "🖥" },
];

const SponsorsByTier: React.FC<SponsorsByTierProps> = ({ sponsors }) => {
  const paid = sponsors.filter((s) => s.isPaid);

  const tiersWithSponsors = TIERS.map((tier) => ({
    ...tier,
    sponsors: paid.filter((s) => s.type === tier.key),
  })).filter((tier) => tier.sponsors.length > 0);

  return (
    <>
      {tiersWithSponsors.map((tier) => (
        <div className="sponsor-tier" key={tier.key}>
          <div className="sponsor-tier-label">
            <span aria-hidden="true">{tier.icon}</span>
            <span>{tier.label}</span>
            <span className="sponsor-tier-line" aria-hidden="true" />
          </div>
          <div className="sponsor-tier-box">
            {tier.sponsors.map((sponsor) => (
              <Sponsor key={sponsor.id} sponsor={sponsor} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SponsorsByTier;
