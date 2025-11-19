import SessionCard from "@/components/session/SessionCard.tsx";
import {useAppContext} from "@/context/AppContext.tsx";
import {useNavigate, useParams} from "react-router-dom";
import Gradient from "@/components/Gradient.tsx";
import {ChevronLeft} from "lucide-react";
import React from "react";

const SessionPage = () => {
    const navigate = useNavigate()
    const {sessions} = useAppContext()
    const { sessionId } = useParams();
    const session = sessions.find(session => session.id == Number(sessionId))

    const handleGoBack = () => {
        if (window.history.state && window.history.length > 2) {
            console.log("back to ")
            navigate(-1)
        } else {
            console.log("back to agenda")
            navigate("/agenda")
        }
    }

  return (
      <Gradient className="py-10 px-4 md:px-20 flex flex-col gap-6 min-h-[60vh]" >
          <button
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
    {
        window.history.state && window.history.length > 2 ? "Volver a la agenda" : "Volver a atras"

    }
  </span>
          </button>
        <SessionCard session={session} />
      </Gradient>
  )
}

export default SessionPage;
