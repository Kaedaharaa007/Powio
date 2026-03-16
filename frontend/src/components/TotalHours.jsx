import React from 'react'
import { FaRegClock } from "react-icons/fa";

function TotalHours() {
    const total_hours = 84
  return (
    <div className='flex flex-col p-5 h-full justify-between bg-[linear-gradient(129deg,#EEDEFF_80%,white_100%)] rounded-2xl'>
        <div className='flex flex-row gap-5 items-center'>
            <p className='text-gray-500 font-semibold' >Total Hours</p>
            <div className='bg-purple-500 flex rounded-2xl h-9 w-9 justify-center items-center'>
                <FaRegClock className='text-white text-1.5xl'/>
            </div>
        </div>
        <div>
            <p className='text-4xl'>{total_hours} hrs</p>
            <p className='text-gray-400'>This month</p>
        </div>
    </div>
  )
}

export default TotalHours
