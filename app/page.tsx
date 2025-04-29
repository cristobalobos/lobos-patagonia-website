import Image from "next/image"
import Link from "next/link"
import { MapPin, Plane, Compass, ArrowRight } from "lucide-react"


export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">

      {/* BODY PAGE */}

      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/volcanes_osorno_calbuco.jpg"
              alt="Ciudad de Puerto Varas"
              fill
              className="object-cover bg-contain bg-no-repeat bg-center brightness-[0.8] contrast-[0.9] saturate-[0.9]"
              priority
            />
          </div>

          <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
            <div className="mb-8 w-[400px] h-[400px] relative">
              <Image
                src="/img/logo-lobos.png"
                alt="Transfer Lobos Logo"
                fill
                className="object-contain"
                priority
              />
            </div>


            <Link
              href="https://wa.me/56990957491?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado"
              className="bg-green-800 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
            >
              Reserva tu traslado <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Featured Services Section */}
        {/* Featured Services Section - Con imágenes específicas */}
        <section className="w-full py-8 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Nuestros Servicios</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Aeropuerto El Tepual */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ElTepual.jpg/1920px-ElTepual.jpg" alt="Aeropuerto El Tepual" fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-green-800 rounded-full mb-2">
                    <Plane className="text-white h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">Traslados al Aeropuerto</h3>
                  <p className="text-sm text-gray-600">Servicio directo y cómodo hacia/desde Aeropuerto El Tepual.</p>
                </div>
              </div>

              {/* Puerto Varas */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image src="img/puerto_varas_city.jpg" alt="Ciudad de Puerto Varas" fill className="object-cover object-cover bg-contain bg-no-repeat bg-center" />
                </div>
                <div className="p-4 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-green-800 rounded-full mb-2">
                    <MapPin className="text-white h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">Traslados Interurbanos</h3>
                  <p className="text-sm text-gray-600">
                    Movilización cómoda entre Puerto Varas, Puerto Montt, Frutillar y Osorno.
                  </p>
                </div>
              </div>

              {/* Parque Nacional Vicente Pérez Rosales */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src="/img/Saltos_del_petrohue_01b.jpg"
                    alt="Parque Nacional Vicente Pérez Rosales"
                    fill
                    className="object-cover object-cover bg-contain bg-no-repeat bg-center"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-green-800 rounded-full mb-2">
                    <Compass className="text-white h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">Tours Privados</h3>
                  <p className="text-sm text-gray-600">
                    Servicios de transporte personalizados para grupos que exploran las maravillas naturales de la Region de Los Lagos, con conocimiento y experiencia local.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Drivers Contact Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contacta directamente nuestros conductores</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Driver 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-green-800">
                  <Image
                    src="/img/quique.jpeg"
                    alt="Enrique Lobos"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Enrique Lobos</h3>
                <p className="text-gray-600 mb-4">Fundador y Conductor profesional con mas de 20 años de experiencia</p>
                <Link
                  href="https://wa.me/56990957491?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactanos via WhatsApp
                </Link>
              </div>

              {/* Driver 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-green-800">
                  <Image
                    src="/img/oscar.jpeg"
                    alt="Óscar Lobos"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Óscar Lobos</h3>
                <p className="text-gray-600 mb-4">Conductor Profesional con 10 años de experencia, con dominio de inglés y portugués.
                </p>
                <Link
                  href="https://wa.me/56993135819?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactanos via WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Reference Prices Section */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Precios Referencia</h2>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 border-b border-gray-200 md:border-b-0 md:border-r">
                  <Plane className="text-green-800 h-6 w-6 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Traslado Aeropuerto El Tepual</h3>
                    <p className="text-gray-600">Desde $25.000 (para hasta 3 pasajeros) </p>
                  </div>
                </div>

                <div className="flex items-center p-3">
                  <MapPin className="text-green-800 h-6 w-6 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800"> Traslados locales en Puerto Varas</h3>
                    <p className="text-gray-600">Desde $5.000 (para hasta 3 pasajeros).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


      {/* Introduction */}
      <section className="container mx-auto px-4 pt-10 md:pt-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6 text-green-900 leading-relaxed">
            Transfer Lobos es una empresa familiar de transporte de pasajeros con basex en Puerto Varas, especializada en traslados privados para personas naturales y jurídicas dentro de la Región de Los Lagos.
          </p>
          <p className="text-lg mb-8 text-green-900 leading-relaxed">
            Contamos con vehículos autorizados según el Decreto 80 del Ministerio de Transporte, ideales para empresas, instituciones y clientes que requieren un servicio seguro, puntual y profesional. Nuestros conductores están altamente capacitados y comprometidos con una atención de excelencia, garantizando comodidad, presentación y confiabilidad en cada viaje.
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
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto my-8 flex flex-col items-center gap-4">
          <h3 className="text-center text-green-900 font-semibold text-lg">
            Autorizado por:
          </h3>
          <div className="flex items-center justify-center gap-6">
            <Image
              src="/img/ministerio-logo.png" // logo del Ministerio de Transportes
              alt="Ministerio de Transportes y Telecomunicaciones"
              width={150}
              height={60}
              className="object-contain"
              priority
            />
            <Image
              src="/img/aeropuerto-logo.png" // logo de SCL Aeropuerto
              alt="Aeropuerto de Santiago SCL"
              width={100}
              height={60}
              className="object-contain"
              priority
            />
          </div>
        </div>

      </section>

      {/* Services Preview */}
      < section className="bg-green-50 py-16" >
        <div className="container mx-auto px-4">
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
              <h3 className="text-xl font-semibold mb-2 text-green-700">Vehículo 1: Hyundai Staria US4</h3>
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
              <h3 className="text-xl font-semibold mb-2 text-green-700">Vehículo 2: Hyundai Staria US4</h3>
              <p className="text-stone-600 mb-4">Capacidad para 18 pasajeros, modelo 2022</p>
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
        </div>
      </section >
    </div >
  )
}
