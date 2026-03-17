import React from 'react'
import { TbCloudQuestion } from "react-icons/tb";

function NoDevices() {
  return (
    <div className=' flex  flex-col text-3xl justify-center items-center text-gray-400'>
        <TbCloudQuestion className='text-9xl'/>
        No devices added yet
    </div>
  )
}

export default NoDevices
