import React from 'react';
import {Calendar, MapPin} from 'lucide-react';
import posadevLogo from '@/img/posadev-logo.png';
import Tickets from "@/components/Tickets.tsx";
import CalendarCard from "@/components/CalendarCard.tsx";

const Hero = () => {
    return (
        <section id="inicio"
                 className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden pt-7 md:pt-0"
                 itemScope
                 itemType="https://schema.org/Event"
                 aria-labelledby="hero-title"
        >
            <div className="container mx-auto px-4 relative z-10 mt-16 lg:pt-0">
                <div className="text-center">
                    {/* Main title */}
                    <div className="mb-6 flex flex-col justify-center items-center">
                        <img
                            src={posadevLogo}
                            alt="Logo de Posadev"
                            className="h-32 md:h-48 w-auto animate-fade-in mb-4"
                        />
                        <title id="hero-title" className="sr-only">
                            Posadev 2025 – El evento anual de comunidades tecnológicas
                        </title>
                        <Tickets />
                        <div className="mt-8 w-60 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>
                        <p
                            itemProp="description"
                            className="pt-8 text-xl md:text-2xl text-posadev-lightPink animate-fade-in font-light">
                            El evento anual que reúne a la comunidades tecnológicas
                        </p>
                    </div>
                    {/* Subtitle */}
                    {/* Event details */}
                    <section
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
                        itemScope
                        itemType="https://schema.org/Event"
                        aria-labelledby="event-details-title"
                    >
                        <title id="event-details-title" className="sr-only">
                            Detalles del evento
                        </title>
                        {/* Fecha */}
                        <CalendarCard />
                        {/* Ubicación */}
                        <a
                            href="https://maps.app.goo.gl/8ayZ57xJf9Uvod6o7"
                            target="_blank"
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale text-center">
                            <MapPin
                                className="w-8 h-8 text-posadev-brightPink mx-auto mb-3"
                                aria-hidden="true"
                            />
                            <h3 className="text-white font-semibold mb-2">Ubicación</h3>
                            <p
                                className="text-posadev-lightPink"
                                itemProp="location"
                                itemScope
                                itemType="https://schema.org/Place"
                            >
                                Tec de Monterrey Campus Guadalajara
                            </p>
                            <p className="text-xs text-posadev-lightPink/70 mt-2">(Haz clic para ir al mapa)</p>
                        </a>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Hero;
