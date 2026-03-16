import React, { useRef } from 'react'
import Chart from 'chart.js/auto'
import { useEffect } from 'react'

function DailyPowerConsumption() {

  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  const data =[
    {hour: 14.00, usage: 13},
    {hour: 15.00, usage: 15},
    {hour: 16.00, usage: 11},
  ]

  //run code after component renders
  useEffect(()=>{
    chartRef.current = new Chart(canvasRef.current,{
      type: 'line',
      data:{
        labels: data.map(row => row.hour),
        datasets: [
          {
            label: "Power Usage",
            data: data.map(row => row.usage),
            
            //chart custom
            borderColor: "rgb(122,155,118)",   // line color
            backgroundColor: "rgba(122,155,118,0.5)", // area color
            fill: true,   // enables area under line
            tension: 0.4 // makes line smooth
          }
        ]
      },
      options:{
        scales:{
          y: {
            beginAtZero: true
          }
        }
      }
    })

    return()=>{
      chartRef.current.destroy()
    }

  })

  return (
    <div className='flex flex-col p-5 h-full bg-white rounded-2xl'>
      <p>Daily Power Consumption</p>
      <p className='text-gray-500'>Hourly usage pattern for today</p>
      <div className='flex justify-center items-center w-full'>
        <div className='w-full h-64'>
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  )
}

export default DailyPowerConsumption
