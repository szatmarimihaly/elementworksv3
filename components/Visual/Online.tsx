import React from 'react'
import { getTranslations } from 'next-intl/server'

interface Online {
    id : number,
    title : string
}

type Props = {
    locale : string
    text : string
}

const Online = async({ locale, text }: Props) => {

    const t = await getTranslations({ locale })

    const maintext = t.raw(text) as Online[]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {maintext.map((item) => (
            <article
                key={item.id}
                className='flex gap-4 items-center gray-back px-4 py-2 rounded-full border-2 border-gray-400/40 hover:border-gray-200/70'
            >
                <div className='w-4 h-4 flex-shrink-0 bg-green-400 rounded-full shadow-lg shadow-green-400'></div>
                <p className='text-gray-300'>{item.title}</p>
            </article>
        ))}
    </div>
  )
}

export default Online