import Image from "next/image"
import Link from "next/link"

export default function RoutesPricesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Recorridos y Tarifas</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        Lobos Patagonia Travel ofrece servicios de transporte en las hermosas regiones del Sur de Chile. A continuación
        encontrará nuestras rutas más populares y precios aproximados. Para rutas personalizadas o requisitos
        especiales, contáctenos directamente.
      </p>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Nuestras Áreas de Servicio</h2>
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Mapa de áreas de servicio en el Sur de Chile"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-center text-stone-600 italic">
          Mapa interactivo que muestra nuestras principales áreas de servicio y rutas en el Sur de Chile
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-green-700">Rutas Populares</h2>

        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Montt a Puerto Varas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  Una ruta panorámica que conecta la capital regional de Puerto Montt con la encantadora ciudad lacustre
                  de Puerto Varas, ofreciendo vistas del Volcán Osorno y el Lago Llanquihue.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Distancia: 20 km (aproximadamente 30 minutos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Servicio diario regular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Servicio puerta a puerta disponible</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-1">Desde</p>
                  <p className="text-3xl font-bold text-green-800 mb-2">$15 USD</p>
                  <p className="text-sm text-stone-600 mb-4">por persona, un trayecto</p>
                  <Link
                    href="/contacto"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Reservar Esta Ruta
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Montt a Bariloche (Argentina)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  Una ruta internacional que cruza la Cordillera de los Andes, conectando Puerto Montt en Chile con la
                  hermosa ciudad turística de montaña de Bariloche en Argentina.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Distancia: 230 km (aproximadamente 6 horas incluyendo cruce de frontera)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Servicio disponible 3 veces por semana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Asistencia con procedimientos de cruce de frontera</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-1">Desde</p>
                  <p className="text-3xl font-bold text-green-800 mb-2">$85 USD</p>
                  <p className="text-sm text-stone-600 mb-4">por persona, un trayecto</p>
                  <Link
                    href="/contacto"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Reservar Esta Ruta
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Montt a Isla de Chiloé</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  Un viaje a la mágica Isla de Chiloé, conocida por su cultura única, iglesias de madera y casas
                  palafito. Incluye cruce en ferry.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Distancia: 140 km (aproximadamente 3.5 horas incluyendo ferry)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Servicio diario a Castro y Ancud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Boletos de ferry incluidos en el precio</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-1">Desde</p>
                  <p className="text-3xl font-bold text-green-800 mb-2">$45 USD</p>
                  <p className="text-sm text-stone-600 mb-4">por persona, un trayecto</p>
                  <Link
                    href="/contacto"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Reservar Esta Ruta
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Montt al Parque Nacional Puyehue</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  Una ruta a uno de los parques nacionales más hermosos de Chile, con aguas termales, paisajes
                  volcánicos y bosques antiguos.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Distancia: 120 km (aproximadamente 2.5 horas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Servicio disponible 4 veces por semana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Paradas en los principales hoteles y aguas termales</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-1">Desde</p>
                  <p className="text-3xl font-bold text-green-800 mb-2">$40 USD</p>
                  <p className="text-sm text-stone-600 mb-4">por persona, un trayecto</p>
                  <Link
                    href="/contacto"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Reservar Esta Ruta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Traslados al Aeropuerto</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium mb-4 text-green-700">Traslados al Aeropuerto El Tepual (PMC)</h3>
          <p className="mb-6">
            Ofrecemos traslados confiables hacia y desde el Aeropuerto El Tepual en Puerto Montt a varios destinos en la
            Región de Los Lagos. Todos los traslados incluyen servicio de recepción y asistencia con el equipaje.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-stone-200 p-3 text-left">Destino</th>
                  <th className="border border-stone-200 p-3 text-left">Distancia</th>
                  <th className="border border-stone-200 p-3 text-left">Duración</th>
                  <th className="border border-stone-200 p-3 text-left">Precio (por persona)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-200 p-3">Centro de Puerto Montt</td>
                  <td className="border border-stone-200 p-3">15 km</td>
                  <td className="border border-stone-200 p-3">25 min</td>
                  <td className="border border-stone-200 p-3">$20 USD</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-200 p-3">Puerto Varas</td>
                  <td className="border border-stone-200 p-3">30 km</td>
                  <td className="border border-stone-200 p-3">40 min</td>
                  <td className="border border-stone-200 p-3">$25 USD</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 p-3">Frutillar</td>
                  <td className="border border-stone-200 p-3">55 km</td>
                  <td className="border border-stone-200 p-3">1 hora</td>
                  <td className="border border-stone-200 p-3">$35 USD</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-200 p-3">Osorno</td>
                  <td className="border border-stone-200 p-3">110 km</td>
                  <td className="border border-stone-200 p-3">1.5 horas</td>
                  <td className="border border-stone-200 p-3">$45 USD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-stone-600 italic">
            * Descuentos para grupos disponibles para 4 o más pasajeros que viajen juntos
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Rutas Personalizadas y Precios para Grupos</h2>
        <p className="mb-6">
          ¿Necesita transporte a un destino que no figura aquí? ¿Está planeando un viaje en grupo o un evento especial?
          Ofrecemos rutas personalizadas y tarifas especiales para grupos en todo el Sur de Chile.
        </p>
        <Link
          href="/contacto"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md inline-block transition-colors"
        >
          Solicitar un Presupuesto Personalizado
        </Link>
      </div>
    </div>
  )
}
