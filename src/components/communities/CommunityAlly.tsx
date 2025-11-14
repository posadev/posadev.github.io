import {ICommunity} from "@/types/types.ts";
import React from "react";
import SocialMedia from "@/components/SocialMedia.tsx";
import {Card} from "@/components/ui/card.tsx";

interface CommunityAllyProps {
    community: ICommunity;
}

const CommunityAlly: React.FC<CommunityAllyProps> = ({community}) => {
  return (
      <article className="h-60 lg:w-1/4 flex flex-col justify-center items-center gap-4">
    <div className="border-0 bg-transparent shadow-none h-52 w-[300px]">
              <a href={community.link} target="_blank">
                  <img
                      src={community.image}
                      alt={community.name}
                      className={`h-full w-full object-contain transition-transform duration-500 ease-in-out hover:scale-110 ${
                          community.name === "Playas on tech" ? "bg-secondary-600 rounded-lg px-6" : ""
                      }`}
                  />
              </a>
          </div>
          <div className="flex gap-4">
              {
                  community.socials.map((social) => (
                      <SocialMedia key={social.url} className="text-secondary-600 hover:text-secondary-500" link={social} />
                  ))
              }
          </div>
      </article>
  )
}

export default CommunityAlly