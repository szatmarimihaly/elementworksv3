'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import LanguageSwitcher from '../Button/LanguageSwitcher'

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const SUPPORTED_LOCALES = ['en', 'hu']

type Props = {
    locale : string
}

const Navbar = ({ locale } : Props) => {

    const t = useTranslations("Navbar");

    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const [servicesOpen, setServicesOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

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
        return `hover:text-gray-300 transition-all duration-300 flex items-center text-xl ${isActive ? 'font-bold glow-text' : 'text-gray-300 font-bold'}`
    }

  return (
    <nav className='main-comp'>
        <div className={`flex flex-col ${isOpen ? 'pb-4' : ''}`}>
            <div className='flex justify-between items-center'>
                <Image
                    src="/4.svg"
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

                    <div className='relative'>
                        <button 
                            className='hover:text-gray-300 transition-all duration-300 flex items-center text-gray-300 font-bold' 
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            {t('services')} 
                            {servicesOpen ? <KeyboardArrowDownOutlinedIcon/> : <KeyboardArrowRightOutlinedIcon/>}
                        </button>

                        {servicesOpen && (
                            <div className='absolute top-full left-0 mt-2 flex flex-col space-y-2 gray-back p-2 rounded-xl'>
                                <Link 
                                    href={`/${locale}/szolgaltatasok`} 
                                    className='text-gray-400 transition-all duration-300 hover:text-white'
                                    onClick={() => setServicesOpen(false)}
                                >
                                    {t('services')}
                                </Link>
                                <Link 
                                    href={`/${locale}/rendszerek`} 
                                    className='text-gray-400 hover:text-gray-300 transition-colors'
                                    onClick={() => setServicesOpen(false)}
                                >
                                    {t('system')}
                                </Link>
                            </div>
                        )}
                    </div>
 
                    <Link href={`/${locale}/blog`} className={getLinkClass('/blog')}>
                        {t('blog')}
                    </Link>

                    <div className='relative'>
                        <button 
                            className='hover:text-gray-300 transition-all duration-300 flex items-center text-gray-300 font-bold' 
                            onClick={() => setContactOpen(!contactOpen)}
                        >
                            {t('contact')} 
                            {contactOpen ? <KeyboardArrowDownOutlinedIcon/> : <KeyboardArrowRightOutlinedIcon/>}
                        </button>

                        {contactOpen && (
                            <div className='absolute top-full left-0 mt-2 flex flex-col space-y-2 gray-back p-2 rounded-xl'>
                                <Link 
                                    href={`/${locale}/promocio`} 
                                    className='text-gray-400 transition-all duration-300 hover:text-white'
                                    onClick={() => setContactOpen(false)}
                                >
                                    {t('promotion')}
                                </Link>
                                <Link 
                                    href={`/${locale}/kapcsolat`} 
                                    className='text-gray-400 hover:text-gray-300 transition-colors'
                                    onClick={() => setContactOpen(false)}
                                >
                                    {t('contact')}
                                </Link>
                            </div>
                        )}
                    </div>
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
                    <div className='flex flex-col space-y-8 mt-10 lg:hidden'>
                        <Link href="/" onClick={() => setIsOpen(false)} className={getLinkClass("/")}>
                            {t('home')}
                        </Link>

                        <div className='relative'>
                            <button 
                                className='hover:text-gray-300 transition-all duration-300 flex items-center text-gray-300 font-bold text-xl' 
                                onClick={() => {
                                    setServicesOpen(!servicesOpen); 
                                    
                                }}
                            >
                                {t('services')} 
                                {servicesOpen ? <KeyboardArrowDownOutlinedIcon/> : <KeyboardArrowRightOutlinedIcon/>}
                            </button>

                            {servicesOpen && (
                                <div className='flex flex-col space-y-2 mt-2 text-lg'>
                                    <Link 
                                        href={`/${locale}/szolgaltatasok`} 
                                        className='text-gray-400 transition-all duration-300 hover:text-white'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setIsOpen(!setIsOpen)
                                        }}
                                    >
                                        {t('services')}
                                    </Link>
                                    <Link 
                                        href={`/${locale}/rendszerek`} 
                                        className='text-gray-400 hover:text-gray-300 transition-colors'
                                        onClick={() => {
                                            setServicesOpen(false);
                                            setIsOpen(!setIsOpen)
                                        }}
                                    >
                                        {t('system')}
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href={`/${locale}/blog`} onClick={() => setIsOpen(false)} className={getLinkClass("/blog")}>
                            {t('blog')}
                        </Link>

                        <div className='relative'>
                            <button 
                                className='hover:text-gray-300 transition-all duration-300 flex items-center text-gray-300 font-bold text-xl' 
                                onClick={() => {
                                    setContactOpen(!contactOpen); 
                                    
                                }}
                            >
                                {t('contact')} 
                                {contactOpen ? <KeyboardArrowDownOutlinedIcon/> : <KeyboardArrowRightOutlinedIcon/>}
                            </button>

                            {contactOpen && (
                                <div className='flex flex-col space-y-2 mt-2 text-lg'>
                                    <Link 
                                        href={`/${locale}/promocio`} 
                                        className='text-gray-400 transition-all duration-300 hover:text-white'
                                        onClick={() => {
                                            setContactOpen(false);
                                            setIsOpen(!setIsOpen)
                                        }}
                                    >
                                        {t('promotion')}
                                    </Link>
                                    <Link 
                                        href={`/${locale}/kapcsolat`} 
                                        className='text-gray-400 hover:text-gray-300 transition-colors'
                                        onClick={() => {
                                            setContactOpen(false);
                                            setIsOpen(!setIsOpen)
                                        }}
                                    >
                                        {t('contact')}
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className='w-full flex items-center'>
                            <LanguageSwitcher />
                        </div>
                    </div>
                )}

        </div>
    </nav>
  )
}

export default Navbar