import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import type { ReactNode } from 'react'
import { Geist } from "next/font/google"
import '../globals.css'
import Navbar from '@/components/Nav/Navbar'
import { BackgroundGlow } from '@/components/background/GlowEffect'
import Footer from '@/components/Nav/Footer'
import Copyright from '@/components/Nav/Copyright'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const geist = Geist({ 
  subsets: ['latin']
})

type Locale = (typeof routing.locales)[number];

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ellenőrizzük, hogy tényleg támogatott nyelv
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={geist.className}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple/apple-touch-icon.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple/apple-touch-icon-180x180.png"/>
        <link rel="apple-touch-icon" sizes="167x167" href="/apple/apple-touch-icon-167x167.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple/apple-touch-icon-57x57.png"/>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='flex flex-col min-h-screen'>
        <NextIntlClientProvider locale={locale as Locale} messages={messages}>

          <BackgroundGlow/>

          <header>
            <Navbar locale={locale}/>
          </header>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 lg:mt-10'>
            {children}
          </div>

          <footer className='mt-20'>
            <Footer locale={locale}/>
            <Copyright locale={locale}/>
          </footer>
        </NextIntlClientProvider>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
