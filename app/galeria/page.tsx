import Image from "next/image"

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Galería</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        Experimente la comodidad y estilo de nuestros viajes a bordo de nuestras modernas Hyundai Staria US4 del 2021 y 2022.
        Explore fotos de nuestros vehículos y los increíbles paisajes de la Región de Los Lagos.
      </p>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-green-700">Nuestros Vehículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/img/van_1.jpg?height=600&width=600"
              alt="Hyundai Staria US4 exterior 2022"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/img/van_2.jpg?height=600&width=600"
              alt="Hyundai Staria US4 interior 2021"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/img/van_1.jpg?height=600&width=600"
              alt="Asientos traseros Hyundai Staria"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/img/van_2.jpg?height=600&width=600"
              alt="Interior con luz ambiental Hyundai Staria"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/img/van_1.jpg?height=600&width=600"
              alt="Espacio de equipaje Hyundai Staria"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/img/van_2.jpg?height=600&width=600"
              alt="Panel frontal Hyundai Staria"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-green-700">Paisajes del Sur de Chile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Volcán Osorno y Lago Llanquihue"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Iglesias de madera de Chiloé"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Bosques y caminos de la Región de Los Lagos"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Comparte Tu Viaje</h2>
        <p className="mb-6">
          ¿Has viajado con Lobos Transfer Los Lagos? ¡Nos encantaría ver tus fotos! Etiquétanos en redes sociales o envía
          tus imágenes a nuestro correo electrónico para ser destacado en nuestra galería.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
          >
            #LobosTransferLosLagos
          </a>
          <a
            href="mailto:fotos@lobostransfer.cl"
            className="bg-stone-200 hover:bg-stone-300 px-4 py-2 rounded-md inline-block text-sm transition-colors"
          >
            fotos@lobostransfer.cl
          </a>
        </div>
      </div>
    </div>
  )
}
