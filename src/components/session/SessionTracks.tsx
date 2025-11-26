import React from "react";
import {Card} from "@/components/ui/card.tsx";
import CardCharla from "@/components/agenda/CardCharla.tsx";
import {Speech} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";
import {formatTiemstamp} from "@/lib/utils.ts";
import {ISessionInfo} from "@/types/sessions.ts";

interface SessionTracksProps {
    currentSession?: ISessionInfo
    sessions: ISessionInfo[]
    category: string
}

const SessionTracks: React.FC<SessionTracksProps> = ({sessions, category, currentSession}) => {
    const tracks = sessions.filter(session => session.category === category && session.id !== currentSession.id);
    return (
      <Card className="py-8 px-6 flex flex-col gap-8">
          <Badge variant="alternative" className="flex gap-2"><Speech/> Charlas de {category}</Badge>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full h-full">
          {
              tracks.map(session => (
                    <article className="flex flex-col gap-y-2 h-full" key={`track-${session.id}`}>
                        <h3 className="text-xl font-bold text-alternative-700 px-2 flex gap-2">
                            <time>{formatTiemstamp(session.startsAt)}</time>
                            <span aria-label="a">-</span>
                            <time>{formatTiemstamp(session.endsAt)}</time>
                        </h3>
                        <CardCharla className="m-0 min-h-[318px]" session={session} room={null} />
                    </article>
              ))
          }
          </div>
      </Card>
  )
}

export default SessionTracks