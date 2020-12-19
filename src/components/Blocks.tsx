import React from 'react'

import { Block } from './Block'

type Props = {
  value: string
}

export const Blocks: React.FC<Props> = ({ value }) => {
  const value_arr = value.split('')

  const number = parseInt(value, 2)

  const blockList = value_arr.map((value: string) => {
    return <Block value={value} />
  })

  return (
    <div className="Blocks">
      {blockList}
      <h1>{number}</h1>
    </div>
  )
}
