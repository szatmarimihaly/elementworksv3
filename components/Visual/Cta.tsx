import Link from "next/link"

type Props = {
    title : string
    subtitle : string
    button : string
    href : string
}


const Cta = async({ title, subtitle, button, href } : Props) => {

  return (
    <div className="section-top flex flex-col gap-6 border-2 items-center border-gray-400/40 px-4 py-10 rounded-xl border-gray bg-white/5 backdrop-blur-md w-full">
        <h3 className="text-4xl text-center">{title}</h3>
        <p className="text-xl text-center text-gray-300">{subtitle}</p>
        <Link 
          href={href} 
          className="flex items-center gap-2 text-center cta-button"
          style={{
            backgroundImage:
              'linear-gradient(to right, #7dd3fc, #a855f7, #f472b6, #fb923c, #fdba74)',
          }}
        >{button}</Link>
    </div>
  )
}

export default Cta