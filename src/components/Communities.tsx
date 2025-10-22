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
             <StarIcon className="hidden md:block"/>
             <h2 className="text-4xl md:text-5xl font-bold text-center">Comunidades organizadoras</h2>
             <StarIcon className="hidden md:block"/>
         </div>
          <div className="w-60 mb-8 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 text-center pb-20 w-3/4">
              Quienes lo organizamos lo hacemos por amor al arte y porque creemos que el conocimiento debe compartirse 👩‍💻 🧑‍💻 y esto es el motor que nos mueve.
              <br/>
              Un evento creado por y para las comunidades 🎄🎅🏼
          </p>
          <Carousel items={organizers} renderItem={(community) => <Community community={community} />} autoplayInterval={3000} />
      </Gradient>
  )
}

export default Communities