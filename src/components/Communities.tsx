import Community from "@/components/Community.tsx";
import {organizers} from "@/data/communites.ts";
import Carousel from "@/components/Carousel.tsx";
import Gradient from "@/components/Gradient.tsx";
import React from "react";
import StarIcon from "@/components/ui/starIcon.tsx";

const Communities = () => {
  return (
      <Gradient
          id="comunidades"
          className="w-full mx-auto px-10 pt-40 gap-6 flex flex-col justify-center items-center pb-16 md:pb-10"
      >
         <div className="flex items-center justify-center gap-1.5 lg:gap-8 pb-4">
             <h2 className="text-2xl md:text-5xl font-bold text-center">Comunidades aliadas</h2>
         </div>
          <div className="w-60 mb-8 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>

      </Gradient>
  )
}

export default Communities