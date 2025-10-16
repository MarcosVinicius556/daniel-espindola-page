import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ReCaptchaProviderClient from "@/components/ReCaptchaProvider";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Daniel Espíndola | Imóveis de Alto Padrão em Itapema - SC",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  description: "Daniel Espíndola Investimentos Imobiliários oferece imóveis de alto padrão em Itapema, SC. Conheça coberturas, casas e apartamentos exclusivos com atendimento personalizado e segurança.",
  keywords: "Itapema, imóveis de alto padrão, Daniel Espíndola, apartamentos de luxo, casas à venda, cobertura, imóveis exclusivos",  
  authors: [{ name: "Daniel Espíndola" }],
  creator: "Daniel Espíndola",
  publisher: "Daniel Espíndola",
  alternates: {
    canonical: "https://www.danielespindola.com.br/",
  },
  openGraph: {
    title: "Daniel Espíndola | Imóveis de Alto Padrão em Itapema - SC",
    description:
      "Encontre coberturas, casas e apartamentos exclusivos em Itapema. Atendimento personalizado e imóveis de luxo com segurança e curadoria.",
    url: "https://www.danielespindola.com.br/",
    siteName: "Daniel Espíndola Imóveis",
    images: [
      {
        url: "https://www.danielespindola.com.br/images/logo/horzt branco@2x.png",
        width: 1200,
        height: 630,
        alt: "Imóveis de alto padrão Daniel Espíndola",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Espíndola | Imóveis de Alto Padrão em Itapema - SC",
    description:
      "Coberturas, casas e apartamentos exclusivos em Itapema. Atendimento personalizado e imóveis de luxo com segurança e curadoria.",
    site: "@DanielEspindola",
    creator: "@DanielEspindola",
    images: ["https://www.danielespindola.com.br/images/logo/horzt branco@2x.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />
        <meta
          name="google-site-verification"
          content="tbd"
        />
      </head>
      <body className={`antialiased`}>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel Espindola",
              url: "https://danielespindola.com.br",
              image: "https://danielespindola.com.br/images/profile/daniel_espindola.png",
              sameAs: [
                "https://www.instagram.com/danielespindolaimobiliaria",
                "https://www.linkedin.com/in/daniel-espindola",
                "https://www.facebook.com/danielespindolaimobiliaria",
              ],
              jobTitle: "Corretor de Imóveis",
              worksFor: {
                "@type": "Organization",
                name: "Daniel Espindola Imóveis",
                url: "https://danielespindola.com.br",
              },
              telephone: "+55-48-99610-6477",
              email: "contato@danielespindola.com.br",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Nereu Ramos, 3110 - Meia Praia",
                addressLocality: "Itapema",
                addressRegion: "SC",
                postalCode: "88220-000",
                addressCountry: "BR",
              },
              description:
                "Daniel Espindola é especialista no mercado imobiliário de alto padrão em Itapema. Oferece um atendimento personalizado, discreto e altamente qualificado, conectando pessoas aos imóveis ideais.",
            }),
          }}
        />
        <ReCaptchaProviderClient>
          {children}
        </ReCaptchaProviderClient>
        
        <SpeedInsights />
      </body>
    </html>
  );
}
