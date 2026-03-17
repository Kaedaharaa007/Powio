import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import useFetch from '../../util/useFetch.js'
import DeviceNote from '../components/DeviceNote.jsx'
import AddDeviceBtn from '../components/AddDeviceBtn.jsx'
import { NavLink, Outlet } from 'react-router'
import NoDevices from '../components/NoDevices.jsx'

function DevicesPage() {

  const {data,error,loading, refetch} = useFetch('http://localhost:8000/api/devices/')

  if(loading) return(
    <div className='flex flex-col h-screen'>
      <Header className='fixed top-0'/>
      <div className='flex-1'>Loading..</div>
      <NavigationBar className='fixed bottom-0'/>
    </div>
  )

  if(error) console.log(error)

  const devices_list = data.map(device=>
      <DeviceNote key={device.deviceId} name={device.name} status={device.status} 
      location={device.location} usage={device.usage} id={device.deviceId}></DeviceNote>
  )
 
  return (
    <div className='flex flex-col h-screen'>
        <Header className='fixed top-0'/>
        <div className='flex flex-col flex-1 overflow-y-scroll p-5'>
          <div className='flex flex-row p-5 gap-3'>
            <div className='flex flex-col'>
              <p className='text-4xl'>Device Control</p>
              <p className='text-gray-400 text-2xl'>Manage and monitor all your smart devices</p>
            </div>
            <div className='ml-auto cursor-pointer'>
              <NavLink to='/devices/create' > <AddDeviceBtn/> </NavLink>
            </div>
          </div>
            {data.length===0 ? (
            <div className='flex flex-1 flex-col justify-center items-center'>
              <NoDevices />
            </div>
            ) : 
            (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {devices_list}
              </div>
            )}
        </div>
        <NavigationBar className='fixed bottom-0'/>
    </div>
  )
}

export default DevicesPage
