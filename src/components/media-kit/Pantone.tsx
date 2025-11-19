import {Card, CardFooter} from "@/components/ui/card.tsx";
import React from "react";
import {handleCopy} from "@/lib/utils.ts";
import {useToast} from "@/hooks/use-toast.ts";
import {Copy} from "lucide-react";

interface PantoneProps {
    color: string;
     name: string;
     hex: string;
     rgb?: string;
     colorCopy?: string;
}

const Pantone: React.FC<PantoneProps> = ({ name, hex, color, colorCopy }) => {
    const {toast, dismiss} = useToast();

    const handleClick = (hex: string) => {
        return handleCopy(toast, dismiss, hex )
    }

    return (
        <Card role="button" onClick={() => handleClick(hex)} className="w-40 overflow-hidden rounded-xl shadow-md border border-gray-200">
            <div className={`relative h-40 ${color} border-b`}>
                <Copy className={`absolute top-2 right-2 ${colorCopy}`} size={16}/>
            </div>
            <div className="bg-white px-3 py-4 text-center h-20">
                <p className="text-sm font-bold uppercase tracking-wide">{name}</p>
                <p className="text-xs text-gray-500">{hex}</p>
            </div>
        </Card>
    );
};
export default Pantone
