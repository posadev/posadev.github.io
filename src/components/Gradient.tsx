import React from "react";
import {cn} from "@/lib/utils.ts";

type GradientSectionProps = {
    from?: string;     // color inicial
    to?: string;       // color final
    stopMid?: string;  // hasta dónde cambia
    direction?: string; // dirección del gradiente: to-r, to-l, to-t, to-b
    className?: string;
    children: React.ReactNode;
    id?: string;
};

const Gradient: React.FC<GradientSectionProps> = (
    {
        from = "white",
        to = "red",
        stopMid = "50%",
        direction = "to-right",
        className = "",
        children,
        id
    }) => {

    return (
        <section id={id} className={cn(className, "bg-[linear-gradient(to_bottom,white_0%,white_30%,hsl(var(--primary-100))_200%)]") }>
            {children}
        </section>
    );
};
export default Gradient;