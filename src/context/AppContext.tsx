import { createContext, useContext, useState, useEffect } from "react";
import {ISession, ISpeaker} from "@/types/speakers.ts";
import {getAll} from "@/https/fetch.ts";
import {AppStatus} from "@/types/types.ts";
import Loading from "@/components/Loading.tsx";
import {addSessionSpeakers} from "@/lib/utils.ts";


interface AppContextType {
    speakers: ISpeaker[];
    sessions: ISession[];
    agenda: any[]; // o tipa tu modelo de agenda si lo tienes
    appStatus: AppStatus;
}

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [speakers, setSpeakers] = useState<ISpeaker[]>([]);
    const [agenda, setAgenda] = useState([]);
    const [appStatus, setAppStatus] = useState(AppStatus.Loading);

    useEffect(() => {
        getAll().then((data) => {
            const getSpeakersWithSessions = addSessionSpeakers(data.sessions, data.speakers, data.categories[0].items);
            setSpeakers(getSpeakersWithSessions);
        });
        setAppStatus(AppStatus.Success)
    }, []);

    const value = {
        speakers,
        agenda,
        appStatus
    };

    if (appStatus === AppStatus.Loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loading size={60} gap={4} count={5} />
            </div>
        );
    }

    if (appStatus === AppStatus.Error) {
        return (
            <div className="flex items-center justify-center min-h-screen text-red-500">
                Error al cargar los datos iniciales 😞
            </div>
        );
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("");
    }
    return context;
};