import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleDownload = async () => {
  try {
    const response = await fetch("/posadev_brochure2025.pdf");
    if (!response.ok) {
      throw new Error("Error al descargar el archivo");
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "posadev_brochure2025.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (error) {
    await Promise.reject(error);
  }
};