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

  const current_hours = dateTime.getHours()
  const hours_string = Padding(current_hours)

  const current_minutes = dateTime.getMinutes()
  const minutes_string = Padding(current_minutes)

  const binary_hours_10 = toBinaryString(hours_string[0]).padStart(2, '0')
  const binary_hours_1 = toBinaryString(hours_string[1]).padStart(4, '0')

  const binary_minutes_10 = toBinaryString(minutes_string[0]).padStart(3, '0')
  const binary_minutes_1 = toBinaryString(minutes_string[1]).padStart(4, '0')

  return (
    <div>
      <div className="BlockArea">
        <Hour10thPlace value={binary_hours_10} />
        <Hour1stPlace value={binary_hours_1} />
        <Minute10thPlace value={binary_minutes_10} />
        <Minute1stPlace value={binary_minutes_1} />
      </div>
    </div>
  )
}

const Padding = (times) => {
  return times.toString(10).padStart(2, '0')
}

const toBinaryString = (string) => {
  return parseInt(string).toString(2)
}

export default Clock
