import React from 'react'
import SmallCard from './SmallCard'
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react'

export default function SmallCards() {

  const orderStats = [{
    title:"Total Orders",
    number:"225",
    icon: ShoppingCart,
    iconBg: "bg-green-600"
  },
  {
    title:"Orders Pending",
    number:"12",
    icon: Loader2,
    iconBg: "bg-blue-600"
  },
  {
    title:"Orders processing",
    number:"4",
    icon: RefreshCcw,
    iconBg: "bg-orange-600"
  }
  ,
  {
    title:"Orders Delivered",
    number:"23",
    icon: CheckCheck,
    iconBg: "bg-purple-600"
  }

]
  return (
    <div className='container mx-auto px-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {
                orderStats.map((stat,i) =>
                  ( 
                  <div key={i}>
                    <SmallCard data={stat}/>
                  </div>
                  )
                )
              }
          </div>
    </div>
  )
}
