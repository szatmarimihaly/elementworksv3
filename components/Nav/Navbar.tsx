'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

import LanguageSwitcher from '../Button/LanguageSwitcher'

const SUPPORTED_LOCALES = ['en', 'hu']

type Props = {
    locale : string
}

const Navbar = ({ locale } : Props) => {

    const t = useTranslations("Navbar");

    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => setIsOpen(!isOpen)

    const normalizedPath = React.useMemo(() => {
        if (!pathname) return '/'
        const parts = pathname.split('/').filter(Boolean)
        const first = parts[0]
        if (SUPPORTED_LOCALES.includes(first)) {
        return '/' + (parts[1] ? parts.slice(1).join('/') : '')
        }
        return pathname
    }, [pathname])

    const getLinkClass = (path : string) => {
        const isHome = path === '/' && SUPPORTED_LOCALES.some(locale => pathname === `/${locale}`)

        const isActive = isHome || normalizedPath === path
        return `hover:text-gray-300 transition-all duration-300 ${isActive ? 'font-bold glow-text' : 'text-gray-300 font-bold'}`
    }

  return (
    <nav className='main-comp'>
        <div className={`flex flex-col ${isOpen ? 'pb-4' : ''}`}>
            <div className='flex justify-between items-center'>
                <Image
                    src="/new.png"
                    alt='Elementworks logó - céges weboldal fejlesztés'
                    width={180}
                    height={100}
                    priority
                    className='lg:w-50 lg:h-auto'
                />

                <div className='hidden lg:flex space-x-8 text-xl'>
                    <Link href="." className={getLinkClass('/')}>
                        {t('home')}
                    </Link>

                    <Link href={`/${locale}/szolgaltatasok`} className={getLinkClass('/szolgaltatasok')}>
                        {t('services')}
                    </Link>

                    <Link href={`/${locale}/blog`} className={getLinkClass('/blog')}>
                        {t('blog')}
                    </Link>

                    <Link href={`/${locale}/kapcsolat`} className={getLinkClass('/kapcsolat')}>
                        {t('contact')}
                    </Link>
                </div>

                <div className='hidden lg:block'>
                    <LanguageSwitcher />
                </div>

                <div className='lg:hidden'>
                    <button onClick={toggleMenu} aria-label='Toggle Menu'>
                    {isOpen ? <Image src="/close.svg" alt='egyedi weboldal készítés' width={30} height={30} priority/> : <Image src="/menu.svg" alt='egyedi weboldal készítés' width={30} height={30} priority/>}
                    </button>
                </div>
            </div>

            {isOpen && (
                    <div className='flex flex-col items-center space-y-8 mt-10 lg:hidden'>
                        <Link href="/" onClick={() => setIsOpen(false)} className={getLinkClass("/")}>
                            {t('home')}
                        </Link>

                        <Link href={`/${locale}/szolgaltatasok`} onClick={() => setIsOpen(false)} className={getLinkClass("/szolgaltatasok")}>
                            {t('services')}
                        </Link>

                        <Link href={`/${locale}/blog`} onClick={() => setIsOpen(false)} className={getLinkClass("/blog")}>
                            {t('blog')}
                        </Link>

                        <Link href={`/${locale}/kapcsolat`} onClick={() => setIsOpen(false)} className={getLinkClass("/kapcsolat")}>
                            {t('contact')}
                        </Link>

                        <LanguageSwitcher />
                    </div>
                )}

        </div>
    </nav>
  )
}

export default Navbar