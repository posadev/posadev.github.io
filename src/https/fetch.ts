import {IConferenceData, ISpeaker, ISpeakerId} from "@/types/speakers.ts";
import {IAgenda} from "@/types/agenda.ts";
import {ISessionInfo} from "@/types/sessions.ts";

interface IGridSmartSession {
    id: string
    title: string
    description: string
    startsAt: string
    endsAt: string
    isServiceSession: boolean
    isPlenumSession: boolean
    speakers: ISpeakerId[]
    roomId: number
}

// Sessionize still lists lunch at its draft time; the organizers confirmed the real slot is 1:30–3:00 PM.
const SERVICE_SESSION_TIME_OVERRIDES: Record<string, { startsAt: string; endsAt: string }> = {
    Comida: { startsAt: '2026-11-28T13:30:00', endsAt: '2026-11-28T15:00:00' },
};

interface IGridSmartDay {
    date: string
    rooms: { id: number; name: string; sessions: IGridSmartSession[] }[]
}

export const getSpeakers = async () => {
    const response = await fetch('https://sessionize.com/api/v2/cp1qzve8/view/Speakers');
    if (!response.ok) {
        throw new Error('Failed to fetch speakers');
    }
    const data: ISpeaker[] = await response.json();
    return data;
}

export const getAll = async (): Promise<IConferenceData> => {
    const response = await fetch('https://sessionize.com/api/v2/cp1qzve8/view/All');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const blob = await response.blob();
    const text = await blob.text();
    const data = JSON.parse(text)
    return {...data}
}

export const getAgenda = async (): Promise<IAgenda[]> => {
    const response = await fetch('https://sessionize.com/api/v2/cp1qzve8/view/GridSmart');
    if (!response.ok) {
        throw new Error('Failed to fetch agenda');
    }
    return await response.json();
}

// The "All" view leaves out breaks/keynotes (isServiceSession), so they're pulled
// separately from GridSmart, which is the only view that includes them.
export const getServiceSessions = async (): Promise<ISessionInfo[]> => {
    const response = await fetch('https://sessionize.com/api/v2/cp1qzve8/view/GridSmart');
    if (!response.ok) {
        throw new Error('Failed to fetch service sessions');
    }
    const days: IGridSmartDay[] = await response.json();
    const sessions: ISessionInfo[] = [];
    days.forEach((day) => {
        day.rooms.forEach((room) => {
            room.sessions
                .filter((session) => session.isServiceSession)
                .forEach((session) => {
                    const override = SERVICE_SESSION_TIME_OVERRIDES[session.title];
                    sessions.push({
                        id: Number(session.id),
                        title: session.title,
                        description: session.description,
                        startsAt: override?.startsAt ?? session.startsAt,
                        endsAt: override?.endsAt ?? session.endsAt,
                        speakers: session.speakers,
                        categoryItems: [],
                        roomId: String(session.roomId),
                        category: session.isPlenumSession ? 'Plenaria' : 'Servicio',
                    });
                });
        });
    });
    return sessions;
}