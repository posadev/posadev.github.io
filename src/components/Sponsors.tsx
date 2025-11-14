import React from "react";
import background from '@/img/background_blue.png'
import {sponsors} from "@/data/sponsors.ts";
import Lights from "@/components/ui/lights.tsx";
import SponsorsByTier from "@/components/sponsors/SponsorsByTier.tsx";

const Sponsors = () => {


    return (
        <section
            id="sponsors"
            className="relative flex flex-col justify-center text-center overflow-visible"
        >
            {/* SVG de luces */}
            <div className="absolute flex -top-4 left-0 w-full overflow-visible z-10 hidden">
                <Lights className="w-full h-auto" />
                <Lights className="w-full h-auto" />
                <Lights className="w-full h-auto hidden lg:block" />
                <Lights className="w-full h-auto hidden md:block" />
                <Lights className="w-full h-auto hidden md:block" />
            </div>
            {/* Fondo y texto */}
            <div
                style={{ backgroundImage: `url(${background})` }}
                className=" h-20 md:h-36 bg-cover bg-center flex flex-col justify-center items-center z-0"
            >
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-600 text-secondary-600 text-center pt-20 z-20">
                Patrocinadores
            </h2>
            <div
                className="my-10 w-40 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>
            <SponsorsByTier sponsors={sponsors} />
            <div style={{ backgroundImage: `url(${background})` }} className="h-20 md:h-40 bg-cover bg-center flex justify-center items-center">
            </div>
            <div className="absolute flex -bottom-4 left-0 w-full overflow-visible z-10 hidden">
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