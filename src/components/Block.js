import React from 'react'

export const Block = (props) => {
  const blockColor = props.value === '1' ? 'BlackBlock' : 'WhiteBlock'
  return <div className={blockColor}></div>
}
