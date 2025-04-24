import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const styles = {
  container: "container mx-auto px-4 py-16 max-w-5xl",
  title: "text-4xl font-bold mb-8 text-center text-green-800",
  paragraph: "text-lg text-center max-w-3xl mx-auto mb-16",
  grid: "grid md:grid-cols-2 gap-12 mb-16",
  subtitle: "text-2xl font-semibold mb-6 text-green-700",
  item: "flex items-start gap-4",
  iconBox: "bg-green-100 p-3 rounded-full text-green-700",
  label: "text-lg font-medium mb-1",
  link: "text-green-700 hover:text-green-800 font-medium flex items-center gap-2",
  tag: "bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full",
  button: "bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors",
  buttonAlt: "ml-3 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors",
  note: "text-sm text-stone-600 mt-1",
  location: "text-stone-600",
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contáctanos</h1>

      <p className={styles.paragraph}>
        ¿Listo para reservar tu transporte en el Sur de Chile? ¿Tienes preguntas sobre nuestros servicios o rutas? Ponte
        en contacto con nuestro equipo utilizando cualquiera de los métodos de contacto a continuación.
      </p>

      <div className={styles.grid}>
        {/* Columna de contacto directo */}
        <div>
          <h2 className={styles.subtitle}>Ponte en Contacto</h2>
          <div className="space-y-6">
            <div className={styles.item}>
              <div className={styles.iconBox}>
                <Phone size={24} />
              </div>
              <div>
                <h3 className={styles.label}>Teléfono</h3>
                <p className="mb-1">Enrique Lobos (Conductor 1)</p>
                <a href="tel:+56990957491" className={styles.link}>
                  +56 9 9095 7491
                  <span className={styles.tag}>WhatsApp</span>
                </a>
                <p className="mt-3 mb-1">Óscar Lobos (Conductor 2)</p>
                <a href="tel:+56993135819" className={styles.link}>
                  +56 9 9313 5819
                  <span className={styles.tag}>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconBox}>
                <Mail size={24} />
              </div>
              <div>
                <h3 className={styles.label}>Correo Electrónico</h3>
                <a href="mailto:enriquelobosw@hotmail.com" className={styles.link}>
                  enriquelobosw@hotmail.com
                </a>
                <p className={styles.note}>Respondemos a todas las consultas dentro de las 24 horas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna de WhatsApp y Ubicación */}
        <div>
          <h2 className={styles.subtitle}>Envíanos un Mensaje</h2>

          <div className={styles.item}>
            <div className={styles.iconBox}>
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className={styles.label}>WhatsApp</h3>
              <p className="mb-3">Para una respuesta más rápida, contáctanos directamente vía WhatsApp:</p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/56990957491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Chatear con Enrique
                </a>
                <a
                  href="https://wa.me/56993135819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buttonAlt}
                >
                  Chatear con Óscar
                </a>
              </div>
            </div>
          </div>

          <div className={`${styles.item} mt-6`}>
            <div className={styles.iconBox}>
              <MapPin size={24} />
            </div>
            <div>
              <h3 className={styles.label}>Ubicación</h3>
              <p className="mb-1">Puerto Varas, Región de Los Lagos</p>
              <p className={styles.location}>Sur de Chile</p>
              <p className={styles.note}>
                Proporcionamos servicio en toda la Región de Los Lagos y Los Ríos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
