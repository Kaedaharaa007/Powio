import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'

function MainPage() {
  return (
    <div className='flex flex-col h-screen'>
        <Header className='fixed top-0'/>
        <div className='flex flex-1'>
          <p className='text-green-700'>Welcome to Powio</p>
        </div>
        <NavigationBar className='fixed bottom-0' />
    </div>
  )
}

export default MainPage
