"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MG</span>
            </div>
            <span className="font-playfair font-bold text-xl text-foreground">María González</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonios
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Pedir cita
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection("metodo")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Método
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Testimonios
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                Pedir cita
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
