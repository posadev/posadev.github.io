import React from "react";
import {ISpeaker} from "@/types/speakers.ts";
import {Card} from "@/components/ui/card.tsx";
import SocialMedia from "@/components/SocialMedia.tsx";

interface SpeakerProps {
    speaker: ISpeaker;
}

const Speaker: React.FC<SpeakerProps> = ({speaker}) => {
    return (
        <article className="min-w-96 h-full mx-1 flex flex-col justify-center items-center">
                <img src={speaker.profilePicture} alt={speaker.fullName} className="h-64 w-64 rounded-3xl" loading="lazy"/>
                <Card className="bg-white/10 border-0 shadow-none p-6 text-white flex flex-col justify-start h-48 w-full">
                    <p className="text-3xl font-bold">{`${speaker.firstName.split(" ")[0]} ${speaker.lastName.split(" ")[0]}`}</p>
                    <p className="py-4 text-xl line-clamp-2 my-4 rounded">{speaker.tagLine}</p>
                    <div className="flex gap-6 text-alternative-100">
                        {speaker.links.map((link, index) => (
                            <SocialMedia key={`link-${link.url}`} link={link} />
                        ))}
                    </div>
                </Card>
        </article>
    )
}
export default Speaker