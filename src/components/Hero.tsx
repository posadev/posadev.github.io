
import React from 'react';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-posadev-brightPink/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-posadev-lightPink/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-posadev-darkPink/30 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Main title */}
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <img
                src="/assets/posadev-logo.png"
                alt="Posadev Logo"
                className="h-32 md:h-48 w-auto animate-fade-in"
              />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-posadev-lightPink mb-8 animate-fade-in font-light">
            El evento anual que reúne a la comunidades technológicas
          </p>

          {/* Event details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale">
              <Calendar className="w-8 h-8 text-posadev-brightPink mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Fecha</h3>
              <p className="text-posadev-lightPink">16 de Diciembre 2025</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale">
              <MapPin className="w-8 h-8 text-posadev-brightPink mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Ubicación</h3>
              <p className="text-posadev-lightPink">Tec de Monterrey Campus Guadalajara</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-scale">
              <Clock className="w-8 h-8 text-posadev-brightPink mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Duración</h3>
              <p className="text-posadev-lightPink">10 AM a 10 PM</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button 
              onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-posadev-brightPink/30 transition-all duration-300 flex items-center space-x-2 hover-scale"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explora el evento</span>
            </button> */}

            <button
              onClick={() => document.getElementById('patrocinadores')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-posadev-black transition-all duration-300"
            >
              Únete como patrocinador
            </button>
          </div>
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
