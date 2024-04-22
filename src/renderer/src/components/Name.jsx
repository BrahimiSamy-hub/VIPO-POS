import React from 'react'

function Name() {
  // Create a new Date object
  const currentDate = new Date()

  // Get the day of the week
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayOfWeek = days[currentDate.getDay()]

  // Get the day of the month
  const dayOfMonth = currentDate.getDate()

  // Get the month (note: months are 0-indexed, January is 0)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const month = months[currentDate.getMonth()]

  // Get the year
  const year = currentDate.getFullYear()

  // Format the date string
  const dateString = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`

  return (
    <div>
      <h1>VIPO CHICKEN&FRIES</h1>
      <small>{dateString}</small>
    </div>
  )
}

export default Name
