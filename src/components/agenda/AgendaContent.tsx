import { Card } from "../ui/card"
import {Badge} from "@/components/ui/badge.tsx";
import {useEffect} from "react";
import {getAgenda} from "@/https/fetch.ts";
import {useAppContext} from "@/context/AppContext.tsx";
import AgendaRow from "@/components/agenda/AgendaRow.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

const AgendaContent = () => {
    const {setAgenda, agenda, savedSessions} = useAppContext()
    const {setDisplayAll, displayAll} = useAppContext()

    useEffect(() => {
        getAgenda().then((data) => {
            setAgenda(data[0].timeSlots)
        })
    }, []);

    if (agenda.length === 0) return (<></>)

    if (!displayAll && savedSessions.size === 0) {
        return (<Card className="w-full pb-8 md:px-6 relative shadow-gray-500">
            <nav className="flex gap-4 pt-8 pb-2 sticky bg-white w-full h-20">
                <Badge variant={`${displayAll ? "default" : "ghost"}`} onClick={() => setDisplayAll(true)} role="button">Mostrar todos</Badge>
                <Badge variant={`${displayAll ? "ghost" : "default"}`} onClick={() => setDisplayAll(false)} role="button">Mostrar guardados</Badge>
            </nav>
            <h2 className="text-center text-alternative-700 text-2xl font-bold mt-6 sm:mt-2">Por favor guarda alguna sesion para verla aqui</h2>
        </Card>)
    }

  return (
      <Card className="w-full pb-8 md:px-6 relative shadow-gray-500">
          <nav className="flex gap-4 pt-8 pb-2 sticky top-[80px] z-10 bg-white w-full h-20">
              <Badge variant={`${displayAll ? "default" : "ghost"}`} onClick={() => setDisplayAll(true)} role="button">Mostrar todos</Badge>
              <Badge variant={`${displayAll ? "ghost" : "default"}`} onClick={() => setDisplayAll(false)} role="button">Mostrar guardados</Badge>
          </nav>
              {agenda.map(({slotStart, rooms}) => (
                  <AgendaRow key={slotStart} slotStart={slotStart} rooms={rooms}/>
              ))}
      </Card>
  )
}
export default AgendaContent