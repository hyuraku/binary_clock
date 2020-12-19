import React from 'react'

type Props = {
  value: string
}

export const Block: React.FC<Props> = ({ value } ) => {
  const blockColor = value === '1' ? 'BlackBlock' : 'WhiteBlock'
  return <div className={blockColor}></div>
}
