import React from 'react'

type Props = {
  title : string,
  description : string | undefined
}

const Hero = ({ title, description } : Props) => {
  return (
    <div className='w-full mx-auto'>
      <h1 className='text-center text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent leading-tight pb-2'>
          {title}
      </h1>
      <p className='mt-4 text-center text-sm lg:text-xl text-gray-300'>{description}</p>
    </div>
  )
}

export default Hero