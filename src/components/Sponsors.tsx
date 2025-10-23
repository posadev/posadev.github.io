import React from "react";
import background from '@/img/background_blue.png'
import {sponsors} from "@/data/sponsors.ts";
import Sponsor from "@/components/Sponsor.tsx";
import Lights from "@/components/ui/lights.tsx";

const Sponsors = () => {
    return (
        <section
            id="sponsors"
            className="relative flex flex-col justify-center text-center overflow-visible"
        >
            {/* SVG de luces */}
            <div className="absolute flex -top-4 left-0 w-full overflow-visible z-10">
                <Lights className="w-full h-auto" />
                <Lights className="w-full h-auto" />
                <Lights className="w-full h-auto hidden lg:block" />
                <Lights className="w-full h-auto hidden md:block" />
                <Lights className="w-full h-auto hidden md:block" />
            </div>
            {/* Fondo y texto */}
            <div
                style={{ backgroundImage: `url(${background})` }}
                className=" h-20 md:h-40 bg-cover bg-center flex flex-col justify-center items-center pt-10 z-0"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center py-1 z-20">
                    Sponsors
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto my-4 rounded-full z-20"></div>
            </div>
            <section>
                {sponsors.map((sponsor) => (
                    <Sponsor key={sponsor.id} sponsor={sponsor} />
                ))}
            </section>
            <div style={{ backgroundImage: `url(${background})` }} className="h-20 md:h-40 bg-cover bg-center flex justify-center items-center">
            </div>
            <div className="absolute flex -bottom-4 left-0 w-full overflow-visible z-10">
                <Lights className="w-full h-auto" />
                <Lights className="w-full h-auto" />
                <Lights className="w-full h-auto hidden md:block" />
                <Lights className="w-full h-auto hidden md:block" />
                <Lights className="w-full h-auto hidden md:block" />
            </div>
        </section>

    )
};

export default Sponsors;