import {Link} from "react-router-dom";
import Gradient from "@/components/Gradient.tsx";
import {Card} from "@/components/ui/card.tsx";
import Report from "@/components/code-of-conduct/Report.tsx";

const CodeOfConductSpeakers = () => {
  return (
    <Gradient
        className="flex flex-col gap-8 px-20 py-10"
        aria-labelledby="code-of-conduct-heading"
    >
        <aside className="flex flex-col gap-2">
            <h1 className="text-4xl gradient-text">Código de conducta de Speakers</h1>
            <p className="text-lg" itemProp="description">
                Todo speaker deberá cumplir con el <Link role="link" to={"/code-of-conduct"} className="text-primary-600 hover:underline hover:underline-offset-1">código de conducta general</Link> al igual que los siguientes puntos puestos en este documento:
            </p>
        </aside>
      <Card className="p-10 flex flex-col gap-6">
          <article className="flex flex-col gap-2">
              <h2 className="text-3xl text-alternative-700 font-semibold">Material ofensivo</h2>
              <p>
                  Al igual que el comportamiento inaceptable no es algo que vamos a tolerar en posadev tampoco el material físico o oral que falle con los puntos siguientes:
              </p>
              <ul className="list-disc list-inside">
                  <li>
                      Cualquier acción o comunicación  (intimidatorias, vejatorias, discriminatorias, violentas, abusivas, denigratorias, despectivas, sexistas o cualquiera que denigre a alguna minoria) será un comportamiento inaceptable asi como los chistes y referencias
                  </li>
                  <li>
                      Tambien se incluye los puntos estipulados en comportamiento inaceptable que no deben ser agregados en el material utilizado para su presentación
                  </li>
              </ul>
          </article>
          <article className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold text-alternative-700">Consecuencias</h2>
              <p>
                  Cualquier speaker que infrinja este código podrá ser sancionado de acuerdo a la deliberación del equipo organizador:
              </p>
              <ul className="list-disc list-inside">
                  <strong className="text-alternative-700">Antes de la conferencia:</strong>
                  <li>Dependiendo de la gravedad se puede cancelar su participacion como speaker (al igual que nos reservamos el derecho de admisión)</li>
              </ul>
              <ul className="list-disc list-inside">
                  <strong className="text-alternative-700">Durante la conferencia:</strong>
                  <li>Cancelación de la participación y solicitar que se retire</li>
                  <li>Llamado de atención y un aviso de que al continuar su conducta se le retirará del evento</li>
              </ul>
              <ul className="list-disc list-inside">
                  <strong className="text-alternative-700">Después de la conferencia:</strong>
                  <li>En el caso de eventos sociales organizados por posadev nos reservamos pedir que se retire y al no respetarlo llevarlo con las autoridades correspondientes</li>
                  <li>Veto de eventos relacionados de GDL Devcomms (Esto incluye ediciones futuras de Posadev)</li>
              </ul>
          </article>
      </Card>
        <Report/>
        <p>
            Al asistir a este evento, aceptas cumplir este Código de Conducta. Agradecemos tu participación para hacer de este un espacio inclusivo, seguro y respetuoso para todxs.
        </p>
    </Gradient>
  )
}
export default CodeOfConductSpeakers;