import React, { createContext, useContext, useState } from 'react'

export type Languages = {
  german: 'de_de'
  english: 'en_us'
  spanishSpain: 'es_es'
  spanishMexico: 'es_mx'
  french: 'fr_fr'
  italian: 'it_it'
  japan: 'ja_jp'
  korean: 'ko_kr'
  polish: 'pl_pl'
  portuguese: 'pt_br'
  thai: 'th_th'
  turkish: 'tr_tr'
  russian: 'ru_ru'
  chinese: 'zh_tw'
}

type Language = Languages[keyof Languages]

export type Regions = {
  bilgewater?: boolean
  demacia?: boolean
  freljord?: boolean
  ionia?: boolean
  noxus?: boolean
  piltover_and_zaun?: boolean
  shadow_isles?: boolean
  targon?: boolean
}

export type Rarities = {
  common?: boolean
  rare?: boolean
  epic?: boolean
  champion?: boolean
}

export type Filter = {
  count?: number
  regions?: Regions
  rarities?: Rarities
}

const filterDefaults = {
  filter: {
    language: 'en_us',
    count: 1,
    regions: {
      bilgewater: true,
      demacia: true,
      freljord: true,
      ionia: true,
      noxus: true,
      piltover_and_zaun: true,
      shadow_isles: true,
      targon: true,
    },
    rarities: {
      common: true,
      rare: true,
      epic: true,
      champion: true,
    },
  },
  setLanguage: (language: Language) => {},
  setCount: (count: number) => {},
  toggleRarity: (rarity: keyof Rarities) => {},
  toggleRegion: (region: keyof Regions) => {},
}

const FilterContext = createContext(filterDefaults)

export const useFilter = () => useContext(FilterContext)

interface IProviderProps {
  children?: any
}

export const FilterProvider = (props: IProviderProps) => {
  const [filter, setFilter] = useState(filterDefaults.filter)

  const _updateFilter = (update: {}): void => {
    setFilter({ ...filter, ...update })
  }

  const setLanguage = (language: Language) => {
    _updateFilter({ language: language })
  }

  const setCount = (count: number) => {
    _updateFilter({ count: count })
  }

  const toggleRarity = (rarity: keyof Rarities) => {
    const update = {
      rarities: { ...filter.rarities, [rarity]: !filter.rarities[rarity] },
    }
    _updateFilter(update)
  }

  const toggleRegion = (region: keyof Regions) => {
    const update = {
      regions: { ...filter.regions, [region]: !filter.regions[region] },
    }
    _updateFilter(update)
  }

  return (
    <FilterContext.Provider
      value={{ filter, setLanguage, setCount, toggleRarity, toggleRegion }}
    >
      {props.children}
    </FilterContext.Provider>
  )
}
