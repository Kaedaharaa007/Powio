import React from 'react'
import { FaPlus } from "react-icons/fa";

function addDeviceBtn() {
  return (
    <div className='flex flex-row items-center justify-center w-45 h-15 bg-[#7a9b76] rounded-4xl gap-2 text-white'>
      <FaPlus className='text-3xl'/>
      Add new device
    </div>
  )
}

export default addDeviceBtn
