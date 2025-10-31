import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {ICategory, ISession, ISpeaker} from "@/types/speakers.ts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export const handleCopy = async (toast, dismiss) => {
  try {
    await navigator.clipboard.writeText("");
    toast();
  } finally {
    setTimeout(() => dismiss(), 3000);
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

export const findSpeaker = (speakers: ISpeaker[], id: string) => speakers.find((speaker) => speaker.id === id);