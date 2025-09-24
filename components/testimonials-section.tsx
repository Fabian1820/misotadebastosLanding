import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    name: "Laura M.",
    location: "Madrid",
    rating: 5,
    text: "Gracias a las sesiones con María comprendimos patrones que se repetían en nuestra familia y hoy nos comunicamos mucho mejor. Nuestros hijos también han notado el cambio positivo.",
    service: "Coaching Familiar",
  },
  {
    name: "Carlos y Ana",
    location: "Barcelona",
    rating: 5,
    text: "Llegamos a terapia en un momento muy difícil de nuestra relación. María nos ayudó a reconectar y a encontrar nuevas formas de entendernos. Estamos muy agradecidos.",
    service: "Terapia de Pareja",
  },
  {
    name: "Patricia R.",
    location: "Valencia",
    rating: 5,
    text: "Como madre soltera, necesitaba herramientas para gestionar mejor los conflictos con mi hijo adolescente. El acompañamiento de María ha sido transformador para ambos.",
    service: "Acompañamiento Parental",
  },
  {
    name: "Miguel y Carmen",
    location: "Sevilla",
    rating: 5,
    text: "Las sesiones online nos permitieron acceder a la terapia desde nuestra ciudad. La calidad del acompañamiento fue excelente y los resultados, muy positivos.",
    service: "Sesiones Online",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen las familias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Testimonios reales de familias que han transformado su dinámica y recuperado la armonía en sus relaciones.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <Card className="border-border bg-card card-interactive h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110"
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/30 transition-colors duration-300 hover:text-primary/50" />
                  </div>

                  <blockquote className="text-card-foreground mb-4 text-pretty leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale-up" delay={600} className="mt-12 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto card-interactive">
            <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
              ¿Quieres ser el próximo testimonio?
            </h3>
            <p className="text-muted-foreground text-pretty">
              Cada familia tiene una historia única de transformación. Permíteme acompañarte en la vuestra y descubrir
              todo el potencial que tenéis como sistema familiar.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
