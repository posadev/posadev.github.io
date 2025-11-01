import React, {useState} from 'react';
import {X, ChevronLeft, ChevronRight, Heart} from 'lucide-react';
import posadevFila from '@/img/gallery/posadev-fila.webp';
import posadevReferentes from '@/img/gallery/IMG_7461.webp';
import posadevAsistencia from '@/img/gallery/PXL_20241208_011903817.webp';
import posadevTecnologia from '@/img/gallery/IMG_7425.webp';
import voluntarios from '@/img/gallery/voluntarios.webp';
import hazzim from '@/img/gallery/Hazzim.webp';
import dinamicas from '@/img/gallery/Dinamicas.webp';
import gabriel from '@/img/gallery/Gabriel.webp';
import posadev from '@/img/gallery/posadev.webp'
import dinamicaSponsor from '@/img/gallery/DinamicaSponsor.png'
import invocacionDemo from '@/img/gallery/invocacionDemo.png'
import tamales from '@/img/gallery/tamales.png'
import Photo from "@/components/Photo.tsx";
import Carousel, {GridConfig} from "@/components/Carousel.tsx";
import {IImage} from "@/types/types.ts";
import {useIsMobile} from "@/hooks/use-mobile.tsx";


const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const gridLg: GridConfig = {cols: 3, rows: 2, itemsPerSlide: 6};
    const gridMd: GridConfig = {cols: 2, rows: 2, itemsPerSlide: 4};
    const gridSm: GridConfig = {cols: 1, rows: 1, itemsPerSlide: 1};

    const images = React.useMemo<IImage[]>(() => [
        {
            id: 11,
            src: invocacionDemo,
            alt: "Invocación de demo",
            title: "Invocación de demo"
        },
        {
            id: 12,
            src: tamales,
            alt: "Tamales",
            title: "Y llegaron los tamales"
        },

        {
            id: 8,
            src: dinamicas,
            alt: "Dinamicas con sponsors",
            title: "Dinamicas con sponsors"
        },
        {
            id: 9,
            src: posadev,
            alt: "Posadev 2019",
            title: "Posadev 2019"
        },
        {
            id: 7,
            src: hazzim,
            alt: "Hazzim organizador Posadev 2024",
            title: "Hazzim Organizador"
        },
        {
            id: 2,
            src: voluntarios,
            alt: "Voluntarios Posadev",
            title: "Voluntarios"
        },
        {
            id: 1,
            src: gabriel,
            alt: "Gabriel speaker Posadev 2024",
            title: "Gabriel speaker"
        },
        {
            id: 3,
            src: posadevTecnologia,
            alt: "Tecnología",
            title: "Tecnología"
        },
        {
            id: 4,
            src: posadevFila,
            alt: "Posadev - Participantes",
            title: "Participantes"
        },
        {
            id: 5,
            src: posadevReferentes,
            alt: "Posadev - Referentes",
            title: "Referentes"
        },
        {
            id: 6,
            src: posadevAsistencia,
            alt: "Posadev - Asistencia",
            title: "Asistencia"
        },
        {
            id: 10,
            src: dinamicaSponsor,
            alt: "Dinamica con Sponsor",
            title: "Dinamica con Sponsor"
        }
    ], []);
    const renderPhoto = React.useCallback(
        (image: IImage, index: number) => (
            <Photo key={image.id} index={index} image={image} setSelectedImage={setSelectedImage} />
        ), []);

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
            className="flex flex-col justify-center items-center py-20 px-10 bg-gradient-to-b from-posadev-lightPink/10 to-white"
            aria-labelledby="gallery-title">
            {/* Section header */}
            <h2 id="gallery-title" className="text-3xl md:text-5xl text-center font-bold text-alternative-700 mb-4">
                Galería de Momentos
            </h2>
            <p className="text-md text-gray-600 w-full flex-wrap flex gap-2 justify-center items-center">
                Revive los mejores momentos <Heart className="text-primary-500 h-4 w-4" fill="currentColor" aria-hidden="true" /> de ediciones anteriores del Posadev
            </p>
            <div className="w-28 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto my-8 rounded-full "></div>
            {/* Gallery grid */}
            <Carousel
                mode={useIsMobile() ? "snap" :"free"}
                gridLg={gridLg}
                gridMd={gridMd}
                gridSm={gridSm}
                items={images}
                renderItem={renderPhoto}
            />
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
