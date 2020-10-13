import React from 'react'

import { useFilter, Rarities } from '../FilterContext'
import FilterContainer from './FilterContainer'
import FilterItem from './FilterItem'

const RarityChoice = () => {
  const { filter, toggleRarity } = useFilter()
  const rarities: (keyof Rarities)[] = ['common', 'rare', 'epic', 'champion']

  const getRarityPath = (rarity: keyof Rarities): string => {
    const s = filter.rarities[rarity] ? '' : 'un'
    return `/images/rarity/${rarity}_${s}selected.svg`
  }

  return (
    <FilterContainer>
      {Array.from(rarities, (rarity, i) => {
        return (
          <FilterItem
            key={i}
            src={getRarityPath(rarity)}
            onClick={() => toggleRarity(rarity)}
            width="44px"
            padding="0px"
          />
        )
      })}
    </FilterContainer>
  )
}

export default RarityChoice
