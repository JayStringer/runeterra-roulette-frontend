import React from 'react'
import { FilterProvider } from './FilterContext'

import './App.scss'

import CountChoice from './components/CountChoice'
import RarityChoice from './components/RarityChoice'
import RegionChoice from './components/RegionChoice'
import GenerateButton from './components/GenerateButton'
import Card from './components/Card'

const App = () => {
  return (
    <FilterProvider>
      <img
        src={'/images/logo.svg'}
        alt="logo"
        width="420px"
        style={{ marginBottom: '20px' }}
      />
      {/* <h2>ROULETTE</h2> */}
      <RegionChoice />
      <RarityChoice />
      <CountChoice />
      <GenerateButton />
      <ul>
        <Card image_url="http://dd.b.pvp.net/1_12_0/set1/en_us/img/cards/01NX047.png" />
        <Card image_url="http://dd.b.pvp.net/1_12_0/set1/en_us/img/cards/01NX047.png" />
      </ul>
    </FilterProvider>
  )
}

export default App
