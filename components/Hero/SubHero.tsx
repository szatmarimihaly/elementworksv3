import React from 'react'

type Props = {
    text : string
}

const SubHero = ({ text } : Props) => {
  return (
    <h2 className='hero-sub'>{text}</h2>
  )
}

export default SubHero