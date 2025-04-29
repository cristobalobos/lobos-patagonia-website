import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Nosotros</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Nuestra Historia Familiar</h2>
          <p className="mb-4">
            Lobos Transfer nació de un profundo amor por los impresionantes paisajes del Sur de Chile y el deseo
            de compartir esta belleza natural con visitantes de todo el mundo.
          </p>
          <p className="mb-4">
            Fundada en 2005 por la familia Lobos, nuestra empresa comenzó con una solo taxi y el compromiso de
            proporcionar transporte seguro y confiable a través del desafiante terreno de la Region de Los Lagos.
          </p>
          <p>
            Hoy, continuamos operando como una empresa familiar, manteniendo los mismos valores de servicio excepcional,
            seguridad y responsabilidad ambiental que nos han guiado desde el principio.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image
            src="/img/quique-oscar.jpeg?height=600&width=800"
            alt="La familia Lobos frente a sus vans"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Nuestros Valores</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-700 text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Seguridad Primero</h3>
            <p>
              Priorizamos la seguridad de nuestros pasajeros por encima de todo, con vehículos bien mantenidos y
              conductores experimentados.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-700 text-2xl">🚗</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Puntualidad Garantizada</h3>
            <p>
              Valoramos tu tiempo. Nuestros traslados se caracterizan por su puntualidad y cumplimiento de los horarios acordados, asegurando un viaje sin contratiempos.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-700 text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Presentación Profesional</h3>
            <p>
              Mantenemos nuestros vehículos en excelente estado de limpieza y contamos con conductores atentos, bien presentados y preparados para ofrecer una experiencia de viaje cómoda y confiable.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Conoce a Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center shrink-0"
              style={{ backgroundImage: "url('/img/quique.jpeg')" }}
            ></div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center sm:text-left">Enrique Lobos</h3>
              <p className="text-green-700 mb-3 text-center sm:text-left">Fundador y Conductor</p>
              <p>
                Con más de 20 años de experiencia conduciendo en la Region de Los Lagos, Enrique conoce cada camino y sendero de
                la región. Su pasión por la belleza natural del Sur de Chile es evidente en cada viaje.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center shrink-0"
              style={{ backgroundImage: "url('/img/oscar.jpeg')" }}
            ></div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center sm:text-left">Oscar Lobos</h3>
              <p className="text-green-700 mb-3 text-center sm:text-left">Copropietario y Conductor</p>
              <p>
                Oscar se unió al negocio familiar en 2016, aportando su experiencia profesional en servicio al cliente e historia local. Además, domina el inglés, lo que le permite comunicarse con pasajeros internacionales. Se asegura de que cada pasajero disfrute no solo del transporte, sino de una auténtica experiencia sureña.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
