import Image from "next/image"
import { Phone, Mail, MessageCircle } from "lucide-react"

interface DriverProps {
    name: string
    role: string
    phone: string
    email: string
    whatsapp: string
    imageSrc: string
}

const Driver = ({ name, role, phone, email, whatsapp, imageSrc }: DriverProps) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
            <div className="relative w-full h-64 md:h-80">
                <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={`Foto de ${name}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
                <p className="text-green-800 font-medium mb-4">{role}</p>

                <div className="space-y-4 mt-2">
                    <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center text-gray-700 hover:text-green-800 transition-colors"
                    >
                        <Phone className="h-5 w-5 mr-3 text-green-800" />
                        <span className="text-lg">{phone}</span>
                    </a>

                    <a
                        href={`mailto:${email}`}
                        className="flex items-center text-gray-700 hover:text-green-800 transition-colors"
                    >
                        <Mail className="h-5 w-5 mr-3 text-green-800" />
                        <span className="text-lg">{email}</span>
                    </a>

                    <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-6 rounded-lg transition-colors mt-2 w-full"
                    >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        <span>Contactar por WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function DriverContactSection() {
    return (
        <section className="bg-gray-50 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestros Conductores</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Contáctese directamente con nuestros conductores profesionales para coordinar su traslado
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Driver
                        name="Enrique Lobos"
                        role="Conductor Principal"
                        phone="+56 9 1234 5678"
                        email="enrique@transferlobos.cl"
                        whatsapp="56912345678"
                        imageSrc="/images/driver-enrique.jpg"
                    />

                    <Driver
                        name="Óscar Lobos"
                        role="Conductor de Tours"
                        phone="+56 9 8765 4321"
                        email="oscar@transferlobos.cl"
                        whatsapp="56987654321"
                        imageSrc="/images/driver-oscar.jpg"
                    />
                </div>
            </div>
        </section>
    )
}
