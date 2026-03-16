import React from 'react'
import { NavLink } from 'react-router'
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiCalendarScheduleLine } from "react-icons/ri";



function NavigationBar() {
  return (
    <div className='bg-white text-black flex flex-row justify-evenly gap-5 p-2 w-full'>
        <NavLink to='/dashboard' className={({isActive})=>
          `flex flex-col items-center ${isActive ? "text-[#7a9b76]" : ""}`}>
          <LuLayoutDashboard className='text-3xl'/>
          Dashboard
        </NavLink>

        <NavLink to='/devices' className={({isActive})=>
        `flex flex-col items-center ${isActive ? "text-[#7a9b76]": ""}`}>
          <AiOutlineThunderbolt className='text-3xl'/>
          Devices
        </NavLink>

        <NavLink to='/schedules' className={({isActive})=>
        `flex flex-col items-center ${isActive ? "text-[#7a9b76]" : ""}`  }>
          <RiCalendarScheduleLine className='text-3xl'/>
          Schedules
        </NavLink>
    </div>
  )
}

export default NavigationBar
