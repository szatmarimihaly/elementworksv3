import Image from "next/image"
import Link from "next/link"
import Line from "./Line"

type Props = {
    text : string
}

const ContactBox = ({ text } : Props) => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-evenly gap-10 lg:gap-0 section-top'>
        <div className="flex flex-col items-center justify-between gap-10">
            <div className="flex flex-col items-center">
                <p className="text-3xl lg:text-5xl font-bold">{text}</p>
                <Line/>
            </div>
            <Link
                href="tel:+36305771066"
                className="text-gray-300 text-3xl text-center cta-button gap-2 border-2 border-gray-400/40 hover:border-gray-200/70 gray-back"
            >
                +36305771066
            </Link>
        </div>
        <Image
            src={"/contact.webp"}
            width={600}
            height={0}
            alt={"Válasszon webfejlesztési szolgáltatásaink közül és kérjen árajánlatot."}
            className="h-auto w-auto rounded-lg"
        />
    </div>
  )
}

export default ContactBox