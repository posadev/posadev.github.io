import React, {useEffect, useState} from "react";
import Rooms from "@/components/agenda/Rooms.tsx";
import {IRoomAgenda} from "@/types/agenda.ts";
import {formatTime} from "@/lib/utils.ts";
import Adorno from "@/components/icons/Adorno.tsx";
import {Card} from "@/components/ui/card.tsx";

interface AgendaRowProps {
    slotStart: string;
    rooms: IRoomAgenda[]
}

const AgendaRow: React.FC<AgendaRowProps> = ({slotStart, rooms}) => {
    const eventDate = "2025-12-06"
    const slotDateTime = new Date(`${eventDate}T${slotStart}`)
    const now = new Date()
    const endDateTime = new Date(rooms[0]?.session.endsAt)

    const endTime = endDateTime.toLocaleTimeString(["en-US"], {hour: '2-digit', minute:'2-digit'})
    const hasPassed = now > endDateTime
    const [, forceUpdate] = useState(0)

    useEffect(() => {
        let updateInterval = endDateTime.getTime() - now.getTime() + 60_000
        if (updateInterval < 0) updateInterval = 0

        const timer = setTimeout(() => {
            forceUpdate(prev => prev + 1)
        }, updateInterval)

        return () => clearTimeout(timer)
    }, [slotStart])

    if (rooms.length === 0) return (
        <section>
            Cargando...
        </section>
    )

    if (hasPassed) return null

  return (
      <section
          className={`flex flex-col mt-8 mb-2.5 w-full transition-opacity duration-700 ${
              hasPassed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
          <Card className="
    flex items-center gap-4 p-2
    bg-alternative-700 border-alternative-700
    sticky top-[136px] z-10
    md:static md:top-auto md:z-auto
">
              <Adorno className="h-8 w-8" />
              <time className="font-bold text-2xl text-white">{formatTime(slotStart)}</time>
              <span aria-label="a" className="font-bold text-2xl text-gray-500">-</span>
              <time className="font-bold text-2xl text-white">{endTime}</time>
          </Card>
          <Rooms rooms={rooms} />
      </section>
  )
}
export default AgendaRow