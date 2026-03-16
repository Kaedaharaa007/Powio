import React, { useState } from 'react'
import { GiElectric } from "react-icons/gi";
import Button from './Button';
import { MdDeleteOutline } from "react-icons/md";

function DeviceNote({name,status,location,usage}) {

  const [deviceStatus, setStatus] = useState(status)
  function toggleStatus(){
    setStatus(!deviceStatus)
  }

  const On_icon = 
    <div className='flex flex-row items-center gap-1'>
      <div className='flex rounded-2xl bg-green-400 w-4 h-4 items-center justify-center'></div>
      Active
    </div>

  const Off_icon = 
    <div className='flex flex-row items-center gap-1'>
      <div className='flex rounded-2xl bg-red-500 w-4 h-4 items-center justify-center'></div>
      Offline
    </div>

  return (
    <div className='flex flex-col rounded-2xl bg-white p-3'>
      <div className='flex flex-row items-center gap-2 m-3'>
        <div className='flex rounded-2xl bg-[#7a9b76] w-10 h-10 items-center justify-center text-2xl'>
          <GiElectric className='text-white'/>
        </div>
        <div className='flex flex-col'>
          <p>{name}</p>
          <p>{location}</p>
        </div>
        <div className='ml-auto'>
          <Button status={deviceStatus} toggleStatus={toggleStatus}/>
        </div>
      </div>
      <hr />
      <div className='flex flex-col m-3'>
        <p>{deviceStatus ? On_icon : Off_icon}</p>
        <div className='flex flex-row justify-between'>
          <p>Power Usage</p>
          <p>{usage} W</p>
        </div>
        <div className='flex flex-row w-fit border-red-500 border-2 ml-auto rounded-2xl p-1 text-red-500 cursor-pointer items-center justify-center mt-2'>
          <MdDeleteOutline className='text-2xl'/>
          Delete device
        </div>
      </div>
    </div>
  )
}

export default DeviceNote
