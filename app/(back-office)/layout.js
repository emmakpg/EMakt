"use client"
import { Raleway } from "next/font/google";
import "@/styles/main.css";

import Sidebar from '@/components/backoffice/Sidebar';
import NavBar from '@/components/backoffice/NavBar';

const raleway = Raleway({
  subsets: ["latin"]
});

export default function Layout({children}) {


  return (
    <div className={raleway.className}>

      {/* side bar */}
     <Sidebar/>

      <div className='w-full'>
        {/* Header */}
        <NavBar/>
        <main className="p-8 ml-64 bg-slate-900 text-slate-50 mt-16">
          {children}
        </main>
        {/* Main */}

      </div>
      {/* Main Body */}
      
      </div>
  )
}
