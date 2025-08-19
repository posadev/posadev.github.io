
import React from 'react';
import { Heart, Calendar, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-posadev-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-posadev-darkPink to-posadev-brightPink rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-2xl font-bold">Posadev</span>
            </div>
            <p className="text-posadev-lightPink mb-4">
              El evento anual que conecta, inspira y fortalece la comunidad de desarrolladores.
            </p>
            <div className="flex items-center space-x-2 text-posadev-brightPink">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Hecho con amor para la comunidad tech</span>
            </div>
          </div>

          {/* Event info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Información del evento</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-posadev-brightPink" />
                <span className="text-posadev-lightPink">6 de Diciembre del 2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-posadev-brightPink" />
                <span className="text-posadev-lightPink">Tecnológico de Monterrey Campus Guadalajara</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-posadev-brightPink" />
                <span className="text-posadev-lightPink">info@posadev.org</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-posadev-lightPink hover:text-posadev-brightPink transition-colors duration-300"
              >
                Inicio
              </button>
              <button 
                onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-posadev-lightPink hover:text-posadev-brightPink transition-colors duration-300"
              >
                Galería
              </button>
              <button 
                onClick={() => document.getElementById('patrocinadores')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-posadev-lightPink hover:text-posadev-brightPink transition-colors duration-300"
              >
                Patrocinadores
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-posadev-darkPink/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-posadev-lightPink text-sm mb-4 md:mb-0">
              © {currentYear} Posadev. Todos los derechos reservados.
            </p>
            <div className="text-posadev-lightPink text-sm">
              <span>Creado con </span>
              <span className="text-posadev-brightPink">♥</span>
              <span> para la comunidad</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
