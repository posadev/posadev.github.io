import React, { useEffect, useState } from "react";
import { IRoomAgenda } from "@/types/agenda.ts";
import { useAppContext } from "@/context/AppContext.tsx";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {ISession} from "@/types/sessions.ts";

interface CardEventProps {
    room?: IRoomAgenda;
    session: ISession;
    className?: string;
}

const CardEvent: React.FC<CardEventProps> = ({ room, session, className }) => {
    const { savedSessions, setSavedSessions, displayAll } = useAppContext();
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (!displayAll && !savedSessions.has(session.id)) return;
        setIsSaved(savedSessions.has(session.id));
    }, []);

    const handleSaveSession = (session: ISession) => {
        // @ts-ignore
        setSavedSessions((prev: Set<number>) => {
            const newSet: Set<number> = new Set(prev);
            if (newSet.has(session.id)) {
                newSet.delete(session.id);
                setIsSaved(false);
                if (navigator.vibrate) navigator.vibrate(25);
            } else {
                newSet.add(session.id);
                setIsSaved(true);
            }
            return newSet;
        });
    };

    if (!displayAll && !savedSessions.has(session.id)) return null;
    return (
        <div id={`session-${session.id}`} className={`flex flex-col gap-4 ${className}`}>
            { room && <h3 className={`font-bold text-2xl`}>Sala: {room.name}</h3>}
            <article className={`relative
            bg-white shadow-sm shadow-gray-600 border-2 border-primary-600
    flex flex-col gap-2 rounded-lg min-h-52 h-full p-4
    transition-all duration-300
  `}
            >
                <aside className={`flex w-full items-center`}>
                    {isSaved && (
                        <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow w-20 text-center justify-self-start">Guardado</span>
                    )}
                    <div className="flex-1" />
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            handleSaveSession(session);
                        }}
                        className={`bg-white justify-self-end group flex justify-center items-center gap-2 border border-primary-500 font-bold px-2 py-1 rounded-lg transition-colors duration-300`}
                    >
                        <Star className={`h-4 w-4 text-primary-500 ${isSaved ? "fill-primary-500" : "fill-white md:group-hover:fill-primary-500"}`}/>
                    </button>
                </aside>

                <h4 className={` text-2xl font-bold text-alternative-600 ${isSaved ? "" : ""}`}>
                    {session.title}
                </h4>
                <div className="h-full" hidden={session.speakers.length == 0}>
                    {session.speakers.map((speaker) => (
                        <p key={speaker.id} className={`${isSaved ? "text-gray-600" : "text-gray-500"} font-bold  text-2xl`}>{speaker.name}</p>
                    ))}
                </div>
                <p hidden={session.speakers.length > 0} className={`h-full ${isSaved ? "text-gray-600" : "text-gray-500"} font-bold  text-2xl`}>{session.description}</p>
                { session.speakers.length > 0 && (
                    <Button variant="ghost" role="link" aria-label="Ir a ver mas detalles de la charla" onClick={() => {
                        navigate(`/session/${session.id}`);
                    }}>
                        Ver detalles
                    </Button>
                )}
            </article>
        </div>
    );
};



export default CardEvent;
