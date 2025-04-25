import Image from "next/image"
import Link from "next/link"

export default function RoutesPricesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Routes & Prices</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        Transfer Lobos offers transportation services across the beautiful regions of Southern Chile. Below
        you'll find our most popular routes and approximate pricing. For custom routes or special requirements, please
        contact us directly.
      </p>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Our Service Areas</h2>
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Map of service areas in Southern Chile"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-center text-stone-600 italic">
          Interactive map showing our main service areas and routes in Southern Chile
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-green-700">Popular Routes</h2>

        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Montt to Puerto Varas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  A scenic route connecting the regional capital of Puerto Montt with the charming lakeside town of
                  Puerto Varas, offering views of Osorno Volcano and Lake Llanquihue.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Distance: 20 km (approximately 30 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Regular daily service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Door-to-door service available</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-green-800 mb-2">$15 USD</p>
                  <p className="text-sm text-stone-600 mb-4">per person, one way</p>
                  <Link
                    href="/contact"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Book This Route
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Montt to Bariloche (Argentina)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  An international route crossing the Andes Mountains, connecting Puerto Montt in Chile with the
                  beautiful mountain resort town of Bariloche in Argentina.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Distance: 230 km (approximately 6 hours including border crossing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Service available 3 times per week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Assistance with border crossing procedures</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-green-800 mb-2">$85 USD</p>
                  <p className="text-sm text-stone-600 mb-4">per person, one way</p>
                  <Link
                    href="/contact"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Book This Route
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Montt to Chiloé Island</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  A journey to the magical Chiloé Island, known for its unique culture, wooden churches, and palafito
                  houses. Includes ferry crossing.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Distance: 140 km (approximately 3.5 hours including ferry)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Daily service to Castro and Ancud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Ferry tickets included in price</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-green-800 mb-2">$45 USD</p>
                  <p className="text-sm text-stone-600 mb-4">per person, one way</p>
                  <Link
                    href="/contact"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Book This Route
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-green-700">Puerto Montt to Puyehue National Park</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <p className="mb-4">
                  A route to one of Chile's most beautiful national parks, featuring hot springs, volcanic landscapes,
                  and ancient forests.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Distance: 120 km (approximately 2.5 hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Service available 4 times per week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                    <span>Stops at major hotels and hot springs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-green-700 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-green-800 mb-2">$40 USD</p>
                  <p className="text-sm text-stone-600 mb-4">per person, one way</p>
                  <Link
                    href="/contact"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-block text-sm transition-colors"
                  >
                    Book This Route
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Airport Transfers</h2>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-medium mb-4 text-green-700">El Tepual Airport (PMC) Transfers</h3>
          <p className="mb-6">
            We offer reliable transfers to and from El Tepual Airport in Puerto Montt to various destinations in the Los
            Lagos Region. All transfers include meet-and-greet service and luggage assistance.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-stone-200 p-3 text-left">Destination</th>
                  <th className="border border-stone-200 p-3 text-left">Distance</th>
                  <th className="border border-stone-200 p-3 text-left">Duration</th>
                  <th className="border border-stone-200 p-3 text-left">Price (per person)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-stone-200 p-3">Puerto Montt City Center</td>
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
                  <td className="border border-stone-200 p-3">1 hour</td>
                  <td className="border border-stone-200 p-3">$35 USD</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="border border-stone-200 p-3">Osorno</td>
                  <td className="border border-stone-200 p-3">110 km</td>
                  <td className="border border-stone-200 p-3">1.5 hours</td>
                  <td className="border border-stone-200 p-3">$45 USD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-stone-600 italic">
            * Group discounts available for 4 or more passengers traveling together
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Custom Routes & Group Pricing</h2>
        <p className="mb-6">
          Need transportation to a destination not listed here? Planning a group trip or special event? We offer custom
          routes and special group rates throughout Southern Chile.
        </p>
        <Link
          href="/contact"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md inline-block transition-colors"
        >
          Request a Custom Quote
        </Link>
      </div>
    </div>
  )
}
