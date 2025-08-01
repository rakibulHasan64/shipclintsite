// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.register(ArcElement, Tooltip, Legend);

// const RiderChart = ({ data }) => {
//    const labels = data.map(item => item.status);
//    const counts = data.map(item => item.count);

//    const chartData = {
//       labels,
//       datasets: [
//          {
//             label: 'Riders Status',
//             data: counts,
//             backgroundColor: [
//                '#34D399', // green
//                '#F87171', // red
//                '#FBBF24', // yellow
//                '#60A5FA', // blue
//                '#F472B6'  // pink
//             ],
//             borderWidth: 1,
//          },
//       ],
//    };

//    return <Pie data={chartData} />;
// };

// export default RiderChart;


// RiderBarChart.js
// src/components/layout/dashboard/rider/RiderChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RiderChart = ({ data }) => {
   if (!data || data.length === 0) {
      return <p className="text-center text-gray-500">No chart data available</p>;
   }

   const labels = data.map((item) =>
      item.status
         .split('_')
         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
         .join(' ')
   );

   const counts = data.map((item) => item.count);

   const chartData = {
      labels,
      datasets: [
         {
            label: 'Delivery Count',
            data: counts,
            backgroundColor: '#4F46E5', // Tailwind indigo-600
            borderRadius: 6,
            borderSkipped: false,
         },
      ],
   };

   const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
         legend: { display: false },
         tooltip: {
            callbacks: {
               label: (context) => `${context.dataset.label}: ${context.raw}`,
            },
         },
      },
      scales: {
         y: {
            beginAtZero: true,
            grid: { drawBorder: false },
            ticks: { precision: 0 },
         },
         x: {
            grid: { display: false },
         },
      },
   };

   return <Bar data={chartData} options={options} />;
};

export default RiderChart;
