import { Phone, Mail, MapPin } from "lucide-react";


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">Contáctanos</h1>

      <p className="text-lg text-center max-w-2xl mx-auto mb-12">
        ¿Listo para reservar tu transporte? ¿Tienes preguntas sobre nuestros servicios? Contáctanos por WhatsApp, llamada telefónica o correo electrónico. Estamos para ayudarte.
      </p>

      <div className="space-y-12">
        {/* Teléfonos y WhatsApp */}
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full text-green-700 shrink-0">
            <Phone size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-green-700">Teléfonos & WhatsApp</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Enrique Lobos</p>
                <a href="tel:+56990957491" className="text-green-700 hover:text-green-800 block">
                  +56 9 9095 7491
                </a>
                <a
                  href="https://wa.me/56990957491?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md mt-2 transition-colors text-sm"
                >
                  Chatear por WhatsApp
                </a>
              </div>
              <div>
                <p className="font-medium mt-6">Oscar Lobos</p>
                <a href="tel:+56993135819" className="text-green-700 hover:text-green-800 block">
                  +56 9 9313 5819
                </a>
                <a
                  href="https://wa.me/56993135819?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md mt-2 transition-colors text-sm"
                >
                  Chatear por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Correo */}
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full text-green-700 shrink-0">
            <Mail size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-green-700">Correo Electrónico</h2>
            <a
              href="mailto:enriquelobosw@hotmail.com"
              className="text-green-700 hover:text-green-800 font-medium block"
            >
              enriquelobosw@hotmail.com
            </a>
            <p className="text-stone-600 text-sm mt-1">Respondemos a todas las consultas dentro de las 24 horas.</p>
          </div>
        </div>

        {/* Ubicación */}
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-full text-green-700 shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-green-700">Ubicación</h2>
            <p className="mb-1">Puerto Varas, Región de Los Lagos</p>
            <p className="text-stone-600">Sur de Chile</p>
            <p className="text-sm text-stone-600 mt-1">
              Proporcionamos servicio en toda la Región de Los Lagos y Los Ríos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
