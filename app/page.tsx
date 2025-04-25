import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}

      <section className="relative h-[70vh] w-full">
        <section className="relative w-full h-[70vh] md:h-[80vh]">
          {/* Mobile version (only visible on mobile) */}
          <div className="relative w-full h-[70vh] md:hidden">
            <Image
              src="/img/quique-oscar.jpeg"
              alt="Equipo Lobos Transfer"
              fill
              quality={95}
              className="object-cover brightness-[1.3] contrast-[1.1] saturate-[1.1]"
            />

            {/* Capa oscura general para oscurecer la imagen */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Contenido con fondo gradiente y sombra de texto */}
            <div className="absolute bottom-0 w-full z-20 text-white text-center p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent drop-shadow-md">
              <p className="text-lg font-semibold mb-2 drop-shadow">Servicios Disponibles</p>
              <ul className="text-sm space-y-1 mb-4 drop-shadow-sm">
                <li>🚐 Traslados al Aeropuerto El Tepual</li>
                <li>🌄 Viajes Interregionales</li>
                <li>🧭 Tours Personalizados</li>
                <li>🏢 Servicio a empresas</li>
              </ul>
              <Link
                href="https://wa.me/56990957491?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado"
                className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md text-sm inline-flex items-center gap-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.01 2.002c-5.52 0-10 4.479-10 10 0 1.768.465 3.478 1.347 4.988l-1.41 5.158 5.284-1.39a9.963 9.963 0 0 0 4.78 1.212c5.52 0 10-4.48 10-10 0-5.522-4.48-10-10-10zm.01 18c-1.518 0-3.006-.416-4.296-1.207l-.306-.184-3.13.823.835-3.074-.2-.316c-.836-1.319-1.274-2.84-1.274-4.373 0-4.418 3.582-8 8-8 4.418 0 8 3.582 8 8 0 4.419-3.582 8-8 8zm4.295-5.647c-.243-.121-1.43-.705-1.65-.784-.22-.08-.38-.12-.54.121-.16.243-.62.783-.76.943-.14.16-.28.18-.52.06-.243-.121-1.028-.38-1.956-1.213-.723-.645-1.213-1.44-1.356-1.683-.14-.243-.015-.375.106-.495.11-.109.243-.28.364-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.121-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.14 0-.36.04-.55.26-.19.22-.72.7-.72 1.704 0 1.004.74 1.973.84 2.11.1.14 1.46 2.23 3.543 3.13 2.083.9 2.083.6 2.457.56.375-.04 1.19-.48 1.357-.94.17-.46.17-.86.12-.94-.04-.08-.22-.14-.46-.26z" />
                </svg>
                Reserva tu traslado
              </Link>
            </div>
          </div>


          {/* Desktop */}
          <div className="hidden md:flex h-full">
            {/* Imagen lado izquierdo */}
            <div className="relative w-1/2 h-full">
              <Image
                src="/img/quique-oscar.jpeg"
                alt="Equipo Lobos Transfer"
                fill
                className="object-cover brightness-[1.4] contrast-[1.15] saturate-[1.2]"
                quality={95}
              />
              <div className="absolute inset-0 bg-black/20 z-10" />
            </div>

            {/* Contenido derecho */}
            <div className="w-1/2 bg-green-50 flex flex-col justify-center gap-6 p-10 z-20 text-center items-center">
              {/* Logo */}
              <div className="w-full flex justify-center">
                <div
                  className="w-[420px] h-[180px] bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: 'url("/img/logo-lobos.png")' }}
                  aria-label="Logo Lobos Transfer"
                />
              </div>

              {/* Título */}
              <p className="text-xl font-semibold text-green-900 drop-shadow-sm max-w-2xl leading-relaxed">
                Tu traslado privado de confianza desde Puerto Varas a cualquier destino en la Región de Los Lagos.
              </p>

              {/* Lista de servicios */}
              <ul className="text-green-800 text-base space-y-1 font-medium">
                <li>🚐 Traslados al Aeropuerto El Tepual</li>
                <li>🌄 Viajes Interregionales</li>
                <li>🧭 Tours Personalizados</li>
                <li>🏢 Servicio a empresas</li>
              </ul>

              {/* Botón */}
              <Link
                href="https://wa.me/56990957491?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado"
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2 text-sm"
                aria-label="Reservar traslado vía WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12.01 2.002c-5.52 0-10 4.479-10 10 0 1.768.465 3.478 1.347 4.988l-1.41 5.158 5.284-1.39a9.963 9.963 0 0 0 4.78 1.212c5.52 0 10-4.48 10-10 0-5.522-4.48-10-10-10zm.01 18c-1.518 0-3.006-.416-4.296-1.207l-.306-.184-3.13.823.835-3.074-.2-.316c-.836-1.319-1.274-2.84-1.274-4.373 0-4.418 3.582-8 8-8 4.418 0 8 3.582 8 8 0 4.419-3.582 8-8 8zm4.295-5.647c-.243-.121-1.43-.705-1.65-.784-.22-.08-.38-.12-.54.121-.16.243-.62.783-.76.943-.14.16-.28.18-.52.06-.243-.121-1.028-.38-1.956-1.213-.723-.645-1.213-1.44-1.356-1.683-.14-.243-.015-.375.106-.495.11-.109.243-.28.364-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.121-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.14 0-.36.04-.55.26-.19.22-.72.7-.72 1.704 0 1.004.74 1.973.84 2.11.1.14 1.46 2.23 3.543 3.13 2.083.9 2.083.6 2.457.56.375-.04 1.19-.48 1.357-.94.17-.46.17-.86.12-.94-.04-.08-.22-.14-.46-.26z" />
                </svg>
                Reserva tu traslado
              </Link>
            </div>
          </div>

        </section>



        {/* Imagen y overlay para desktop
        <div className="relative h-full w-full hidden md:block">
          <Image
            src="/img/banner-lobos.png"
            alt="Paisaje patagónico con montañas y un camino"
            fill
            priority
            quality={80}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center p-4">
            <div>
              <p className="text-2xl md:text-3xl max-w-2xl">
                Conectamos personas y empresas en la Región de Los Lagos con un servicio de traslado privado, seguro y confiable.
              </p>
              <Link
                href="/contacto"
                className="mt-8 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors"
              >
                Contáctanos <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
 */}
        {/* Imagen y overlay para mobile 
        <div className="relative h-full w-full block md:hidden">
          <Image
            src="/img/Puerto_Varas.jpg"
            alt="Paisaje Región de Los Lagos"
            fill
            priority
            quality={80}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center p-4">
            <div>
              <p className="text-xl max-w-2xl">
                Conectamos personas y empresas en la Región de Los Lagos con un servicio de traslado privado, seguro y confiable.
              </p>
              <Link
                href="/contacto"
                className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors"
              >
                Contáctanos <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
 */}
      </section>


      {/* Introduction */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <br />
          <p className="text-lg mb-6">
            Lobos Transfer es una empresa familiar de transporte de pasajeros con base en Puerto Varas, especializada en traslados privados para personas naturales y jurídicas dentro de la Región de Los Lagos.
          </p>
          <p className="text-lg mb-8">
            Contamos con vehículos autorizados según el Decreto 80, ideales para empresas, instituciones y clientes que requieren un servicio seguro, puntual y profesional. Nuestros conductores están altamente capacitados y comprometidos con una atención de excelencia, garantizando comodidad, presentación y confiabilidad en cada viaje.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/nosotros" className="bg-stone-200 hover:bg-stone-300 px-5 py-2 rounded-md transition-colors">
              Nuestra Historia
            </Link>
            <Link href="/recorridos-tarifas" className="bg-stone-200 hover:bg-stone-300 px-5 py-2 rounded-md transition-colors">
              Nuestros Servicios
            </Link>
          </div>
        </div>
      </section >

      {/* Services Preview */}
      < section className="bg-green-50 py-16" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-800">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Traslados al Aeropuerto</h3>
              <p>
                Traslados al Aeropuerto
                Transporte confiable y puntual hacia y desde el Aeropuerto El Tepual de Puerto Montt, asegurando un inicio o final tranquilo para su viaje por la Región de Los Lagos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Viajes Interregionales</h3>
              <p>
                Transporte cómodo de pasajeros entre ciudades y pueblos del Sur de Chile, con opciones de programación
                flexibles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Tours Personalizados</h3>
              <p>
                Servicios de transporte personalizados para grupos que exploran las maravillas naturales de la
                Region de Los Lagos, con conocimiento y experiencia local.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/recorridos-tarifas"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium"
            >
              Ver todos los servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section >

      {/* Vehicles Preview */}
      < section className="container mx-auto px-4" >
        <h2 className="text-3xl font-bold mb-12 text-center text-green-800">Nuestros Vehículos</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="aspect-video relative mb-4 overflow-hidden rounded-md">
              <Image
                src="/img/van_2.jpg?height=400&width=600"
                alt="Van de 18 pasajeros"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">Hyundai Staria US4</h3>
            <p className="text-stone-600 mb-4">Capacidad para 18 pasajeros, modelo 2022</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                Aire acondicionado y calefacción
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                Asientos reclinables cómodos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                Amplio espacio para equipaje
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="aspect-video relative mb-4 overflow-hidden rounded-md">
              <Image
                src="/img/van_1.jpg?height=400&width=600"
                alt="Van de 18 pasajeros"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-700">Hyundai Staria US4 CRDI</h3>
            <p className="text-stone-600 mb-4">Capacidad para 18 pasajeros, modelo 2020</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                Sistema de control climático
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                Puertos de carga USB
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                Suspensión mejorada para mayor comodidad
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/vehiculos"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium"
          >
            Más información sobre nuestros vehículos <ArrowRight size={18} />
          </Link>
        </div>
      </section >

      {/* Testimonial */}
      < section className="bg-stone-100 py-16" >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-800">Lo que dicen nuestros clientes</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg italic mb-6">
              "Nuestra familia tuvo una experiencia increíble con Lobos Transfer. Los conductores fueron
              profesionales, puntuales y muy conocedores de la región. Las vans estaban limpias y cómodas, haciendo que
              nuestro viaje por la Region de Los Lagos fuera aún más agradable. ¡Muy recomendable!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-200 rounded-full"></div>
              <div>
                <p className="font-medium">María González</p>
                <p className="text-stone-500 text-sm">Santiago, Chile</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* CTA */}
      < section className="container mx-auto px-4 max-w-4xl text-center" >
        <h2 className="text-3xl font-bold mb-6 text-green-800">¿Listo para viajar con nosotros?</h2>
        <p className="text-lg mb-8">
          Contáctanos hoy para reservar tu transporte a través de los hermosos paisajes del Sur de Chile.
        </p>
        <Link
          href="/contacto"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors"
        >
          Ponte en Contacto <ArrowRight size={18} />
        </Link>
      </section >
    </div >
  )
}
