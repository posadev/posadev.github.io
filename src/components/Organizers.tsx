import Gradient from "@/components/Gradient.tsx";
import StarIcon from "@/components/ui/starIcon.tsx";
import Carousel, {GridConfig} from "@/components/Carousel.tsx";
import {organizers} from "@/data/organizers.ts";
import Community from "@/components/Community.tsx";
import React from "react";
import {ICommunity} from "@/types/types.ts";

const Organizers = () => {
    const grid: GridConfig = {cols: 1, rows: 1, itemsPerSlide: 1};

  return (
      <Gradient
          id="organizadores"
          className="w-full mx-auto px-10 pt-40 gap-6 flex flex-col justify-center items-center pb-16 md:pb-10"
      >
          <div className="flex items-center justify-center gap-1.5 lg:gap-8 pb-4">
              <StarIcon className="hidden md:block"/>
              <h2 className="text-3xl md:text-5xl font-bold text-center">Comunidades organizadoras</h2>
              <StarIcon className="hidden md:block"/>
          </div>
          <div className="w-28 md:w-60 mb-8 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 text-center pb-20 w-3/4">
              Quienes lo organizamos lo hacemos por amor al arte y porque creemos que el conocimiento debe compartirse 👩‍💻 🧑‍💻 y esto es el motor que nos mueve.
              <br/>
              Un evento creado por y para las comunidades 🎄🎅🏼
          </p>
          <Carousel className="carousel__cell" gridLg={grid} gridMd={grid} gridSm={grid} items={organizers} renderItem={(community: ICommunity) => <Community community={community} key={community.name} />} autoplayInterval={3000} />
      </Gradient>
  )
}
export default Organizers