import {ZoomIn} from "lucide-react";
import React from "react";
import {IImage} from "@/types/types.ts";

export interface PhotoProps {
    image: IImage;
    setSelectedImage: (id: number) => void;
    index?: number;
}

const Photo: React.FC<PhotoProps> = ({image, setSelectedImage, index}) => {
    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };
  return (
      <figure
          className="relative group cursor-pointer overflow-hidden rounded-3xl bg-posadev-alternative-800 w-full h-64"
      >
          <button
              aria-label={`Ver imagen completa de ${image.title}`}
              className="w-full h-full text-left focus:outline-none overflow-hidden"
              onClick={() => openLightbox(index)}
          >
              <img
                  src={image.src}
                  alt={image.alt}
                  decoding="async"
                  loading="lazy"
                  fetchPriority="low"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110 hover-scale"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/60 flex justify-between align-middle via-transparent to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <figcaption
                      className="text-white font-semibold text-lg mb-2 flex flex-col justify-end p-4">
                      <span>{image.title}</span>
                      <span className="text-posadev-lightPink text-sm" aria-hidden="true">Ver imagen completa</span>
                  </figcaption>
                  <ZoomIn className="w-5 h-5 m-4 self-end text-white" aria-hidden="true"/>
              </div>
          </button>
      </figure>
  )
}

export default React.memo(Photo);