import React from 'react'
import "./dateTablet.scss"

interface DateTabletProps {
  day: string,
  date: string,
  isSelected: boolean
}

const DateTablet:React.FC<DateTabletProps> = ({day, date, isSelected}) => {
  return (
    <div className={`date-tablet ${isSelected && 'selected'}`}>
      <div className="day">{day}</div>
      <div className="date">{date}</div>
    </div>
  )
}

export default DateTablet