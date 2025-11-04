import {Card} from "@/components/ui/card.tsx";

const Report = () => {
  return (
      <Card className="p-6 md:p-10 flex flex-col gap-6">
          <aside className="flex flex-col gap-2">
              <h2 className="text-3xl text-alternative-700 font-semibold">Reporte</h2>
              <p>
                  Si alguien te hace sentir inseguro o no bienvenido a ti o a otra persona, por favor repórtalo lo antes posible. Si ves o escuchas que alguien hace algo que pueda violar este Código de Conducta, repórtalo. Puedes presentar un informe personal mediante:
              </p>
          </aside>
          <section className="flex flex-col md:flex-row gap-4">
              <article className="w-full md:w-1/3">
                  <strong className="text-primary-600">Organizador</strong>
                  <p>Acércate a cualquier miembro del equipo organizador, quienes estarán identificados con una camiseta con la palabra "Organizador".</p>
              </article>
              <article className="w-full md:w-1/3">
                  <strong className="text-primary-600">Correo Electrónico</strong>
                  <p>Envía un correo a <a className="text-primary-600 hover:underline hover:underline-offset-1" href="mailto:gdldevcomss@gmail.com">gdldevcomms@gmail.com</a> con el asunto "Reporte"</p>
              </article>
              <article className="w-full md:w-1/3">
                  <strong className="text-primary-600">Redes DMs</strong>
                  <p>Envía un mensaje directo a cualquiera de nuestras redes sociales oficiales.</p>
              </article>
          </section>
      </Card>
  )
}
export default Report;