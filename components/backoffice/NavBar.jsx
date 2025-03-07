import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'

export default function 
() {
  return (
    <div className=' bg-slate-800 text-slate-50 
    h-16 px-8 py-4 fixed top-0 left-0 right-0 shadow-lg ml-64'>
      <div className='flex justify-between items-center'>
        {/*Icon  */}
        <button><AlignJustify/></button>
        {/* 3 Icons */}
        <div className="flex space-x-3">
            <button><Sun/></button>
            <button><Bell/></button>
            <button><User/></button>
        </div>
        </div>
    </div>
  ) 
}
