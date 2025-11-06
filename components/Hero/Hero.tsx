import React from 'react'

type Props = {
  title : string,
  description : string
}

const Hero = ({ title, description } : Props) => {
  return (
    <div className=''>
        <h1 className='text-center text-6xl lg:text-7xl font-bold'>{title}</h1>
        <p className='mt-4 text-center text-sm lg:text-xl text-gray-300 glow-subtitle'>{description}</p>
    </div>
  )
}

export default Hero