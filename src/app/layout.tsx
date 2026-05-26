import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/Providers'
import { siteConfig } from '@/config/site'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
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

// Runs before first paint to avoid flash of wrong theme.
// Reads the Zustand persist key ('theme-storage') from localStorage and
// removes the 'dark' class if the stored preference is light mode.
const themeInitScript = `(function(){try{var s=localStorage.getItem('theme-storage');var dark=s?JSON.parse(s).state.isDark:true;if(!dark)document.documentElement.classList.remove('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background" suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </Providers>
      </body>
    </html>
  )
}
