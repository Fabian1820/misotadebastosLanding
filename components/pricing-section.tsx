import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const packages = [
  {
    name: "Sesión única",
    price: "80€",
    description: "Perfecta para una primera toma de contacto o consultas puntuales",
    features: [
      "Sesión de 60 minutos",
      "Evaluación inicial",
      "Recomendaciones personalizadas",
      "Recursos para llevar a casa",
    ],
    popular: false,
  },
  {
    name: "Paquete 6 sesiones",
    price: "420€",
    originalPrice: "480€",
    description: "El más popular. Ideal para trabajar objetivos específicos con seguimiento",
    features: [
      "6 sesiones de 60 minutos",
      "Plan de trabajo personalizado",
      "Herramientas y ejercicios",
      "Seguimiento entre sesiones",
      "Material de apoyo incluido",
    ],
    popular: true,
  },
  {
    name: "Programa familiar intensivo",
    price: "Consultar",
    description: "Acompañamiento integral para transformaciones profundas y duraderas",
    features: [
      "Programa de 3 meses",
      "Sesiones semanales",
      "Evaluación familiar completa",
      "Plan de acción detallado",
      "Soporte continuo",
      "Sesiones de seguimiento",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="precios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">Programas y precios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Elige la modalidad que mejor se adapte a vuestras necesidades y presupuesto. Todos los programas incluyen mi
            acompañamiento personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in-up ${pkg.popular ? "ring-2 ring-primary" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Más popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl font-playfair text-card-foreground">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  {pkg.originalPrice && <p className="text-sm text-green-600 font-medium mt-1">Ahorra 60€</p>}
                </div>
                <CardDescription className="text-muted-foreground text-pretty">{pkg.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "variant-outline border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
                >
                  {pkg.price === "Consultar" ? "Solicitar información" : "Reservar ahora"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            * Todos los precios incluyen IVA. Posibilidad de pago fraccionado. Primera sesión con descuento del 20% para
            nuevos clientes.
          </p>
        </div>
      </div>
    </section>
  )
}
