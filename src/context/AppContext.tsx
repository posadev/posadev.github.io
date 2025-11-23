import { createContext, useContext, useState, useEffect } from "react";
import {ISession, ISpeaker} from "@/types/speakers.ts";
import {getAll} from "@/https/fetch.ts";
import {AppStatus} from "@/types/types.ts";
import {addSessionSpeakers} from "@/lib/utils.ts";
import {ITimeSlot} from "@/types/agenda.ts";
import ErrorPage from "@/pages/ErrorPage.tsx";
import Loading from "@/pages/Loading.tsx";


interface AppContextType {
    speakers: ISpeaker[];
    sessions: ISession[];
    agenda: ITimeSlot[];
    appStatus: AppStatus;
    setAgenda: (agenda: ITimeSlot[]) => void;
    savedSessions: Set<number>;
    setSavedSessions: (sessions: Set<number>) => void;
    displayAll: boolean;
    setDisplayAll: (displayAll: boolean) => void;
}

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [speakers, setSpeakers] = useState<ISpeaker[]>([]);
    const [agenda, setAgenda] = useState<ITimeSlot[]>([]);
    const [appStatus, setAppStatus] = useState(AppStatus.Loading);
    const [displayAll, setDisplayAll] = useState<boolean>(true);
    const [sessions, setSessions] = useState<ISession[]>([]);
    const [savedSessions, setSavedSessions] = useState<Set<number>>(() => {
        const raw = localStorage.getItem("savedSessions");
        return raw ? new Set<number>(JSON.parse(raw)) : new Set<number>();
    });

    useEffect(() => {
        localStorage.setItem("savedSessions", JSON.stringify([...savedSessions]));
    }, [savedSessions]);

    useEffect(() => {
        getAll()
            .then((data) => {
                const getSpeakersWithSessions = addSessionSpeakers(
                    data.sessions,
                    data.speakers,
                    data.categories[0].items
                );
                setSpeakers(getSpeakersWithSessions);
                setSessions(data.sessions);
                setAppStatus(AppStatus.Success);
            })
            .catch(() => {
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
    };

    return (
        <AppContext.Provider value={value}>
            {appStatus === AppStatus.Loading && (
                <div className="flex items-center justify-center min-h-screen">
                    <Loading size={60} count={5} />
                </div>
            )}

            {appStatus === AppStatus.Error && <ErrorPage />}

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