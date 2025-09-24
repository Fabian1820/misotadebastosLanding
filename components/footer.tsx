import { Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MG</span>
              </div>
              <span className="font-playfair font-bold text-lg text-card-foreground">María González</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty mb-4">
              Life Coach Familiar y Terapeuta Sistémica especializada en acompañamiento familiar y de pareja.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              <span>Acompañando familias desde 2016</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Coaching Familiar
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Terapia Sistémica
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Acompañamiento Parental
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Sesiones de Pareja
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Sesiones Online
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#recursos" className="hover:text-primary transition-colors">
                  Guías gratuitas
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-primary transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hola@mariagonzalez-coaching.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+34 600 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="/aviso-legal" className="hover:text-primary transition-colors">
                Aviso Legal
              </a>
              <a href="/politica-privacidad" className="hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 María González. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
