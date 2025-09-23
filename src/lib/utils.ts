import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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