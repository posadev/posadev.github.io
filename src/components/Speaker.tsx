import React from "react";
import {ISpeaker} from "@/types/speakers.ts";
import {Card} from "@/components/ui/card.tsx";
import SocialMedia from "@/components/SocialMedia.tsx";
import {useNavigate} from "react-router-dom";

interface SpeakerProps {
    speaker: ISpeaker;
}

const Speaker: React.FC<SpeakerProps> = ({speaker}) => {
    const navigate = useNavigate();

    const handleClick = (speaker: ISpeaker) => {
        navigate(`/speaker/${speaker.id}`, {state: {speaker}});
    }

    return (
        <article className="min-w-96 h-full mx-1 flex flex-col justify-center items-center">
                <img src={speaker.profilePicture} alt={speaker.fullName} className="h-60 w-60 rounded-3xl" loading="lazy"/>
                <Card className="bg-white/10 border-0 shadow-none text-white flex flex-col justify-start h-44 p-6  w-full">
                    <p className="text-2xl font-bold">{`${speaker.firstName.split(" ")[0]} ${speaker.lastName.split(" ")[0]}`}</p>
                    <p className="py-2 text-xl line-clamp-2 my-4 rounded">{speaker.tagLine}</p>
                    <div className="flex items-center justify-start gap-6 text-alternative-100">
                        {speaker.links.map((link, index) => (
                            <SocialMedia key={`link-${link.url}`} link={link} />
                        ))}
                        <button onClick={() => handleClick(speaker)} role="link" className="flex hover:text-alternative-400 rounded-lg">
                            Ver más
                        </button>
                    </div>
                </Card>
        </article>
    )
}
export default Speaker