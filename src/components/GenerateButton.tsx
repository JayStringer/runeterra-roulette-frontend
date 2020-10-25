import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import ky from 'ky'
import { useFilter } from '../FilterContext'

const StyledImg = styled.img`
  margin-top: 10px;
`

const GenerateButton = () => {
  const normalImg = '/images/buttons/generate_btn.svg'
  const hoverImg = '/images/buttons/generate_btn_hover.svg'

  const [source, setSource] = useState(normalImg)
  const [width, setWidth] = useState('150px')

  const { filter } = useFilter()

  const requestCards = async () => {
    const response = await ky
      .get('http://localhost:8080/cards', {
        searchParams: {
          ...filter.rarities,
          ...filter.regions,
          count: filter.count,
        },
      })
      .json()
    console.log(response)
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
