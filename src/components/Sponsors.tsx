import React from 'react';
import { Download, ExternalLink, CheckCircle, Building, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import becomeSponsorImage from '@/img/become_sponsor.jpeg';

const Sponsors = () => {
  const { toast } = useToast();

  const handleBrochureClick = () => {
    toast({
      title: "Descargando brochure...",
      description: "El documento se está descargando a tu dispositivo.",
    });
    
    window.open('https://drive.google.com/file/d/1O-cpi3_ktVw42FIdDpSlw8qf_N9exRVN/view?usp=drive_link', '_blank');
  };

  return (
    <section id="patrocinadores" className="py-20 bg-gradient-to-b from-white to-posadev-lightPink/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-posadev-black mb-6">
            Únete como Patrocinador
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Conecta con la comunidad tech más vibrante y posiciona tu marca junto a los mejores talentos del desarrollo
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Benefits section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-posadev-black mb-6">
                  ¿Por qué patrocinar Posadev?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover-scale">
                    <div className="w-12 h-12 bg-gradient-to-br from-posadev-darkPink to-posadev-brightPink rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-posadev-black mb-2">Visibilidad de marca</h4>
                      <p className="text-gray-600">Expón tu marca ante cientos de desarrolladores y profesionales de la tecnología</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover-scale">
                    <div className="w-12 h-12 bg-gradient-to-br from-posadev-darkPink to-posadev-brightPink rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-posadev-black mb-2">Networking</h4>
                      <p className="text-gray-600">Expande tus redes de comunidades de desarrolladores</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover-scale">
                    <div className="w-12 h-12 bg-gradient-to-br from-posadev-darkPink to-posadev-brightPink rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-posadev-black mb-2">Impacto social</h4>
                      <p className="text-gray-600">Contribuye al crecimiento de las comunidades de la region</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brochure download */}
              <div className="bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink rounded-2xl p-6 text-white">
                <h4 className="text-xl font-semibold mb-3">Descarga nuestro brochure</h4>
                <p className="mb-4 text-posadev-lightPink">
                  Conoce todos los detalles sobre los paquetes de patrocinio y beneficios
                </p>
                <button
                  onClick={handleBrochureClick}
                  className="bg-white text-posadev-darkPink px-6 py-3 rounded-lg font-semibold hover:bg-posadev-lightPink transition-colors duration-300 flex items-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar brochure</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sponsor Image */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-posadev-black mb-6 text-center">
                Conviértete en Patrocinador
              </h3>
              
              <div className="relative">
                <img 
                  src={becomeSponsorImage}
                  alt="Conviértete en Patrocinador de Posadev" 
                  className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                
                {/* Optional overlay with contact info */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-4">
                    ¿Interesado en patrocinar nuestro evento?
                  </p>
                  <a 
                    href="mailto:sponsors@posadev.org"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-posadev-brightPink/25 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contáctanos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;