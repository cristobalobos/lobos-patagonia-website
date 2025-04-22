import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Contáctanos</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-16">
        ¿Listo para reservar tu transporte en el Sur de Chile? ¿Tienes preguntas sobre nuestros servicios o rutas? Ponte
        en contacto con nuestro equipo utilizando cualquiera de los métodos de contacto a continuación.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Ponte en Contacto</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Teléfono</h3>
                <p className="mb-1">Enrique Lobos (Conductor 1)</p>
                <a
                  href="tel:+56990957491"
                  className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
                >
                  +56 9 9095 7491
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">WhatsApp</span>
                </a>
                <p className="mt-3 mb-1">Óscar Lobos (Conductor 2)</p>
                <a
                  href="tel:+56993135819"
                  className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
                >
                  +56 9 9313 5819
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Correo Electrónico</h3>
                <a href="mailto:enriquelobosw@hotmail.com" className="text-green-700 hover:text-green-800 font-medium">
                  enriquelobosw@hotmail.com
                </a>
                <p className="text-sm text-stone-600 mt-1">Respondemos a todas las consultas dentro de las 24 horas</p>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-green-700">Envíanos un Mensaje</h2>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">WhatsApp</h3>
                <p className="mb-3">Para una respuesta más rápida, contáctanos directamente vía WhatsApp:</p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/56990957491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors"
                  >
                    Chatear con Enrique
                  </a>
                  <a
                    href="https://wa.me/56993135819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors ml-3"
                  >
                    Chatear con Óscar
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Ubicación</h3>
                <p className="mb-1">Puerto Varas, Región de Los Lagos</p>
                <p className="text-stone-600">Sur de Chile</p>
                <p className="text-sm text-stone-600 mt-1">
                  Proporcionamos servicio en toda la Región de Los Lagos y Los Ríos
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Este es un comentario en JSX 
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-green-700">Envíanos un Mensaje</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Tu Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Número de Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ingresa tu número de teléfono"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-1">
                Servicio de Interés
              </label>
              <select
                id="service"
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Selecciona un servicio</option>
                <option value="airport">Traslado al Aeropuerto</option>
                <option value="inter-regional">Viaje Interregional</option>
                <option value="custom">Tour Personalizado</option>
                <option value="group">Transporte para Grupos</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Tu Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Cuéntanos sobre tus necesidades de transporte"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition-colors w-full"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      */}
      </div>

      <div className="bg-stone-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Preguntas Frecuentes</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2 text-green-700">¿Con cuánta anticipación debo reservar?</h3>
            <p>
              Recomendamos reservar con al menos 48 horas de anticipación para rutas estándar, y 7 días para tours
              personalizados o viajes internacionales. Sin embargo, a veces podemos acomodar solicitudes de último
              momento.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-green-700">¿Qué métodos de pago aceptan?</h3>
            <p>
              Aceptamos efectivo (Pesos Chilenos o USD), tarjetas de crédito/débito y transferencias bancarias. Para
              clientes internacionales, también podemos organizar el pago a través de PayPal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-green-700">¿Proporcionan asientos para niños?</h3>
            <p>
              Sí, podemos proporcionar asientos para niños bajo petición. Por favor, infórmenos la edad y el peso del
              niño al hacer su reserva para que podamos preparar el asiento adecuado.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-green-700">
              ¿Pueden ayudar con documentos para cruzar la frontera?
            </h3>
            <p>
              Si bien no podemos procesar documentos por usted, podemos brindarle orientación sobre los requisitos para
              cruzar entre Chile y Argentina, y nuestros conductores tienen experiencia con los procedimientos.
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}
