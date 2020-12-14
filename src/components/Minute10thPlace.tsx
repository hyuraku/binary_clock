import React from 'react'

import { Block } from './Block'

type Props = {
  value: string;
}

export const Minute10thPlace: React.FC <Props> = (props) => {
  const { value } = props
  const number = parseInt(value, 2)
  return (
    <div className="Blocks">
      <Block value={value[0]} />
      <Block value={value[1]} />
      <Block value={value[2]} />
      <h1>{number}</h1>
    </div>
  )
}
