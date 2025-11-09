import React from 'react'
import Link from 'next/link'

type Props = {
    href : string
    toText : string
}

const ToServices = ({ href, toText } : Props) => {
  return (
    <Link
        href={href}
        className='border-2 bg-white text-black text-center px-20 py-2 rounded-2xl mx-auto font-bold animate-thing'

    >
        {toText}
    </Link>
  )
}

export default ToServices