import Gradient from "@/components/Gradient.tsx";
import Adorno from "@/components/icons/Adorno.tsx";
import React from "react";
import {communitiesAllies} from "@/data/communites.ts";
import CommunityAlly from "@/components/communities/CommunityAlly.tsx";

const CommunitiesAllies = () => {
  return (
      <Gradient id="comunidades" className="flex flex-col justify-center items-center gap-2 py-20" aria-labelledby="comunidades-title">
          <h2 id="comunidades-title" className="text-3xl md:text-5xl text-center font-bold flex gap-4 mb-4">
              <Adorno className="hidden md:block"/>
              Comunidades aliadas
              <Adorno className="hidden md:block"/>
          </h2>
          <span className="w-28 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto my-8 rounded-full "/>
          <div className="flex flex-col flex-wrap md:flex-row justify-center gap-10 w-full">
              {
                  communitiesAllies.map((community) => (
                      <CommunityAlly key={community.name} community={community} />
                  ))
              }
          </div>
      </Gradient>
  )
}

export default CommunitiesAllies