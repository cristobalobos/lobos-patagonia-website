import Image from "next/image"

export default function VehiclesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Nuestros Vehículos</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        En Lobos Transfer Los Lagos, nos enorgullece contar con una flota compuesta por dos cómodas vans Hyundai Staria US4, modelos 2022.
        Ambos vehículos se mantienen en excelentes condiciones gracias a un programa de mantenimiento regular, lo que nos permite ofrecer un servicio seguro, confiable y confortable para recorrer los hermosos paisajes de la Región de Los Lagos.
      </p>

      <div className="space-y-16">
        {/* Vehicle 1 */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Hyundai Staria US4</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/img/van_1.jpg?height=600&width=800"
                  alt="Hyundai Staria US4 exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/img/van_2.jpg?height=600&width=800"
                  alt="Hyundai Staria US4 interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="bg-stone-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-4 text-green-700">Especificaciones del Vehículo</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Año del Modelo:</span>
                    <span>2022</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Capacidad de Pasajeros:</span>
                    <span>10 pasajeros</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Motor:</span>
                    <span>2.1L Turbo Diésel</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Transmisión:</span>
                    <span>Automática de 7 velocidades</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Eficiencia de Combustible:</span>
                    <span>Estándar ecológico Euro 6</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mb-4 text-green-700">Características de Comodidad</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Asientos reclinables con amplio espacio para las piernas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Sistema de control climático de doble zona</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Ventanas panorámicas con protección UV</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Puertos de carga USB en cada asiento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Suspensión mejorada para viajes cómodos en terrenos variados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Amplio espacio para equipaje para todos los pasajeros</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4 text-green-700">Características de Seguridad</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Cinturones de seguridad de tres puntos para todos los pasajeros</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Sistema de frenado avanzado (ABS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Programa Electrónico de Estabilidad (ESP)</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Asistencia de viento cruzado para estabilidad en pasos de montaña</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Botiquín de primeros auxilios y equipo de emergencia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-stone-100 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Mantenimiento de Vehículos</h2>
        <p className="max-w-3xl mx-auto">
          Todos nuestros vehículos se someten a mantenimiento profesional regular e inspecciones de seguridad para
          garantizar la confiabilidad y la comodidad de los pasajeros. Priorizamos prácticas ecológicas en nuestras
          rutinas de mantenimiento para minimizar nuestro impacto ambiental mientras viajamos a través de los prístinos
          paisajes de la Region de Los Lagos.
        </p>
      </div>
    </div>
  )
}
