import Heading from "./Heading"
import { X } from 'lucide-react'


export default function FormHeader({title}) {
  return (
    <div className="flex items-center justify-between py-6 px-12 dark:text-slate-50 text-slate-950 dark:bg-slate-800 rounded-lg mb-12">
      <Heading title={title}/> 
        <button>
        <X />
        </button>
    </div>
  )
}
