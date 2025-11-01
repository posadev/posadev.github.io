import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    className?: string;
    hideArrows?: boolean;
    hideDots?: boolean;
}

const Carousel = <T,>({
                          items,
                          renderItem,
                          gridLg = { cols: 3, rows: 2, itemsPerSlide: 6 },
                          gridMd = { cols: 2, rows: 2, itemsPerSlide: 4 },
                          gridSm = { cols: 1, rows: 1, itemsPerSlide: 1 },
                          autoplay = false,
                          autoplayInterval = 3000,
                          className,
                          hideArrows = false,
    hideDots = false
                      }: CarouselProps<T>) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [gridConfig, setGridConfig] = useState(gridLg);

    useEffect(() => {
        const updateGrid = () => {
            const width = window.innerWidth;
            if (width <= 640) setGridConfig(gridSm);
            else if (width <= 1024) setGridConfig(gridMd);
            else setGridConfig(gridLg);
        };
        updateGrid();
        window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, [gridSm, gridMd, gridLg]);

    const itemsPerSlide = gridConfig.itemsPerSlide ?? gridConfig.cols * gridConfig.rows;
    const groupedItems = React.useMemo(() => {
        const groups: T[][] = [];
        for (let i = 0; i < items.length; i += itemsPerSlide) {
            groups.push(items.slice(i, i + itemsPerSlide));
        }
        return groups;
    }, [items, itemsPerSlide]);
    const slideCount = groupedItems.length;

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
            <div className="flex flex-row justify-center items-center gap-14 w-full">
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

                <Slides className={className} key={`${gridConfig.cols}-${gridConfig.rows}`} itemsPerSlide={itemsPerSlide} renderItem={renderItem} groupedItems={groupedItems} gridConfig={gridConfig} sliderRef={sliderRef} />

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
            {loaded && !hideDots && instanceRef.current && (
                <div className="flex flex-wrap justify-center mt-20 px-4 gap-2.5 md:gap-4">
                    {[...Array(slideCount).keys()].map((index) => (
                        <button
                            key={index}
                            onClick={() => instanceRef.current?.moveToIdx(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentSlide === index ? "bg-primary-400 border-4 border-primary-400 " : "bg-primary-200"
                            }`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

const Slides = ({className, sliderRef, renderItem, groupedItems, gridConfig, itemsPerSlide}) => {
    if (itemsPerSlide === 1) {
        return (
            <div ref={sliderRef} className={`keen-slider`}>
                    {
                        groupedItems.map((group, i) => {
                        return (
                            <div key={i} className={`keen-slider__slide flex justify-center ${className}`}>
                                {group.map((item, j) => renderItem(item, i))}
                            </div>
                        );
                    })}
            </div>
        )
    }

    {/* Slides */}
    return (<div ref={sliderRef} className={`keen-slider`}>
        {groupedItems.map((group, i) => (
            <div key={i} className="keen-slider__slide flex justify-center flex-grow">
                <div
                    className={`flex flex-wrap gap-2 w-full justify-center items-center ${className}`}
                >
                    {group.map((item, j) => (
                        <div
                            key={j}
                            style={{
                                flex: `0 0 calc(${100 / gridConfig.cols}% - 1rem)`, // -1rem para compensar el gap
                            }}
                        >
                            {renderItem(item, i * itemsPerSlide + j)}
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>)
}

export default React.memo(Carousel);
