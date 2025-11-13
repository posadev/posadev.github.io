import React, { useEffect, useState } from "react";
import { IRoomAgenda, ISession } from "@/types/agenda.ts";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge.tsx";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useAppContext } from "@/context/AppContext.tsx";

interface CardEventProps {
    room: IRoomAgenda;
}

const CardEvent: React.FC<CardEventProps> = ({ room }) => {
    const { savedSessions, setSavedSessions } = useAppContext();
    const session = room.session;
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        setIsSaved(savedSessions.has(session));
    }, [savedSessions, session]);

    const handleSaveSession = (session: ISession) => {
        setSavedSessions((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(session)) {
                newSet.delete(session);
            } else {
                newSet.add(session);
            }
            return newSet;
        });
    };

    return (
        <div className="flex flex-col gap-4 mt-6 w-full">
            <h3 className="font-bold text-2xl">Sala: {room.name}</h3>
            <Link
                to={""}
                className="relative flex flex-col gap-2 border-2 border-primary-600 rounded-lg w-full min-h-52 h-full shadow-sm shadow-gray-600 p-4"
            >
                {/* Botón Bookmark */}
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault(); // evita que el Link se dispare
                        handleSaveSession(session);
                    }}
                    className="absolute -top-1 right-2"
                >
                    <Bookmark className={`h-8 w-8 text-primary-600 ${isSaved ? "fill-primary-600" : ""}`} />
                </button>

                <h4 className="text-alternative-600 text-2xl font-bold">
                    {session.title}
                </h4>
                {session.speakers.map((speaker) => (
                    <p key={speaker.id} className="font-bold text-gray-500 text-2xl">{speaker.name}</p>
                ))}
                <p className="text-gray-500 text-2xl ">{session.description}</p>
            </Link>
        </div>
    );
};

export default CardEvent;
