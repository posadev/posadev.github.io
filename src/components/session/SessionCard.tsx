import {Card, CardFooter} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Speech} from "lucide-react";
import React from "react";
import {ISessionInfo} from "@/types/sessions.ts";

interface SessionCardProps {
    session: ISessionInfo
    room?: string
}

const SessionCard: React.FC<SessionCardProps> = ({session, room}) => {
    const category = session.category
    const startTime = new Date(session.startsAt).toLocaleTimeString(["en-US"], {hour: '2-digit', minute:'2-digit'})
    const endTime = new Date(session.endsAt).toLocaleTimeString(["en-US"], {hour: '2-digit', minute:'2-digit'})
  return (
      <Card className="py-8 px-6 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-alternative-700">
              Charla
          </h2>
          <h3 className="text-2xl text-gray-700 font-semibold">
              {session.title}
          </h3>
          <aside className="flex flex-col gap-2" aria-label="Sala y hora" role="group">
              <h1 className="text-lg font-bold text-alternative-700">Sala: {room}</h1>
              { startTime && endTime &&
                  <h1 className="text-lg font-bold text-alternative-700"><time dateTime={startTime}>{startTime}</time> <span aria-label="a">-</span> <time dateTime={endTime}>{endTime}</time></h1>
              }
          </aside>
          <span className="text-lg text-primary-600 font-semibold">Descripción</span>
          <p className="text-lg text-gray-700">{session.description}</p>
          <CardFooter className="p-0">
              <Badge variant="default" className="flex gap-2"><Speech/> Track: {category}</Badge>
          </CardFooter>
      </Card>
  )
}

export default SessionCard