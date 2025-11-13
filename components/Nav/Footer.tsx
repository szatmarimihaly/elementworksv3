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
        <div className='flex flex-col gap-4 items-center lg:flex-row lg:items-start lg:justify-between '>
            <Image
            src='/new2.png'
            alt='Céges weboldal fejlesztés | ELEMENTWORKS'
            width={200}
            height={200}
            priority
            className='mb-10 lg:mb-0'
            />

            <div className='footer-item'>
                <h3 className='footer-h3'>{t('cat1')}</h3>
                <ul className='flex flex-col items-center footer-list gap-4'>
                    <Link href={`/${locale}`} className='item'>{t("page1")}</Link>
                    <Link href={`/${locale}/szolgaltatasok`} className='item'>{t("page2")}</Link>
                    <Link href={`/${locale}/blog`} className='item'>{t("page3")}</Link>
                    <Link href={`/${locale}/kapcsolat`} className='item'>{t("page4")}</Link>
                </ul>
            </div>

            <div className='footer-item'>
                <h3 className='footer-h3'>{t('cat2')}</h3>
                <ul className='flex flex-col items-center footer-list gap-4'>
                    <Link href={`/${locale}/adatvedelem`} className='item'>{t("page6")}</Link>
                    <Link href={`/${locale}/adatvedelem`} className='item'>{t("page5")}</Link>
                    
                </ul>
            </div>

            <div className='footer-item'>
                <h3 className='footer-h3'>{t('cat3')}</h3>
                <ul className='flex flex-col items-center footer-list gap-4'>
                    <Link href={`https://github.com/szatmarimihaly`} className='item'>{t("page8")}</Link>
                    <Link href={`https://www.instagram.com/elementworksgroup/`} className='item'>{t("page9")}</Link>
                    <Link href={`/${locale}/adatvedelem`} className='item'>{t("page7")}</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer