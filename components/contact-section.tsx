"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timePreference: "",
    message: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale-up" className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-12 border border-border card-interactive">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-playfair text-2xl font-bold text-card-foreground mb-4">
                ¡Mensaje enviado con éxito!
              </h2>
              <p className="text-muted-foreground text-pretty">
                Gracias por contactarme. He recibido tu mensaje y me pondré en contacto contigo en un plazo máximo de 24
                horas para programar nuestra primera sesión.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reserva tu primera sesión
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estoy aquí para acompañarte. Completa el formulario y me pondré en contacto contigo para programar nuestra
            primera sesión.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection animation="slide-left" className="lg:col-span-1 space-y-6">
            <Card className="border-border bg-card card-interactive">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-card-foreground">Información de contacto</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Múltiples formas de ponerte en contacto conmigo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <MapPin className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="font-medium text-card-foreground">Madrid, España</p>
                    <p className="text-sm text-muted-foreground">Sesiones presenciales y online</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="font-medium text-card-foreground">+34 600 123 456</p>
                    <p className="text-sm text-muted-foreground">Lunes a viernes, 9:00-18:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="font-medium text-card-foreground">hola@mariagonzalez-coaching.com</p>
                    <p className="text-sm text-muted-foreground">Respuesta en 24h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Clock className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="font-medium text-card-foreground">Horarios flexibles</p>
                    <p className="text-sm text-muted-foreground">Incluidos fines de semana</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/5 rounded-xl p-6 card-interactive">
              <h3 className="font-playfair text-lg font-bold text-foreground mb-3">Primera sesión con descuento</h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Nuevos clientes disfrutan de un 20% de descuento en su primera sesión. Una oportunidad perfecta para
                conocer mi metodología.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-right" delay={200} className="lg:col-span-2">
            <Card className="border-border bg-card card-interactive">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-card-foreground">Formulario de contacto</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Cuéntame un poco sobre tu situación para preparar mejor nuestra primera sesión
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="input-enhanced border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="input-enhanced border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                        Teléfono (opcional)
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="input-enhanced border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-card-foreground mb-2">
                        Servicio de interés *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("service", value)} required>
                        <SelectTrigger className="input-enhanced border-border focus:border-primary">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coaching-familiar">Coaching Familiar</SelectItem>
                          <SelectItem value="terapia-sistemica">Terapia Sistémica</SelectItem>
                          <SelectItem value="acompanamiento-parental">Acompañamiento Parental</SelectItem>
                          <SelectItem value="sesiones-pareja">Sesiones de Pareja</SelectItem>
                          <SelectItem value="sesiones-online">Sesiones Online</SelectItem>
                          <SelectItem value="no-seguro">No estoy seguro/a</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timePreference" className="block text-sm font-medium text-card-foreground mb-2">
                      Preferencia horaria
                    </label>
                    <Select onValueChange={(value) => handleInputChange("timePreference", value)}>
                      <SelectTrigger className="input-enhanced border-border focus:border-primary">
                        <SelectValue placeholder="Selecciona tu preferencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manana">Mañanas (9:00-13:00)</SelectItem>
                        <SelectItem value="tarde">Tardes (14:00-18:00)</SelectItem>
                        <SelectItem value="noche">Noches (18:00-21:00)</SelectItem>
                        <SelectItem value="fin-semana">Fines de semana</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Cuéntame sobre tu situación *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe brevemente tu situación familiar y qué te gustaría trabajar en las sesiones..."
                      className="input-enhanced border-border focus:border-primary"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground text-pretty leading-relaxed">
                      Acepto el tratamiento de mis datos personales para la gestión de la consulta y el contacto
                      posterior. Los datos serán tratados de forma confidencial y no serán cedidos a terceros. Puedes
                      ejercer tus derechos de acceso, rectificación y supresión enviando un email a
                      hola@mariagonzalez-coaching.com. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className="w-full btn-enhanced bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Enviando mensaje...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
