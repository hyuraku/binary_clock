import React, { useState, useEffect } from 'react'

import { Blocks } from './Blocks'

const Clock = React.memo(() => {
  const [dateTime, setDateime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setDateime(new Date()), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  const hoursString = Padding(dateTime.getHours().toString(), 2)
  const minutesString = Padding(dateTime.getMinutes().toString(), 2)
  const secondString = Padding(dateTime.getSeconds().toString(), 2)

  const binaryHours10 = Padding(toBinaryString(hoursString[0]), 3)
  const binaryHours1 = Padding(toBinaryString(hoursString[1]), 4)

  const binaryMinutes10 = Padding(toBinaryString(minutesString[0]), 3)
  const binaryMinutes1 = Padding(toBinaryString(minutesString[1]), 4)

  const binarySeconds10 = Padding(toBinaryString(secondString[0]), 3)
  const binarySeconds1 = Padding(toBinaryString(secondString[1]), 4)

  return (
    <div>
      <div className="BlockArea">
        <Blocks value={binaryHours10} />
        <Blocks value={binaryHours1} />
        <Blocks value={binaryMinutes10} />
        <Blocks value={binaryMinutes1} />
        <Blocks value={binarySeconds10} />
        <Blocks value={binarySeconds1} />
      </div>
    </div>
  )
})

Clock.displayName = "Clock"

const Padding = (string: string, start_num: number): string => {
  return string.toString().padStart(start_num, '0')
}

const toBinaryString = (string: string): string => {
  return parseInt(string).toString(2)
}

export default Clock
