import Hero from "@/components/Hero/Hero"
import Paragraph from "@/components/Paragraph/Paragraph"
import Cta from "@/components/Visual/Cta"
import Line from "@/components/Visual/Line"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

type Params = {
  params : { locale : string }
}

type Props ={
  params : { locale : string }  
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);

  const title = locale === 'hu'
    ? 'Adatvédelmi tájékoztató | ELEMENTWORKS'
    : 'Privacy Policy | ELEMENTWORKS';
    
  const description = locale === 'hu'
    ? 'Ismerje meg, hogyan kezeljük adatait, és hogyan biztosítjuk webfejlesztési szolgáltatásaink során az Ön adatainak védelmét.'
    : 'Learn how we handle your data and how we ensure the protection of your information throughout our web development services.';

  return {
    title,
    description,
    
    openGraph: {
      title,
      description,
      url: `https://elementworksv3.vercel.app/${locale}/adatvedelem`,
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
      canonical: `https://elementworksv3.vercel.app/${locale}/adatvedelem`,
      languages: {
        'hu': 'https://elementworksv3.vercel.app/hu/adatvedelem',
        'en': 'https://elementworksv3.vercel.app/en/adatvedelem',
        'x-default': 'https://elementworksv3.vercel.app/hu/adatvedelem',
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

  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <main>
      <section className="hero-prop">
        <Hero title={t('Hero.privacyTitle')} description={t('Hero.privacySubtitle')}/>
        <Line/>
      </section>

      <section className="section-top">
        <Paragraph text={t('Privacy.data_text1')}/>
        <Paragraph text={t('Privacy.data_text2')}/>
        <Paragraph text={t('Privacy.data_text3')}/>
        <Paragraph text={t('Privacy.data_text4')}/>
      </section>
      
      <Cta
        title={t('Privacy.ctaTitle')}
        subtitle={t('Privacy.ctaSubtitle')}
        button={t('Privacy.ctaButton')}
        href={`/${locale}/kapcsolat`}
      />      
    </main>
  )
}