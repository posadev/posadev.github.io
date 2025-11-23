import React from "react";
import CardCharla from "@/components/agenda/CardCharla.tsx";

const Rooms = ({rooms, slotStart, hide, endsAt}) => {
    if (hide) return null;
  return (
      <>
          <div className="flex flex-col flex-wrap flex-grow  md:flex-row gap-6 px-10 w-full">
              {rooms.map((room) => {
                    return <CardCharla key={room.id} room={room} />
              })}
          </div>
      </>
  )
}
export default Rooms