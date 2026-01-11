import React from 'react'
import type { Metadata } from  "next"
import { getTranslations } from 'next-intl/server'  
import Hero from '@/components/Hero/Hero'
import CtaButtonBlack from '@/components/Button/CtaButtonBlack'
import Paragraph from '@/components/Paragraph/Paragraph'
import ServiceImage from '@/components/Card/ServiceImage'
import SubHero from '@/components/Hero/SubHero'
import Line from '@/components/Visual/Line'
import Online from '@/components/Visual/Online'
import Cta from '@/components/Visual/Cta'
import Number from '@/components/Card/Number'
import IconCard from '@/components/Card/IconCard'
import Image from 'next/image'

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
    ? 'Céges rendszerek fejlesztése és automatizálás'
    : 'Corporate System Development and Automation';
    
  const description = locale === 'hu'
    ? 'A manuális folyamatok digitalizálása és automatizálása jelentősen növeli a hatékonyságot, mi ebben segítünk.'
    : 'Digitizing and automating manual processes significantly increases efficiency — and that’s exactly where we can help.';

  return {
    title,
    description,
    
    openGraph: {
      title,
      description,
      url: `https://elementworks.eu/${locale}/rendszerek`,
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
      canonical: `https://elementworks.eu/${locale}/rendszerek`,
      languages: {
        'hu': 'https://elementworks.eu/hu/rendszerek',
        'en': 'https://elementworks.eu/en/rendszerek',
        'x-default': 'https://elementworks.eu/hu/rendszerek',
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

    const { locale } =  await params
    const t = await getTranslations({ locale })

    return(
        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 lg:mt-10'>
            <section className='hero-prop'>
                <Hero title={t('Hero.systemTitle')} description={t('Hero.systemDescription')}/>
            </section>

            <div className='section-top'>
                <CtaButtonBlack href={`/${locale}/kapcsolat`} text={t('Button.ctaSystem')} />
            </div>

            <Paragraph text={t('SystemText.sectionOne')}/>

            <section className='section-top'>
              <ServiceImage locale={locale} text="systemcard"/>
            </section>

            <section>
              <SubHero text={t('SmallHero.systemTitle')} />
              <Line/>
              <Paragraph text={t('SystemText.sectionTwo')}/>
              <Paragraph text={t('SystemText.sectionThree')} />
            </section>

            <section className='section-top'>
              <Online locale={locale} text='systemplus'/>
            </section>

            <section className='section-top'>
              <SubHero text={t('SmallHero.systemTitle2')}/>
              <Number locale={locale} text="automate" />
            </section>

            <IconCard locale={locale} text="automate2"/>

            <section className='section-top'>
              <SubHero text={t('SmallHero.systemTitle3')} />
              <Line/>
              <Paragraph text={t('SystemText.sectionFour')} />
              <Paragraph text={t('SystemText.sectionFive')} />
            </section>

            <section className='section-top flex flex-col items-center gap-10'>
              <Image 
                src={`/plus/rethink.svg`}
                alt={t("SystemText.sectionSix")}
                width={200}
                height={200}
              />
              <p className='text-3xl text-center font-bold text-gray-300'>" {t('SystemText.sectionSix')} "</p>
            </section>

            <Cta
              title={t("CtaForm.fifthTitle")}
              subtitle={t("CtaForm.fifthSubtitle")}
              button={t("CtaForm.fifthButton")}
              href={`/${locale}/kapcsolat`}
            />
        </main>
    )
    
}

