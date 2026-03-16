import React from 'react'

function Header() {
  return (
    <div className='bg-white p-2 w-full flex flex-row gap-3'>
      <img src="/powio-icon.png" className='w-12 h-12 rounded-2xl' />
      <div className='flex flex-col'>
        <p className='font-bold'>Powio</p>
        <p className='text-[#7a9b76] text-sm'>Smart Electricity Tracker</p>
      </div>
    </div>
  )
}

export default Header
