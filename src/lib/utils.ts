import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {ICategory, ISpeaker, ISpeakerData, ISpeakerId} from "@/types/speakers.ts";
import {ISessionData, ISessionInfo} from "@/types/sessions.ts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export const handleCopy = async (toast, dismiss, text: string) => {
    let toastId;
    try {
    await navigator.clipboard.writeText(text);
    toastId = toast({
        title: `Copiado al portapapeles: ${text}`
    }).id;
  } finally {
    setTimeout(() => dismiss(toastId), 3000);
  }
};

export const addSessionSpeakers = (sessions: ISessionInfo[], speakers: ISpeakerData[]): ISpeaker[] => {
    return speakers.map((speaker) => {
    const sessionsSpeaker = sessions.filter((session) => {
        return speaker.sessions.includes(Number(session.id))
    })
    return {
        ...speaker,
        sessions: sessionsSpeaker,
    };
  });
}


export const getCategoryNameSession = (categories: ICategory[], session: ISessionData): string => {
    const category = categories.find(category => session.categoryItems.includes(category.id));
    return category ? category.name : ""
}

export const getSpeakersById = (speakers: ISpeakerData[], speakerIds: string[]): ISpeakerId[] => {
    return speakers.filter(speaker => speakerIds.includes(speaker.id)).map(speaker => {
        return {
            id: speaker.id,
            name: speaker.fullName,
        }
    });
}

export const addInformationToSession = (session: ISessionData, speakers: ISpeakerData[], categories: ICategory[]): ISessionInfo => {
    const sessionSpeakers = getSpeakersById(speakers, session.speakers)
    return {
        ...session,
        speakers: sessionSpeakers,
        category: getCategoryNameSession(categories, session)
    }
}

export const formatTiemstamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString(["en-US"], {hour: '2-digit', minute:'2-digit'})
}

export const findSpeaker = (speakers: ISpeaker[], id: string) => speakers.find((speaker) => speaker.id === id);

export const formatTime =(timeString: string) => {
  const [h, m, s] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(h, m, s);

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return formatter.format(date);
}
