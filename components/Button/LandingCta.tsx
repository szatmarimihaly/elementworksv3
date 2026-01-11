import React from 'react'
import Link from 'next/link'

type Props = {
    text : string
}

const LandingCta = ({ text } : Props ) => {
  return (
    <Link
        href={"/hu/kapcsolat"}
        className='bg-[#ff5d5d] hover:bg-[#ff4242] px-4 py-2 rounded-full shadow-[0_0_16px_#FF6B6B] font-bold text-xl mt-10 transition-all duration-200 hover:scale-105'
    >
        {text}
    </Link>
  )
}

export default LandingCta