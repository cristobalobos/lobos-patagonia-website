import Image from "next/image"

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">F.A.Q (Preguntas Frecuentes)</h1>

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


    </div>
  )
}
