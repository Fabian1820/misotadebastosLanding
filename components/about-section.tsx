import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Users, Star } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const credentials = [
  {
    icon: Award,
    title: "Certificación en Terapia Sistémica",
    description: "Instituto Europeo de Terapia Familiar",
  },
  {
    icon: BookOpen,
    title: "Máster en Coaching Familiar",
    description: "Universidad Complutense de Madrid",
  },
  {
    icon: Users,
    title: "+8 años de experiencia",
    description: "Acompañando familias y parejas",
  },
  {
    icon: Star,
    title: "Miembro certificado",
    description: "Asociación Española de Terapia Familiar",
  },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slide-left">
            <div className="relative">
              <img
                src="/professional-portrait-of-female-therapist--warm-sm.jpg"
                alt="María González - Terapeuta Sistémica y Life Coach Familiar"
                className="rounded-2xl shadow-xl w-full h-auto transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={200}>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre mí</h2>

            <div className="prose prose-lg text-muted-foreground mb-8 space-y-4">
              <p className="text-pretty leading-relaxed">
                Soy María González, terapeuta sistémica y life coach familiar con más de 8 años de experiencia ayudando
                a familias a recuperar su armonía y bienestar.
              </p>

              <p className="text-pretty leading-relaxed">
                Mi enfoque se basa en la terapia sistémica, que considera a la familia como un sistema interconectado
                donde cada miembro influye en el conjunto. Creo firmemente que cada familia tiene los recursos
                necesarios para sanar y crecer.
              </p>

              <p className="text-pretty leading-relaxed">
                Mi misión es acompañaros en este proceso de transformación, proporcionando herramientas prácticas y un
                espacio seguro donde podáis explorar nuevas formas de relacionaros y comunicaros.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={400 + index * 100}>
                  <Card className="border-border bg-card card-interactive h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 hover:bg-primary/20">
                          <credential.icon className="w-5 h-5 text-primary transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-card-foreground text-sm mb-1">{credential.title}</h3>
                          <p className="text-xs text-muted-foreground">{credential.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
