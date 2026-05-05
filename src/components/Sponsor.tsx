import React from "react";
import {ISponsor} from "@/types/types.ts";

interface SponsorProps {
    sponsor: ISponsor;
}

const Sponsor: React.FC<SponsorProps> = ({sponsor}) => {
    if (!sponsor.isPaid) return;
    return (
        <article className="flex justify-center items-center bg-white rounded-xl p-6 h-40 md:h-52 w-full">
            <img
                src={sponsor.image}
                alt={sponsor.name}
                className="object-contain max-h-full max-w-full"
            />
        </article>
    )
}
export default Sponsor