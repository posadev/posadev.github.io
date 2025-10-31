import {fetchResponse, ISpeaker} from "@/types/speakers.ts";

export const getSpeakers = async () => {
    const response = await fetch('https://sessionize.com/api/v2/n25df8kw/view/Speakers');
    if (!response.ok) {
        throw new Error('Failed to fetch speakers');
    }
    const data: ISpeaker[] = await response.json();
    return data;
}

export const getAll = async (): Promise<fetchResponse> => {
    const response = await fetch('https://sessionize.com/api/v2/n25df8kw/view/All');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const blob = await response.blob();
    const text = await blob.text();
    const data = JSON.parse(text)
    return {...data, blob: blob}
}