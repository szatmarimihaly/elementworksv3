"use client"

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type Props = {
    locale : string
}

const Footer = ({ locale } : Props) => {

    const t = useTranslations("Footer")

  return (
    <div className='main-comp pb-10'>
        <div className='flex flex-col gap-4 items-center lg:flex-row lg:items-start lg:justify-evenly '>
            <Image
            src='/4.svg'
            alt='ELEMENTWORKS logó a láblécben – weboldal fejlesztő cég'
            width={200}
            height={200}
            priority
            className='mb-10 lg:mb-0'
            />

            <div className='footer-item'>
                <h4 className='footer-h3'>{t('cat2')}</h4>
                <ul className='flex flex-col items-center footer-list gap-4'>
                    <Link href={`/${locale}/adatvedelem`} className='item'>{t("page6")}</Link>
                    <Link href={`/${locale}/adatvedelem`} className='item'>{t("page5")}</Link>
                    
                </ul>
            </div>

            <div className='footer-item'>
                <h4 className='footer-h3'>{t('cat3')}</h4>
                <ul className='flex flex-col items-center footer-list gap-4'>
                    <Link href={`https://github.com/szatmarimihaly`} className='item'>{t("page8")}</Link>
                    <Link href={`https://www.instagram.com/elementworksgroup/`} className='item'>{t("page9")}</Link>
                    <Link href={`/${locale}/kapcsolat`} className='item'>{t("page7")}</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer