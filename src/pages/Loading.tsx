import React, {useEffect, useState} from "react";
import posadevLogo from "@/img/posadev-logo.png";
import CaneCandy from "@/components/ui/caneCandy.tsx";

const Loading =({ count = 3, size = 14, text = null })=> {
    const [visibleCount, setVisibleCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleCount((prev) => (prev >= count ? 1 : prev + 1));
        }, 500);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <section
            role="status"
            aria-live="polite"
            aria-label="Cargando"
            className="flex flex-col gap-10 items-center pt-32 fixed top-0 left-0 w-full h-full gradient-bg"
            style={{
                zIndex: 9999,
            }}
        >
            <div className="p-8 rounded-3xl">
                <img
                    src={posadevLogo}
                    alt="Logo de Posadev"
                    className="h-32 md:h-48 w-auto animate-fade-in mb-4"
                />
                {text && <h1 className="text-center text-white text-3xl font-bold md:text-5xl candy-text" style={{ animation: "colorShift 0.2s infinite alternate"}}>{text}</h1>}
                <h1 className="hidden text-white text-3xl font-bold md:text-5xl candy-text" style={{ animation: "colorShift 1.2s infinite alternate"}}>Cargando</h1>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
                <CaneCandy
                    style={{
                    animation: `caneBounce 600ms cubic-bezier(.2,.9,.3,1) infinite`,
                    width: `${size * 1.6}px`,
                    height: `${size}px`,
                    opacity: 0 < visibleCount ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out"
                }}/>
                <CaneCandy style={{
                    animation: `caneBounce 600ms cubic-bezier(.2,.9,.3,1) infinite`,
                    width: `${size * 1.6}px`,
                    height: `${size}px`,
                    opacity: 1 < visibleCount ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out"
                }}/>
                <CaneCandy style={{
                    animation: `caneBounce 600ms cubic-bezier(.2,.9,.3,1) infinite`,
                    width: `${size * 1.6}px`,
                    height: `${size}px`,
                    opacity: 2 < visibleCount ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out"
                }}/>
                <CaneCandy className="hidden md:block" style={{
                    animation: `caneBounce 600ms cubic-bezier(.2,.9,.3,1) infinite`,
                    width: `${size * 1.6}px`,
                    height: `${size}px`,
                    opacity: 3 < visibleCount ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out"
                }}/>
                <CaneCandy className="hidden md:block" style={{
                    animation: `caneBounce 600ms cubic-bezier(.2,.9,.3,1) infinite`,
                    width: `${size * 1.6}px`,
                    height: `${size}px`,
                    opacity: 4 < visibleCount ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out"
                }}/>
            </div>
        </section>
    );
}
export default Loading

