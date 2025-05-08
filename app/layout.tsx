import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Transfer Lobos | Traslados al Aeropuerto El Tepual y transporte en la Región de Los Lagos",
  description:
    "Especialistas en traslados al Aeropuerto El Tepual de Puerto Montt. Transporte privado de pasajeros con vans cómodas y seguras desde Puerto Varas, Frutillar y alrededores.",
  keywords:
    "transfer aeropuerto El Tepual, traslado aeropuerto Puerto Montt, transporte privado Región de Los Lagos, vans Puerto Varas, servicio de transporte sur de Chile",
  icons: {
    icon: "/img/logo-lobos.png",
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
        <Analytics />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
