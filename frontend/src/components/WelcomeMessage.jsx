import React from 'react'

function WelcomeMessage() {

    const devices_count=4;

  return (
    <div className='flex flex-col justify-evenly bg-[#7a9b76] rounded-2xl p-5 h-full text-white'>
      <div>
        <p className='font-bold text-2xl'>Welcome back!</p>
        <p>Here's your energy review for today</p>
      </div>
      <div>
        <p className='text-5xl'>1.60 kW</p>
        <p>{devices_count} devices currently active</p>
      </div>
    </div>
  )
}

export default WelcomeMessage
