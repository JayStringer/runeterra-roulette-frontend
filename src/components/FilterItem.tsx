import React from 'react'

interface FilterItemProps {
  src: string
  onClick: () => void
  padding?: string
  width?: string
}

const FilterItem = (props: FilterItemProps) => {
  return (
    <li
      onClick={() => props.onClick()}
      style={{
        padding: props.padding,
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      <img src={props.src} alt="" width={props.width || '100px'} />
    </li>
  )
}

export default FilterItem
