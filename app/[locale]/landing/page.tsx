import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/components/Hero/Hero'
import { getTranslations } from 'next-intl/server'
import LandingCta from '@/components/Button/LandingCta'
import LandingCard from '@/components/Animate/LandingCard'

type Params = {
    params : {
        locale : string
    }
}

type Props = {
    params : { locale : string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);

  const title = locale === 'hu'
    ? 'Miért van szüksége egy vállalkozásnak prémium weboldalra?'
    : 'Why Does Your Business Need a Premium Website?';
    
  const description = locale === 'hu'
    ? 'Egy prémium weboldal bizalmat épít, erősíti a márkát és támogatja az üzleti növekedést. Ismerje meg, miért elengedhetetlen a profi online jelenlét.'
    : 'A premium website builds trust, strengthens your brand, and supports business growth. Discover why a professional online presence is essential today.';

  return {
    title,
    description,
    
    openGraph: {
      title,
      description,
      url: `https://elementworks.eu/${locale}/landing`,
      siteName: 'Elementworks',
      locale: locale === 'hu' ? 'hu_HU' : 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://elementworks.eu/4.svg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://elementworks.eu/4.svg'],
    },
    
    alternates: {
      canonical: `https://elementworks.eu/${locale}/landing`,
      languages: {
        'hu': 'https://elementworks.eu/hu/landing',
        'en': 'https://elementworks.eu/en/landing',
        'x-default': 'https://elementworks.eu/hu/landing',
      },
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
  };
}

export default async function Page({ params } : Params) {

    const { locale } = await params;
    const t = await getTranslations({ locale });

  return (
    <main className='flex flex-col items-center gap-10 overflow-x-hidden px-4 sm:px-6 lg:px-8 mt-10 lg:mt-10'>
        <Hero title={t("Hero.landingTitle")} description={t("Hero.landingSubtitle")} />
        <LandingCta text={t("Button.ctaLanding")}/>
        <LandingCard locale={locale} text="servicecard"/>
    </main>
  )
}