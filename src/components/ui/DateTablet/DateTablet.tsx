import React from 'react'
import "./dateTablet.scss"

type DateTabletProps = React.HTMLAttributes<HTMLDivElement> & {
  day: string,
  date: string,
  isSelected: boolean,
}

const DateTablet:React.FC<DateTabletProps> = ({day, date, isSelected, ...props}) => {
  return (
    <div className={`date-tablet ${isSelected && 'selected'}`} {...props}>
      <div className="day">{day}</div>
      <div className="date">{date}</div>
    </div>
  )
}

export default DateTablet