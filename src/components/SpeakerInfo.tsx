import {ISpeaker} from "@/types/speakers.ts";
import {Card, CardFooter} from "@/components/ui/card.tsx";
import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import SocialMedia from "@/components/SocialMedia.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Share2, Speech} from "lucide-react";
import Gradient from "@/components/Gradient.tsx";

const SpeakerInfo = () => {
    const location = useLocation();
    const speaker = location.state?.speaker as ISpeaker;
    const {fullName, sessions, profilePicture, tagLine, bio, links} = speaker;

  return (
      <Gradient className="py-10 px-20" >
          <article className="flex flex-col gap-8">
              <Card className="flex gap-6 border-0 shadow-none text-primary-600">
                  <img src={profilePicture} alt={fullName} className="w-60 h-60 rounded-xl"/>
                  <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-alternative-700">{fullName}</h1>
                        <h2 className="text-xl">{tagLine}</h2>
                        <p className="text-gray-700">{bio}</p>
                      <div className="flex items-center justify-start gap-4 text-gray-700">
                          {links.map((link, index) => (
                              <SocialMedia key={`link-${link.url}`} className="h-6 w-6 hover:text-primary-600" link={link} />
                          ))}
                          <Share2 className="hidden h-6 w-6 hover:text-primary-600">
                              <title>Compartir</title>
                          </Share2>
                      </div>
                  </div>
              </Card>

              <Card className="py-8 px-6 flex flex-col gap-4">
                 <h2 className="text-3xl font-bold text-alternative-700">
                     Charla
                 </h2>
                  <h3 className="text-2xl text-gray-700 font-semibold">
                      {sessions.title}
                  </h3>
                  <span className="text-lg text-primary-600 font-semibold">Descripción</span>
                  <p className="text-lg text-gray-700">{sessions.description}</p>
                  <CardFooter className="p-0">
                      <Badge variant="default" className="flex gap-2"><Speech/> Track: {speaker.category}</Badge>
                  </CardFooter>
              </Card>
          </article>
      </Gradient>
  )
}
export default SpeakerInfo