import React from 'react'

type Props = {
    text : string
}

const Paragraph = ({ text } : Props) => {
  return (
    <article>
        <p className='text-justify text-xl text-gray-300'>{text}</p>
    </article>
  )
}

export default Paragraph