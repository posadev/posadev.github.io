import React from "react";
import Adorno from "@/components/icons/Adorno.tsx";
import CardCharla from "@/components/agenda/CardCharla.tsx";
import {Card} from "@/components/ui/card.tsx";
import {formatTime} from "@/lib/utils.ts";

const Rooms = ({rooms, slotStart, hide, endsAt}) => {
    if (hide) return null;
  return (
      <>
          <Card className="flex items-center gap-4 p-2 bg-alternative-700 border-alternative-700">
              <Adorno className="h-8 w-8" />
              <time className="font-bold text-2xl text-white">{formatTime(slotStart)}</time>
              <span aria-label="a" className="font-bold text-2xl text-gray-500">-</span>
                <time className="font-bold text-2xl text-white">{endsAt}</time>
              <h2 className="font-bold text-2xl text-gray-700"></h2>
          </Card>
          <div className="flex flex-col md:flex-row gap-6 px-10 w-full">
              {rooms.map((room) => (
                  <CardCharla key={room.id} room={room}/>
              ))}
          </div>
      </>
  )
}
export default Rooms