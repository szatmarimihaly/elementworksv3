import { Metadata } from "next";

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
  return (
    <div>Page</div>
  )
}