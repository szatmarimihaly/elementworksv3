import React from 'react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

interface Services {
    id : number
    title : string
    subtitle : string
    image : string
    imagedescription : string
    path : string
}

type Props = {
    locale : string
    text : string
}

const ServiceImage = async({ locale, text } : Props) => {

    const t = await getTranslations({ locale })

    const maintext = t.raw(text) as Services[]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {maintext.map((item : Services) => {
            return(
                <article
                    key={item.id}
                    className='flex flex-col items-center gap-6 border-2 border-gray-400/40 hover:border-gray-200/70 px-4 py-10 rounded-xl animate-thing border-gray gray-back'
                >
                    <Image 
                        src={`/${item.path}/${item.image}.svg`}
                        width={100}
                        height={100}
                        alt={`${item.imagedescription}`}
                    />

                    <h2 className='card-title'>{item.title}</h2>
                    <p className='card-subtitle'>{item.subtitle}</p>
                </article>
            )
        })}
    </div>
  )
}

export default ServiceImage