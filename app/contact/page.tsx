import { MapPin, Plane, Compass, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <section className="relative w-full h-[350px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/volcanes_osorno_calbuco.jpg"
            alt="Ciudad de Puerto Varas"
            fill
            className="object-cover bg-contain bg-no-repeat bg-center brightness-[0.8] contrast-[0.9] saturate-[0.9]"
            priority
          />
        </div>

        <div className="container relative z-10 px-4 flex flex-col items-center text-center">
          <div className="mb-8 w-[250px] h-[250px] relative">
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
                <Image src="img/puerto_varas.jpg" alt="Ciudad de Puerto Varas" fill className="object-cover object-cover bg-contain bg-no-repeat bg-center" />
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
                  className="object-cover"
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

      {/* Drivers and Prices Combined Section - Más compacto */}
      <section className="w-full py-8 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Columna izquierda: Conductor 1 */}
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-green-800">
                <Image
                  src="/img/quique.jpeg"
                  alt="Enrique Lobos"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">Enrique Lobos</h3>
              <p className="text-xs text-gray-600 mb-2">Conductor profesional</p>
              <Link
                href="https://wa.me/56912345678"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-1 px-4 rounded-lg transition-colors flex items-center gap-1 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Link>
            </div>

            {/* Columna central: Precios */}
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-center mb-3 text-gray-800">Tarifas Referenciales</h2>
              <div className="space-y-2">
                <div className="flex items-center p-2 border-b border-gray-100">
                  <Plane className="text-green-800 h-4 w-4 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-800">Traslado Aeropuerto</h3>
                    <p className="text-xs text-gray-600">Desde $25.000 CLP</p>
                  </div>
                </div>
                <div className="flex items-center p-2">
                  <MapPin className="text-green-800 h-4 w-4 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-800">Traslados Locales</h3>
                    <p className="text-xs text-gray-600">Desde $5.000 CLP</p>
                  </div>
                </div>
                <div className="flex items-center p-2 border-t border-gray-100">
                  <Compass className="text-green-800 h-4 w-4 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sm text-gray-800">Tours Privados</h3>
                    <p className="text-xs text-gray-600">Desde $60.000 CLP</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <Link
                  href="https://wa.me/56912345678?text=Hola,%20me%20gustaría%20consultar%20por%20tarifas"
                  className="text-green-800 hover:text-green-700 text-sm font-medium"
                >
                  Consultar por más destinos
                </Link>
              </div>
            </div>

            {/* Columna derecha: Conductor 2 */}
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-green-800">
                <Image
                  src="/img/oscar.jpeg"
                  alt="Óscar Lobos"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">Óscar Lobos</h3>
              <p className="text-xs text-gray-600 mb-2">Experto en tours regionales</p>
              <Link
                href="https://wa.me/56987654321"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-1 px-4 rounded-lg transition-colors flex items-center gap-1 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
