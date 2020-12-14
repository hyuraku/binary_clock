import React, { useState, useEffect } from 'react'

import { Hour1stPlace } from './Hour1stPlace'
import { Hour10thPlace } from './Hour10thPlace'
import { Minute1stPlace } from './Minute1stPlace'
import { Minute10thPlace } from './Minute10thPlace'

const Clock = () => {
  const [dateTime, setDateime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setDateime(new Date()), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  const currentHours = dateTime.getHours()
  const hoursString = Padding(currentHours.toString(), 2)

  const currentMinutes = dateTime.getMinutes()
  const minutesString = Padding(currentMinutes.toString(), 2)

  const binaryHours10 = Padding(toBinaryString(hoursString[0]), 2)
  const binaryHours1 = Padding(toBinaryString(hoursString[1]), 4)

  const binaryMinutes10 = Padding(toBinaryString(minutesString[0]), 3)
  const binaryMinutes1 = Padding(toBinaryString(minutesString[1]), 4)

  return (
    <div>
      <div className="BlockArea">
        <Hour10thPlace value={binaryHours10} />
        <Hour1stPlace value={binaryHours1} />
        <Minute10thPlace value={binaryMinutes10} />
        <Minute1stPlace value={binaryMinutes1} />
      </div>
    </div>
  )
}

const Padding = (number: string, start_num: number): string => {
  return number.toString().padStart(start_num, '0')
}

const toBinaryString = (string: string): string => {
  return parseInt(string).toString(2)
}

export default Clock
