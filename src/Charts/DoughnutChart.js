import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement, Tooltip, Legend
  } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
// import {
//     Chart as ChartJS,
//     arc
//   } from 'chart.js';
// ChartJS.register(
//     arc
//   );

const DoughnutChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coinranking.com/v2/coins/?limit=3", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
             'x-access-token': 'coinranking52e99fe8f66f56849a31504efe5dc8483d07d43424301bc6', // Replace with your actual API key
            'Access-Control-Allow-Origin': "*"
          }
        });
        const data1 = await response.json();

        // Extract data for the pie chart (e.g., top 5 cryptocurrencies by market cap)
        const labels = data1?.data?.coins?.map(coin => coin.name) || [];
        const marketCaps = data1?.data?.coins?.map(coin => coin.marketCap) || [];

        const DoughnutChartData = {
          labels: labels,
          datasets: [
            {
              label: 'Market Cap',
              data: marketCaps,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
            },
          ],
        };

        setChartData(DoughnutChartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    animation: false,
    plugins: {
      legend: {
        position: 'right',  // Display legend to the right
        align: 'center',     // Align legend labels to the start
        labels: {
          boxWidth: 40,      // Adjust the width of the legend box
          padding: 35,       // Add some padding between the legend and chart
          usePointStyle: true, // Use point style icons in legend
        },
      },
      padding: 50,
      maintainAspectRatio: false, // Ensure chart doesn't maintain aspect ratio
    // width: 300, // Fixed width for the chart
    // height: 200, // Fixed height for the chart
    },
    tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed;
            const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${percentage}%`;
          },
        },
      },
  };






  return (
    <div>
      <div className='bg-[white] w-[470px] h-[256px] border-2 shadow-lg rounded-[20px] px-[30px] py-[15px]  mt-[50px]'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='font-bold text-black text-lg'>Top Currencies</h1>
            <p className='text-zinc-500 text-sm font-normal'>May-June 2022</p>
          </div>
        {Object.keys(chartData).length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <Doughnut data={chartData} options={options} width={350}  />
      )}
    </div>
    </div>
  );
};

export default DoughnutChart;
