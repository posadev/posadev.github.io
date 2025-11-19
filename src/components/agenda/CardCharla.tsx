import React, { useEffect, useState } from "react";
import { IRoomAgenda } from "@/types/agenda.ts";
import { Link } from "react-router-dom";
import { useAppContext } from "@/context/AppContext.tsx";
import {ISession} from "@/types/speakers.ts";
import {Star} from "lucide-react";

interface CardEventProps {
    room: IRoomAgenda;
}

const CardEvent: React.FC<CardEventProps> = ({ room }) => {
    const { savedSessions, setSavedSessions, displayAll } = useAppContext();
    const session = room.session;
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (!displayAll && !savedSessions.has(session)) return;
        setIsSaved(savedSessions.has(session));
    }, []);

    const handleSaveSession = (session: ISession) => {
        if (savedSessions.has(session)) {
            savedSessions.delete(session);
            setIsSaved(false);
        } else {
            savedSessions.add(session);
            setIsSaved(true);
        }
        return setSavedSessions(savedSessions);
    };

    if (!displayAll && !savedSessions.has(session)) return null;
    return (
        <div className="flex flex-col gap-4 mt-6 w-full">
            <h3 className="font-bold text-2xl">Sala: {room.name}</h3>
            <WrappedCardEvent className={`${isSaved ? "bg-primary-700" : "bg-white"} relative flex flex-col gap-2 border-2 border-primary-600 rounded-lg w-full min-h-52 h-full shadow-sm shadow-gray-600 p-4`}
                session={session}
            >
                <h4 className={` text-2xl font-bold ${isSaved ? "text-white" : "text-alternative-600"}`}>
                    {session.title}
                </h4>
                <aside className="h-full" hidden={session.speakers.length == 0}>
                    {session.speakers.map((speaker) => (
                        <p key={speaker.id} className={`${isSaved ? "text-gray-300" : "text-gray-500"} font-bold  text-2xl`}>{speaker.name}</p>
                    ))}
                </aside>
                <p hidden={session.speakers.length > 0} className={`h-full ${isSaved ? "text-gray-300" : "text-gray-500"} font-bold  text-2xl`}>{session.description}</p>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSaveSession(session);
                    }}
                    className="self-end"
                >
                    <Star className={`h-8 w-8  ${isSaved ? " fill-white text-primary-700 hover:text-white hover:fill-primary-600" : "text-primary-600 hover:fill-primary-600"} transition-colors duration-300`} />
                </button>
            </WrappedCardEvent>
        </div>
    );
};

interface WrappedCardEventProps {
    session: ISession;
    children: React.ReactNode;
    className: string;
}

const WrappedCardEvent: React.FC<WrappedCardEventProps> = ({session, children, className}) => {
    if (session.speakers.length === 0) return (<div className={className}>{children}</div>)
    return <Link
        to={`/session/${session.id}`}
        className={className}
    >{children}
    </Link>
}

export default CardEvent;
