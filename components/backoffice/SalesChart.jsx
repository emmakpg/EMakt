"use client"
import React, { useState } from 'react'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
 

export default function SalesChart() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display:false,
            position: 'top',
            
          },
      
          title: {
            display: false,
            text: 'Orders Line Chart',
            color:"#fff",
            
          },
          scales: {
            x: {
              ticks: {
                color: '#fff', // X-axis labels
            font: {
                    size: 400
                  }
              }
            },
            y: {
              ticks: {
                color: '#fff' // Y-axis labels
              }
            }
          }
         
        }
      };
      
      const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
      
    const data = {
        labels,
        datasets: [
          {
            label: 'Orders',
            data: labels.map(() => faker.number.int({ min: 0, max: 800 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            Color:"white"
          },
          
        ],
      };

    const tabs =[
        {
            title:"Sales",
            type:"sales",
            data: {
                labels,
                datasets: [
                  {
                    label: 'Sales',
                    data: labels.map(() => faker.number.int({ min: 0, max: 800 })),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    
                  },
                  
                ],
              }
        },
        {
            title:"Orders",
            type:"orders",
            data: {
                labels,
                datasets: [
                  {
                    label: 'Orders',
                    data: labels.map(() => faker.number.int({ min: 0, max: 800 })),
                    borderColor: 'rgb(25, 225, 132)',
                    backgroundColor: 'rgba(25, 225, 132, 0.5)',
                    Color:"white"
                  },
                  
                ],
              }
        }
    ]

    const [chartToDisplay,setChartToDisplay] = useState(tabs[0].type)

  return (

    <div className='dark:bg-slate-700 dark:text-slate-50 bg-white text-slate-950 p-8 rounded-lg'>
    <h2 className='font-bold text-xl mb-4'>Weekly Sales Chart</h2>


       <div className=''>
        {/* Tabs */}


<div className="text-sm font-medium text-center text-slate-500 border-b border-slate-500 dark:text-slate-500 dark:border-slate-500">
    <ul className="flex flex-wrap -mb-px">
        {
            tabs.map((tab,i)=>
                ( 
                 <li className="me-2" key={i}>
                    <button 
                    onClick={() => setChartToDisplay(tab.type)} className={chartToDisplay==tab.type ?
                       "inline-block p-4 border-b-2 border-slate-700 rounded-t-lg active text-slate-950 dark:text-slate-50 dark:border-slate-50":
                        "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-700  dark:text-slate-50 text-slate-950 hover:border-gray-500 dark:hover:text-gray-100"
                    }
                  >{tab.title}</button>
                </li>
                )
            )
        }
       
       
    </ul>
</div>

          {/* Chart */}
    
          <div className='p-8'>
            {  
            tabs.map((tab,i)=> (
               <div key={i}> { chartToDisplay === tab.type ?  
               <Line options={options} data={tab.data}/>:""
            }
            </div>
                
            ))
        }
                    
        
        </div>
        </div>     
          
            
        </div>
  )
}
