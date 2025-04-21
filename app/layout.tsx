import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lobos Patagonia Travel | Transporte Familiar en el Sur de Chile",
  description:
    "Servicio de transporte de pasajeros seguro y confiable en el Sur de Chile y la Patagonia. Traslados al aeropuerto y viajes interregionales con cómodas vans de 18 pasajeros.",
  keywords: "transporte Patagonia, viajes Sur de Chile, traslados aeropuerto Chile, van pasajeros Patagonia",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-stone-50 text-stone-800`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
