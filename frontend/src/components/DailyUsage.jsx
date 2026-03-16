import React from 'react'
import { HiArrowTrendingUp } from "react-icons/hi2";

function DailyUsage() {
    const daily_usage = 1.5
    const diff_percentage = -8
  return (
    <div className='flex flex-col p-5 justify-between h-full bg-[linear-gradient(129deg,#D4E3FF_80%,white_100%)] rounded-2xl'>
        <div className='flex flex-row items-center text-gray-500 font-semibold gap-5'>
            Daily Usage
            <div className='flex rounded-2xl bg-blue-500 justify-center items-center h-9 w-9'>
                <HiArrowTrendingUp className='text-white text-2xl'/>
            </div>
        </div>
        <div className='flex flex-col'>
            <p className='text-4xl'>{daily_usage}kWh</p>
            <p className='text-green-600'>{diff_percentage}% from yesterday</p>
        </div>
    </div>
  )
}

export default DailyUsage
