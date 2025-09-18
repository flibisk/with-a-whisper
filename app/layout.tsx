import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'With a Whisper - Creative Luxury Studio',
  description: 'With a Whisper elevates ambitious brands into the aspirational and timeless through cinematic storytelling, refined design, and immersive technology.',
  keywords: ['luxury studio', 'creative agency', 'brand strategy', 'cinematic storytelling', 'refined design', 'immersive technology'],
  authors: [{ name: 'With a Whisper' }],
  creator: 'With a Whisper',
  publisher: 'With a Whisper',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://withawhisper.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'With a Whisper - Creative Luxury Studio',
    description: 'With a Whisper elevates ambitious brands into the aspirational and timeless through cinematic storytelling, refined design, and immersive technology.',
    url: 'https://withawhisper.co',
    siteName: 'With a Whisper',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'With a Whisper - Creative Luxury Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'With a Whisper - Creative Luxury Studio',
    description: 'With a Whisper elevates ambitious brands into the aspirational and timeless through cinematic storytelling, refined design, and immersive technology.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
