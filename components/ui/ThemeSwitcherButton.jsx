"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"



export default function ModeToggle() {
  const { theme,setTheme } = useTheme()
  
  return (
    <button
    className={`dark:text-lime-500`}
    onClick={()=>setTheme(theme === "dark" ? "light":"dark")}
    >
        {theme === "light" ? <Moon className="text-lime-700 hover:bg-slate-200 rounded-full"/> : <Sun className="text-lime-700 hover:bg-slate-700 rounded-full"/> }

    </button>
  )
}
