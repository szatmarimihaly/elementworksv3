import React from 'react'
import { getTranslations } from 'next-intl/server'

interface How {
    id : number
    title : string
    subtitle : string
}

type Props = {
    locale : string
    text : string
}

const Number = async({ locale, text } : Props) => {

    const t = await getTranslations({ locale })

    const maintext = t.raw(text) as How[]

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 section-top'>
        {maintext.map((item : How) => {
            return(
                <article
                    key={item.id}
                    className='flex flex-col gap-6 border-2 border-gray-400/40 hover:border-gray-200/70 px-4 py-10 rounded-xl animate-thing border-gray gray-back'
                >
                    <h3 className='card-title'>{item.title}</h3>
                    <p className='card-subtitle'>{item.subtitle}</p>
                </article>
            )
        })}
    </div>
  )
}

export default Number