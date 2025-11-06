// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import CtaButton from '@/components/Button/CtaButton';
import CtaButtonBlack from '@/components/Button/CtaButtonBlack';
import Partner from '@/components/Visual/Partner';
import Paragraph from '@/components/Paragraph/Paragraph';

type Locale = (typeof routing.locales)[number];

export const metadata: Metadata = {
  title : 'Céges weboldal fejlesztés',
  description : 'Egy céges weboldal fejlesztés az ügyfélszerzés egyik legfontosabb eszköze. Megmutatja, mennyire profi a céged, és mennyire bízol a saját márkádban. Mi olyan üzleti weboldalakat fejlesztünk, amelyek nemcsak jól néznek ki, hanem konverziót is hoznak.',
  keywords : ['egyedi weboldal készítés', 'céges weboldal fejlesztés', 'webfejlesztési szolgáltatás', 'webshop készítés'],
  openGraph : {
    title : 'Céges weboldal fejlesztés',
    description : 'Egy céges weboldal fejlesztés az ügyfélszerzés egyik legfontosabb eszköze. Megmutatja, mennyire profi a céged, és mennyire bízol a saját márkádban. Mi olyan üzleti weboldalakat fejlesztünk, amelyek nemcsak jól néznek ki, hanem konverziót is hoznak.',
    url : 'https://www.elementworks.eu/hu',
    siteName : 'Elementworks',
    locale : 'hu_HU',
    type : 'website'
  },
  robots : {
    index : true,
    follow : true
  }
}

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = await Promise.resolve(params);
  const t = await getTranslations({ locale });

  return (
    <main className='flex flex-col items-center'>
      <section className='mt-30 flex flex-col gap-8'>
        <Hero title={t('Hero.title')} description={t('Hero.description')} />
      </section>

      <section className='flex flex-col items-center justify-center gap-4 md:flex-row mt-10'>
        <CtaButton href={`/${locale}/szolgaltatasok`} text={t('Button.ctaText')}/>
        <CtaButtonBlack href={`${locale}/kapcsolat`} text={t('Button.ctaContact')} />
      </section>

      <section className="mt-20 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
          <Partner />
        </div>
      </section>

      <section>
        <Paragraph text={t('MainText.sectionOne')} />
      </section>

    </main>
  );
}
