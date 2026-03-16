import { useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import WelcomeMessage from '../components/WelcomeMessage'
import DailyUsage from '../components/DailyUsage'
import MonthlyUsage from '../components/MonthlyUsage'
import TotalHours from '../components/TotalHours'
import DailyPowerConsumption from '../components/DailyPowerConsumption'
import MonthlyOverview from '../components/MonthlyOverview'


function DashboardPage() {

  return (
    <div className='h-screen flex flex-col'>
      <Header className='fixed top-0'/>
      <div className='flex-1 overflow-y-scroll'>
        <div className="grid grid-cols-6 grid-rows-7 gap-4 m-5">
          <div className="col-span-6 row-span-2 row-start-1"><WelcomeMessage/></div>
          <div className="col-span-2 row-span-2 row-start-3"><DailyUsage/></div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-3"><MonthlyUsage/></div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-3"><TotalHours/></div>
          <div className="col-span-3 row-span-3 row-start-5"><DailyPowerConsumption/></div>
          <div className="col-span-3 row-span-3 col-start-4 row-start-5"><MonthlyOverview/></div>
        </div>
      </div>
      <NavigationBar className='fixed bottom-0'/>
    </div>
  )
}

export default DashboardPage
