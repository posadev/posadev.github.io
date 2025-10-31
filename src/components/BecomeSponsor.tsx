import React from 'react';
import {Download, CheckCircle, Building, Mail, MessageSquare} from 'lucide-react';
import {useToast} from '@/hooks/use-toast';
import becomeSponsorImage from '@/img/become_sponsor.jpeg';
import DuckIcon from "@/components/ui/duckIcon.tsx";

const BecomeSponsor = () => {
    const {toast} = useToast();

    const handleBrochureClick = () => {
        toast({
            title: "Descargando brochure...",
            description: "El documento se está descargando a tu dispositivo.",
        });
    };

    return (
        <section id="patrocinadores"
                 className="py-20 bg-gradient-to-b from-white to-posadev-lightPink/20 mx-auto px-4 w-full">
            {/* Section header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-posadev-black mb-6">
                    Únete como Patrocinador
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Conecta con la comunidad tech más vibrante y posiciona tu marca junto a los mejores talentos del
                    desarrollo
                </p>
                <div
                    className="w-20 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>
            </div>
            <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Benefits section */}
                <section aria-labelledby="benefits-title" className="space-y-8">
                    <header>
                        <h3 id="benefits-title"
                            className="text-xl text-center md:text-2xl font-bold text-posadev-black mb-6">
                            ¿Por qué patrocinar Posadev?
                        </h3>
                    </header>

                    {/* Lista de beneficios */}
                    <ul className="space-y-4">
                        <li className="flex justify-start items-center md:items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover-scale">
        <span
            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
          <DuckIcon color="purple" className="w-8 h-8 text-white" aria-hidden="true"/>
        </span>
                            <div>
                                <h4 className="font-semibold text-posadev-black mb-2">Visibilidad de marca</h4>
                                <p className="text-gray-600">
                                    Expón tu marca ante cientos de desarrolladores y profesionales de la tecnología</p>
                            </div>
                        </li>

                        <li className="flex justify-start items-center md:items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover-scale">
                            <span className="w-12 h-12 rounded-lg self-start flex items-center justify-center flex-shrink-0">
                                <DuckIcon color="blue" className="w-8 h-8 text-white" aria-hidden="true"/>
                            </span>
                            <div>
                                <h4 className="font-semibold text-posadev-black mb-2">Networking</h4>
                                <p className="text-gray-600">Expande tus redes de comunidades de desarrolladores</p>
                            </div>
                        </li>
                        <li className="flex items-center md:items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover-scale">
                            <span className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                <DuckIcon color="yellow" className="w-8 h-8 text-white" aria-hidden="true"/>
                            </span>
                            <div>
                                <h4 className="font-semibold text-posadev-black mb-2">Impacto social</h4>
                                <p className="text-gray-600">Contribuye al crecimiento de las comunidades de la
                                    región</p>
                            </div>
                        </li>
                    </ul>

                    {/* Brochure download */}
                    <aside
                        className="bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink rounded-2xl p-6 text-white">
                        <h4 className="text-xl font-semibold mb-3">Descarga nuestro brochure</h4>
                        <p className="mb-4 text-posadev-lightPink">
                            Conoce todos los detalles sobre los paquetes de patrocinio y beneficios
                        </p>
                        <a
                            href="/posadev_brochure2025.pdf"
                            download
                            onClick={handleBrochureClick}
                            className="flex gap-x-2 bg-white text-posadev-darkPink px-6 py-3 rounded-lg font-semibold hover:bg-posadev-lightPink transition-colors duration-300 items-center w-60"
                        >
                            Descargar brochure
                            <Download className="w-5 h-5" aria-hidden="true"/>
                        </a>
                    </aside>
                </section>

                {/* Sponsor Image */}
                <section className="bg-white rounded-2xl shadow-xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-posadev-black mb-6">
                        Conviértete en Patrocinador
                    </h3>

                    <figure>
                        <img
                            src={becomeSponsorImage}
                            alt="Conviértete en Patrocinador de Posadev"
                            className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                        <figcaption className="mt-6">
                            <p className="text-gray-600 mb-4 font-bold">
                                ¿Interesado en patrocinar nuestro evento?
                            </p>
                            <a
                                href="mailto:sponsors@posadev.org"
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-posadev-brightPink/25 transition-all duration-300"
                            >
                                <Mail className="w-5 h-5 mr-1" aria-hidden="true"/>
                                Contáctanos
                            </a>
                        </figcaption>
                    </figure>
                </section>
            </section>
        </section>
    );
}
export default BecomeSponsor