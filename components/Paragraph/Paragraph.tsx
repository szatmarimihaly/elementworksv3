import React from 'react'

type Props = {
    text : string
}

const Paragraph = ({ text } : Props) => {
  return (
    <article className='mt-20 mb-20'>
        <p className='text-justify text-xl'>{text}</p>
    </article>
  )
}

export default Paragraph