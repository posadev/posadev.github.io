import React from 'react';
import posadevLogo from '/media-kit/posadev-logo.png';

const Hero = () => {
    return (
        <section id="inicio"
                 className="min-h-screen gradient-bg flex flex-col items-center justify-center relative pt-7 md:pt-0"
                 itemScope
                 itemType="https://schema.org/Event"
                 aria-labelledby="hero-title"
        >
            <div className="flex-1 flex items-center justify-center container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <div className="mb-6 flex flex-col justify-center items-center">
                        <img
                            src={posadevLogo}
                            alt="Logo de Posadev"
                            className="h-32 md:h-48 w-auto animate-fade-in mb-4"
                        />
                        <title id="hero-title" className="sr-only">
                            Posadev 2025 – El evento anual de comunidades tecnológicas
                        </title>
                        <div className="mt-8 w-60 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>
                        <p
                            itemProp="description"
                            className="pt-8 text-xl md:text-2xl text-posadev-lightPink animate-fade-in font-light">
                            El evento anual que reúne a la comunidades tecnológicas
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-white/90 animate-bounce pb-10 mt-auto">
                <span className="text-sm font-light tracking-widest uppercase">Más información</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
