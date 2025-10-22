import Lights from "@/components/ui/lights.tsx";
import React from "react";
import {ISponsor} from "@/types/types.ts";
import background from "@/img/background_blue.png";

interface SponsorProps {
    sponsor: ISponsor;
}

const Sponsor: React.FC<SponsorProps> = ({sponsor}) => {
    if (!sponsor.isPaid) return;
    return (
      <article className="w-full">
          <div className="relative flex gap-4 md:gap-10 justify-center items-center h-52 ">
              <img src={sponsor.image} alt={sponsor.name} className="w-72 max-w-72 z-10"/>
              <div className="absolute flex md:top-1/3 top-1/2 w-full overflow-visible hidden">
                  <Lights className="w-full h-auto" />
                  <Lights className="w-full h-auto" />
                  <Lights className="w-full h-auto" />
                  <Lights className="w-full h-auto" />
              </div>
          </div>
      </article>
  )
}
export default Sponsor