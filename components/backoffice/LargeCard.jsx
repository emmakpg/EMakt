import { CircleArrowUp, Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({order}) {
  return (
    <div className='max-w-lg dark:bg-slate-800 bg-slate-200  rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow'>
        <div className='space-y-6'>
        <div>
        <h3 className='font-bold text-2xl dark:text-slate-50 text-slate-950'>GHS {order.sales}</h3>
        <h4 className='font-normal text-sm dark:text-gray-50 text-slate-950'>{order.title}</h4>
        </div>

        <div className='flex items-center text-sm text-green-600'>
        <CircleArrowUp className='w-4 h-4'/>
        <span className="text-green-600 font-medium pl-1">{order.percentage}%</span>
        
        <span className='text-gray-500 mx-2'>Was GHS {order.sales_yesterday} yesterday</span>
        </div>
        </div>
    </div>
  )
}
