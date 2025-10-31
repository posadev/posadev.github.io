import {useToast} from "@/hooks/use-toast.ts";
import {Share2} from "lucide-react";
import React from "react";

interface SharedProps {
    link: string,
    speakerName: string
}

const Shared: React.FC<SharedProps> = ({link, speakerName}) => {
    const {toast, dismiss} = useToast();
    const handleBrochureClick = async () => {
        if (navigator.share) {
            await navigator.share({
                title: `Speaker: ${speakerName}`,
                text: "¡Mira este speaker de Posadev 2025!",
                url: link,
            });
        } else {
            await navigator.clipboard.writeText(link);
            toast({
                title: `Link de speaker: ${speakerName}`,
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