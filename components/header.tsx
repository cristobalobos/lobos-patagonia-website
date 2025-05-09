"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* resto del menú 
          <Link href="/" className="font-bold text-xl text-green-800">
            Transfer Lobos          </Link>*/}
          <Link href="/" className="font-bold text-xl text-green-800">
            <div
              className="bg-contain bg-no-repeat bg-center bg-transparent"
              style={{ backgroundImage: 'url("/img/logo-transferlobos-sololetras.png")', backgroundSize: 'contain', backgroundPosition: 'center', width: '150px', height: '80px' }}
            />
          </Link>


          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-stone-700 hover:text-green-700 transition-colors">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-stone-700 hover:text-green-700 transition-colors">
              Nosotros
            </Link>
            <Link href="/vehiculos" className="text-stone-700 hover:text-green-700 transition-colors">
              Vehículos
            </Link>
            <Link href="/clientes" className="text-stone-700 hover:text-green-700 transition-colors">
              Nuestros Clientes
            </Link>
            <Link href="/faq" className="text-stone-700 hover:text-green-700 transition-colors">
              Preguntas Frecuentes
            </Link>
            <Link
              href="/contacto"
              className="bg-green-800 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <button
            className="md:hidden text-stone-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-stone-700 hover:text-green-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="block text-stone-700 hover:text-green-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/clientes"
              className="block text-stone-700 hover:text-green-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nuestros Clientes
            </Link>
            <Link
              href="/vehiculos"
              className="block text-stone-700 hover:text-green-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vehículos
            </Link>
            <Link
              href="/faq"
              className="block text-stone-700 hover:text-green-700 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Preguntas Frecuentes
            </Link>
            <Link
              href="/contacto"
              className="block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
