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
                  icon={<Plane className="h-6 w-6 text-white" />}
                  title="Traslados al Aeropuerto"
                  description="Servicio directo y cómodo hacia/desde Aeropuerto El Tepual (Puerto Montt)."
                  imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ElTepual.jpg/1920px-ElTepual.jpg"
                  imageAlt="Aeropuerto El Tepual"
                />

                {/* Intercity Transfers */}
                <ServiceCard
                  icon={<MapPin className="h-6 w-6 text-white" />}
                  title="Traslados dentro de Puerto Varas"
                  description="Viajes dentro de Puerto Varas y hacia otras ciudades en su radio urbano"
                  imageSrc="/img/puerto_varas_city.jpg"
                  imageAlt="Ciudad de Puerto Varas"
                />

                {/* Private Tours */}
                <ServiceCard
                  icon={<Compass className="h-6 w-6 text-white" />}
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
                        <h3 className="font-medium text-gray-800">Traslado Aeropuerto</h3>
                        <p className="text-gray-600">Desde $25.000 (3 personas)</p>
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
                  name="Óscar Lobos"
                  phone="+56 9 9313 5819"
                  email="oscar@transferlobos.cl"
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
                icon={<Plane className="h-6 w-6 text-white" />}
                title="Traslados al Aeropuerto"
                description="Traslados desde y hacia el Aeropuerto El Tepual."
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ElTepual.jpg/1920px-ElTepual.jpg"
                imageAlt="Aeropuerto El Tepual"
              />

              {/* Intercity Transfers */}
              <ServiceCard
                icon={<MapPin className="h-6 w-6 text-white" />}
                title="Traslados dentro de Puerto Varas"
                description="Viajes dentro de Puerto Varas y hacia otras ciudades en su radio urbano"
                imageSrc="/img/puerto_varas_city.jpg"
                imageAlt="Ciudad de Puerto Varas"
              />

              {/* Private Tours */}
              <ServiceCard
                icon={<Compass className="h-6 w-6 text-white" />}
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
                        <h3 className="font-medium text-gray-800">Tarifa hacia el Aeropuerto El Tepual</h3>
                        <p className="text-gray-600">Desde $25.000</p>
                      </div>
                    </div>

                    <div className="flex items-center p-3">
                      <div className="bg-green-800 p-2 rounded-full mr-3">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">Tarifa dentro de Puerto Varas</h3>
                        <p className="text-gray-600">Desde $5.000 CLP</p>
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
                name="Óscar Lobos"
                phone="+56 9 9313 5819"
                email="oscar@transferlobos.cl"
                whatsapp="56987654321"
                imageSrc="/img/oscar-van.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}


function ServiceCard({ icon, title, description, imageSrc, imageAlt }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
      </div>
      <CardContent className="p-4 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-800 rounded-full -mt-10 mb-2 border-4 border-white">
          {icon}
        </div>
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
