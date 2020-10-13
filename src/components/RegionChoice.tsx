import React from 'react'

import { useFilter, Regions } from '../FilterContext'
import FilterContainer from './FilterContainer'
import FilterItem from './FilterItem'

const RegionChoice = () => {
  const { filter, toggleRegion } = useFilter()
  const regions: (keyof Regions)[] = [
    'bilgewater',
    'demacia',
    'freljord',
    'ionia',
    'noxus',
    'piltover_and_zaun',
    'shadow_isles',
    'targon',
  ]

  const getRegionPath = (region: keyof Regions): string => {
    const s = filter.regions[region] ? '' : 'un'
    return `/images/regions/${region}_${s}selected.svg`
  }

  return (
    <FilterContainer>
      {Array.from(regions, (region, i) => {
        return (
          <FilterItem
            key={i}
            src={getRegionPath(region)}
            onClick={() => toggleRegion(region)}
            width="60px"
            padding="5px"
          />
        )
      })}
    </FilterContainer>
  )
}

export default RegionChoice
