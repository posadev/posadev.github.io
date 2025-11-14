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
        <article className="h-full w-full mx-1 flex flex-col justify-center items-center">
                <img src={speaker.profilePicture} alt={speaker.fullName} className="h-60 w-60 rounded-3xl" loading="lazy"/>
                <Card className="bg-white/10 border-0 shadow-none text-white flex flex-col justify-start gap-4 h-52 p-6 w-[400px]">
                    <p className="text-2xl font-bold">{`${speaker.firstName.split(" ")[0]} ${speaker.lastName.split(" ")[0]}`}</p>
                    <p className="my-2 text-xl break-words line-clamp-2 overflow-hidden flex-shrink-0 rounded">{speaker.tagLine}</p>
                    <div className="flex h-full justify-self-end items-end justify-start gap-6 md:gap-2 lg:gap-4 text-alternative-100">
                        {speaker.links.map((link, index) => (
                            <SocialMedia key={`link-${link.url}`} link={link} />
                        ))}
                        <span onClick={() => handleClick(speaker)} role="link" className="flex hover:text-alternative-400 rounded-lg">
                            Ver más
                        </span>
                    </div>
                </Card>
        </article>
    )
}
export default Speaker