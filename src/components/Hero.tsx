import React from 'react';
import {Calendar, MapPin} from 'lucide-react';
import posadevLogo from '@/img/posadev-logo.png';
import Tickets from "@/components/Tickets.tsx";

const Hero = () => {
    return (
        <section id="inicio"
                 className="min-h-screen flex items-center justify-center relative overflow-hidden pt-7 md:pt-0"
                 itemScope
                 itemType="https://schema.org/Event"
                 aria-labelledby="hero-title"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 gradient-bg" aria-hidden="true"></div>
            {/* Decorative elements */}
            <div className="absolute inset-0" aria-hidden="true">
                <div className="absolute top-20 left-10 w-20 h-20 bg-posadev-brightPink/20 rounded-full blur-xl"></div>
                <div
                    className="absolute bottom-20 right-10 w-32 h-32 bg-posadev-lightPink/10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-posadev-darkPink/30 rounded-full blur-lg"></div>
            </div>

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
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale text-center">
                            <Calendar
                                className="w-8 h-8 text-posadev-brightPink mx-auto mb-3"
                                aria-hidden="true"
                            />
                            <h3 className="text-white font-semibold mb-2">Fecha</h3>
                            <time
                                className="text-posadev-lightPink"
                                dateTime="2025-12-06"
                                itemProp="startDate"
                            >
                                6 de diciembre 2025
                            </time>
                        </div>

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
                        </a>
                    </section>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
