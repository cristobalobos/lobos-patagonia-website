import Link from "next/link"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Transfer Lobos</h3>
            <p className="mb-4">
              Empresa de transporte de pasajeros que proporciona transporte seguro y cómodo a través de los
              hermosos paisajes del Sur de Chile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/vehiculos" className="hover:text-white transition-colors">
                  Vehículos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                Traslados al Aeropuerto
              </li>
              <li>
                Viajes Interurbanos
              </li>
              <li>
                Tours Personalizados
              </li>
              <li>
                Transporte para Grupos
              </li>
              <li>
                Servicios Corporativos
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0" />
                <div>
                  <p>Enrique: +56 9 9095 7491</p>
                  <p>Oscar: +56 9 9313 5819</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:enriquelobosw@hotmail.com" className="hover:text-white transition-colors">
                  enriquelobosw@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Transfer Lobos. Todos los derechos reservados.</p>
          <p className="mt-2 text-stone-400">
            Sitio Web construido por Cristobal Lobos.
          </p>
        </div>
      </div>
    </footer>
  )
}
