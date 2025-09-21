import React from 'react';
import {Heart, Calendar, MapPin, Mail} from 'lucide-react';
import PrivacyPolicy from "@/pages/PrivacyPolicy.tsx";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    return (
        <footer className="bg-posadev-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Logo and description */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div
                                className="w-10 h-10 bg-gradient-to-br from-posadev-darkPink to-posadev-brightPink rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">P</span>
                            </div>
                            <span className="text-2xl font-bold">Posadev</span>
                        </div>
                        <p className="text-posadev-lightPink mb-4">
                            El evento anual que conecta, inspira y fortalece la comunidad de desarrolladores.
                        </p>
                        <div className="flex items-center space-x-2 text-posadev-brightPink">
                            <Heart className="w-4 h-4" aria-hidden="true"/>
                            <span className="text-sm">Hecho con amor para la comunidad tech</span>
                        </div>
                    </div>

                    {/* Event info */}
                    <section aria-labelledby="event-info-heading">
                        <h3 id="event-info-heading" className="text-xl font-semibold mb-4">Información del evento</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <Calendar aria-hidden="true"
                                          focusable="false" className="w-5 h-5 text-posadev-brightPink"/>
                                <time dateTime="2025-12-06" className="text-posadev-lightPink">6 de Diciembre del 2025</time>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-posadev-brightPink" aria-hidden="true" focusable="false"/>
                                <span
                                    className="text-posadev-lightPink">Tecnológico de Monterrey Campus Guadalajara</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-posadev-brightPink" aria-hidden="true" focusable="false"/>
                                <a href="mailto:info@posadev.org"
                                   className="text-posadev-lightPink">info@posadev.org</a>
                            </li>
                        </ul>
                    </section>
                    {/* Quick links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
                        <nav className="space-y-2">
                            <a
                                onClick={() => document.getElementById('inicio')?.scrollIntoView({behavior: 'smooth'})}
                                className="block text-posadev-lightPink hover:text-posadev-brightPink transition-colors duration-300"
                            >
                                Inicio
                            </a>
                            <a
                                onClick={() => document.getElementById('galeria')?.scrollIntoView({behavior: 'smooth'})}
                                className="block text-posadev-lightPink hover:text-posadev-brightPink transition-colors duration-300"
                            >
                                Galería
                            </a>
                            <a
                                onClick={() => document.getElementById('patrocinadores')?.scrollIntoView({behavior: 'smooth'})}
                                className="block text-posadev-lightPink hover:text-posadev-brightPink transition-colors duration-300"
                            >
                                Patrocinadores
                            </a>
                        </nav>
                    </div>
                </div>
                {/* Bottom section */}
                <div className="border-t border-posadev-darkPink/30 flex md:flex-row flex-col md:items-baseline justify-between items-center pt-8">
                    <small role="contentinfo" className="text-posadev-lightPink text-sm">
                        © {currentYear} Posadev. Todos los derechos reservados.
                    </small>
                    <a className="text-sm hover:text-posadev-brightPink"
                       onClick={() => navigate("/privacy-policy")}>Politica de Privacidad</a>
                    <p className="text-posadev-lightPink text-sm flex gap-1 items-center">
                        Creado con
                        <span role="img" aria-label="amor" className="text-posadev-brightPink">♥</span>
                        para la comunidad
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
