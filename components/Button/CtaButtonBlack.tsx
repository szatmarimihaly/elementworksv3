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
        className='text-center cta-button gap-2 text-white border-2 border-gray-500 hover:border-gray-400'
    >
        {text}<ArrowRightAltIcon sx={{ fontSize : 24 }} />
    </Link>
  )
}

export default CtaButtonBlack