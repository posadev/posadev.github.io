import {IConferenceData, ISpeaker} from "@/types/speakers.ts";
import {IAgenda} from "@/types/agenda.ts";

export const getSpeakers = async () => {
    const response = await fetch('https://sessionize.com/api/v2/n25df8kw/view/Speakers');
    if (!response.ok) {
        throw new Error('Failed to fetch speakers');
    }
    const data: ISpeaker[] = await response.json();
    return data;
}

export const getAll = async (): Promise<IConferenceData> => {
    const response = await fetch('https://sessionize.com/api/v2/n25df8kw/view/All');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const blob = await response.blob();
    const text = await blob.text();
    const data = JSON.parse(text)
    return {...data}
}

export const getAgenda = async (): Promise<IAgenda[]> => {
    const response = await fetch('https://sessionize.com/api/v2/gzdm0cca/view/GridSmart');
    if (!response.ok) {
        throw new Error('Failed to fetch agenda');
    }
    return await response.json();
}