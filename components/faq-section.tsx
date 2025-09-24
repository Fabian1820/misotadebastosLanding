import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto dura cada sesión?",
    answer:
      "Las sesiones individuales y familiares duran 60 minutos, mientras que las sesiones de pareja tienen una duración de 90 minutos para permitir un trabajo más profundo. Las sesiones online tienen la misma duración que las presenciales.",
  },
  {
    question: "¿Ofrecéis sesiones online?",
    answer:
      "Sí, todas nuestras modalidades están disponibles en formato online a través de una plataforma segura y confidencial. La calidad del acompañamiento es la misma que en las sesiones presenciales, con la comodidad de poder realizarlas desde casa.",
  },
  {
    question: "¿Cómo se garantiza la confidencialidad?",
    answer:
      "Toda la información compartida en las sesiones está protegida por el secreto profesional. Cumplimos estrictamente con la normativa de protección de datos (GDPR) y utilizamos plataformas seguras para las sesiones online.",
  },
  {
    question: "¿Cuántas sesiones necesitaré?",
    answer:
      "Cada familia es única y el número de sesiones varía según los objetivos y la complejidad de la situación. Generalmente, se observan cambios positivos entre las 4-6 sesiones, aunque algunos procesos pueden requerir más tiempo.",
  },
  {
    question: "¿Qué pasa si necesito cancelar una sesión?",
    answer:
      "Puedes cancelar o reprogramar tu sesión con al menos 24 horas de antelación sin coste adicional. Las cancelaciones con menos de 24 horas de antelación pueden conllevar el cobro del 50% de la sesión.",
  },
  {
    question: "¿Trabajáis con adolescentes?",
    answer:
      "Sí, tengo experiencia trabajando con familias con hijos adolescentes. El enfoque sistémico es especialmente efectivo en esta etapa, ya que considera las dinámicas familiares y los cambios propios de la adolescencia.",
  },
  {
    question: "¿Qué diferencia hay entre coaching y terapia?",
    answer:
      "El coaching familiar se centra en objetivos específicos y herramientas prácticas para el presente y futuro. La terapia sistémica profundiza más en patrones familiares y puede abordar aspectos del pasado. Ambos enfoques se complementan según las necesidades de cada familia.",
  },
  {
    question: "¿Aceptáis seguros médicos?",
    answer:
      "Actualmente no trabajamos directamente con seguros médicos, pero podemos proporcionarte la documentación necesaria para que puedas solicitar el reembolso a tu compañía aseguradora si tu póliza incluye terapia psicológica.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Resolvemos las dudas más comunes sobre nuestros servicios, metodología y proceso terapéutico.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-medium text-card-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-pretty leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-xl font-bold text-foreground mb-3">¿Tienes más preguntas?</h3>
            <p className="text-muted-foreground mb-4 text-pretty">
              No dudes en contactarme. Estaré encantada de resolver cualquier duda que tengas sobre el proceso
              terapéutico.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Contactar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
