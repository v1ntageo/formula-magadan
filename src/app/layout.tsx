import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Автокомплекс «Формула» | Автомойка, магазин, грузовой шиномонтаж в Магадане',
  description: 'Автокомплекс «Формула» в Магадане. Профессиональная автомойка, автомагазин с большим выбором автотоваров и грузовой шиномонтаж в одном месте.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Автокомплекс «Формула» Магадан',
    description: 'Автомойка, автомагазин и грузовой шиномонтаж в одном месте',
    images: ['/images/background.webp'],
  },
  verification: {
    yandex: 'a77acfc030906ca1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}