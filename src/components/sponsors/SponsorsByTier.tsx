import Sponsor from "@/components/Sponsor.tsx";
import React from "react";

const SponsorsByTier = ({sponsors}) => {
  const paid = sponsors.filter(s => s.isPaid);
  const isOdd = paid.length % 2 !== 0;

  return (
      <section className="grid grid-cols-2 gap-8 py-10 px-4 max-w-2xl mx-auto">
          {paid.map((sponsor, index) => (
              <div key={sponsor.id} className={isOdd && index === paid.length - 1 ? 'col-span-2 mx-auto w-1/2' : ''}>
                  <Sponsor sponsor={sponsor} />
              </div>
          ))}
      </section>
  )
}
export default SponsorsByTier;