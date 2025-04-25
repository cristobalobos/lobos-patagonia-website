import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Transfer Lobos | Transporte Familiar en el Sur de Chile",
  description:
    "Servicio de transporte de pasajeros seguro y confiable en el Sur de Chile y la Region de Los Lagos. Traslados al aeropuerto y viajes Interurbanos con cómodas vans de 18 pasajeros.",
  keywords: "transporte Region de Los Lagos, viajes Sur de Chile, traslados aeropuerto Chile, van pasajeros Region de Los Lagos",
  generator: 'v0.dev',
  icons: {
    icon: "/img/logo-lobos.png", // o favicon.png si prefieres
  },
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
