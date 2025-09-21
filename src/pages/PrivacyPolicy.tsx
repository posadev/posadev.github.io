
const PrivacyPolicy = () => {
  return (
      <section
          className="flex flex-col container gap-8 mx-auto p-4 my-8"
          aria-labelledby="privacy-heading"
          about="https://posadev.org/PrivacyPolicy"
      >
          <header className="flex flex-col gap-4">
              <h1 id="privacy-heading" className="text-4xl gradient-text">
                  Aviso de Privacidad
              </h1>
              <p>
                  En Posadev, nos comprometemos a proteger la información que nos proporcionas.
              </p>
          </header>
          <article className="flex flex-col gap-4" itemScope itemType="https://schema.org/CreativeWork">
              <meta itemProp="name" content="Aviso de Privacidad de Posadev" />
              <meta itemProp="inLanguage" content="es-MX" />
              <h2 className="text-2xl font-semibold">Uso de los datos personales</h2>
              <p itemProp="text">
                  Los datos personales que compartas con nosotros serán utilizados exclusivamente para fines
                  de control de asistencia, organización de eventos y, en caso de que lo autorices expresamente,
                  algunos de tus datos (correo electrónico, años de experiencia y especialidad) podrán ser
                  compartidos con los patrocinadores del evento, únicamente con fines informativos y de networking.
                  No venderemos ni cederemos tu información a terceros fuera de este contexto.
              </p>

              <h2 className="text-2xl font-semibold">Uso de imágenes y videos</h2>
              <p itemProp="text">
                  Al asistir a nuestros eventos, otorgas tu consentimiento para que las fotografías y videos
                  tomados durante las actividades puedan ser utilizados en nuestras redes sociales, materiales
                  de difusión y promoción de la comunidad.
              </p>

              <h2 className="text-2xl font-semibold">Responsabilidad en plataformas de terceros</h2>
              <p itemProp="text">
                  Cualquier información que compartas a través de plataformas de terceros, como Facebook,
                  LinkedIn u otros servicios externos, estará sujeta a las políticas de privacidad de dichas
                  plataformas y no será responsabilidad de Posadev.
              </p>

              <h2 className="text-2xl font-semibold">Contacto</h2>
              <p itemProp="text">
                  Si tienes dudas o deseas más información sobre el manejo de tus datos, puedes contactarnos en
                  <a
                      className="font-bold underline ml-1"
                      href="mailto:privacy@posadev.org"
                      aria-label="Correo de contacto de privacidad: privacy@posadev.org"
                      itemProp="email"
                  >
                      privacy@posadev.org
                  </a>
              </p>

              <p className="gradient-text font-semibold">¡Gracias por ser parte de Posadev!</p>
          </article>
      </section>
  )
}
export default PrivacyPolicy