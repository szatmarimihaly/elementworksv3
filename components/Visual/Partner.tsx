import React from 'react'
import { partner, partnerImage } from '@/data/partner'
import Image from 'next/image'

const Partner = () => {
  return (
    <>
        {partner.map((item : partnerImage) => (
            <Image 
                key={item.id}
                src={`/partner/${item.image}.svg`}
                alt=''
                width={150}
                height={100}
            />
        ))}
    </>
  )
}

export default Partner