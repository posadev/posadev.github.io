import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile.tsx";

export interface GridConfig {
    cols: number;
    rows: number;
    itemsPerSlide?: number;
}

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;

    gridLg?: GridConfig;
    gridMd?: GridConfig;
    gridSm?: GridConfig;

    autoplay?: boolean;
    autoplayInterval?: number;

    hideArrows?: boolean;
}

const Carousel = <T,>({
                          items,
                          renderItem,
                          gridLg = { cols: 3, rows: 2, itemsPerSlide: 6 },
                          gridMd = { cols: 2, rows: 2, itemsPerSlide: 4 },
                          gridSm = { cols: 1, rows: 1, itemsPerSlide: 1 },
                          autoplay = false,
                          autoplayInterval = 3000,
                          hideArrows = false,
                      }: CarouselProps<T>) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [gridConfig, setGridConfig] = useState(gridLg);

    useEffect(() => {
        const updateGrid = () => {
            const width = window.innerWidth;
            if (width < 640) setGridConfig(gridSm);
            else if (width < 1024) setGridConfig(gridMd);
            else setGridConfig(gridLg);
        };
        updateGrid();
        window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, [gridSm, gridMd, gridLg]);

    const itemsPerSlide = gridConfig.itemsPerSlide ?? gridConfig.cols * gridConfig.rows;
    const groupedItems: T[][] = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
        groupedItems.push(items.slice(i, i + itemsPerSlide));
    }

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: { perView: 1, spacing: 15 },
        slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
        created: () => setLoaded(true),
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") instanceRef.current?.next();
            if (e.key === "ArrowLeft") instanceRef.current?.prev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [instanceRef]);

    // Autoplay
    useEffect(() => {
        if (!autoplay || !instanceRef.current) return;
        const interval = setInterval(() => instanceRef.current?.next(), autoplayInterval);
        return () => clearInterval(interval);
    }, [autoplay, autoplayInterval, instanceRef]);

    return (
        <section className="w-full flex flex-col items-center overflow-x-hidden">
            <div className="flex flex-row items-center gap-10 w-full">
                {/* Left Arrow */}
                {!hideArrows && (
                    <Button
                        variant="default"
                        size="square"
                        className="text-white bg-primary-500 hidden lg:flex justify-center items-center border-primary-500 border-2 rounded-xl"
                        onClick={() => instanceRef.current?.prev()}
                    >
                        <ChevronLeft height="30" width="30" />
                    </Button>
                )}

                <Slides itemsPerSlide={itemsPerSlide} renderItem={renderItem} groupedItems={groupedItems} gridConfig={gridConfig} sliderRef={sliderRef} />


                {/* Right Arrow */}
                {!hideArrows && (
                    <Button
                        variant="default"
                        size="square"
                        className="text-white bg-primary-500 hidden lg:flex justify-center items-center border-primary-500 border-2 rounded-xl"
                        onClick={() => instanceRef.current?.next()}
                    >
                        <ChevronRight height="30" width="30" />
                    </Button>
                )}
            </div>

            {/* Dots */}
            {loaded && instanceRef.current && (
                <div className="flex justify-center mt-20 gap-2.5 md:gap-4">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((index) => (
                        <button
                            key={index}
                            onClick={() => instanceRef.current?.moveToIdx(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentSlide === index ? "bg-primary-600" : "bg-primary-200"
                            }`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

const Slides = ({sliderRef, renderItem, groupedItems, gridConfig, itemsPerSlide}) => {
    if (itemsPerSlide === 1) {
        return (
            <div ref={sliderRef} className={`keen-slider`}>
                    {
                        groupedItems.map((group, i) => {
                        return (
                            <div key={i} className="keen-slider__slide flex justify-center">
                                {group.map((item, j) => renderItem(item, i * itemsPerSlide + j))}
                            </div>
                        );
                    })}
            </div>
        )
    }

    {/* Slides */}
    return (<div ref={sliderRef} className={`keen-slider`}>
        {groupedItems.map((group, i) => {
            return (
                <div key={i} className="keen-slider__slide flex justify-center">
                    <div
                        className="grid gap-4 w-full justify-center content-center"
                        style={{
                            gridTemplateColumns: `repeat(${gridConfig.cols}, minmax(0, auto))`,
                            gridTemplateRows: `repeat(${gridConfig.rows}, auto)`,
                        }}
                    >
                        {group.map((item, j) => renderItem(item, i * itemsPerSlide + j))}
                    </div>
                </div>
            );
        })}
    </div>)
}

export default Carousel;
