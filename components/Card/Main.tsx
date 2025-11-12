import React from 'react'
import { getTranslations } from 'next-intl/server'
import SpeedIcon from '@mui/icons-material/Speed'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck'
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
    speed: SpeedIcon,
    tips: TipsAndUpdatesIcon,
    safe: SafetyCheckIcon
}

const Main = async ({ locale, text} : Props) => {

    const t = await getTranslations({ locale });

    const maintext = t.raw(text) as MainCard[]
    const buttonText = t.raw('Button.ctaToServices')

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

        {maintext.map((item : MainCard) => {

            const IconComponent = iconMap[item.icon]

            return(
            <article
                key={item.id}
                className='flex flex-col gap-6 border-2 border-gray-400/40 hover:border-gray-200/70 px-4 py-10 rounded-xl animate-thing border-gray gray-back'
            >
                <div className='p-2 bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto'>
                    {IconComponent && <IconComponent sx={{ fontSize : 50, color : 'black' }} />}
                </div>
                <h2 className='card-title'>{item.title}</h2>
                <p className='card-subtitle'>{item.subtitle}</p>
                <ToServices href={`/${locale}/szolgaltatasok`} toText={`${buttonText}`}/>
            </article>
        )})}

    </div>
  )
}

export default Main