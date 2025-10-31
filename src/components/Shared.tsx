import {useToast} from "@/hooks/use-toast.ts";
import {Share2} from "lucide-react";
import React from "react";
import {ISpeaker} from "@/types/speakers.ts";

interface SharedProps {
    link: string,
    speaker: ISpeaker
    blob: Blob
}

const Shared: React.FC<SharedProps> = ({link, speaker, blob }) => {
    const {toast, dismiss} = useToast();
    const file = new File([blob], speaker.profilePicture, { type: "image/png" });

    const handleBrochureClick = async () => {
        if (navigator.share) {
            await navigator.share({
                title: `Speaker: ${speaker.fullName}`,
                text: "¡Mira este speaker de Posadev 2025!",
                url: link,
                files: [file]
            });
        } else {
            await navigator.clipboard.writeText(link);
            toast({
                title: `Link de speaker: ${speaker.fullName}`,
                description: "Copiado al portapapeles",
            });
            setTimeout(() => {
                dismiss()
            }, 2000)
        }
    };
    return (
        <Share2 role="link" onClick={handleBrochureClick} className="flex h-6 w-6 hover:text-primary-600">
            <title>Compartir</title>
        </Share2>
    )
}
export default Shared