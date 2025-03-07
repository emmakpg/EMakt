"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookImage, LayoutDashboard, Settings, ShoppingBag, ShoppingBasket, ShoppingCart, User, Users, UsersRound } from 'lucide-react'

export default function Sidebar() {

  const pathname = usePathname();

  return (
    <div className='bg-slate-700 space-y-6 w-64 h-screen text-slate-50 p-3 fixed left-0 top-0'>
        <Link className="mb-6" href='/'>Logo</Link>
        <div className='space-y-3 flex flex-col mt-16'>
        <Link 
          href="/dashboard" 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
           ${pathname.includes("dashboard")
              ? 'bg-slate-800 rounded'
              : 'text-slate-50'
            }
          `} >
        <LayoutDashboard className="w-4 h-4" />
        <span>Dashboard</span>
        </Link>

        <Link 
          href="/catalogue" 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
            ${pathname.includes("dashboard")
              ? 'bg-slate-800 rounded'
              : 'text-slate-50'
            }
          `} >  
        <BookImage className="w-4 h-4" />
        <span>Catalogue</span>
        </Link>

        <Link 
          href="/customers" 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
           ${pathname.includes("customers")
              ? 'bg-slate-800 rounded'
              : 'text-slate-50'
            }
          `}>
        <Users className="w-4 h-4" />
        <span>Customers</span>
        </Link>
       
        <Link 
          href="/stores" 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
            ${pathname.includes("stores")
              ? 'bg-slate-800 rounded'
              : 'text-slate-50'
            }
          `} >
        <ShoppingBasket className="w-4 h-4" />
        <span>Stores</span>
        </Link>

        <Link 
          href="/merchants" 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
            ${pathname.includes("merchants")
              ? 'bg-slate-800 rounded'
              : 'text-slate-50'
            }
          `} >
        <UsersRound className="w-4 h-4" />
        <span>Merchants</span>
        </Link>

        <Link 
          href="/orders" 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
           ${pathname.includes("orders")
              ? 'bg-slate-800 rounded'
              : 'text-slate-50'
            }
          `} >
        <ShoppingCart className="w-4 h-4" />
        <span>Orders</span>
        </Link>

        <Link 
          href="/staff" 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
           ${pathname.includes("staff")
              ? 'bg-slate-800 rounded'
              : 'text-slate-50'
            }
          `} >
        <User className="w-4 h-4" />
        <span>Staff</span>
        </Link>
       
        <Link 
          href="/online-store" 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
           ${pathname.includes("online-store")
              ? 'bg-slate-800 rounded'
              : 'text-slate-50'
            }
          `} >
        <ShoppingBag className="w-4 h-4" />
        <span>Online Store</span>
        </Link>
       

        <Link 
          href="/settings" 
          className={`flex items-center space-x-3 p-2 hover:bg-slate-800 rounded transition-colors
           ${pathname.includes("settings")
              ? 'bg-slate-800 rounded'
              : 'text-slate-50'
            }
          `} >
        <Settings className="w-4 h-4" />
        <span>Settings</span>
        </Link>
       
        </div>



        </div>
  )
}
