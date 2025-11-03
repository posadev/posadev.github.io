import HiEventsWidget from "@/components/tickets/HiEventsWidget.tsx";
import React from "react";
import Gradient from "@/components/Gradient.tsx";

const TicketsPage = () => {
    return (
        <Gradient className="flex flex-col items-center p-4 py-8 h-full gap-6 px-4 md:px-20">
            <h2 className="text-3xl md:text-5xl font-bold text-alternative-700">
                Boletos
            </h2>
            <div
                className="w-20 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"/>
            <HiEventsWidget eventId={5}/>
        </Gradient>
    )
}

export default TicketsPage;