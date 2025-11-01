import React from 'react';
import Speaker from "@/components/Speaker.tsx";
import Carousel, {GridConfig} from "@/components/Carousel.tsx";
import {useAppContext} from "@/context/AppContext.tsx";
import {ISpeaker} from "@/types/speakers.ts";

const Speakers = () => {
    const {speakers} = useAppContext();

    const gridLg: GridConfig = {cols: 3, rows: 2, itemsPerSlide: 6};
    const gridMd: GridConfig = {cols: 2, rows: 1, itemsPerSlide: 2};
    const gridSm: GridConfig = {cols: 1, rows: 1, itemsPerSlide: 1};

    if (speakers.length === 0) return null

    return (
        <section id="speakers"
                 className="bg-gradient-to-br to-posadev-darkPink from-primary-600 min-h-screen flex items-center justify-center flex-col py-20"
                 itemScope
                 itemType="https://schema.org/Event"
                 aria-labelledby="hero-title"
        >
            <h1 className="text-3xl md:text-5xl font-bold text-white">Speakers</h1>
            <div className="mt-8 mb-20 md:w-60 w-24 h-1 bg-candy-stripes mx-auto rounded-full"></div>
                <Carousel className="lg:gap-20" gridMd={gridMd} gridSm={gridSm} gridLg={gridLg} hideArrows items={speakers} renderItem={(speaker: ISpeaker) => <Speaker key={speaker.id} speaker={speaker} /> } />
        </section>
    );
};

export default Speakers;
