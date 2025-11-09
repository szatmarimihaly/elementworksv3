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
        className='cta-button bg-white text-black hover:bg-gray-200'
    >
        {text}
    </Link>
  )
}

export default CtaButton