import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/Providers'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'NarixSolutions - Premium Digital Agency',
  description: 'Premium digital solutions for global brands. Web development, design, SEO, and digital transformation services.',
  generator: 'v0.app',
  keywords: 'digital agency, web development, design, SEO, digital marketing',
  icons: {
    icon: [
      {
        url: '/images/narix-logo-trim.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/narix-logo-trim.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/narix-logo-trim.png',
        type: 'image/png',
      },
    ],
    apple: '/images/narix-logo-trim.png',
  },
  openGraph: {
    title: 'NarixSolutions - Premium Digital Agency',
    description: 'Premium digital solutions for global brands',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ecfdf5' },
    { media: '(prefers-color-scheme: dark)', color: '#052e26' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <Providers>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </Providers>
      </body>
    </html>
  )
}
