
// LandingCard.tsx
import React from 'react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'


interface LandingCardProps {
    id : number,
    title : string,
    image : string,
    imagedescription : string,
    path : string
}

type Props = {
    locale : string,
    text : string
}

export default async function LandingCard({ locale, text } : Props) {

  const t = await getTranslations({ locale });
  const languageText = t.raw(text) as LandingCardProps[];
  const duplicatedServices = [...languageText, ...languageText];


  return (
    <div className='overflow-hidden mt-10'>
      <ul className='flex gap-10 p-4 rounded animate-infinite-scroll hover:pause'>
        {duplicatedServices.map((item : LandingCardProps, index : number) => (
          <div 
            key={`${item.id} - ${index}`}
            className='flex flex-col items-center justify-center gap-4 min-w-[300px] border-2 border-gray-400/40 hover:border-gray-200/70 py-4 rounded animate-thing border-gray gray-back shadow-[0_0_16px_rgba(255, 255, 255, 1)]'
          >
            <Image
              src={`/${item.path}/${item.image}.svg`}
              alt={`${item.imagedescription}`}
              width={50}
              height={50}
            />
            <h3 className='text-md font-bold'>{item.title}</h3>
          </div>       
        ))}
      </ul>
    </div>
  )
}