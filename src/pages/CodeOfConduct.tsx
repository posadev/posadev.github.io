const CodeOfConduct = () => {
    return (
        <section className="flex flex-col container gap-8 mx-auto p-4 my-8">
            <h1 className="text-4xl gradient-text">Codigo de Conducta</h1>
            <aside className="flex flex-col gap-4">
                <h2 className="text-3xl">Propósito</h2>
                <p>En Posadev buscamos ser y seguir siendo un espacio en el que cualquier persona se pueda sentir segura
                    para aprender y compartir conocimientos.
                    Estamos comprometidos a ser un evento inclusivo y libre de hostigamiento para todos sin importar
                    identidad de género, orientación sexual, procedencia, raza, discapacidad, diversidad genética o
                    neuronal, apariencia física, nacionalidad, edad, religión u otra categoría.
                </p>
            </aside>
            <aside className="flex flex-col gap-4">
                <h2 className="text-3xl">Comportamiento inaceptable</h2>
                <p>
                    Las personas que participan (o planean participar) en los eventos, deben comportarse en todo momento de
                    acuerdo con la letra y el espíritu de esta política que prohíbe el acoso y la discriminación, ya sea
                    antes, durante o después del evento. Esto incluye declaraciones realizadas en publicaciones en redes
                    sociales, publicaciones en línea, mensajes de texto y todas las demás formas de comunicación
                    electrónica.
                    Nadie dentro del evento —incluyendo asistentes, personal y voluntariado— debe usar imágenes, vestimenta
                    u otro material sexualizado, ni crear un ambiente sexualizado.
                    Tampoco se tolerará el uso de ropa con mensajes violentos, misóginos o que contravengan cualquier otro
                    punto del código de conducta.
                </p>
                <h3 className="text-lg">
                    Ejemplos de Discriminación
                </h3>
                <p>
                    La discriminación ocurre cuando se trata injustamente a una persona o grupo por características
                    personales, reales o percibidas. Algunos actos incluyen:
                </p>
                <ul className="list-disc list-inside">
                    <li>Comentarios ofensivos hacia alguien por su nacionalidad, color de piel, acento o forma de hablar.
                    </li>
                    <li> Hacer burla de la apariencia física, peso, forma de vestir o expresión de género.
                    </li>
                    <li> Negarse a usar los pronombres y nombre preferidos de una persona cuando la persona ya ha declarado
                        cuáles son
                    </li>
                    <li> Invalidar opiniones o participación de alguien por su edad o nivel de experiencia.
                    </li>
                    <li> Reírse o burlarse de creencias religiosas o prácticas culturales.
                    </li>
                    <li> Segregar actividades o espacios sin justificación, dejando fuera a ciertos grupos (por ejemplo,
                        "esto no es para mujeres" o "ellos no entenderían").
                    </li>
                </ul>
                <h3 className="text-lg">Ejemplos de Acoso</h3>
                <p>El acoso es cualquier comportamiento no deseado que incomoda, humilla, intimida o agrede a otra persona. Puede ser verbal, físico, visual o digital. Algunos actos incluyen:</p>
                <ul className="list-disc list-inside">
                    <li><strong> Comentarios sexuales no deseados</strong>, insinuaciones o chistes con connotación sexual.</li>
                    <li><strong>Tocamientos no consensuados</strong>, incluso en tono "amistoso" (como abrazos forzados o manos en la espalda).</li>
                    <li><strong>Perseguir o seguir a alguien</strong>, incluso después de que esa persona ha pedido espacio o se ha mostrado incómoda.</li>
                    <li><strong>Tomar fotos o grabar videos sin consentimiento</strong>, especialmente en momentos sensibles o privados.</li>
                    <li><strong>Miradas insistentes o gestos sexuales</strong> dirigidos a otra persona.</li>
                    <li><strong>Mensajes o DMs repetitivos</strong> que cruzan los límites de lo profesional o amistoso, especialmente después de haber sido ignorados.</li>
                    <li><strong>Bromas o “piropos” disfrazados de halagos</strong>, que en realidad objetifican o incomodan.</li>
                    <li><strong>Interrumpir espacios o conversaciones</strong> para acosar, discutir o provocar.</li>
                </ul>
            </aside>
                <aside className="flex flex-col gap-4">
                    <h2 className="text-3xl">Consecuencias</h2>
                    <p>
                        Cualquier persona que infrinja este código podrá ser sancionada de acuerdo a la deliberación del equipo organizador:
                    </p>
                    <ul>
                        <li>Advertencia verbal o escrita.</li>
                        <li>Expulsada del evento sin derecho a reembolso.</li>
                        <li>Prohibición de asistir a futuros eventos organizados por Posadev.</li>
                        <li>Notificación a las autoridades competentes si se considera necesario.</li>
                    </ul>
                </aside>
                <aside className="flex flex-col gap-4">
                    <h2 className="text-3xl">Reporte</h2>
                    <p>
                        Si alguien te hace sentir inseguro o no bienvenido a ti o a otra persona, por favor repórtalo lo antes posible. Si ves o escuchas que alguien hace algo que pueda violar este Código de Conducta, repórtalo. Puedes presentar un informe personal mediante:
                    </p>
                    <section className="flex flex-col md:flex-row gap-4">
                        <article>
                            <strong>Correo Electrónico</strong>
                            <p>Envía un correo a <a href="mailto:gdldevcomss@gmail.com">gdldevcomms@gmail.com</a></p>
                        </article>
                        <article>
                            <strong>Redes DMs</strong>
                            <p>Envía un mensaje directo a cualquiera de nuestras redes sociales oficiales.</p>
                        </article>
                        <article>
                            <strong>Organizador</strong>
                            <p>Acércate a cualquier miembro del equipo organizador, quienes estarán identificados con una camiseta con la palabra "organizador".</p>
                        </article>
                    </section>
                </aside>
            <strong>
                Al asistir a este evento, aceptas cumplir este Código de Conducta. Agradecemos tu participación para hacer de este un espacio inclusivo, seguro y respetuoso para todxs.
            </strong>
        </section>
    )
}

export default CodeOfConduct