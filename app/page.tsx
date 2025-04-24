import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}





      <section className="relative h-[70vh] w-full">

        {/* Imagen y overlay para desktop */}
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

        {/* Imagen y overlay para mobile */}
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
      </section>


      {/* Introduction */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-800">Bienvenidos a Lobos Transfer</h2>
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
      </section>

      {/* Services Preview */}
      <section className="bg-green-50 py-16">
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
      </section>

      {/* Vehicles Preview */}
      <section className="container mx-auto px-4">
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
      </section>

      {/* Testimonial */}
      <section className="bg-stone-100 py-16">
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
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 max-w-4xl text-center">
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
      </section>
    </div>
  )
}
