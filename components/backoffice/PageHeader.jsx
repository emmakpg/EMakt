import Link from "next/link"
import Heading
 from "./Heading"
 import { Plus } from "lucide-react";

export default function PageHeader({heading, href, linkTitle}) {
  return (
    <div className="flex justify-between border-b border-slate-500 py-4">
    <Heading title={heading}/>
 <Link className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg 
 text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 space-x-3"
  href={href}>
 <Plus/>
 <span>{linkTitle}</span>
 </Link>


    </div>
  )
}
