import Image from "next/image"
import Link from "next/link"

export default function RoutesPricesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Recorridos y Tarifas</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        Transfer Lobos ofrece servicios de transporte en las hermosas regiones del Sur de Chile. A continuación
        encontrará nuestras rutas más populares y precios aproximados. Para rutas personalizadas o requisitos
        especiales, contáctenos directamente.
      </p>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Nuestras Áreas de Servicio</h2>
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-6">
          <div className="w-full h-[400px] rounded-md overflow-hidden">
            <iframe
              title="Mapa Región de Los Lagos"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d764564.5585227108!2d-72.573!3d-41.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1713892845613!5m2!1ses!2scl"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
        <p className="text-center text-stone-600 italic">
          Mapa interactivo que muestra nuestras principales áreas de servicio y rutas en el Sur de Chile
        </p>
      </div>



      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Traslados al Aeropuerto</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium mb-4 text-green-700">Traslados al Aeropuerto El Tepual Puerto Montt (PMC)</h3>
          <p className="mb-6">
            Ofrecemos traslados confiables desde y hacia el Aeropuerto El Tepual Puerto Montt en Puerto Montt a varios destinos dentro del <strong>radio urbano</strong> en la Región de Los Lagos.
          </p>


          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-stone-200 p-3 text-left">Destino</th>
                  <th className="border border-stone-200 p-3 text-left">Distancia</th>
                  <th className="border border-stone-200 p-3 text-left">Duración</th>
                  <th className="border border-stone-200 p-3 text-left">Precio por tramo (Hasta 3 personas)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-200 p-3">Puerto Montt</td>
                  <td className="border border-stone-200 p-3">15 km</td>
                  <td className="border border-stone-200 p-3">25 min</td>
                  <td className="border border-stone-200 p-3">$27.000</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-200 p-3">Puerto Varas</td>
                  <td className="border border-stone-200 p-3">30 km</td>
                  <td className="border border-stone-200 p-3">40 min</td>
                  <td className="border border-stone-200 p-3">$25.000</td>
                </tr>
                <tr>
                  <td className="border border-stone-200 p-3">Frutillar</td>
                  <td className="border border-stone-200 p-3">55 km</td>
                  <td className="border border-stone-200 p-3">1 hora</td>
                  <td className="border border-stone-200 p-3">$40.000</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-200 p-3">Osorno</td>
                  <td className="border border-stone-200 p-3">110 km</td>
                  <td className="border border-stone-200 p-3">1.5 horas</td>
                  <td className="border border-stone-200 p-3">$100.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-stone-600 italic">
            <a
              href="https://wa.me/56990957491?text=Hola%2C%20quisiera%20reservar%20un%20traslado%20al%20aeropuerto%20El%20Tepual%20de%20Puerto%20Montt."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
            >
              Reservar traslado
            </a>
          </p>
          <p className="mt-4 text-sm text-stone-600 italic">
            * Para grupos de 4 o más pasajeros, consultar por tarifa especial. Ofrecemos precios ajustados según el tamaño del grupo y el destino.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-green-700">Rutas Populares</h2>

        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Varas a Puerto Montt</h3>
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
                  <p className="text-3xl font-bold text-green-800 mb-2">$20.000</p>
                  <p className="text-sm text-stone-600 mb-4">hasta 3 personas, un trayecto</p>
                  <a
                    href="https://wa.me/56993135819?text=Hola%2C%20quisiera%20reservar%20un%20traslado%20desde%20Puerto%20Varas%20a%20Puerto%20Montt.."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Reservar Esta Ruta
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Varas a Frutillar</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  Traslado desde Puerto Varas a Frutillar, una ruta escénica a orillas del Lago Llanquihue con vistas al Volcán Osorno, ideal para viajes cómodos y seguros dentro de la región.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Servicio diario a Frutillar</span>
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
                  <p className="text-3xl font-bold text-green-800 mb-2">30.000</p>
                  <p className="text-sm text-stone-600 mb-4">hasta 3 personas, un trayecto</p>
                  <a
                    href="https://wa.me/56993135819?text=Hola%2C%20quisiera%20reservar%20un%20traslado%20desde%20Puerto%20Varas%20a%20Frutillar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Reservar Esta Ruta
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Varas a Osorno</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  Servicio de traslado entre Puerto Varas y Osorno, con horarios flexibles y asistencia personalizada durante el viaje.Servicio de traslado entre Puerto Varas y Osorno, con horarios flexibles y asistencia personalizada durante el viaje.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Distancia: 120 km (aproximadamente 2.5 horas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Servicio disponible</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-1">Desde</p>
                  <p className="text-3xl font-bold text-green-800 mb-2">$100.000</p>
                  <p className="text-sm text-stone-600 mb-4">hasta 3 personas, un trayecto</p>
                  <a
                    href="https://wa.me/56993135819?text=Hola%2C%20quisiera%20reservar%20un%20traslado%20desde%20Puerto%20Varas%20a%20Osorno."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Reservar Esta Ruta
                  </a>

                </div>
              </div>
            </div>
          </div>
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
