import React, { useState, useEffect } from 'react';
import Login from '../components/Login';
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
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
          padding: 25,       // Add some padding between the legend and chart
          usePointStyle: true, // Use point style icons in legend
        },
      },
      padding: 2,
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
    <div className='flex flex-wrap lg:flex-row md:flex-row flex-col w-full justify-between'>
      <div className='bg-[white]  w-full h-[256px] border-2 shadow-lg rounded-[20px] px-[50px] py-[15px]  mt-[30px]'>
          <div className='flex flex-row justify-between items-center py-[7px] border-b-2'>
            <h1 className='font-bold text-black text-lg '>Top Currencies</h1>
            <div  className="block appearance-none  bg-white border border-gray-300 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight  focus:border-transparent">

            <select  value={selectedOption} onChange={handleSelectChange}>
        <option value="Option 1">May 2022</option>
        <option value="Option 2">June 2023</option>
        <option value="Option 3">August 2023</option>
      </select>
            </div>
            
            {/* <p className='text-zinc-500 text-sm font-normal'>May-June 2022</p> */}
          </div>
        {Object.keys(chartData).length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <Doughnut data={chartData} options={options} />
      )}
    </div>
    
    </div>

//     <div className='bg-white lg:w-1/2 md:w-1/2 w-full h-[256px] border-2 shadow-lg rounded-[20px] px-[50px] py-[15px] mt-50px flex flex-col lg:flex-row md:flex-row'>
//   <div className='flex flex-row justify-between items-center py-[7px]'>
//     <h1 className='font-bold text-black text-lg'>Top Currencies</h1>
//     <p className='text-zinc-500 text-sm font-normal'>May-June 2022</p>
//   </div>
//   <div className='w-full lg:w-1/2 md:w-1/2'>
//     {Object.keys(chartData).length === 0 ? (
//       <p>Loading data...</p>
//     ) : (
//       <Doughnut data={chartData} options={options} />
//     )}
//   </div>
//   <div className='w-full lg:w-1/2 md:w-1/2'>
//     <Login />
//   </div>
// </div>

  );
};

export default DoughnutChart;
