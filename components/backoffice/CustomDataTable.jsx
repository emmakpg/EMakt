"use client"
import { useState } from 'react';
import data from '../../data.json'


export default function CustomDataTable() {
 
    const PAGE_SIZE = 10;
    const [currentPage,setCurrentPage] = useState(1)
    const startIndex = (currentPage-1)* PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE
    const currentDisplayData = data.slice(startIndex,endIndex)
    const pagination = Math.ceil(data.length / PAGE_SIZE)
    const itemStartIndex = startIndex + 1
    const itemEndIndex = Math.min(startIndex + PAGE_SIZE,data.length)
    const totalItems = data.length

 
 
  return (
    <div className='dark:bg-slate-700 bg-white p-8 rounded-lg'>
        <h2 className='font-bold text-xl mb-4 dark:text-gray-50 text-slate-950'>Recent Orders</h2>

    {/* Table */}


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    FIRST NAME
                </th>
                <th scope="col" className="px-6 py-3">
                    LAST NAME
                </th>
                <th scope="col" className="px-6 py-3">
                    EMAIL
                </th>
                <th scope="col" className="px-6 py-3">
                    GENDER
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {
            currentDisplayData.map((item)=>(

                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.first_name}
                </th>
                <td className="px-6 py-4">
                    {item.last_name}
                </td>
                <td className="px-6 py-4">
                    {item.email}
                </td>
                <td className="px-6 py-4">
                    {item.gender}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            ))
           }
          
        </tbody>
    </table>
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">{itemStartIndex}-{itemEndIndex}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalItems}</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <button 
        onClick={()=>setCurrentPage(currentPage-1)} 
        disabled = {currentPage === 1}
        className= {currentPage===1?
            "flex cursor-not-allowed items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
            :
            "flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
           
        }>
            Previous</button>
            </li>
            
            {[...Array(pagination)].map((_, i) => (
                   
                   <li key={i}>
                   <button onClick={()=>setCurrentPage(i+1)}
                    className=
                    {currentPage == i+1 ?
                        "flex cursor-not-allowed items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
                        :"flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }>

                        {i+1}</button>
               </li>

                  ))}
                   
                     
                  
                
            
            
          
            <li>
        <button 
        onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===pagination}
        className= {currentPage===pagination?
            "flex cursor-not-allowed items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
            :
            "flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
           
        }
       >Next</button>
            </li>
        </ul>
    </nav>
</div>

    </div>
  )
}
