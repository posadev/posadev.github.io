import React from "react";
import CardCharla from "@/components/agenda/CardCharla.tsx";
import {IRoomAgenda} from "@/types/agenda.ts";

interface RoomsProps {
    rooms: IRoomAgenda[]
}

const Rooms: React.FC<RoomsProps> = ({rooms}) => {
  return (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 px-4 w-full">
              {rooms.map((room) => {
                    return <CardCharla key={room.id} className="mt-6" room={room} session={room.session} />
              })}
          </div>
  )
}
export default Rooms