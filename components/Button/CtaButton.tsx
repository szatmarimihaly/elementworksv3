import React from 'react'
import Link from 'next/link'

type Props = {
    href : string,
    text : string
}

const CtaButton = ({ href, text } : Props) => {

  return (
    <Link
        href={href}
        className='bg-primary text-black hover:bg-gray-200/90 shadow-white shadow-sm px-4 py-2 font-bold rounded text-lg md:text-xl'
    >
        {text}
    </Link>
  )
}

export default CtaButton