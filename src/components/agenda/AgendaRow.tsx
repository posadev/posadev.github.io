import React, {useEffect, useState} from "react";
import RoomsExpandable from "@/components/agenda/RoomsExpandable.tsx";
import Rooms from "@/components/agenda/Rooms.tsx";
import {useIsMobile} from "@/hooks/use-mobile.tsx";
import {IRoomAgenda} from "@/types/agenda.ts";
import {formatTime} from "@/lib/utils.ts";
import {useAppContext} from "@/context/AppContext.tsx";

interface AgendaRowProps {
    slotStart: string;
    rooms: IRoomAgenda[]
}

const AgendaRow: React.FC<AgendaRowProps> = ({slotStart, rooms}) => {
    const {displayAll} = useAppContext()
    const isMobile = useIsMobile()
    const eventDate = "2025-12-06"
    const slotDateTime = new Date(`${eventDate}T${slotStart}`)
    const now = new Date()
    const endDateTime = new Date(rooms[0]?.session.endsAt)
    const expandableLogic = (!displayAll && isMobile) || (!isMobile)

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
          <Rooms rooms={rooms} slotStart={slotStart} endsAt={endTime} hide={false} />
          <RoomsExpandable rooms={rooms} slotStart={slotStart} endsAt={endTime} hide={true} />
      </section>
  )
}
export default AgendaRow