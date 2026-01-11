
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
            className='flex items-center justify-center gap-4 min-w-[400px] border-2 border-gray-400/40 hover:border-gray-200/70 px-4 py-2 rounded animate-thing border-gray gray-back'
          >
            <Image
              src={`/${item.path}/${item.image}.svg`}
              alt={`${item.imagedescription}`}
              width={30}
              height={30}
            />
            <h3 className='text-md font-bold'>{item.title}</h3>
          </div>       
        ))}
      </ul>
    </div>
  )
}