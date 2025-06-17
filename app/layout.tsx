import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Reservoir Data Harmonizer",
  description:
    "Automatically clean, format, and integrate multi-format reservoir data into a unified model using advanced normalization algorithms",
  keywords: ["reservoir", "data", "harmonization", "oil", "gas", "petroleum", "engineering", "normalization"],
  authors: [{ name: "Reservoir Data Harmonizer Team" }],
  creator: "Reservoir Data Harmonizer",
  publisher: "Reservoir Data Harmonizer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://reservoir-data-harmonizer.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reservoir Data Harmonizer",
    description: "Automatically clean, format, and integrate multi-format reservoir data into a unified model",
    url: "https://reservoir-data-harmonizer.vercel.app",
    siteName: "Reservoir Data Harmonizer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reservoir Data Harmonizer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reservoir Data Harmonizer",
    description: "Automatically clean, format, and integrate multi-format reservoir data",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "RDH",
    "application-name": "Reservoir Data Harmonizer",
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* PWA iOS specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RDH" />

        {/* PWA Android specific meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Reservoir Data Harmonizer" />

        {/* Windows specific meta tags */}
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preload critical resources */}
        <link rel="preload" href="/icons/icon-192x192.png" as="image" />
        <link rel="preload" href="/manifest.json" as="fetch" crossOrigin="anonymous" />

        {/* Apple touch icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/icon-57x57.png" />

        {/* Standard favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} font-sans`}>{children}</body>
    </html>
  )
}
