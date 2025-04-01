"use client"

import { useState } from "react";
import { Plus, X } from 'lucide-react'

export default function ArrayItemsInput({setItems,items=[],itemTitle}) {


const [item,setItem] = useState("")  
const [showTagForm,setShowTagForm] = useState(false)

//const filteredItems = items.filter(item => item !== ""); //removes empty string from tags array
    
const addItem = () => {
    if(!item)return
    setItems([...items,item])
    setItem('')
  }
  
  const removeItem = (remItem) => {
  
    setItems(prevItems => prevItems.filter(ite => ite !== remItem));
  }


  return (

    <div className="sm:col-span-2">
          {
            showTagForm? (
              
<form className="flex items-center max-w-lg mx-auto">   
    <label for="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
            </svg>
        </div>
        <input 
         value={item}
        onChange={(e)=>setItem(e.target.value)}
        type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add product tags..." />
        
    </div>
    <button 
    onClick={addItem}
    type="button" className="inline-flex items-center py-2.5 px-4 ms-2 mr-1.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       <Plus className='w-4 h-4'/> Add 
    </button>
    <button type="button" onClick={()=> setShowTagForm(false)} className="inline-flex items-center py-2.5 px-2.5 rounded-full ms-2 text-sm font-medium text-white bg-red-700 border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
       <X className='w-4 h-4 transition-all hover:scale-120'/>  
    </button>
</form>

            ): (
          <button onClick={()=>setShowTagForm(true)} type="button" className='flex items-center dark:text-slate-50 text-slate-950 cursor-pointer'>
          <Plus className='w-4 h-4'/>
          <span className='px-2'>Add {itemTitle}</span>
         </button>
            )
          }

          <div className='flex flex-wrap gap-2 mt-4'>
            {
              items.map((ite,i)=>
              (
                <div key={i} className='flex space-x-1 items-center dark:text-slate-50 dark:bg-slate-600
                 bg-gray-200 text-slate-950 rounded-lg py-0.5 px-2 '>
                  <p>{ite}</p>
                  <button 
                  onClick={()=>removeItem(ite)}
                  type='button'className='cursor-pointer'><X className='w-4 h-4'/></button>
                    </div>

              ))
            }

          </div>
         </div>
  )
}
