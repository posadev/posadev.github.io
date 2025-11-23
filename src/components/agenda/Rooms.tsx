import React from "react";
import CardCharla from "@/components/agenda/CardCharla.tsx";

const Rooms = ({rooms}) => {
  return (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 px-4 w-full">
              {rooms.map((room) => {
                    return <CardCharla key={room.id} room={room} />
              })}
          </div>
  )
}
export default Rooms