"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ModeToggle() {
  const { theme,setTheme } = useTheme()
  
  return (
    <button
    className={`dark:text-lime-500`}
    onClick={()=>setTheme(theme === "dark" ? "light":"dark")}
    >
        {theme === "light" ? <Moon/> : <Sun/> }

    </button>
  )
}
