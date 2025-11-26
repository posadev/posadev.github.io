import SessionCard from "@/components/session/SessionCard.tsx";
import {useAppContext} from "@/context/AppContext.tsx";
import {useNavigate, useParams} from "react-router-dom";
import Gradient from "@/components/Gradient.tsx";
import {ChevronLeft} from "lucide-react";
import React, {useEffect} from "react";
import { scrollToTop} from "@/lib/utils.ts";
import SessionTracks from "@/components/session/SessionTracks.tsx";

const SessionPage = () => {
    const navigate = useNavigate()
    const {sessions} = useAppContext()
    const { sessionId } = useParams();
    const session = sessions.find(session => session.id == Number(sessionId))

    const handleGoBack = () => {
        if (window.history.length > 1){
            navigate(-1)
        } else {
            navigate("/agenda", {
                state: {
                    sessionId: session.id
                }
            })
        }
    }

    useEffect(() => {
        scrollToTop()
    }, [sessionId]);

  return (
      <Gradient className="py-10 px-4 md:px-20 flex flex-col gap-6 min-h-[60vh]" >
          <button role="link"
              onClick={() => handleGoBack()}
              className="flex items-center gap-0.5 font-bold text-primary-600"
          >
              <ChevronLeft className="h-8 w-8" strokeWidth={2} />
              <span
                  className="
                  block
      relative
      after:absolute after:left-0 after:bottom-0
      after:h-[2px] after:w-0 after:bg-primary-600
      after:transition-all after:duration-300
      hover:after:w-full
    ">
                  {window.history.length > 1 ? "Volver atras" : "Volver a la agenda"}
  </span>
          </button>
        <SessionCard session={session} />
          <SessionTracks sessions={sessions} category={session.category} currentSession={session}/>
      </Gradient>
  )
}

export default SessionPage;
