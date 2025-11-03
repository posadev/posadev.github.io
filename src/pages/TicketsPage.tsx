import {useEffect} from "react";
import Loading from "@/pages/Loading.tsx";

const TicketsPage = () => {
    useEffect(() => {
        window.location.href = "https://boletos.posadev.org/event/5/posadev";
    }, []);

  return (<Loading text="Redirigiendo a boletos"></Loading>)
}

export default TicketsPage;