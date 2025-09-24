import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, Headphones, FileText } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const resources = [
  {
    icon: FileText,
    title: 'Guía gratuita: "Comunicación familiar efectiva"',
    description: "Descarga nuestra guía con 10 técnicas prácticas para mejorar la comunicación en casa.",
    type: "PDF gratuito",
    action: "Descargar gratis",
  },
  {
    icon: BookOpen,
    title: "Blog: Artículos sobre terapia sistémica",
    description: "Lee nuestros artículos sobre crianza, relaciones de pareja y dinámicas familiares.",
    type: "Artículos",
    action: "Leer artículos",
  },
  {
    icon: Headphones,
    title: 'Podcast: "Familias en armonía"',
    description: "Escucha episodios semanales con consejos prácticos y casos reales de éxito.",
    type: "Podcast",
    action: "Escuchar ahora",
  },
]

export function ResourcesSection() {
  return (
    <section id="recursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">Recursos gratuitos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Accede a contenido valioso que te ayudará a comenzar tu proceso de transformación familiar antes incluso de
            nuestra primera sesión.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card className="border-border bg-card card-interactive h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 hover:bg-primary/20">
                    <resource.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair text-card-foreground text-balance">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-pretty">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full btn-enhanced border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {resource.action}
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
