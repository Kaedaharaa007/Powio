import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import useFetch from '../../util/useFetch.js'
import DeviceNote from '../components/DeviceNote.jsx'
import AddDeviceBtn from '../components/AddDeviceBtn.jsx'
import { NavLink, Outlet } from 'react-router'

function DevicesPage() {

  const {data,error,loading} = useFetch('http://localhost:8000/api/devices/getAll')
  const devices_list = data.map(device=>
      <DeviceNote key={device.deviceId} name={device.name} status={device.status} 
      location={device.location} usage={device.usage}></DeviceNote>
  )

  if(loading) return(
    <div className='flex flex-col h-screen'>
      <Header className='fixed top-0'/>
      <div className='flex-1'>Loading..</div>
      <NavigationBar className='fixed bottom-0'/>
    </div>
  )

  if(error) console.log(error)

  return (
    <div className='flex flex-col h-screen'>
        <Header/>
        <div className='flex-1 overflow-y-scroll p-5'>
          <div className='flex flex-row p-5 gap-3'>
            <div className='flex flex-col'>
              <p className='text-4xl'>Device Control</p>
              <p className='text-gray-400 text-2xl'>Manage and monitor all your smart devices</p>
            </div>
            <div className='ml-auto cursor-pointer'>
              <NavLink to='/devices/create' > <AddDeviceBtn/> </NavLink>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {devices_list}
          </div>
        </div>
        <Outlet/>
        <NavigationBar/>
    </div>
  )
}

export default DevicesPage
