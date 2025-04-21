import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Contact Us</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        Ready to book your transportation in Southern Chile? Have questions about our services or routes? Get in touch
        with our team using any of the contact methods below.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="mb-1">Carlos Lobos (Driver 1)</p>
                <a
                  href="tel:+56912345678"
                  className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
                >
                  +56 9 1234 5678
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">WhatsApp</span>
                </a>
                <p className="mt-3 mb-1">Miguel Lobos (Driver 2)</p>
                <a
                  href="tel:+56987654321"
                  className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
                >
                  +56 9 8765 4321
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a href="mailto:info@lobospatagonia.com" className="text-green-700 hover:text-green-800 font-medium">
                  info@lobospatagonia.com
                </a>
                <p className="text-sm text-stone-600 mt-1">We respond to all inquiries within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">WhatsApp</h3>
                <p className="mb-3">For fastest response, contact us directly via WhatsApp:</p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/56912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors"
                  >
                    Chat with Carlos
                  </a>
                  <a
                    href="https://wa.me/56987654321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors ml-3"
                  >
                    Chat with Miguel
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="mb-1">Puerto Montt, Los Lagos Region</p>
                <p className="text-stone-600">Southern Chile</p>
                <p className="text-sm text-stone-600 mt-1">
                  We provide service throughout the Los Lagos and Los Ríos regions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Send Us a Message</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">
                Service Interested In
              </label>
              <select
                id="service"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a service</option>
                <option value="airport">Airport Transfer</option>
                <option value="inter-regional">Inter-Regional Travel</option>
                <option value="custom">Custom Tour</option>
                <option value="group">Group Transportation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tell us about your transportation needs"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="bg-stone-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Frequently Asked Questions</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-green-700">How far in advance should I book?</h3>
            <p>
              We recommend booking at least 48 hours in advance for standard routes, and 7 days for custom tours or
              international travel. However, we can sometimes accommodate last-minute requests.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-green-700">What payment methods do you accept?</h3>
            <p>
              We accept cash (Chilean Pesos or USD), credit/debit cards, and bank transfers. For international clients,
              we can also arrange payment through PayPal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-green-700">Do you provide child seats?</h3>
            <p>
              Yes, we can provide child seats upon request. Please let us know the age and weight of the child when
              making your booking so we can prepare the appropriate seat.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-green-700">Can you help with border crossing documents?</h3>
            <p>
              While we cannot process documents for you, we can provide guidance on the requirements for crossing
              between Chile and Argentina, and our drivers are experienced with the procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
