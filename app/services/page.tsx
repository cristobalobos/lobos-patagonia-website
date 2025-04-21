import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Our Services</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        Lobos Patagonia Travel offers a range of transportation services designed to meet the needs of travelers
        exploring the beautiful landscapes of Southern Chile. All our services prioritize safety, comfort, and
        environmental responsibility.
      </p>

      <div className="space-y-16">
        {/* Airport Transfers */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Airport Transfers</h2>
            <p className="mb-4">
              Start and end your journey with ease using our reliable airport transfer service. We provide punctual
              pickups and drop-offs at all regional airports in Southern Chile.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Meet and greet service at arrivals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Assistance with luggage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Flexible scheduling to accommodate flight changes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Direct transport to your accommodation</span>
              </li>
            </ul>
            <Link href="/contact" className="text-green-700 hover:text-green-800 font-medium">
              Book an airport transfer
            </Link>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Airport transfer service"
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
              alt="Inter-regional travel service"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Inter-Regional Travel</h2>
            <p className="mb-4">
              Explore the diverse regions of Southern Chile with our comfortable inter-regional transport service. We
              connect major cities, towns, and natural attractions throughout Patagonia.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Regular scheduled routes between popular destinations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Door-to-door service available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Comfortable vehicles with panoramic windows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Knowledgeable drivers familiar with the region</span>
              </li>
            </ul>
            <Link href="/routes-prices" className="text-green-700 hover:text-green-800 font-medium">
              View routes and prices
            </Link>
          </div>
        </div>

        {/* Custom Tours */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Custom Tours & Group Travel</h2>
            <p className="mb-4">
              Create your perfect Patagonian experience with our customized tour and group travel services. We work with
              you to design transportation that meets your specific needs and interests.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Tailored itineraries for groups of all sizes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Multi-day transportation packages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Local insights and recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-700 rounded-full mt-2"></span>
                <span>Coordination with accommodations and activities</span>
              </li>
            </ul>
            <Link href="/contact" className="text-green-700 hover:text-green-800 font-medium">
              Inquire about custom services
            </Link>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Custom tour service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Additional Services</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3 text-green-700">Corporate Transportation</h3>
            <p>
              Professional transportation services for businesses, including employee shuttles, event transportation,
              and client transfers. We offer reliable, punctual service with corporate billing options.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3 text-green-700">Special Events</h3>
            <p>
              Transportation for weddings, family reunions, and other special occasions in Southern Chile. We ensure
              your group travels together comfortably and arrives on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
