import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

function MonthlyOverview() {

  const chartRef = useRef(null)
  const canvasRef = useRef(null)

  const data =[
    {month: 'January', usage: 28},
    {month: 'Febuary', usage: 12},
    {month: 'March', usage: 22},
  ]

  useEffect(()=>{
    chartRef.current = new Chart(canvasRef.current,{
      type: 'line',
      data: {
        labels: data.map(row=> row.month),
        datasets:[
          {
            label: "Power Usage",
            data: data.map(row=>row.usage),

            borderColor: "rgb(122,155,118)",   // line color
          }
        ]
      },
      options:{
        scales:{
          y:{
            beginAtZero: true
          }
        }
      }
    })
    return()=>{
      chartRef.current.destroy()
    }
    }
  )

  return (
    <div className='flex flex-col p-5 h-full bg-white rounded-2xl'>
      <p>Monthly Overview</p>
      <p className='text-gray-500'>Weekly consumption trends</p>
      <div className='flex justify-center items-center'>
        <div className='w-full h-64'>
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  )
}

export default MonthlyOverview
