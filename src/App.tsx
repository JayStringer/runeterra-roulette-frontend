import React from 'react'
import { FilterProvider } from './FilterContext'

import './App.scss'

import CountChoice from './components/CountChoice'
import RarityChoice from './components/RarityChoice'
import RegionChoice from './components/RegionChoice'
import GenerateButton from './components/GenerateButton'
import { CardsProvider } from './CardsContext'
import CardList from './components/CardsList'

const App = () => {
  return (
    <CardsProvider>
      <FilterProvider>
        <img
          src={'/images/logo.svg'}
          alt="logo"
          style={{ marginBottom: '20px', minWidth: '320px', maxWidth: '420px' }}
        />
        <RegionChoice />
        <RarityChoice />
        <CountChoice />
        <GenerateButton />
        <CardList />
      </FilterProvider>
    </CardsProvider>
  )
}

export default App
