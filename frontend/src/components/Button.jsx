import React from 'react'

function Button({status, toggleStatus}) {
  
    if(status) return(
        <div
            onClick={toggleStatus} 
            className='flex w-12 h-7 bg-[#7a9b76] rounded-2xl items-center justify-center p-0.5 cursor-pointer'>
            <div className='flex h-6 w-6 bg-white rounded-2xl ml-auto'></div> 
        </div>
    )

    if(!status)return (
    <div 
        onClick={toggleStatus}
        className='flex w-12 h-7 bg-gray-500 rounded-2xl items-center justify-center p-0.5 cursor-pointer'>
      <div className='flex h-6 w-6 bg-white rounded-2xl mr-auto'></div>
    </div>
  )
}

export default Button
