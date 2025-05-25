import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SubClear - Underground Rail Air Filtration',
  description: 'Professional underground transit solutions for modern infrastructure',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: { url: '/apple-touch-icon.png' },
  },
  openGraph: {
    title: 'SubClear - Underground Rail Air Filtration',
    description: 'Professional underground transit solutions for modern infrastructure',
    images: [
      {
        url: '/favicon.svg',
        width: 181,
        height: 75,
        alt: 'SubClear Logo'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/SubClearIcon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=NATS&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  )
} 