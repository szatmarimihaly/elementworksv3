import { getTranslations } from "next-intl/server"
import Image from "next/image"

interface IconCard {
    id : number,
    title : string,
    icon: string,
    path : string,
    description : string
}

type Props =  {
    locale : string,
    text : string
}



const IconCard = async({ locale, text } : Props) => {

    const t = await getTranslations({ locale });
    const maintext = t.raw(text) as IconCard[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-30 md:gap-10 section-top">
        {maintext.map((item : IconCard)  => {
            return(
                <article
                    key={item.id}
                    className="flex flex-col items-center gap-10"
                >
                    <Image
                        src={`/${item.path}/${item.icon}.svg`}
                        alt={`${item.description}`}
                        width={150}
                        height={150}
                    />
                    <h3 className="text-2xl text-gray-300">{item.title}</h3>
                </article>
            )
        })}
    </div>
  )
}

export default IconCard