import CtaButton from "../Button/CtaButton"

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
        <CtaButton text={button} href={href}/>
    </div>
  )
}

export default Cta