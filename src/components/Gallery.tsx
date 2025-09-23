import React, {useState} from 'react';
import {X, ChevronLeft, ChevronRight, ZoomIn} from 'lucide-react';
import posadevFila from '@/img/posadev-fila.jpg';
import posadevReferentes from '@/img/IMG_7461.jpg';
import posadevAsistencia from '@/img/PXL_20241208_011903817.jpg';
import posadevPlaticas from '@/img/IMG_7466.jpg';
import posadevAmbiente from '@/img/IMG_7464.jpg';
import posadevTecnologia from '@/img/IMG_7425.jpg';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const images = [
        {
            id: 1,
            src: posadevFila,
            alt: "Posadev - Participantes",
            title: "Participantes"
        },
        {
            id: 2,
            src: posadevReferentes,
            alt: "Posadev - Referentes",
            title: "Referentes"
        },
        {
            id: 3,
            src: posadevAsistencia,
            alt: "Posadev - Asistencia",
            title: "Asistencia"
        },
        {
            id: 4,
            src: posadevPlaticas,
            alt: "Platicas",
            title: "Platicas"
        },
        {
            id: 5,
            src: posadevAmbiente,
            alt: "Ambiente del evento",
            title: "Ambiente único"
        },
        {
            id: 6,
            src: posadevTecnologia,
            alt: "Tecnología",
            title: "Tecnología"
        }
    ];

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        }
    };

    // Manejar teclas del teclado
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage !== null) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <section
            id="galeria"
            className="py-20 bg-gradient-to-b from-posadev-lightPink/10 to-white"
            aria-labelledby="gallery-title">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold text-posadev-black mb-4">
                        Galería de Momentos
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Revive los mejores momentos de ediciones anteriores del Posadev
                    </p>
                    <div
                        className="w-20 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Gallery grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <figure
                            key={image.id}
                            className="relative group cursor-pointer overflow-hidden rounded-2xl hover-scale"
                        >
                            <button
                                aria-label={`Ver imagen completa de ${image.title}`}
                                className="w-full h-full text-left focus:outline-none"
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute flex justify-between align-middle inset-0 bg-gradient-to-t from-posadev-black/70 via-transparent to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <figcaption
                                            className="text-white font-semibold text-lg mb-2 flex flex-col justify-end p-4">
                                            <span>{image.title}</span>
                                            <span className="text-posadev-lightPink text-sm" aria-hidden="true">Ver imagen completa</span>
                                        </figcaption>
                                    <ZoomIn className="w-5 h-5 m-4 self-end text-white" aria-hidden="true"/>
                                </div>
                            </button>
                        </figure>
                    ))}
                </section>
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4">
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-60 text-white hover:text-posadev-brightPink transition-colors p-2"
                    >
                        <X className="w-8 h-8"/>
                    </button>

                    {/* Navigation buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-posadev-brightPink transition-colors p-2 z-60"
                    >
                        <ChevronLeft className="w-8 h-8"/>
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-posadev-brightPink transition-colors p-2 z-60"
                    >
                        <ChevronRight className="w-8 h-8"/>
                    </button>

                    {/* Image */}
                    <div className="max-w-4xl max-h-full flex items-center justify-center">
                        <img
                            src={images[selectedImage].src}
                            alt={images[selectedImage].alt}
                            className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
                        />
                    </div>

                    {/* Image info */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                        <h3 className="text-white text-xl font-semibold mb-2">
                            {images[selectedImage].title}
                        </h3>
                        <p className="text-posadev-lightPink">
                            {selectedImage + 1} de {images.length}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
