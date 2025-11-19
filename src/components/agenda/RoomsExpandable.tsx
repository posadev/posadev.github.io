import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import CardCharla from "@/components/agenda/CardCharla.tsx";
import Adorno from "@/components/icons/Adorno.tsx";
import React from "react";
import {formatTime} from "@/lib/utils.ts";

const RoomsExpandable = ({rooms, slotStart, endsAt, hide}) => {
    if (hide) return null;
    return (
        <Accordion type="single" collapsible className="">
            <AccordionItem value={slotStart}>
            <div className="flex items-center gap-4">
                <AccordionTrigger className="flex gap-6 px-2">
                    <Adorno/>
                    <time className="font-bold text-2xl">{formatTime(slotStart)}</time>
                    <span aria-label="a" className="font-bold text-2xl text-gray-500">-</span>
                    <time className="font-bold text-2xl text-white">{endsAt}</time>
                    <h2 className="font-bold text-2xl text-gray-700"></h2>
                    Ver mas
                </AccordionTrigger>
            </div>
                <AccordionContent>
                    {rooms.map((room) => (
                        <div className="flex flex-col md:flex-row gap-6" key={room.id}>
                            <CardCharla room={room}/>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default RoomsExpandable