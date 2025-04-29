import Image from "next/image"
import Link from "next/link"
import { MapPin, Plane, Compass, ArrowRight } from "lucide-react"


export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">

      {/* BODY PAGE */}

      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-[380px] md:h-[320px] flex items-center justify-center">
          {/* Contenido sobre la imagen */}
          <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
            <div className="mb-6 w-[260px] md:w-[300px] h-[200px] md:h-[200px] relative">
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
              className="bg-green-800 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-md"
            >
              Reserva tu traslado <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="w-full py-6 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-800">Nuestros Servicios</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Aeropuerto El Tepual */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-32">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ElTepual.jpg/1920px-ElTepual.jpg" alt="Aeropuerto El Tepual" fill className="object-cover" />
                </div>
                <div className="p-3 text-center">
                  <div className="inline-flex items-center justify-center w-9 h-9 bg-green-800 rounded-full mb-2">
                    <Plane className="text-white h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-gray-800">Traslados al Aeropuerto</h3>
                  <p className="text-sm text-gray-600">Servicio directo y cómodo hacia/desde Aeropuerto El Tepual.</p>
                </div>
              </div>

              {/* Puerto Varas */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-32">
                  <Image src="img/puerto_varas_city.jpg" alt="Ciudad de Puerto Varas" fill className="object-cover" />
                </div>
                <div className="p-3 text-center">
                  <div className="inline-flex items-center justify-center w-9 h-9 bg-green-800 rounded-full mb-2">
                    <MapPin className="text-white h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-gray-800">Traslados Interurbanos</h3>
                  <p className="text-sm text-gray-600">Movilización cómoda entre Puerto Varas, Puerto Montt, Frutillar y Osorno.</p>
                </div>
              </div>

              {/* Parque Nacional Vicente Pérez Rosales */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-32">
                  <Image src="/img/Saltos_del_petrohue_01b.jpg" alt="Parque Nacional Vicente Pérez Rosales" fill className="object-cover" />
                </div>
                <div className="p-3 text-center">
                  <div className="inline-flex items-center justify-center w-9 h-9 bg-green-800 rounded-full mb-2">
                    <Compass className="text-white h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-gray-800">Tours Privados</h3>
                  <p className="text-sm text-gray-600">Servicios personalizados para grupos que exploran la Región de Los Lagos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Drivers Contact Section */}
        <section className="w-full py-10 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Contacta directamente nuestros conductores</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Driver 1 */}
              <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-green-800">
                  <Image src="/img/quique.jpeg" alt="Enrique Lobos" width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">Enrique Lobos</h3>
                <p className="text-sm text-gray-600 mb-3 text-center">Fundador y Conductor profesional con más de 20 años de experiencia</p>
                <Link href="https://wa.me/56990957491?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-2">
                  Contactanos via WhatsApp
                </Link>
              </div>

              {/* Driver 2 */}
              <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-green-800">
                  <Image src="/img/oscar.jpeg" alt="Óscar Lobos" width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">Óscar Lobos</h3>
                <p className="text-sm text-gray-600 mb-3 text-center">Conductor profesional con 10 años de experiencia, con dominio de inglés y portugués.</p>
                <Link href="https://wa.me/56993135819?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-2">
                  Contactanos via WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Reference Prices Section */}
        <section className="w-full py-10 bg-white">
          <div className="container px-4 md:px-6 mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Precios Referencia</h2>

            <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 border-b border-gray-200 md:border-b-0 md:border-r">
                  <Plane className="text-green-800 h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-800">Traslado Aeropuerto El Tepual</h3>
                    <p className="text-sm text-gray-600">Desde $25.000 (hasta 3 pasajeros)</p>
                  </div>
                </div>
                <div className="flex items-center p-3">
                  <MapPin className="text-green-800 h-5 w-5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-800">Traslados locales en Puerto Varas</h3>
                    <p className="text-sm text-gray-600">Desde $5.000 (hasta 3 pasajeros)</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="text-center mt-8">
              <Link
                href="/recorridos-tarifas"
                className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium text-sm md:text-base"
              >
                Más información sobre nuestros tarifas y servicios <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </section>



      </main>

      {/* Introduction */}
      <section className="container mx-auto px-4 pt-8 md:pt-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg mb-4 md:mb-6 text-green-900 leading-relaxed">
            Transfer Lobos es una empresa familiar de transporte de pasajeros con base en Puerto Varas, especializada en traslados privados para personas naturales y jurídicas dentro de la Región de Los Lagos.
          </p>
          <p className="text-base md:text-lg mb-6 text-green-900 leading-relaxed">
            Contamos con vehículos autorizados según el Decreto 80 del Ministerio de Transporte, ideales para empresas, instituciones y clientes que requieren un servicio seguro, puntual y profesional. Nuestros conductores están altamente capacitados y comprometidos con una atención de excelencia.
          </p>

        </div>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 w-full max-w-md mx-auto my-8 flex flex-col items-center gap-4">
          <h3 className="text-center text-green-900 font-semibold text-base md:text-lg">
            Autorizado por:
          </h3>
          <div className="flex items-center justify-center gap-6">
            <Image
              src="/img/ministerio-logo.png"
              alt="Ministerio de Transportes y Telecomunicaciones"
              width={130}
              height={100}
              className="object-contain"
              priority
            />
            <Image
              src="/img/ilustre_municipalidad.png"
              alt="Muni puerto varas"
              width={130}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-800">Nuestros Vehículos</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Vehículo 1 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <div className="aspect-video relative mb-4 overflow-hidden rounded-md">
                <Image
                  src="/img/van_2.jpg?height=400&width=600"
                  alt="Van de 18 pasajeros"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-700">Vehículo 1: Hyundai Staria US4</h3>
              <p className="text-stone-600 mb-4 text-sm md:text-base">Capacidad para 18 pasajeros, modelo 2022</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-700 rounded-full"></span>Aire acondicionado y calefacción</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-700 rounded-full"></span>Asientos reclinables cómodos</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-700 rounded-full"></span>Amplio espacio para equipaje</li>
              </ul>
            </div>

            {/* Vehículo 2 */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <div className="aspect-video relative mb-4 overflow-hidden rounded-md">
                <Image
                  src="/img/van_1.jpg?height=400&width=600"
                  alt="Van de 18 pasajeros"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-700">Vehículo 2: Hyundai Staria US4</h3>
              <p className="text-stone-600 mb-4 text-sm md:text-base">Capacidad para 18 pasajeros, modelo 2022</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-700 rounded-full"></span>Sistema de control climático</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-700 rounded-full"></span>Puertos de carga USB</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-700 rounded-full"></span>Suspensión mejorada para mayor comodidad</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/vehiculos"
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium text-sm md:text-base"
            >
              Más información sobre nuestros vehículos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div >
  )
}
