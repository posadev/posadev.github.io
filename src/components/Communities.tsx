import Community from "@/components/Community.tsx";
import {organizers} from "@/data/communites.ts";
import Carousel from "@/components/Carousel.tsx";
import Gradient from "@/components/Gradient.tsx";

const Communities = () => {
  return (
      <Gradient
          id="comunidades"
          className="w-full mx-auto px-10 pt-40 gap-8 flex flex-col justify-center items-center pb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center pb-4">Comunidades organizadoras</h2>
          <p className="text-xl text-gray-600 text-center pb-8 w-3/4">
              Quienes lo organizamos lo hacemos por amor al arte y porque creemos que el conocimiento debe compartirse 👩‍💻 🧑‍💻 y esto es el motor que nos mueve.
              Un evento creado por y para las comunidades 🎄🎅🏼
          </p>
        <Carousel items={organizers} renderItem={(community) => <Community community={community} />} autoplayInterval={3000} />
      </Gradient>
  )
}

export default Communities