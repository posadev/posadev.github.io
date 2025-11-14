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
        <article className="relative w-full z-0 flex justify-center items-center">
            <Lights className="w-full absolute left-1/2 md:hidden"/>
            <div className="relative flex justify-center items-center
                bg-white rounded-lg z-20
                lg:px-10
                 h-40 md:h-52 max-w-56 md:max-w-60 lg:max-w-[300px]">
                <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="relative z-20 object-contain"
                />
            </div>
            <Lights className="w-full absolute right-1/2 md:hidden" />
            <div className="absolute inset-0 hidden md:flex md:top-1/3 top-1/3 w-full overflow-visible z-0">
                <Lights className="md:w-full" />
                <Lights className="hidden md:w-full" />
                <Lights className="w-full hidden md:flex" />
                <Lights className="w-full hidden lg:flex" />
                <Lights className="w-full hidden lg:flex" />
            </div>
        </article>
  )
}
export default Sponsor