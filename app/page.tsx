import Image from "next/image"
import Link from "next/link"
import { MapPin, Plane, Compass, ArrowRight } from "lucide-react"
import LandingSection from "../components/LandingSection"


export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">

      {/* BODY PAGE */}

      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-[360px] md:h-[300px] flex items-center justify-center">
          <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

            {/* Logo más grande y con menos margen inferior */}
            <div className="mb-4 w-[280px] md:w-[320px] h-[220px] md:h-[220px] relative">
              <Image
                src="/img/transfer-lobos-banner.png"
                alt="Transfer Lobos Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Botón */}
            <Link
              href="https://wa.me/56990957491?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado"
              className="bg-green-800 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-md"
            >
              Reserva tu traslado <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      {/* Main Landing Section with Tabs for Mobile */}
      <LandingSection />


    </div >
  )
}
