import {Card} from "@/components/ui/card.tsx";
import {useEffect} from "react";
import {scrollToTop} from "@/lib/utils.ts";
import {getAgenda} from "@/https/fetch.ts";
import {useAppContext} from "@/context/AppContext.tsx";
import AgendaHeader from "@/components/agenda/AgendaHeader.tsx";
import AgendaRow from "@/components/agenda/AgendaRow.tsx";
import {Badge} from "@/components/ui/badge.tsx";

const Agenda = () => {
    const {setAgenda, agenda} = useAppContext()

    useEffect(() => {
        scrollToTop()
        getAgenda().then((data) => {
            setAgenda(data[0].timeSlots)
        })
    }, []);

    if (agenda.length === 0) return (<></>)

  return (
      <section className="flex flex-col justify-center items-center gap-8 py-20 md:px-20">
          <AgendaHeader/>
          <Card className="w-full pb-8 md:px-6 relative">
              <nav className="flex gap-4 py-8 sticky bg-white w-full">
                  <Badge role="button">Display All</Badge>
                  <Badge role="button">Display Saved</Badge>
              </nav>
              {agenda.map(({slotStart, rooms}) => (
                  <AgendaRow key={slotStart} slotStart={slotStart} rooms={rooms}/>
              ))}
          </Card>
      </section>
  )
}
export default Agenda;