import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Hero from '@/components/Hero/Hero'
import CtaButton from '@/components/Button/CtaButton'
import Paragraph from '@/components/Paragraph/Paragraph'
import ServiceImage from '@/components/Card/ServiceImage'

type Params = {
  params : {
    locale : string
  }
}

export const metadata: Metadata = {
  title : 'Egyedi weboldal készítés és Webshop fejlesztés',
  description : 'Professzionális egyedi weboldal készítés, céges weboldal fejlesztés és webshop fejlesztés egy helyen. Kérje árajánlatunkat weboldal készítésre.”',
  keywords : ['egyedi weboldal készítés', 'céges weboldal készítés', 'webshop fejlesztés', 'weboldal készítés ár'],
  openGraph : {
    title : 'Egyedi weboldal készítés',
    description : 'Egy céges weboldal fejlesztés az ügyfélszerzés egyik legfontosabb eszköze. Mi olyan üzleti weboldalakat fejlesztünk, amelyek nemcsak jól néznek ki, hanem konverziót is hoznak.',
    url : 'https://www.elementworks.eu/hu/szolgaltatasok',
    siteName : 'Elementworks',
    locale : 'hu_HU',
    type : 'website'
  },
  alternates : {
    canonical: 'https://www.elementworks.eu/hu/szolgaltatasok',
    languages: {
      'hu': 'https://www.elementworks.eu/hu/szolgaltatasok',
      'en': 'https://www.elementworks.eu/en/szolgaltatasok',
      'x-default': 'https://www.elementworks.eu/hu/szolgaltatasok'
    }
  },
  robots : {
    index : true,
    follow : true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}


export default async function Page({ params } : Params){

  const { locale } = params
  const t = await getTranslations({ locale })

  return (
    <main>

      <section className='hero-prop'>
        <Hero title={t('Hero.serviceTitle')} description={t('Hero.serviceDescription')} />
      </section>

      <div className='section-top'>
        <CtaButton href={`/${locale}/kapcsolat`} text={t('Button.ctaServices')}/>
      </div>

      <Paragraph text={t('ServiceText.sectionOne')}/>

      <section className='section-top'>
        <ServiceImage locale={locale} text='servicecard' />
      </section>

      <Paragraph text={t('ServiceText.sectionTwo')}/>

    </main>
  )
}