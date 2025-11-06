import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import type { ReactNode } from 'react'
import { Geist } from "next/font/google"
import '../globals.css'
import Navbar from '@/components/Nav/Navbar'

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
      <body>
        <NextIntlClientProvider locale={locale as Locale} messages={messages}>

          <header>
            <Navbar locale={locale}/>
          </header>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 lg:mt-10'>
            {children}
          </div>


        </NextIntlClientProvider>
      </body>
    </html>
  );
}
