import Heading from "./Heading"
import { X } from 'lucide-react'
import { useRouter } from "next/navigation"


export default function FormHeader({title}) {

    const router = useRouter()

  return (
    <div className="flex items-center justify-between py-6 px-12 dark:text-slate-50 text-slate-950 dark:bg-slate-800 rounded-lg mb-12">
      <Heading title={title}/> 
        <button onClick={()=>router.back()} className="cursor-pointer dark:hover:bg-slate-600 hover:bg-gray-200 hover:scale-110 transition">
        <X />
        </button>
    </div>
  )
}
