import CustomDataTable from '@/components/backoffice/CustomDataTable';
import DashboardCharts from '@/components/backoffice/DashboardCharts';
import Heading from '@/components/backoffice/Heading';
import LargeCards from '@/components/backoffice/LargeCards';
import SmallCards from '@/components/backoffice/SmallCards';
import React from 'react'

export const Dashboard = () => {

  const { DateTime } = require('luxon');
const date = DateTime.local();
const formattedDate = date.toFormat('d"th" MMMM, yyyy \'at\' h:mma');

  return (
    <div className=''>
      <Heading title="Dashboard Overview"/>
      <h2 className='font-medium mt-4 px-4 text-slate-950 dark:text-slate-50'>Your snapshot for today, 24th March 2025 (Accra / GMT)</h2>
      {/* Large Cards */}
      <LargeCards/>
      {/* Small cards */}
      <SmallCards/>
      {/* Charts */}
      <DashboardCharts/>
      {/* Recent Orders table */}
      <CustomDataTable/>
    </div>
    
  )
}

export default Dashboard;