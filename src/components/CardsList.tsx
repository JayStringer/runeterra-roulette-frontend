import React from 'react'
import { useCards } from '../CardsContext'
import Card from './Card'

const CardList = () => {
  const { cards } = useCards()

  return (
    <ul style={{ margin: '0px', padding: '10px' }}>
      {Array.from(cards, (card, i) => {
        return <Card key={i} image_url={card.imageUrl} />
      })}
    </ul>
  )
}

export default CardList
