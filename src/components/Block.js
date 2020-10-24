import React from 'react'

export const Block = (props) => {
  const { value } = props
  const blockColor = value === '1' ? 'BlackBlock' : 'WhiteBlock'
  return <div className={blockColor}></div>
}
