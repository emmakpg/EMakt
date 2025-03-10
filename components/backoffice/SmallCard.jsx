
import React from 'react'

export default function SmallCard({data}) {
    const { title,number,icon:Icon,iconBg } = data;
  return (
    <div className='max-w-lg dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex items-center gap-4'>
       <div className={`w-12 h-12 rounded-full flex ${iconBg} items-center justify-center text-slate-50`}>
        <Icon />
        </div>
        <div className=''>
        <h2 className='dark:text-gray-50 text-slate-950'>{title}</h2>
        <h2 className='text-2xl font-bold dark:text-gray-50 text-slate-950'>{number}</h2>
        </div>
        
    </div>
  )
}
