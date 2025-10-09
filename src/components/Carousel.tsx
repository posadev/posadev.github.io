import React, {useEffect, useState} from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    autoplay?: boolean;
    autoplayInterval?: number;
}

const Carousel = <T,>({
                          items,
                          renderItem,
                          autoplay = false,
                          autoplayInterval = 3000,
}: CarouselProps<T>) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: { perView: 1, spacing: 15 },
        breakpoints: {
            "(min-width: 640px)": { slides: { perView: 1, spacing: 15 } },
            "(min-width: 1024px)": { slides: { perView: 1, spacing: 20 } },
        },
        slideChanged: (slider) => {
            setCurrentSlide(slider.track.details.rel);
        },
        created: () => {
            setLoaded(true);
        },
    });
    /* Slide with keyboard */
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'ArrowRight') instanceRef.current?.next();
                if (e.key === 'ArrowLeft') instanceRef.current?.prev()
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [instanceRef]);

    /* Autoplay */
    useEffect(() => {
        if (!autoplay || !instanceRef.current) return;

        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, autoplayInterval);

        return () => clearInterval(interval);
    }, [autoplay, autoplayInterval, instanceRef]);

    return (
        <section className="w-full flex flex-col items-center overflow-x-hidden">
            <div className="flex flex-row items-center gap-16 w-full">
                {/* Left Arrow */}
                <Button
                    variant="default"
                    size="square"
                    className="text-white bg-primary-500 border-primary-500 border-2 rounded-xl hidden lg:flex justify-center items-center"
                    onClick={() => instanceRef.current?.prev()}
                >
                    <ChevronLeft height="30" width="30"/>
                </Button>
                {/* Slides */}
                <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
                    {items.map((item, i) => (
                        <div key={i} className="keen-slider__slide">
                            {renderItem(item, i)}
                        </div>
                    ))}
                </div>
                {/* Right Arrow */}
                <Button
                    variant="default"
                    size="square"
                    className={`text-white bg-primary-500 hidden lg:flex justify-center items-center border-primary-500 border-2 rounded-xl`}
                    onClick={() => instanceRef.current?.next()}
                >
                    <ChevronRight height={30} width={30} />
                </Button>
            </div>
            {/* Dots */}
            {loaded && instanceRef.current && (
                <div className="flex justify-center mt-2 gap-2.5 md:gap-4 md:pt-14 md:pb-14">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            className={`w-3 h-3 rounded-full ${
                                currentSlide === idx ? "bg-primary-600" : "bg-primary-200"
                            }`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};
export default Carousel;