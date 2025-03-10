import React from 'react'
import SalesChart from './SalesChart'
import BestSellingChart from './BestSellingChart'

export default function DashboardCharts() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto px-4 py-8'>
        <SalesChart/>
        <BestSellingChart/>
    

        
    </div>
  )
}
