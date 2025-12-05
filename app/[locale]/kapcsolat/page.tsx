import Hero from "@/components/Hero/Hero"
import ContactBox from "@/components/Visual/ContactBox"
import SendForm from "@/components/Visual/SendForm"
import type { Metadata } from  "next"
import { getTranslations } from "next-intl/server"
import SubHero from "@/components/Hero/SubHero"
import Line from "@/components/Visual/Line"

type Params = {
  params : { locale : string }
}

type Props ={
  params : { locale : string }  
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);

  const title = locale === 'hu'
    ? 'Kapcsolat | ELEMENTWORKS'
    : 'Contact | ELEMENTWORKS';
    
  const description = locale === 'hu'
    ? 'Kérjen árajánlatot kollégáinktól céges weboldal fejlesztésre, vagy éredeklődjön szolgáltatásainkról egy ingyenes igényfelméréssel.'
    : 'Request a quote from our team for corporate website development, or learn more about our services through a free consultation.';

  return {
    title,
    description,
    
    openGraph: {
      title,
      description,
      url: `https://elementworksv3.vercel.app/${locale}/kapcsolat`,
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
      canonical: `https://elementworksv3.vercel.app/${locale}/kapcsolat`,
      languages: {
        'hu': 'https://elementworksv3.vercel.app/hu/kapcsolat',
        'en': 'https://elementworksv3.vercel.app/en/kapcsolat',
        'x-default': 'https://elementworksv3.vercel.app/hu/kapcsolat',
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

  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <main>
      <section className='hero-prop'>
        <Hero title={t('Hero.contactTitle')} description={t('Hero.contactSubtitle')} />
      </section>
      
      <ContactBox text={t('ContactText.call')}/>

      <SubHero text={t('SmallHero.contactTitle')}/>
      <Line/>
      <SendForm text={t('FormContent.button')} namePlace={t('FormContent.name')} textPlace={t('FormContent.message')}/>
    </main>
  )
}