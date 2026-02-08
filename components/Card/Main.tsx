import React from 'react'
import { getTranslations } from 'next-intl/server'
import { Gauge, Lightbulb, ShieldCheck } from 'lucide-react'
import ToServices from '../Button/ToServices'

interface MainCard {
    id : number
    title : string,
    subtitle : string 
    icon : string
}

type Props = {
    locale : string
    text : string
}

const iconMap: Record<string, React.ElementType> = {
    speed: Gauge,        // Replaces SpeedIcon
    tips: Lightbulb,     // Replaces TipsAndUpdatesIcon
    safe: ShieldCheck    // Replaces SafetyCheckIcon
}

const Main = async ({ locale, text} : Props) => {

    const t = await getTranslations({ locale });

    const maintext = t.raw(text) as MainCard[]
    const buttonText = t.raw('Button.ctaToServices')

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 section-top'>

        {maintext.map((item : MainCard) => {

            const IconComponent = iconMap[item.icon]

            return(
            <article
                key={item.id}
                className='flex flex-col gap-6 border-2 border-gray-400/40 hover:border-gray-200/70 px-4 py-10 rounded-xl animate-thing border-gray gray-back'
            >
                <div className='p-2 bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto'>
                    {IconComponent && <IconComponent size={50} className="text-black" />}
                </div>
                <h2 className='card-title'>{item.title}</h2>
                <p className='card-subtitle'>{item.subtitle}</p>
            </article>
        )})}

    </div>
  )
}

export default Main