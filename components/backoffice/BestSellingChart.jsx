"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingChart() {

    const data = {
        labels: ['Iphone 13 pro', 'Type C charger', 'Air pods 3', 'Apple watch 2', 'Iphone 12', 'Iphone XR'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.3)',
              'rgba(54, 162, 235, 0.3)',
              'rgba(255, 206, 86, 0.3)',
              'rgba(75, 192, 192, 0.3)',
              'rgba(153, 102, 255, 0.3)',
              'rgba(255, 159, 64, 0.3)',
            ],
            borderWidth: 1,
          },
        ],
      };

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: '#000' // Set legend text color to white
                }
            }
        }
    };

  return (
    <div className='dark:bg-slate-700 bg-white text-slate-950 dark:text-slate-50 p-8 rounded-lg'>
        <h2 className='font-bold text-xl mb-4'>Best Selling Charts</h2>
        {/* Chart */}

    <div className='p-8 text-slate-950'>
    <Doughnut data={data} options={options}/>
    </div>
        

    </div>
  )
}
