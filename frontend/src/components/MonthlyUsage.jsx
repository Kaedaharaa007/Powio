import React from 'react'
import { FaBatteryEmpty } from "react-icons/fa";

function MonthlyUsage() {

    const monthly_usage = 18.2
    const electircity_cost = 1000000
  return (
    <div className='flex flex-col p-5 justify-between h-full bg-[linear-gradient(129deg,#D1FFD9_80%,white_100%)] rounded-2xl'>
        <div className='text-gray-500 font-semibold flex flex-row gap-5 items-center'>
            <p>Monthly Usage</p>
            <div className='bg-green-600 flex rounded-2xl h-9 w-9 justify-center items-center'>
                <FaBatteryEmpty className='text-white text-2xl'/>
            </div>
        </div>
        <div className='flex flex-col'>
            <p className='text-4xl'>{monthly_usage}kWh</p>
            <p className='text-gray-400'>Est. Rp{electircity_cost} this month</p>
        </div>
    </div>
  )
}

export default MonthlyUsage
