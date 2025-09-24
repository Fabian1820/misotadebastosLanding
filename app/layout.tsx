import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Life Coaching Familiar y Terapia Sistémica — María González | Madrid",
  description:
    "Acompañamiento profesional para familias y parejas en España. Terapia sistémica práctica y respetuosa. Reserva tu primera sesión.",
  keywords:
    "terapia sistémica familia, life coach familiar, terapeuta sistémica España, coaching parental, terapia de pareja online, acompañamiento familiar",
  openGraph: {
    title: "Life Coaching Familiar y Terapia Sistémica — María González",
    description:
      "Acompañamiento profesional para familias y parejas en España. Terapia sistémica práctica y respetuosa.",
    type: "website",
    locale: "es_ES",
  },
  robots: "index, follow",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "María González - Life Coach Familiar y Terapeuta Sistémica",
              description:
                "Servicios de coaching familiar y terapia sistémica para familias, parejas y padres en España",
              url: "https://mariagonzalez-coaching.com",
              telephone: "+34-600-123-456",
              email: "hola@mariagonzalez-coaching.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
              serviceType: ["Coaching Familiar", "Terapia Sistémica", "Acompañamiento Parental", "Terapia de Pareja"],
              areaServed: "España",
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
