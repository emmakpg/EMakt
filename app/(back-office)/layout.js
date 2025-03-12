"use client"
import { Raleway } from "next/font/google";
import "@/styles/main.css";


import Sidebar from '@/components/backoffice/Sidebar';
import NavBar from '@/components/backoffice/NavBar';
import { useState } from "react";

const raleway = Raleway({
  subsets: ["latin"]
});

export default function Layout({children}) {

  const [showSideBar, setShowSidebar] = useState(true)

  const toggleSidebar = () => {
    
    setShowSidebar(!showSideBar);
  };

  return (
    <div className={raleway.className}>
   
      {/* side bar */}
     <Sidebar isVisible={showSideBar} toggleSidebar={toggleSidebar} />

      <div className='flex-grow'>
        {/* Header */}
        <NavBar toggleSidebar={toggleSidebar} isVisible={showSideBar}/>
        <main className={`p-8 ml-0 ${showSideBar ? 'lg:ml-64':''} bg-gray-100 text-slate-50 dark:text-slate-900 dark:bg-slate-900 mt-16 transition-all duration-300`}>
          {children}
        </main>
        {/* Main */}

      </div>
      {/* Main Body */}

{/* Show overlay on mobile devices */}
{showSideBar && (
  <div 
    className="fixed inset-0 bg-black/50 z-10 md:hidden"
    onClick={toggleSidebar}
  />
)}
      
      
      </div>
  )
}
