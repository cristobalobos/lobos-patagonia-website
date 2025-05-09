"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Plane, MapPin, Compass, Phone, Mail, MessageCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingSection() {
  const [activeTab, setActiveTab] = useState("services")

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Mobile View with Tabs */}
        <div className="md:hidden">
          <Tabs defaultValue="services" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="services" className="text-sm">
                Servicios
              </TabsTrigger>
              <TabsTrigger value="prices" className="text-sm">
                Tarifas
              </TabsTrigger>
              <TabsTrigger value="contact" className="text-sm">
                Contacto
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="mt-0">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Nuestros Servicios</h2>
              <div className="space-y-4">
                {/* Airport Transfer */}
                <ServiceCard

                  title="Traslados al Aeropuerto"
                  description="Servicio directo y cómodo hacia/desde Aeropuerto El Tepual (Puerto Montt)."
                  imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ElTepual.jpg/1920px-ElTepual.jpg"
                  imageAlt="Aeropuerto El Tepual"
                />

                {/* Intercity Transfers */}
                <ServiceCard

                  title="Traslados dentro de Puerto Varas"
                  description="Viajes dentro de Puerto Varas y hacia otras ciudades en su radio urbano"
                  imageSrc="/img/puerto_varas_city.jpg"
                  imageAlt="Ciudad de Puerto Varas"
                />

                {/* Private Tours */}
                <ServiceCard

                  title="Tours Privados"
                  description="Excursiones a cualquier punto atractivo turistico de Región de Los Lagos. "
                  imageSrc="/img/Saltos_del_petrohue_01b.jpg"
                  imageAlt="Parque Nacional Vicente Pérez Rosales"
                />
              </div>
            </TabsContent>

            <TabsContent value="prices" className="mt-0">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Tarifas Referenciales</h2>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center p-2 border-b border-gray-100">
                      <div className="bg-green-800 p-2 rounded-full mr-3">
                        <Plane className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Aeropuerto El Tepual (Puerto Montt)</h3>
                        <p className="text-gray-600">Desde $25.000 (radio urbano)</p>
                      </div>
                    </div>

                    <div className="flex items-center p-2 border-b border-gray-100">
                      <div className="bg-green-800 p-2 rounded-full mr-3">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Traslados en Puerto Varas</h3>
                        <p className="text-gray-600">Desde $5.000 (3 personas)</p>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-0">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Nuestros Conductores</h2>
              <div className="space-y-6">
                {/* Driver 1 */}
                <DriverCard
                  name="Enrique Lobos"
                  phone="+56 9 9095 7491"
                  email="enriquelobosw@hotmail.com"
                  whatsapp="56990957491"
                  imageSrc="/img/quique-van.jpg"
                />

                {/* Driver 2 */}
                <DriverCard
                  name="Oscar Lobos"
                  phone="+56 9 9313 5819"
                  email="osmaloto@hotmail.com"
                  whatsapp="56993135819"
                  imageSrc="/img/oscar-van.jpg"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Services Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Nuestros Servicios</h2>
            <div className="grid grid-cols-3 gap-6">
              {/* Airport Transfer */}
              <ServiceCard

                title="Traslados al Aeropuerto"
                description="Traslados desde y hacia el Aeropuerto El Tepual."
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ElTepual.jpg/1920px-ElTepual.jpg"
                imageAlt="Aeropuerto El Tepual"
              />

              {/* Intercity Transfers */}
              <ServiceCard

                title="Traslados dentro de Puerto Varas"
                description="Viajes dentro de Puerto Varas y hacia otras ciudades en su radio urbano"
                imageSrc="/img/puerto_varas_city.jpg"
                imageAlt="Ciudad de Puerto Varas"
              />

              {/* Private Tours */}
              <ServiceCard

                title="Tours Privados"
                description="Excursiones a cualquier punto atractivo turistico de Región de Los Lagos."
                imageSrc="/img/Saltos_del_petrohue_01b.jpg"
                imageAlt="Parque Nacional Vicente Pérez Rosales"
              />
            </div>
          </div>

          {/* Prices Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Tarifas Referenciales</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center p-3">
                      <div className="bg-green-800 p-2 rounded-full mr-3">
                        <Plane className="h-5 w-5 text-white" />
                      </div>
                      <div>

                        <h3 className="font-medium text-gray-800">Aeropuerto El Tepual (Puerto Montt)</h3>
                        <p className="text-gray-600">Desde $25.000 (radio urbano)</p>

                      </div>
                    </div>

                    <div className="flex items-center p-3">
                      <div className="bg-green-800 p-2 rounded-full mr-3">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Tarifa dentro de Puerto Varas</h3>
                        <p className="text-gray-600">Desde $5.000</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Drivers Contact Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Nuestros Conductores</h2>
            <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Driver 1 */}
              <DriverCard
                name="Enrique Lobos"
                phone="+56 9 9095 7491"
                email="enriquelobosw@hotmail.com"
                whatsapp="56912345678"
                imageSrc="/img/quique-van.jpg"
              />

              {/* Driver 2 */}
              <DriverCard
                name="Oscar Lobos"
                phone="+56 9 9313 5819"
                email="osmaloto@hotmail.com"
                whatsapp="56987654321"
                imageSrc="/img/oscar-van.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}


function ServiceCard({ title, description, imageSrc, imageAlt }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

interface DriverCardProps {
  name: string
  phone: string
  email: string
  whatsapp: string
  imageSrc: string
}

function DriverCard({ name, phone, email, whatsapp, imageSrc }: DriverCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`Foto de ${name} con vehículo`}
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <CardContent className="p-4 text-center flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{name}</h3>


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
            href={`https://wa.me/${whatsapp}?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20traslado`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-full shadow-md text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>&nbsp;
            <span>Contactar chofer por WhatsApp</span>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
