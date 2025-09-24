import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Baby, Video, Clock } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const services = [
  {
    icon: Users,
    title: "Coaching Familiar",
    description: "Acompañamiento integral para mejorar la dinámica familiar y fortalecer los vínculos.",
    duration: "60 minutos",
    features: ["Análisis sistémico", "Herramientas prácticas", "Plan personalizado"],
  },
  {
    icon: Heart,
    title: "Terapia Sistémica",
    description: "Enfoque terapéutico que considera a la familia como un sistema interconectado.",
    duration: "75 minutos",
    features: ["Perspectiva sistémica", "Patrones familiares", "Cambio sostenible"],
  },
  {
    icon: Baby,
    title: "Acompañamiento Parental",
    description: "Apoyo especializado para padres en diferentes etapas del desarrollo infantil.",
    duration: "50 minutos",
    features: ["Crianza consciente", "Límites saludables", "Comunicación efectiva"],
  },
  {
    icon: Heart,
    title: "Sesiones de Pareja",
    description: "Terapia especializada para fortalecer la relación y mejorar la comunicación.",
    duration: "90 minutos",
    features: ["Comunicación asertiva", "Resolución de conflictos", "Intimidad emocional"],
  },
  {
    icon: Video,
    title: "Sesiones Online",
    description: "Todas nuestras modalidades disponibles en formato virtual para mayor comodidad.",
    duration: "Flexible",
    features: ["Plataforma segura", "Horarios flexibles", "Misma calidad"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios especializados para tu familia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada familia es única. Por eso ofrecemos diferentes modalidades de acompañamiento adaptadas a vuestras
            necesidades específicas.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card className="group card-interactive border-border bg-card h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl font-playfair text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full transition-colors duration-300 group-hover:bg-primary/80" />
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full btn-enhanced border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Más información
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
