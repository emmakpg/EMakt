import Heading from '@/components/backoffice/Heading';
import LargeCards from '@/components/backoffice/LargeCards';
import React from 'react'

export const Dashboard = () => {

  const { DateTime } = require('luxon');
const date = DateTime.local();
const formattedDate = date.toFormat('d"th" MMMM, yyyy \'at\' h:mma');

  return (
    <div className=''>
      <Heading title="Dashboard Overview"/>
      <h2 className='font-medium mt-4 px-4'>Your snapshot for today, {formattedDate} (Accra / GMT)</h2>
      {/* Large Cards */}
      <LargeCards/>
      {/* Small cards */}
      {/* Charts */}
      {/* Recent Orders table */}
    </div>
    
  )
}

export default Dashboard;