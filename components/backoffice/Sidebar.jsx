"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {ChevronDown, ChevronRight, Ellipsis, LayoutDashboard, LogOut, Settings, ShoppingBag, Slack, Truck, User, Users, UsersRound, Warehouse } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"



export default function Sidebar({isVisible,toggleSidebar}) {

  const [isCatalogueOpen, setCatalogueOpen] = useState(false)

  const pathname = usePathname();

  const catalogueList = [
    {
      title:"Products",
      href:"/dashboard/products",
    },
    {
      title:"Categories",
      href:"/dashboard/categories",
    },
    {
      title:"Coupons",
      href:"/dashboard/coupons",
    },
    {
      title:"Store Banners",
      href:"/dashboard/banners",
    },
  ]
  
  const handleItemClick = () => {
    // Close sidebar only on mobile (< 768px)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      toggleSidebar();
    }
  };
  
  return (
    <div className={`sm:block dark:bg-slate-800 bg-slate-700 space-y-6 h-screen w-64 mt-20 sm:mt-0 text-slate-50 p-3 fixed left-0 top-0 transition-transform duration-300 z-30 overflow-y-auto
      ${
        !isVisible ? 'lg:hidden -translate-x-[100%] md:translate-x-0' : ''
      }`
    }
    aria-hidden={!isVisible}
    tabIndex={isVisible ? 0 : -1}
    >
    
        <Link className="mb-6" href='/'>Logo</Link>
        <div className='space-y-3 flex flex-col mt-16'>
        <Link 
          href="/dashboard" 
          onClick={handleItemClick}
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors 
           ${pathname==="/dashboard"
              ? 'bg-slate-800 rounded border-l-4 border-green-600'
              : 'text-slate-50'
            }
          `}
           >
        <LayoutDashboard className="w-4 h-4" />
        <span>Dashboard</span>
        </Link>

{/* Cataloge Dropdown menu */}
    
<Collapsible >
  <CollapsibleTrigger>
  <button 
          onClick={() => setCatalogueOpen(!isCatalogueOpen)}
          href="/catalogue" 
          className={`flex items-center space-x-3 pr-16 p-2 rounded hover:bg-slate-800 transition-colors 
          `} >  
        <Slack className="w-4 h-4" />
        <span>Catalogue</span>
        {
          isCatalogueOpen ? 
          <ChevronDown className='ml-5 w-4 h-4'/>
          :
          <ChevronRight className='ml-5 w-4 h-4'/>
        }
        
        </button>
        </CollapsibleTrigger>
        <CollapsibleContent 
        onClick={handleItemClick} className="px-3 pl-6 bg-slate-800 rounded-lg py-3">
            {
              catalogueList.map((item,i) => (
                <Link key={i}
          href={item.href} 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors text-sm py-1
           ${pathname.includes(item.href)
              ? 'bg-slate-800 rounded text-green-500'
              : 'text-slate-50 flex items-center'
            }
          `}>
        <Ellipsis className="w-2 h-2" />
        <span>{item.title}</span>
        </Link>

              )
              )
              
            }
        </CollapsibleContent>
      </Collapsible>

        


        <Link 
          href="/customers" 
          onClick={handleItemClick}
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors 
           ${pathname.includes("customers")
              ? 'bg-slate-800 rounded border-l-4 border-green-600'
              : 'text-slate-50'
            }
          `}>
        <Users className="w-4 h-4" />
        <span>Customers</span>
        </Link>
       
        <Link 
          href="/stores" 
          onClick={handleItemClick}
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors 
            ${pathname.includes("stores")
              ? 'bg-slate-800 rounded border-l-4 border-green-600'
              : 'text-slate-50'
            }
          `} >
        <Warehouse className="w-4 h-4" />
        <span>Stores</span>
        </Link>

        <Link 
          href="/merchants" 
          onClick={handleItemClick}
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors 
            ${pathname.includes("merchants")
              ? 'bg-slate-800 rounded border-l-4 border-green-600'
              : 'text-slate-50'
            }
          `} >
        <UsersRound className="w-4 h-4" />
        <span>Merchants</span>
        </Link>

        <Link 
          href="/orders" 
          onClick={handleItemClick}
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors 
           ${pathname.includes("orders")
              ? 'bg-slate-800 rounded border-l-4 border-green-600'
              : 'text-slate-50'
            }
          `} >
        <Truck className="w-4 h-4" />
        <span>Orders</span>
        </Link>

        <Link 
          href="/staff" 
          onClick={handleItemClick}
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors 
           ${pathname.includes("staff")
              ? 'bg-slate-800 rounded border-l-4 border-green-600'
              : 'text-slate-50'
            }
          `} >
        <User className="w-4 h-4" />
        <span>Staff</span>
        </Link>
       
        <Link 
          href="/online-store" 
          onClick={handleItemClick}
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
           ${pathname.includes("online-store")
              ? 'bg-slate-800 rounded border-l-4 border-green-600'
              : 'text-slate-50'
            }
          `} >
        <ShoppingBag className="w-4 h-4" />
        <span>Online Store</span>
        </Link>
       

        <Link 
          href="/settings" 
          onClick={handleItemClick}
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors 
           ${pathname.includes("settings")
              ? 'bg-slate-800 rounded border-l-4 border-green-600'
              : 'text-slate-50'
            }
          `} >
        <Settings className="w-4 h-4" />
        <span>Settings</span>
        </Link>

        <div className='px-6 py-2'>
          <button 
          onClick={handleItemClick}
          className='flex bg-green-500 items-center space-x-3 p-2 hover:bg-green-400 rounded-md transition-colors px-6 py-2'>
            <LogOut/>
            <span className='text-slate-50'>Log out</span>
          </button>
        </div>
       
        </div>



        </div>
  )
}
