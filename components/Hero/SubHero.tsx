import React from 'react'

type Props = {
    text : string
}

const SubHero = ({ text } : Props) => {
  return (
    <h2 
      className='hero-sub'
      style={{
        backgroundImage: 'linear-gradient(to right, #7dd3fc, #a855f7, #f472b6, #fb923c, #fdba74)'
      }}
    >{text}</h2>
  )
}

export default SubHero