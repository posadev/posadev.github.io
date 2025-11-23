import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import CardCharla from "@/components/agenda/CardCharla.tsx";
import Adorno from "@/components/icons/Adorno.tsx";
import React from "react";
import {formatTime} from "@/lib/utils.ts";
import Carousel from "@/components/Carousel.tsx";
import {IRoomAgenda} from "@/types/agenda.ts";
import {Card} from "@/components/ui/card.tsx";

const RoomsExpandable = ({rooms, slotStart, endsAt, hide}) => {
    if (hide) return null;
    return (
        <section>
            <Card className="flex items-center gap-4 p-2 bg-alternative-700 border-alternative-700">
                <Adorno className="h-8 w-8" />
                <time className="font-bold text-2xl text-white">{formatTime(slotStart)}</time>
                <span aria-label="a" className="font-bold text-2xl text-gray-500">-</span>
                <time className="font-bold text-2xl text-white">{endsAt}</time>
                <h2 className="font-bold text-2xl text-gray-700"></h2>
            </Card>
            <Carousel items={rooms}  renderItem={(room: IRoomAgenda) => <CardCharla room={room} key={room.id}/>} />
        </section>
    )
}

export default RoomsExpandable