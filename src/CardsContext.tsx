import React, { createContext, useContext, useState } from 'react'

type Card = {
  imageUrl: string
  name: string
}

export type Cards = Card[]
type CardDefaults = {
  cards: Cards
  updateCards: (cards: Cards) => void
}

const cardsDefaults: CardDefaults = {
  cards: [],
  updateCards: (cards: Cards) => {},
}

const CardsContext = createContext(cardsDefaults)

export const useCards = () => useContext(CardsContext)

interface IProviderProps {
  children?: any
}

export const CardsProvider = (props: IProviderProps) => {
  const [cards, setCards] = useState(cardsDefaults.cards)

  const updateCards = (update: Cards): void => {
    setCards(update)
  }

  return (
    <CardsContext.Provider value={{ cards, updateCards }}>
      {props.children}
    </CardsContext.Provider>
  )
}
