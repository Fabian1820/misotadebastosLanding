import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MessageCircle, Target, TrendingUp } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const steps = [
  {
    icon: Search,
    title: "Diagnóstico inicial",
    description: "Evaluamos la situación familiar actual y identificamos patrones y dinámicas.",
    details: ["Entrevista inicial", "Análisis sistémico", "Objetivos claros"],
  },
  {
    icon: MessageCircle,
    title: "Sesiones terapéuticas",
    description: "Trabajamos juntos en sesiones estructuradas para abordar los desafíos identificados.",
    details: ["Técnicas sistémicas", "Comunicación efectiva", "Resolución de conflictos"],
  },
  {
    icon: Target,
    title: "Herramientas prácticas",
    description: "Proporcionamos estrategias concretas que podéis aplicar en vuestro día a día.",
    details: ["Ejercicios familiares", "Técnicas de comunicación", "Recursos personalizados"],
  },
  {
    icon: TrendingUp,
    title: "Seguimiento y evolución",
    description: "Monitorizamos el progreso y ajustamos el enfoque según vuestras necesidades.",
    details: ["Evaluación continua", "Ajustes personalizados", "Consolidación de cambios"],
  },
]

export function MethodSection() {
  return (
    <section id="metodo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cómo trabajo: Mi método sistémico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un proceso estructurado y personalizado que respeta el ritmo de cada familia y se adapta a vuestras
            necesidades específicas.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <Card className="relative group card-interactive border-border bg-card h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover:scale-110">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl font-playfair text-card-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-pretty">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full transition-colors duration-300 group-hover:bg-primary/80" />
                        <span className="text-sm text-card-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale-up" delay={600} className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto card-interactive">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">Enfoque sistémico personalizado</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Cada familia es un sistema único con sus propias dinámicas, fortalezas y desafíos. Mi método se adapta a
              vuestra realidad específica, respetando vuestros valores y ritmo de cambio. No hay soluciones universales,
              pero sí herramientas efectivas que podemos personalizar para vosotros.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
