import Image from "next/image"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
        <Card className="overflow-hidden h-full flex flex-col">
            <div className="relative w-full h-48">
                <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={`Foto de ${name} con vehículo`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>
            <CardContent className="p-4 text-center flex-grow flex flex-col">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-800 rounded-full -mt-10 mb-2 border-4 border-white">
                    <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{name}</h3>
                <p className="text-green-800 text-sm font-medium mb-3">{role}</p>

                <div className="space-y-3 mt-auto">
                    <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center justify-center text-gray-700 hover:text-green-800 transition-colors"
                    >
                        <Phone className="h-4 w-4 mr-2 text-green-800" />
                        <span className="text-sm">{phone}</span>
                    </a>

                    <a
                        href={`mailto:${email}`}
                        className="flex items-center justify-center text-gray-700 hover:text-green-800 transition-colors"
                    >
                        <Mail className="h-4 w-4 mr-2 text-green-800" />
                        <span className="text-sm">{email}</span>
                    </a>

                    <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2 px-4 rounded-lg transition-colors w-full text-sm"
                    >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        <span>Contactar por WhatsApp</span>
                    </a>
                </div>
            </CardContent>
        </Card>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Driver
                        name="Enrique Lobos"
                        role="Conductor Principal"
                        phone="+56 9 1234 5678"
                        email="enriquelobosw@hotmail.com"
                        whatsapp="56912345678"
                        imageSrc="/img/quique-van.jpg"
                    />

                    <div className="hidden md:block">
                        <Card className="h-full flex flex-col justify-center items-center p-6 bg-green-50">
                            <h3 className="text-xl font-bold text-green-800 mb-4">Servicio Personalizado</h3>
                            <p className="text-gray-700 text-center mb-6">
                                Nuestros conductores profesionales están disponibles para brindarle un servicio de transporte seguro y
                                confortable.
                            </p>
                            <a
                                href="https://wa.me/56912345678?text=Hola,%20me%20gustaría%20consultar%20por%20disponibilidad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-green-800 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                            >
                                Consultar Disponibilidad
                            </a>
                        </Card>
                    </div>

                    <Driver
                        name="Óscar Lobos"
                        role="Conductor de Tours"
                        phone="+56 9 8765 4321"
                        email="oscar@transferlobos.cl"
                        whatsapp="56987654321"
                        imageSrc="/img/oscar-van.jpg"
                    />
                </div>
            </div>
        </section>
    )
}
