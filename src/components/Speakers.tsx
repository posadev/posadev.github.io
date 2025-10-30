import React, {useEffect, useState} from 'react';
import {ISpeaker} from "@/types/speakers.ts";
import {getSpeakers} from "@/https/fetch.ts";
import Speaker from "@/components/Speaker.tsx";
import Carousel, {GridConfig} from "@/components/Carousel.tsx";
import Loading from "@/components/Loading.tsx";

const Speakers = () => {
    const [speakers, setSpeakers] = useState<ISpeaker[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const gridLg: GridConfig = {cols: 3, rows: 2, itemsPerSlide: 5};
    const gridMd: GridConfig = {cols: 2, rows: 2, itemsPerSlide: 3};
    const gridSm: GridConfig = {cols: 1, rows: 1, itemsPerSlide: 1};

    useEffect(() => {
        getSpeakers().then((data) => {
            setSpeakers(data);
            setLoading(false);
        });
    }, []);
    if (loading) return (<Loading size={60} gap={4} count={5} />);

    if (speakers.length === 0) return null

    return (
        <section id="speakers"
                 className="bg-gradient-to-bl to-posadev-darkPink from-primary-600 min-h-screen flex items-center flex-col py-20"
                 itemScope
                 itemType="https://schema.org/Event"
                 aria-labelledby="hero-title"
        >
            <h1 className="text-5xl font-bold text-white">Speakers</h1>
            <div className="mt-8 md:w-60 w-24 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>
            <section className="py-20 w-full max-w-7xl h-full">
                <Carousel gridMd={gridMd} gridSm={gridSm} gridLg={gridLg} hideArrows items={speakers} renderItem={(speaker) => <Speaker key={speaker.id} speaker={speaker} /> } />
            </section>
        </section>
    );
};

export default Speakers;
