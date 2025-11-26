import React from 'react';
import InteractiveMap from "@/components/venue-map/InteractiveMap.tsx";

const VenueMapSection = () => {

    return (
        <section id="venue-map"
                 className="bg-white min-h-screen flex items-center justify-center flex-col py-20"
                 itemScope
                 itemType="https://schema.org/Event"
                 aria-labelledby="hero-title"
        >
            <h1 className="text-3xl md:text-5xl font-bold text-black">Mapa del Evento</h1>
            <div className="mt-8 mb-20 md:w-60 w-24 h-1 bg-candy-stripes mx-auto rounded-full"></div>
            <InteractiveMap/>

        </section>
    );
};

export default VenueMapSection;
