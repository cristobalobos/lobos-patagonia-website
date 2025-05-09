import Image from "next/image"

// Estilos agrupados reutilizables
const containerStyle = "container mx-auto px-4 py-16 max-w-5xl";
const pageTitle = "text-4xl font-bold mb-8 text-center text-green-800";
const paragraphStyle = "text-lg text-center max-w-3xl mx-auto mb-16";
const sectionTitle = "text-2xl font-bold mb-6 text-green-700 text-left";
const boxStyle = "bg-white p-6 md:p-8 rounded-lg shadow-sm";
const subtitleStyle = "text-xl font-semibold mb-4 text-green-800 border-b border-green-200 pb-2";
const imageContainer = "aspect-video relative rounded-lg overflow-hidden";
const specBox = "bg-stone-50 p-6 rounded-lg";
const listBullet = "w-2 h-2 bg-green-700 rounded-full mt-2 shrink-0";
const listItem = "flex items-start gap-2";
const securityBox = "bg-green-50 border border-green-100 p-6 rounded-lg";

export default function VehiclesPage() {
  return (
    <div className={containerStyle}>
      <h1 className={pageTitle}>Nuestros Vehículos</h1>

      <p className={paragraphStyle}>
        En Transfer Lobos te llevamos con seguridad y confort por la Región de Los Lagos. Nuestra flota cuenta con <b>dos vans Hyundai Staria US4 (2022)</b>, modernas, espaciosas y mantenidas con alto estándar para que disfrutes cada trayecto con tranquilidad.
      </p>

      <div className="space-y-16">
        {/* Vehicle 1 */}
        <div className={boxStyle}>
          <h2 className={sectionTitle}>Hyundai Staria US4</h2>

          <p className="text-lg text-center max-w-3xl mx-auto mb-10">
            Disfrute de un viaje confortable a bordo de nuestras vans, pensadas para grupos que buscan comodidad y confianza al trasladarse por el sur de Chile.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
            {/* Imagen 1 */}
            <div className={imageContainer}>
              <Image
                src="/img/van_1.jpg?height=600&width=800"
                alt="Hyundai Staria US4 exterior"
                fill
                className="object-cover"
              />
            </div>

            {/* Especificaciones */}
            <div className={specBox}>
              <h3 className={subtitleStyle}>Especificaciones del Vehículo</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span className="font-medium">Año del Modelo:</span><span>2022</span></li>
                <li className="flex justify-between"><span className="font-medium">Capacidad de Pasajeros:</span><span>10 pasajeros</span></li>
                <li className="flex justify-between"><span className="font-medium">Motor:</span><span>2.1L Turbo Diésel</span></li>
                <li className="flex justify-between"><span className="font-medium">Transmisión:</span><span>Automática de 7 velocidades</span></li>
                <li className="flex justify-between"><span className="font-medium">Eficiencia de Combustible:</span><span>Estándar ecológico Euro 6</span></li>
              </ul>
            </div>

            {/* Imagen 2 */}
            <div className={imageContainer}>
              <Image
                src="/img/van_2.jpg?height=600&width=800"
                alt="Hyundai Staria US4 interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Comodidad */}
            <div className="text-justify">
              <h3 className={subtitleStyle}>Características de Comodidad</h3>
              <ul className="space-y-2 text-sm">
                {["Asientos reclinables con amplio espacio para las piernas",
                  "Sistema de climatización dual (frío/calor)",
                  "Ventanas panorámicas con protección UV",
                  "Puertos de carga USB en cada asiento",
                  "Suspensión mejorada para trayectos suaves en distintos terrenos",
                  "Maletero amplio con capacidad para equipaje de todos los pasajeros"].map((text, index) => (
                    <li key={index} className={listItem}>
                      <span className={listBullet}></span>
                      <span>{text}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Seguridad */}
          <div className={securityBox}>
            <h3 className={subtitleStyle}>Características de Seguridad</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {["Cinturones de seguridad de tres puntos para todos los pasajeros",
                "Sistema de frenos ABS y control de estabilidad (ESP)",
                "Asistente de viento cruzado para mayor estabilidad en rutas cordilleranas",
                "Botiquín de primeros auxilios y kit de emergencia"].map((text, index) => (
                  <li key={index} className={listItem}>
                    <span className={listBullet}></span>
                    <span>{text}</span>
                  </li>
                ))}
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
