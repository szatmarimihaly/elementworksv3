import React from 'react'
import type { Metadata } from  "next"
import { getTranslations } from 'next-intl/server'
import Hero from '@/components/Hero/Hero'
import CtaButton from '@/components/Button/CtaButton'
import Paragraph from '@/components/Paragraph/Paragraph'
import ServiceImage from '@/components/Card/ServiceImage'
import { getServiceSchema, getOrganizationSchema } from '@/app/lib/seo/schemas'
import SubHero from '@/components/Hero/SubHero'
import Number from '@/components/Card/Number'
import Line from '@/components/Visual/Line'
import References from '@/components/Fetch/References'
import Cta from '@/components/Visual/Cta'


type Params = {
  params : {
    locale : string
  }
}

type Props ={
  params : { locale : string }  
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);

  const title = locale === 'hu'
    ? 'Egyedi weboldal készítés | ELEMENTWORKS'
    : 'Custom Website Development | ELEMENTWORKS';
    
  const description = locale === 'hu'
    ? 'Egyedi weboldal készítés, céges weboldal fejlesztés és webshop fejlesztés egy helyen. Kérje árajánlatunkat weboldal készítésre.'
    : 'Custom website development, business website creation, and e-commerce solutions in one place. Request a quote for website development.';

  return {
    title,
    description,
    
    openGraph: {
      title,
      description,
      url: `https://elementworksv3.vercel.app/${locale}/szolgaltatasok`,
      siteName: 'Elementworks',
      locale: locale === 'hu' ? 'hu_HU' : 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://elementworksv3.vercel.app/new2.png',
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
      images: ['https://elementworksv3.vercel.app/new2.png'],
    },
    
    alternates: {
      canonical: `https://elementworksv3.vercel.app/${locale}/szolgaltatasok`,
      languages: {
        'hu': 'https://elementworksv3.vercel.app/hu/szolgaltatasok',
        'en': 'https://elementworksv3.vercel.app/en/szolgaltatasok',
        'x-default': 'https://elementworksv3.vercel.app/hu/szolgaltatasok',
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


export default async function Page({ params } : Params){

  const { locale } =  await params
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

      <section>
        <SubHero text={t('SmallHero.serviceTitle')}/>
        <Line />
        <Number locale={locale} text='development'/>
      </section>

      <section>
        <SubHero text={t('SmallHero.serviceImage')}/>
        <Line />
        <References />
      </section>

      <Cta
        title={t('CtaForm.firstTitle')} 
        subtitle={t('CtaForm.firstSubtitle')} 
        button={t('CtaForm.firstButton')} 
        href={`/${locale}/kapcsolat`}
      />

      <script 
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema("hu")),
        }}
      />

      <script 
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema("en")),
        }}
      />

      <script 
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />
    </main>
  )
}