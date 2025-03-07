import { CircleArrowUp, Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({order}) {
  return (
    <div className='max-w-lg bg-slate-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow'>
        <div className='space-y-6'>
        <div>
        <h3 className='font-bold text-2xl text-slate-50'>GHS {order.sales}</h3>
        <h4 className='font-normal text-sm text-slate-50'>{order.title}</h4>
        </div>

        <div className='flex items-center text-sm'>
        <CircleArrowUp className='w-4 h-4'/>
        <span class="text-green-600 font-medium pl-1">{order.percentage}%</span>
        
        <span className='text-gray-500 mx-2'>Was GHS {order.sales_yesterday} yesterday</span>
        </div>
        </div>
    </div>
  )
}
