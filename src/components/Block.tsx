import React from 'react'

type Props = {
  value: string;
}

export const Block: React.FC <Props> = (props) => {
  const { value } = props
  const blockColor = value === '1' ? 'BlackBlock' : 'WhiteBlock'
  return <div className={blockColor}></div>
}
