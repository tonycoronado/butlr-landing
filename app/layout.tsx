import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

const APP_URL = 'https://usebutlr.com'

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'Butlr — Your AI Chief of Staff',
    template: '%s | Butlr',
  },
  description:
    'Butlr reads your email, knows your calendar, and tells you what to focus on every morning. AI-powered email triage, meeting prep, and smart task management — all on your desktop.',
  keywords: ['AI productivity', 'email triage', 'AI assistant', 'calendar management', 'desktop app', 'morning briefing'],
  authors: [{ name: 'Titan Interactive LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: APP_URL,
    siteName: 'Butlr',
    title: 'Butlr — Your AI Chief of Staff',
    description: 'Butlr reads your email, knows your calendar, and tells you what to focus on every morning.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Butlr — AI Chief of Staff' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Butlr — Your AI Chief of Staff',
    description: 'Butlr reads your email, knows your calendar, and tells you what to focus on every morning.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Butlr',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'Windows, macOS',
  description: 'AI Chief of Staff desktop app. Email triage, meeting prep, and morning briefings powered by Claude AI.',
  url: APP_URL,
  author: { '@type': 'Organization', name: 'Titan Interactive LLC' },
  offers: [
    { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free' },
    { '@type': 'Offer', price: '9', priceCurrency: 'USD', name: 'Starter', billingPeriod: 'P1M' },
    { '@type': 'Offer', price: '19', priceCurrency: 'USD', name: 'Pro', billingPeriod: 'P1M' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface antialiased" style={{ fontFamily: 'var(--font-body)' }}>
        {children}
      </body>
    </html>
  )
}
