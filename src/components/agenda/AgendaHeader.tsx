import {Card} from "@/components/ui/card.tsx";
import AgendaItem from "@/components/agenda/AgendaItem.tsx";
import {Beer, CandyCane, Megaphone, Coffee, HandPlatter, IdCardLanyard} from "lucide-react";
import Markup from "@/components/ui/Markup.tsx";

const AgendaHeader = () => {
  return (
      <>
          <header className="flex justify-center flex-col gap-4 items-center w-full">
              <h1 className="text-alternative-700 text-3xl md:text-5xl font-bold">Agenda</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-posadev-darkPink to-posadev-brightPink mx-auto rounded-full"/>
          </header>
          <aside className="flex flex-col gap-4 w-full md:w-1/2">
              <Card className="p-4 flex flex-col gap-4 border-none bg-transparent shadow-none">
                  <p className="text-primary-800 font-bold">En este evento te invitamos a:</p>
                  <ul className="w-full list-none grid gap-x-6 gap-y-2 grid-cols-2">
                      <Markup id="li-charlas" text="Asistir a las charlas" />
                      <Markup id="li-empresas" text="Conocer a las empresas" />
                      <Markup id="li-actividades" text="Participar en las actividades" />
                      <Markup id="li-rifas" text="Participar en las rifas" />
                      <Markup id="li-feedback" text="Déjarnos feedback" />
                      <Markup id="li-networking" text="Hacer networking" />
                      <Markup id="li-comunidad" text="Visitar la sala comunidad (con actividades y small talks)" />
                      <Markup id="li-conducta" text="Respetar el código de conducta" />
                      <Markup id="li-fotos" text="Subir fotos a las redes y tagearnos" />
                      <Markup id="li-diversion" text="Pásartela increible !!!" />
                  </ul>
              </Card>
              <div className="flex flex-row gap-10 justify-center items-start md:items-start text-primary-500 mt-[72px]">
                  <AgendaItem time={'10:00 AM'} title={'Registro'} icon={IdCardLanyard } />
                  <AgendaItem time={'9:30am - 11:00am'} title={'Coffee break'} icon={Coffee} />
                  <AgendaItem time={'11:00 AM - 2:00 PM y 3:00 PM - 7:00 PM'} title={'Charlas'} icon={Megaphone} />
                  <AgendaItem time={'2:00 PM - 3:00 PM'} title={'Comida'} icon={HandPlatter} />
                  <AgendaItem time={'3:00 PM - 5:00 PM'} title={'Networking'} icon={CandyCane} />
                  <AgendaItem time={'7:00 PM - 9:00 PM'} title={'Clausura'} icon={Beer} />
              </div>
          </aside>
      </>
  )
}
export default AgendaHeader