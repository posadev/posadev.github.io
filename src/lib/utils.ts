import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {ICategory, ISession, ISessionInfo, ISpeaker} from "@/types/speakers.ts";

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

export const addSessionSpeakers = (sessions: ISession[], speakers: ISpeaker[], categories: ICategory[]): ISpeaker[] => {
  return speakers.map((speaker) => {
    const session = sessions.find((session) => session.speakers.includes(speaker.id));
    const category = categories.find((category) => session.categoryItems.includes(category.id))
    return {
    ...speaker,
      sessions: session,
      category: category.name
    };
  });
}

export const getCategoryNameSessions = (categories: ICategory[], sessions: ISession[]): ISessionInfo[] => {
    return sessions.map(session => {
        const category = categories.find(category => session.categoryItems.includes(category.id));
        return {
            ...session,
            category: category ? category.name : ""
        }
    })
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
