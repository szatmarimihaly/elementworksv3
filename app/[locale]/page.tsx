// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import type { Metadata } from  "next"
import Hero from '@/components/Hero/Hero'
import CtaButton from '@/components/Button/CtaButton'
import CtaButtonBlack from '@/components/Button/CtaButtonBlack'
import Partner from '@/components/Visual/Partner'
import Paragraph from '@/components/Paragraph/Paragraph'
import Main from '@/components/Card/Main'
import Online from '@/components/Visual/Online'
import SubHero from '@/components/Hero/SubHero'

import { getOrganizationSchema, getWebsiteSchema } from '../lib/seo/schemas'
import Number from '@/components/Card/Number'
import Line from '@/components/Visual/Line'
import Cta from '@/components/Visual/Cta'


type Locale = (typeof routing.locales)[number];

type Props ={
  params : { locale : string }  
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);

  const title = locale === 'hu'
    ? 'Céges weboldal fejlesztés | ELEMENTWORKS'
    : 'Corporate Website Development | ELEMENTWORKS';
    
  const description = locale === 'hu'
    ? 'Céges weboldal fejlesztés az ügyfélszerzés egyik legfontosabb eszköze, olyan weboldalakat fejlesztünk amelyek konverziót is hoznak.'
    : 'Corporate website is one of the most powerful tools for attracting new clients, we develop business websites that deliver measurable results.';

  return {
    title,
    description,
    
    openGraph: {
      title,
      description,
      url: `https://elementworksv3.vercel.app/${locale}`,
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
      canonical: `https://elementworksv3.vercel.app/${locale}`,
      languages: {
        'hu': 'https://elementworksv3.vercel.app/hu',
        'en': 'https://elementworksv3.vercel.app/en',
        'x-default': 'https://elementworksv3.vercel.app/hu',
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

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await Promise.resolve(params);
  const t = await getTranslations({ locale });

  return (
    <main className='flex flex-col items-center'>
      <section className='hero-prop'>
        <Hero title={t('Hero.title')} description={t('Hero.description')} />
      </section>

      <section className='flex flex-col items-center justify-center gap-4 md:flex-row mt-10'>
        <CtaButton href={`/${locale}/szolgaltatasok`} text={t('Button.ctaText')}/>
        <CtaButtonBlack href={`${locale}/kapcsolat`} text={t('Button.ctaContact')} />
      </section>

      <section className="section-top flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
          <Partner />
        </div>
      </section>

      <Paragraph text={t('MainText.sectionOne')} />

      <section className='section-top'>
        <Main locale={locale} text='maincard' />
      </section>

      <Paragraph text={t('MainText.sectionTwo')}/>

      <section className='section-top'>
        <Online locale={locale} text='mainservice'/>
      </section>

      <Paragraph text={t('MainText.sectionThree')}/>

      <section>
        <SubHero text={t('SmallHero.mainTitle')}/>
        <Line />
        <Number locale={locale} text="howcard"/>
        <Paragraph text={t('MainText.sectionFour')}/>
      </section>

      <Cta
        title={t('CtaForm.fourthTitle')} 
        subtitle={t('CtaForm.fourthSubtitle')} 
        button={t('CtaForm.fourthButton')} 
        href={`/${locale}/kapcsolat`}
      />



      <script 
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />

      <script 
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebsiteSchema(locale)),
        }}
      />
    </main>
  );
}
