import {useEffect, useState} from "react";
import {scrollToTop} from "@/lib/utils.ts";
import AgendaHeader from "@/components/agenda/AgendaHeader.tsx";
import AgendaContent from "@/components/agenda/AgendaContent.tsx";
import {useLocation} from "react-router-dom";

const Agenda = () => {
    const location = useLocation();
    const sessionId = location.state?.sessionId;

    useEffect(() => {
        scrollToTop()
    }, []);

    useEffect(() => {
        if (sessionId) {
            const element = document.getElementById(`session-${sessionId}`);
            if (element) {
                setTimeout(() => {
                    const headerOffset = 120; // ajusta según el alto de tu navbar
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    }, [sessionId]);

  return (
      <section className="flex flex-col justify-center items-center gap-8 py-20 md:px-20">
          <AgendaHeader/>
          <AgendaContent/>
      </section>
  )
}
export default Agenda;