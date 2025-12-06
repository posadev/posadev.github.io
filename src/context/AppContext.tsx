import { createContext, useContext, useState, useEffect } from "react";
import {IRoom, ISpeaker} from "@/types/speakers.ts";
import {getAll} from "@/https/fetch.ts";
import {AppStatus} from "@/types/types.ts";
import {addInformationToSession, addSessionSpeakers} from "@/lib/utils.ts";
import {ITimeSlot} from "@/types/agenda.ts";
import ErrorPage from "@/pages/ErrorPage.tsx";
import Loading from "@/pages/Loading.tsx";
import {ISessionInfo} from "@/types/sessions.ts";


interface AppContextType {
    speakers: ISpeaker[];
    sessions: ISessionInfo[];
    agenda: ITimeSlot[];
    appStatus: AppStatus;
    setAppStatus: (status: AppStatus) => void
    setAgenda: (agenda: ITimeSlot[]) => void;
    savedSessions: Set<number>;
    setSavedSessions: (sessions: Set<number>) => void;
    displayAll: boolean;
    setDisplayAll: (displayAll: boolean) => void;
    rooms: IRoom[];
}

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [speakers, setSpeakers] = useState<ISpeaker[]>([]);
    const [agenda, setAgenda] = useState<ITimeSlot[]>([]);
    const [appStatus, setAppStatus] = useState(AppStatus.Loading);
    const [displayAll, setDisplayAll] = useState<boolean>(true);
    const [sessions, setSessions] = useState<ISessionInfo[]>([]);
    const [rooms, setRooms] = useState<IRoom[]>([]);
    const [error, setError] = useState<Error>(null)
    const [savedSessions, setSavedSessions] = useState<Set<number>>(() => {
        const raw = localStorage.getItem("savedSessions");
        return raw ? new Set<number>(JSON.parse(raw)) : new Set<number>();
    });

    useEffect(() => {
        localStorage.setItem("savedSessions", JSON.stringify([...savedSessions]));
    }, [savedSessions]);

    useEffect(() => {
        getAll()
            .then(({categories, sessions, speakers, rooms}) => {
                const categoriesItems = categories[0].items
                const sessionsInfo = sessions.map(session => addInformationToSession(session, speakers, categoriesItems))
                const getSpeakersWithSessions = addSessionSpeakers(
                    sessionsInfo,
                    speakers
                );
                setRooms(rooms);
                setSpeakers(getSpeakersWithSessions);
                setSessions(sessionsInfo);
                setAppStatus(AppStatus.Success);
            })
            .catch(e => {
                setError(e);
                setAppStatus(AppStatus.Error);
            });
    }, []);

    const value = {
        sessions,
        displayAll,
        setDisplayAll,
        savedSessions,
        setSavedSessions,
        setAgenda,
        speakers,
        agenda,
        appStatus,
        setAppStatus,
        rooms
    };

    return (
        <AppContext.Provider value={value}>
            {appStatus === AppStatus.Loading && (
                <div className="flex items-center justify-center min-h-screen">
                    <Loading size={60} count={5} />
                </div>
            )}

            {appStatus === AppStatus.Error && <ErrorPage error={error} />}

            {appStatus === AppStatus.Success && children}
        </AppContext.Provider>
    );
};


export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("");
    }
    return context;
};