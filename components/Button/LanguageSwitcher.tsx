'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'

export default function LanguageSwitcher() {
  const { locale } = useParams();
  const nextLocale = locale === 'en' ? 'hu' : 'en';


  return (
    <Link 
      href={`/${nextLocale}`} 
      prefetch
      className="group relative flex items-center gap-3 rounded-full border-2 border-white/20 backdrop-blur-sm px-3 py-2 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
    >
      <div className="relative z-10 flex items-center gap-3">
        <PublicOutlinedIcon 
          className="text-white transition-transform duration-300 group-hover:rotate-180" 
          sx={{ fontSize: 22 }}
        />
        <p className="max-w-0 opacity-0 group-hover:max-w-[3rem] group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden text-white font-semibold tracking-wide">
          {typeof locale === 'string' ? locale.toUpperCase() : 'HU'}
        </p>
      </div>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 rounded-full" />
    </Link>
  );
}