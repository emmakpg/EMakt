import { Search, Trash2, Upload } from "lucide-react";

export default function TableActions() {
  return (
    
      <div className="flex justify-between my-4 py-6 px-12 dark:bg-slate-700 bg-white rounded-lg dark:text-slate-50 text-slate-950 items-center gap-8">
        <button className="flex justify-between space-x-2 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800
         focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
         dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
            <Upload className="w-4 h-4"/>
            <span>Export</span>
            </button>

        {/* Search */}
        <div className="flex-grow">
        <label htmlFor="table-search" className="sr-only">Search</label>

        <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
            </div>
            <input type="text" id="table-search"
             className="block ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
               dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
               dark:focus:border-blue-500 w-full py-3" placeholder="Search for items"/>
        </div>
    </div>
    {/* Delete button */}
    <button className="flex justify-between space-x-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800
         focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
         dark:border-red-400 dark:text-red-400 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-900">
      <Trash2 className="w-4 h-4"/>
      <span>Bulk Delete</span>
    </button>

      </div>  
    
  )
}
