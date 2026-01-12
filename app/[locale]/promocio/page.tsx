import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import PromotionEmail from "@/components/Visual/PromotionEmail";


type Params = {
    params : { locale : string }
}

type Props = {
    params : { locale : string }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);

  const title = locale === 'hu'
    ? 'Csatlakozz az Elementworks promóciós lehetőségéhez!'
    : 'Join the Elementworks promotional opportunity!';
    
  const description = locale === 'hu'
    ? 'Vegyél részt az Elementworks promóciójában, és szerezd meg exkluzív jutalmadat vagy kedvezményedet.'
    : 'Take part in the Elementworks promotion and claim your exclusive reward or benefit.';

  return {
    title,
    description,
    
    openGraph: {
      title,
      description,
      url: `https://elementworks.eu/${locale}/promocio`,
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
      canonical: `https://elementworks.eu/${locale}/promocio`,
      languages: {
        'hu': 'https://elementworks.eu/hu/promocio',
        'en': 'https://elementworks.eu/en/promocio',
        'x-default': 'https://elementworks.eu/hu/promocio',
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


export default async function Page({ params } : Props) {


    const { locale } = await params;
    const t = await getTranslations({ locale });

    return(
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 lg:mt-10">
            <Hero title={t("Hero.promotionTitle")} description={t('Hero.promotionSubtitle')} />
            <PromotionEmail resultOk={t("FormContent.resultOk")} resultFail={t("FormContent.resultFail")}/>
        </main>
    )

}