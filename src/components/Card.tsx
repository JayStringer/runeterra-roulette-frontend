import React from 'react'

interface CardProps {
  image_url: string
}

const Card = (props: CardProps) => {
  return (
    <li style={{ display: 'inline-block', padding: '5px' }}>
      <img src={props.image_url} alt="card" width="280px" />
    </li>
  )
}

export default Card
