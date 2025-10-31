import {ISpeaker} from "@/types/speakers.ts";
import {Card, CardFooter} from "@/components/ui/card.tsx";
import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import SocialMedia from "@/components/SocialMedia.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import { Speech} from "lucide-react";
import Gradient from "@/components/Gradient.tsx";
import {useAppContext} from "@/context/AppContext.tsx";
import {findSpeaker, scrollToTop} from "@/lib/utils.ts";
import Shared from "@/components/Shared.tsx";
import Loading from "@/components/Loading.tsx";

const SpeakerInfo = () => {
    const location = useLocation();
    const { speakerId } = useParams();
    const { speakers } = useAppContext();
    const speaker = location.state?.speaker as ISpeaker;
    const [currentSpeaker, setCurrentSpeaker] = useState<ISpeaker>()
    const fullUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

    useEffect(() => {
        scrollToTop()
    }, []);

    useEffect(() => {
        if (speaker == undefined) {
            setCurrentSpeaker(findSpeaker(speakers, speakerId))
        } else {
            setCurrentSpeaker(speaker);
        }
    }, [speaker, speakers]);

    if (!currentSpeaker) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loading size={60} gap={4} count={5} />
            </div>
        );
    }

  return (
      <Gradient className="py-10 px-4 md:px-20" >
          <article className="flex flex-col gap-8 w-full">
              <Card className="flex flex-col justify-center items-center md:justify-start md:flex-row gap-6 border-0 shadow-none text-primary-600">
                  <img src={currentSpeaker.profilePicture} alt={currentSpeaker.fullName} className="w-60 h-60 rounded-xl"/>
                  <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-alternative-700">{currentSpeaker.fullName}</h1>
                        <h2 className="text-xl">{currentSpeaker.tagLine}</h2>
                        <p className="text-gray-700">{currentSpeaker.bio}</p>
                      <div className="flex items-center justify-start gap-4 text-gray-700">
                          {currentSpeaker.links.map((link) => (
                              <SocialMedia key={`link-${link.url}`} className="h-6 w-6 hover:text-primary-600" link={link} />
                          ))}
                          <Shared link={fullUrl} speakerName={currentSpeaker.fullName} />
                      </div>
                  </div>
              </Card>

              <Card className="py-8 px-6 flex flex-col gap-4">
                 <h2 className="text-3xl font-bold text-alternative-700">
                     Charla
                 </h2>
                  <h3 className="text-2xl text-gray-700 font-semibold">
                      {currentSpeaker.sessions.title}
                  </h3>
                  <span className="text-lg text-primary-600 font-semibold">Descripción</span>
                  <p className="text-lg text-gray-700">{currentSpeaker.sessions.description}</p>
                  <CardFooter className="p-0">
                      <Badge variant="default" className="flex gap-2"><Speech/> Track: {currentSpeaker.category}</Badge>
                  </CardFooter>
              </Card>
          </article>
      </Gradient>
  )
}
export default SpeakerInfo