import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import posadev2026_01 from '@/img/gallery/posadev-2026-01.webp';
import posadev2026_02 from '@/img/gallery/posadev-2026-02.webp';
import posadev2026_03 from '@/img/gallery/posadev-2026-03.webp';
import posadev2026_04 from '@/img/gallery/posadev-2026-04.webp';
import posadev2026_05 from '@/img/gallery/posadev-2026-05.webp';
import posadev2026_06 from '@/img/gallery/posadev-2026-06.webp';
import posadev2026_07 from '@/img/gallery/posadev-2026-07.webp';
import posadev2026_08 from '@/img/gallery/posadev-2026-08.webp';
import posadev2026_09 from '@/img/gallery/posadev-2026-09.webp';
import posadev2026_10 from '@/img/gallery/posadev-2026-10.webp';
import posadev2026_11 from '@/img/gallery/posadev-2026-11.webp';
import posadev2026_12 from '@/img/gallery/posadev-2026-12.webp';
import posadev2026_13 from '@/img/gallery/posadev-2026-13.webp';
import posadev2026_14 from '@/img/gallery/posadev-2026-14.webp';
import posadev2026_15 from '@/img/gallery/posadev-2026-15.webp';
import posadev2026_16 from '@/img/gallery/posadev-2026-16.webp';
import posadev2026_17 from '@/img/gallery/posadev-2026-17.webp';
import posadev2026_18 from '@/img/gallery/posadev-2026-18.webp';
import posadev2026_19 from '@/img/gallery/posadev-2026-19.webp';
import posadev2026_20 from '@/img/gallery/posadev-2026-20.webp';
import posadev2026_21 from '@/img/gallery/posadev-2026-21.webp';
import Photo from '@/components/Photo';
import Carousel, { GridConfig } from '@/components/Carousel';
import { IImage } from '@/types/types';
import { useIsMobile } from '@/hooks/use-mobile';
import Win from '@/components/Win';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const gridLg: GridConfig = { cols: 3, rows: 2, itemsPerSlide: 6 };
  const gridMd: GridConfig = { cols: 2, rows: 2, itemsPerSlide: 4 };
  const gridSm: GridConfig = { cols: 1, rows: 1, itemsPerSlide: 1 };

  const images = React.useMemo<IImage[]>(() => [
    { id: 1,  src: posadev2026_01, alt: "Posadev - Momento 1",  title: "Momento 1"  },
    { id: 2,  src: posadev2026_02, alt: "Posadev - Momento 2",  title: "Momento 2"  },
    { id: 3,  src: posadev2026_03, alt: "Posadev - Momento 3",  title: "Momento 3"  },
    { id: 4,  src: posadev2026_04, alt: "Posadev - Momento 4",  title: "Momento 4"  },
    { id: 5,  src: posadev2026_05, alt: "Posadev - Momento 5",  title: "Momento 5"  },
    { id: 6,  src: posadev2026_06, alt: "Posadev - Momento 6",  title: "Momento 6"  },
    { id: 7,  src: posadev2026_07, alt: "Posadev - Momento 7",  title: "Momento 7"  },
    { id: 8,  src: posadev2026_08, alt: "Posadev - Momento 8",  title: "Momento 8"  },
    { id: 9,  src: posadev2026_09, alt: "Posadev - Momento 9",  title: "Momento 9"  },
    { id: 10, src: posadev2026_10, alt: "Posadev - Momento 10", title: "Momento 10" },
    { id: 11, src: posadev2026_11, alt: "Posadev - Momento 11", title: "Momento 11" },
    { id: 12, src: posadev2026_12, alt: "Posadev - Momento 12", title: "Momento 12" },
    { id: 13, src: posadev2026_13, alt: "Posadev - Momento 13", title: "Momento 13" },
    { id: 14, src: posadev2026_14, alt: "Posadev - Momento 14", title: "Momento 14" },
    { id: 15, src: posadev2026_15, alt: "Posadev - Momento 15", title: "Momento 15" },
    { id: 16, src: posadev2026_16, alt: "Posadev - Momento 16", title: "Momento 16" },
    { id: 17, src: posadev2026_17, alt: "Posadev - Momento 17", title: "Momento 17" },
    { id: 18, src: posadev2026_18, alt: "Posadev - Momento 18", title: "Momento 18" },
    { id: 19, src: posadev2026_19, alt: "Posadev - Momento 19", title: "Momento 19" },
    { id: 20, src: posadev2026_20, alt: "Posadev - Momento 20", title: "Momento 20" },
    { id: 21, src: posadev2026_21, alt: "Posadev - Momento 21", title: "Momento 21" },
  ], []);

  const renderPhoto = React.useCallback(
    (image: IImage, index: number) => (
      <Photo key={image.id} index={index} image={image} setSelectedImage={setSelectedImage} />
    ), []);

  const closeLightbox = () => { setSelectedImage(null); document.body.style.overflow = 'unset'; };
  const nextImage = () => { if (selectedImage !== null) setSelectedImage((selectedImage + 1) % images.length); };
  const prevImage = () => { if (selectedImage !== null) setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1); };

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
    <section id="galeria" aria-labelledby="gallery-title">
      <Win
        title="🖼 Galería de momentos.fldr"
        footer={
          <>
            <span>{images.length} fotos</span>
            <span>edición 2026</span>
          </>
        }
      >
        <div className="sec-head">
          <h2>Galería de<br />momentos<em>.</em></h2>
          <p className="sec-sub" id="gallery-title">
            Revive los mejores momentos{' '}
            <Heart className="inline w-4 h-4 text-[var(--pink)]" fill="currentColor" aria-hidden="true" />{' '}
            de ediciones anteriores del Posadev.
          </p>
        </div>

        <Carousel
          mode={useIsMobile() ? 'snap' : 'free'}
          gridLg={gridLg}
          gridMd={gridMd}
          gridSm={gridSm}
          items={images}
          renderItem={renderPhoto}
        />
      </Win>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-4 right-4 z-60 text-white hover:text-[var(--pink)] p-2">
            <X className="w-8 h-8" />
          </button>
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[var(--pink)] p-2 z-60">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[var(--pink)] p-2 z-60">
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-full flex items-center justify-center">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-none animate-scale-in"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-white text-lg font-semibold mb-1">{images[selectedImage].title}</h3>
            <p className="text-white/60 text-sm">{selectedImage + 1} de {images.length}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;