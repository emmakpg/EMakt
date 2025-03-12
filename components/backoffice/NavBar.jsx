import { AlignJustify, Bell, LayoutDashboard, LogOut, Settings, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import ThemeSwitcherButton from '@/components/ui/ThemeSwitcherButton'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function ({toggleSidebar, isVisible}) {

  console.log(isVisible);
  
  
  return (
    <div className={`dark:bg-slate-800 dark:text-slate-50 bg-white
    h-20 px-8 py-4 fixed top-0 left-0 right-0 shadow-md ${isVisible ? 'lg:ml-64':''} ml-0 z-50`}>
      <div className='flex justify-between items-center'>
        {/*Icon  */}
        <button onClick={toggleSidebar}>
          <AlignJustify className='text-green-600 hover:text-green-500'/>
        </button>
        {/* 3 Icons */}
        <div className="flex space-x-3">
            <ThemeSwitcherButton/>
        
        {/* Notifications */}
            <DropdownMenu>
        <DropdownMenuTrigger>
        <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
            <Bell className='text-green-600'/>
            <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">20</div>
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="pr-8 dark:bg-slate-800 bg-white">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className='flex items-center space-x-1'>
            <Image
                    src='/profile.png'
                    alt='User Profile'
                    width={200}
                    height={200}
                    className='w-8 h-8 rounded-full'
                    />
            <div className='flex flex-col space-y-1.5'>
              <p>Yellow sweet corn stock out</p>
              <div className='flex items-center space-x-2'>
                <p className='bg-red-700 px-3 pb-0.5  rounded-full text-white text-sm'>Stock Out</p>
                <p className='pb-1 text-sm'> Dec 12 2021 - 12:40PM </p>
              </div> 
            </div>
            <button>
              <X/>
            </button>
            </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className='bg-slate-300 dark:bg-slate-700'/>
            <DropdownMenuItem>
            <div className='flex items-center space-x-1'>
            <Image
                    src='/profile.png'
                    alt='User Profile'
                    width={200}
                    height={200}
                    className='w-8 h-8 rounded-full'
                    />
            <div className='flex flex-col space-y-1.5'>
              <p>Yellow sweet corn stock out</p>
              <div className='flex items-center space-x-2'>
                <p className='bg-blue-700 px-3 pb-0.5  rounded-full text-white text-sm'>Stock Out</p>
                <p className='pb-1 text-sm'> Dec 12 2021 - 12:40PM </p>
              </div> 
            </div>
            <button>
              <X/>
            </button>
            </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className='bg-slate-300 dark:bg-slate-700'/>
            <DropdownMenuItem>
            <div className='flex items-center space-x-1'>
            <Image
                    src='/profile.png'
                    alt='User Profile'
                    width={200}
                    height={200}
                    className='w-8 h-8 rounded-full'
                    />
            <div className='flex flex-col space-y-1.5'>
              <p>Yellow sweet corn stock out</p>
              <div className='flex items-center space-x-2'>
                <p className='bg-green-700 px-3 pb-0.5  rounded-full text-white text-sm'>Stock Out</p>
                <p className='pb-1 text-sm'> Dec 12 2021 - 12:40PM </p>
              </div> 
            </div>
            <button>
              <X/>
            </button>
            </div>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

            
      {/* Profile/Account */}
         <DropdownMenu>
        <DropdownMenuTrigger>
        <button>
                    <Image
                    src='/profile.png'
                    alt='User Profile'
                    width={200}
                    height={200}
                    className='w-8 h-8 rounded-full'
                    />
                  </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="pr-8 dark:bg-slate-800 bg-white">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className='flex items-center space-x-1'>
            <LayoutDashboard className='mr-2 h-4 w-4'/>
            <span>Dashboard</span>
            </button>
            </DropdownMenuItem>
          <DropdownMenuItem>
          <button className='flex items-center space-x-1'>
          <Settings className='mr-2 h-4 w-4'/>
          <span>Edit Profile</span>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <button className='flex items-center space-x-1'>
          <LogOut className='mr-2 h-4 w-4'/>
          <span>Logout</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

          
        </div>
        </div>
    </div>
  ) 
}
