import React from 'react'

type Props = {
    text : string
}

const Paragraph = ({ text } : Props) => {
  return (
    <p className='text-justify text-xl text-gray-300 section-top'>{text}</p>
  )
}

export default Paragraph