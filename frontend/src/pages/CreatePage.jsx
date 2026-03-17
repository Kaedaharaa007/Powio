import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router'
import { TiArrowBack } from "react-icons/ti";
import axios from 'axios'
import toast from 'react-hot-toast'

function CreatePage() {

    const navigate = useNavigate()

    const[device, setDevice] = useState({
        deviceId:'',
        name:'',
        location:'',
        usage:'',
    })

    const handleChange = (e)=>{
        setDevice({
            ...device,//take value from prevent changes
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()// prevent browser to refresh page
        console.log("Clicked")

        try {
            const res = await axios.post('http://localhost:8000/api/devices', device)
            console.log(res.data)
            toast.success("Device added succsessfully")
            navigate('/devices')
        } catch (error) {
            console.log(error)
            if(error.response.status === 500){
                toast.error("Failed to add device")
            }else if(error.response.status === 400){
                toast.error(error.response.data.message)
            }
        }
    }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-300'>
        <div className='flex flex-col p-3 rounded-2xl gap-2 bg-white'>
            <div className='flex flex-row'>
                <NavLink to='/devices'>
                <div className='flex flex-row justify-center items-center gap-2 text-3xl text-white bg-[#7a9b76] rounded-2xl w-30 h-10'>
                    <TiArrowBack/>
                    <p>Back</p>
                </div>
                </NavLink>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col text-2xl p-2'>
                ID: <input onChange={handleChange} type="text" name='deviceId' className='border-2 rounded-2xl p-2'/>
                Name: <input onChange={handleChange} type="text" name='name' className='border-2 rounded-2xl p-2'/>
                Location: <input onChange={handleChange} type="text" name='location' className='border-2 rounded-2xl p-2'/>
                Usage: <input onChange={handleChange} type="text" name='usage' className='border-2 rounded-2xl p-2'/>
                <button type='submit' onClick={handleSubmit} className='bg-[#7a9b76] mt-5 flex rounded-2xl justify-center items-center text-3xl p-2 text-white cursor-pointer'>Add new device</button>
            </form>
        </div>
    </div>
  )
}

export default CreatePage
