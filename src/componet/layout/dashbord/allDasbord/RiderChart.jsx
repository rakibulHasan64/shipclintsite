import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const RiderChart = ({ data }) => {
   const labels = data.map(item => item.status);
   const counts = data.map(item => item.count);

   const chartData = {
      labels,
      datasets: [
         {
            label: 'Riders Status',
            data: counts,
            backgroundColor: [
               '#34D399', // green
               '#F87171', // red
               '#FBBF24', // yellow
               '#60A5FA', // blue
               '#F472B6'  // pink
            ],
            borderWidth: 1,
         },
      ],
   };

   return <Pie data={chartData} />;
};

export default RiderChart;
