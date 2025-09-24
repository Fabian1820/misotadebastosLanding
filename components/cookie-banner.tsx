"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    // Here you would enable analytics tracking
    console.log("Analytics enabled")
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
    // Here you would disable analytics tracking
    console.log("Analytics disabled")
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="border-border bg-card shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-card-foreground text-sm mb-2">Uso de cookies</h3>
              <p className="text-xs text-muted-foreground text-pretty mb-4">
                Utilizamos cookies para mejorar tu experiencia y analizar el uso de nuestro sitio web. Puedes aceptar
                todas las cookies o rechazar las no esenciales.
              </p>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  onClick={acceptCookies}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                >
                  Aceptar
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={rejectCookies}
                  className="border-border text-card-foreground hover:bg-muted text-xs bg-transparent"
                >
                  Rechazar
                </Button>
              </div>
            </div>
            <button
              onClick={rejectCookies}
              className="text-muted-foreground hover:text-card-foreground"
              aria-label="Cerrar banner de cookies"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
