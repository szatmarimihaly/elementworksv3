import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Props = {
    href : string,
    text : string
}

const CtaButtonBlack = ({ href, text } : Props) => {
  return (
    <Link
        href={href}
        className='text-center cta-button gap-2 border-2 border-gray-400/40 hover:border-gray-200/70 gray-back'
    >
        {text}<ArrowRight />
    </Link>
  )
}

export default CtaButtonBlack