import {useEffect, useState} from "react";
import {scrollToTop} from "@/lib/utils.ts";
import AgendaHeader from "@/components/agenda/AgendaHeader.tsx";
import AgendaContent from "@/components/agenda/AgendaContent.tsx";

const Agenda = () => {
    useEffect(() => {
        scrollToTop()
    }, []);

  return (
      <section className="flex flex-col justify-center items-center gap-8 py-20 md:px-20">
          <AgendaHeader/>
          <AgendaContent/>
      </section>
  )
}
export default Agenda;