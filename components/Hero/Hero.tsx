import React from 'react'

type Props = {
  title : string,
  description : string | undefined
}

const Hero = ({ title, description } : Props) => {
  return (
    <div className='w-full mx-auto'>
      <h1 
        className='text-center text-5xl lg:text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent leading-tight pb-2'
        style={{
          backgroundImage: 'linear-gradient(to right, #7dd3fc, #a855f7, #f472b6, #fb923c, #fdba74)'
        }}
      >
          {title}
      </h1>
      <p className='mt-4 text-center text-sm lg:text-xl text-gray-300'>{description}</p>
    </div>
  )
}
export default Hero