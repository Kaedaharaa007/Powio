import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'

function SchedulesPage() {
  return (
      <div className='flex flex-col h-screen'>
        <Header/>
        <div className='flex-1 overflow-y-scroll p-5'>
          <div className='flex flex-col'>
            <p className='text-3xl'>Smart Schedules</p>
            <p className='text-gray-400'>Automate your smart devices for maximum efficiency</p>
          </div>
        </div>
        <NavigationBar/>
    </div>
  )
}

export default SchedulesPage
