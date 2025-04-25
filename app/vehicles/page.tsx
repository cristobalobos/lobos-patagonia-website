import Image from "next/image"

export default function VehiclesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Our Vehicles</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        At Lobos Transfer, we take pride in our well-maintained fleet of comfortable passenger vans. Each
        vehicle is regularly serviced to ensure safety, reliability, and a pleasant journey through the beautiful
        landscapes of Southern Chile.
      </p>

      <div className="space-y-16">
        {/* Vehicle 1 */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Hyundai Staria US4</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Hyundai Staria US4 exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Hyundai Staria US4 interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="bg-stone-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-4 text-green-700">Vehicle Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Model Year:</span>
                    <span>2020</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Passenger Capacity:</span>
                    <span>18 passengers</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Engine:</span>
                    <span>2.1L Turbo Diesel</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Transmission:</span>
                    <span>7-Speed Automatic</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Fuel Efficiency:</span>
                    <span>Eco-friendly Euro 6 standard</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mb-4 text-green-700">Comfort Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Reclining seats with ample legroom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Dual-zone climate control system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Panoramic windows with UV protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>USB charging ports at each seat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Enhanced suspension for comfortable travel on varied terrain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Ample luggage space for all passengers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4 text-green-700">Safety Features</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Three-point seatbelts for all passengers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Advanced braking system (ABS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Electronic Stability Program (ESP)</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Crosswind Assist for stability in mountain passes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>First aid kit and emergency equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vehicle 2 */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Toyota Hiace</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Toyota Hiace exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Toyota Hiace interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="bg-stone-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-4 text-green-700">Vehicle Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Model Year:</span>
                    <span>2021</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Passenger Capacity:</span>
                    <span>18 passengers</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Engine:</span>
                    <span>2.2L Turbo Diesel</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Transmission:</span>
                    <span>6-Speed Automatic</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Fuel Efficiency:</span>
                    <span>Low emission technology</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mb-4 text-green-700">Comfort Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Comfortable high-back seats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Efficient climate control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Large windows for scenic views</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Reading lights for each passenger</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Smooth suspension system for rough roads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Spacious overhead storage compartments</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4 text-green-700">Safety Features</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Vehicle Stability Control (VSC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Anti-lock Braking System (ABS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Hill-start Assist Control</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Emergency brake signal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                  <span>Safety kit with reflective vests and warning triangles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-stone-100 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Vehicle Maintenance</h2>
        <p className="max-w-3xl mx-auto">
          All our vehicles undergo regular professional maintenance and safety inspections to ensure reliability and
          passenger comfort. We prioritize eco-friendly practices in our maintenance routines to minimize our
          environmental impact while traveling through the pristine landscapes of Region de Los Lagos.
        </p>
      </div>
    </div>
  )
}
