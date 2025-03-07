import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {

  const ordeStats = [{
    title:"Total orders processed",
    sales:"1234.55",
    sales_yesterday:"1003.89",
    percentage:"100"
  },
  {
    title:"Orders processed yesterday",
    sales:"123.50",
    sales_yesterday:"100.80",
    percentage:"20"
  },
  {
    title:"Orders processed today",
    sales:"720.50",
    sales_yesterday:"550.50",
    percentage:"50"
  }

]
  return (
    <div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          ordeStats.map((stat,i) =>
            ( 
            <div key={i}>
              <LargeCard order={stat}/>
            </div>
            )
          )
        }
    </div>
    </div>
  )
}
