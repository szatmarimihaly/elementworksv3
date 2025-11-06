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
      className="flex items-center gap-4 rounded-full border-3 border-gray-800 hover:border-gray-800/70 transition-all duration-200 hover:shadow-md px-4 py-2"
    >
      <PublicOutlinedIcon 
        className="text-white group-hover:text-gray-300 transition-colors duration-200" 
        sx={{ fontSize: 20 }}
      />
      <p>{nextLocale.toUpperCase()}</p>

    </Link>
  );
}