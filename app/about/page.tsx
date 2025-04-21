import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">About Us</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Family Story</h2>
          <p className="mb-4">
            Lobos Patagonia Travel was born from a deep love for the breathtaking landscapes of Southern Chile and a
            desire to share this natural beauty with visitors from around the world.
          </p>
          <p className="mb-4">
            Founded in 2010 by the Lobos family, our company began with a single van and a commitment to providing safe,
            reliable transportation across the challenging terrain of Patagonia.
          </p>
          <p>
            Today, we continue to operate as a family business, maintaining the same values of exceptional service,
            safety, and environmental responsibility that have guided us from the beginning.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="The Lobos family standing in front of their vans"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-700 text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Safety First</h3>
            <p>
              We prioritize the safety of our passengers above all else, with well-maintained vehicles and experienced
              drivers.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-700 text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Environmental Respect</h3>
            <p>
              We are committed to minimizing our environmental impact and preserving the natural beauty of Patagonia.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-700 text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Community Connection</h3>
            <p>We support local communities and strive to provide authentic experiences that benefit the region.</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div className="w-24 h-24 bg-stone-200 rounded-full shrink-0"></div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center sm:text-left">Carlos Lobos</h3>
              <p className="text-green-700 mb-3 text-center sm:text-left">Founder & Driver</p>
              <p>
                With over 20 years of driving experience in Patagonia, Carlos knows every road and trail in the region.
                His passion for the natural beauty of Southern Chile is evident in every journey.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div className="w-24 h-24 bg-stone-200 rounded-full shrink-0"></div>
            <div>
              <h3 className="text-xl font-medium mb-1 text-center sm:text-left">Miguel Lobos</h3>
              <p className="text-green-700 mb-3 text-center sm:text-left">Co-owner & Driver</p>
              <p>
                Miguel joined the family business in 2015, bringing his expertise in customer service and local history.
                He ensures that every passenger enjoys not just transportation, but an authentic Patagonian experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
