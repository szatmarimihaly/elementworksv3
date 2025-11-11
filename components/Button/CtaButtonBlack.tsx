import React from 'react'
import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

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
        {text}<ArrowRightAltIcon sx={{ fontSize : 24 }} />
    </Link>
  )
}

export default CtaButtonBlack