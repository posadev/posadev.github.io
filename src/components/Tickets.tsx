import React from "react";
import {Ticket} from "lucide-react";
import DuckIcon from "@/components/ui/duckIcon.tsx";

const Tickets = () => {
  return (
      <section className="flex flex-col items-center gap-8 text-white">
          <a role="button"
             href="https://boletos.posadev.org/event/5/posadev"
             target="_blank"
             rel="noopener noreferrer"
             className={`self-center flex items-center justify-center flex-row-reverse gap-x-4
              text-primary-500 bg-white hover:bg-primary-100 duration-300 rounded-full
              h-20 lg:max-w-md w-full
              text-3xl lg:text-4xl font-semibold
              px-8 py-2
             `}
             itemProp="url"
          >
              Comprar boleto
              <Ticket
                  className="w-10 h-10"
                  aria-hidden="true"
              />
          </a>
          <h3 className="text-2xl md:text-3xl font-semibold ">Qué incluye tu boleto (General) Posadev 2025</h3>
          <ul className="flex flex-col items-start animate-fade-in text-base md:text-xl text-left gap-1.5">
              <li className="flex items-center justify-start gap-2 ">
                  <DuckIcon className="h-4 w-4"/>
                  Acceso a todas las charlas y actividades ✨
              </li>
              <li className="flex items-center gap-2">
                  <DuckIcon className="h-4 w-4" />
                  Playera edición especial 👕
              </li>
              <li className="flex items-center justify-start gap-2">
                  <DuckIcon className="h-4 w-4" />
                  Coffee break durante toda la jornada ☕
              </li>
              <li className="flex items-center gap-2">
                  <DuckIcon className="h-4 w-4" />
                  Comida y bebidas 🍽️🥤
              </li>
              <li className="flex items-center gap-2">
                  <DuckIcon className="h-4 w-4" />
                  El ya tradicional networking de cierre 🎉
              </li>
          </ul>
      </section>
  )
}
export default Tickets