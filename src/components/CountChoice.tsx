import React from 'react'

import { useFilter } from '../FilterContext'
import FilterContainer from './FilterContainer'
import FilterItem from './FilterItem'

const getButtonPath = (i: number, selected: boolean): string => {
  const s = selected ? '' : 'un'
  return `/images/buttons/${i}_${s}selected.svg`
}

const CountChoice = () => {
  const { filter, setCount } = useFilter()

  return (
    <FilterContainer>
      {Array.from({ length: 4 }, (_, i) => {
        i++ // Need it to be 1 indexed for image paths
        return (
          <FilterItem
            key={i}
            onClick={() => setCount(i)}
            src={getButtonPath(i, filter.count === i)}
            width="33px"
            padding="5.5px"
          />
        )
      })}
    </FilterContainer>
  )
}

export default CountChoice
