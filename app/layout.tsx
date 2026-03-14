import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vladislav Secrieru | Financial Data Architecture Consultant',
  description: 'Senior Finance & Data Architecture Consultant specializing in financial data governance, Snowflake data architecture, and enterprise reporting transformation for complex organizations.',
  keywords: ['financial data architecture', 'data governance', 'Snowflake consultant', 'CFO data strategy', 'enterprise reporting', 'financial consolidation', 'data transformation'],
  authors: [{ name: 'Vladislav Secrieru' }],
  creator: 'Vladislav Secrieru',
  metadataBase: new URL('https://vladislavsecrieru.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ru': '/ru',
      'ro': '/ro',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'ro_RO'],
    url: 'https://vladislavsecrieru.com',
    title: 'Vladislav Secrieru | Financial Data Architecture Consultant',
    description: 'Transform fragmented corporate data into a single, automated source of truth. Empowering executives to lead with daily precision, not estimated monthly guesses.',
    siteName: 'Vladislav Secrieru Consulting',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vladislav Secrieru - Financial Data Architecture Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vladislav Secrieru | Financial Data Architecture Consultant',
    description: 'Transform fragmented corporate data into a single, automated source of truth.',
    images: ['/og-image.png'],
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
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
