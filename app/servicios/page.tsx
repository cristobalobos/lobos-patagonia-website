import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Nuestros Servicios</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        Lobos Transfer Los Lagos ofrece una variedad de servicios de transporte diseñados para satisfacer las necesidades
        de los viajeros que exploran los hermosos paisajes del Sur de Chile. Todos nuestros servicios priorizan la
        seguridad, la comodidad y la responsabilidad ambiental.
      </p>

      <div className="space-y-16">
        {/* Airport Transfers */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Traslados al Aeropuerto</h2>
            <p className="mb-4">
              Comience y termine su viaje con facilidad utilizando nuestro confiable servicio de traslado al aeropuerto.
              Proporcionamos recogidas y entregas puntuales en todos los aeropuertos regionales del Sur de Chile.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Servicio de recepción en llegadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Asistencia con el equipaje</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Programación flexible para adaptarse a cambios de vuelo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Transporte directo a su alojamiento</span>
              </li>
            </ul>
            <Link href="/contacto" className="text-green-700 hover:text-green-800 font-medium">
              Reservar un traslado al aeropuerto
            </Link>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Servicio de traslado al aeropuerto"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Inter-Regional Travel */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Servicio de viaje interregional"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Viajes Interregionales</h2>
            <p className="mb-4">
              Explore las diversas regiones del Sur de Chile con nuestro cómodo servicio de transporte interregional.
              Conectamos las principales ciudades, pueblos y atracciones naturales de toda la Region de Los Lagos.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Rutas regulares programadas entre destinos populares</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Servicio puerta a puerta disponible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Vehículos cómodos con ventanas panorámicas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Conductores conocedores familiarizados con la región</span>
              </li>
            </ul>
            <Link href="/recorridos-tarifas" className="text-green-700 hover:text-green-800 font-medium">
              Ver rutas y precios
            </Link>
          </div>
        </div>

        {/* Custom Tours */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Tours Personalizados y Viajes en Grupo</h2>
            <p className="mb-4">
              Cree su perfecta experiencia patagónica con nuestros servicios personalizados de tour y viaje en grupo.
              Trabajamos con usted para diseñar un transporte que satisfaga sus necesidades e intereses específicos.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Itinerarios a medida para grupos de todos los tamaños</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Paquetes de transporte de varios días</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Información y recomendaciones locales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Coordinación con alojamientos y actividades</span>
              </li>
            </ul>
            <Link href="/contacto" className="text-green-700 hover:text-green-800 font-medium">
              Consultar sobre servicios personalizados
            </Link>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Servicio de tour personalizado"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Servicios Adicionales</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3 text-green-700">Transporte Corporativo</h3>
            <p>
              Servicios de transporte profesional para empresas, incluyendo traslados de empleados, transporte para
              eventos y traslados de clientes. Ofrecemos un servicio confiable y puntual con opciones de facturación
              corporativa.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3 text-green-700">Eventos Especiales</h3>
            <p>
              Transporte para bodas, reuniones familiares y otras ocasiones especiales en el Sur de Chile. Nos
              aseguramos de que su grupo viaje junto cómodamente y llegue a tiempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
