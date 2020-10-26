import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import ky from 'ky'
import { useFilter } from '../FilterContext'
import { Cards, useCards } from '../CardsContext'

const StyledImg = styled.img`
  margin-top: 10px;
`

interface CardObject {
  name: string
  image_url: string
}

const GenerateButton = () => {
  const normalImg = '/images/buttons/generate_btn.svg'
  const hoverImg = '/images/buttons/generate_btn_hover.svg'

  const { updateCards } = useCards()

  const [source, setSource] = useState(normalImg)
  const [width, setWidth] = useState('150px')

  const { filter } = useFilter()

  const requestCards = async () => {
    const response = (await ky
      .get('http://localhost:8080/cards', {
        searchParams: {
          ...filter.rarities,
          ...filter.regions,
          count: filter.count,
        },
      })
      .json()) as CardObject[]

    let update: Cards = []
    response.forEach((card) => {
      update.push({ name: card.name, imageUrl: card.image_url })
    })

    updateCards(update)
  }

  return (
    <Fragment>
      <StyledImg
        src={source}
        alt=""
        width={width}
        onClick={() => requestCards()}
        onMouseOver={() => setSource(hoverImg)}
        onMouseOut={() => {
          setSource(normalImg)
          setWidth('150px')
        }}
        onMouseDown={() => setWidth('140px')}
        onMouseUp={() => setWidth('150px')}
      />
      {/* <div style={{ textAlign: 'left', marginLeft: '45%', color: 'white' }}>
        <pre>{JSON.stringify(filter, null, 2)}</pre>
      </div> */}
    </Fragment>
  )
}

export default GenerateButton
