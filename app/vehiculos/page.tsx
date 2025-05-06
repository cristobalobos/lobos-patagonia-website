import Image from "next/image"

export default function VehiclesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Nuestros Vehículos</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        En Transfer Lobos, nos enorgullece ofrecer un servicio de transporte privado respaldado por una flota moderna y segura. <b>Contamos con dos vans Hyundai Staria US4 (modelos 2022)</b>, cuidadosamente mantenidas para garantizar comodidad, eficiencia y seguridad en cada viaje a través de la hermosa Región de Los Lagos.
      </p>

      <div className="space-y-16">
        {/* Vehicle 1 */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Hyundai Staria US4</h2>
          <p>Disfrute de un viaje confortable a bordo de nuestras vans, pensadas para grupos que buscan comodidad y confianza al trasladarse por el sur de Chile.
          </p>
          <br />
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
                  <span>Sistema de climatización dual (frío/calor)

                  </span>
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
                  <span>Suspensión mejorada para trayectos suaves en distintos terrenos

                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Maletero amplio con capacidad para equipaje de todos los pasajeros</span>
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
                  <span>Sistema de frenos ABS y control de estabilidad (ESP)</span>
                </li>

              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Asistente de viento cruzado para mayor estabilidad en rutas cordilleranas

                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Botiquín de primeros auxilios y kit de emergencia

                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-stone-100 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Mantenimiento de Vehículos</h2>
        <p className="max-w-3xl mx-auto">
          Nuestros vehículos son revisados periódicamente por personal especializado, cumpliendo altos estándares de seguridad y confort. Además, aplicamos prácticas sustentables en el mantenimiento para reducir el impacto ambiental de nuestras operaciones mientras protegemos la naturaleza que nos rodea.
        </p>
      </div>
    </div>
  )
}
