"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="w-5 h-5 text-primary animate-pulse-subtle" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Terapia Sistémica y Coaching Familiar
              </span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Recupera la armonía familiar con acompañamiento experto
            </h1>

            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Terapia sistémica y coaching para familias y parejas. Sesiones presenciales y online adaptadas a ti.
              Descubre herramientas prácticas para mejorar la comunicación y fortalecer los vínculos familiares.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contacto")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground group btn-enhanced"
              >
                Pedir cita
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("metodo")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground btn-enhanced"
              >
                Conocer el método
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <div className="relative">
              <img
                src="/warm-family-portrait-with-natural-lighting--peacef.jpg"
                alt="Familia feliz en un entorno natural y cálido"
                className="rounded-2xl shadow-2xl w-full h-auto transition-transform duration-500 hover:scale-105"
              />
              <AnimatedSection
                animation="scale-up"
                delay={600}
                className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border card-interactive"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-primary/20">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">+200 familias</p>
                    <p className="text-sm text-muted-foreground">han recuperado su armonía</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
