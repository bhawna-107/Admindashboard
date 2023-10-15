import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const BarChart = () => {
    const [chartData, setChartData] = useState({});
    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
  
  var apiKey = "coinranking52e99fe8f66f56849a31504efe5dc8483d07d43424301bc6";
  
    // Fetch data for dataset1 and dataset2 (replace with your data fetching logic)
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch data for Dataset 1
          const response1 = await fetch(`${baseUrl}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': `${apiKey}`,
              'Access-Control-Allow-Origin': "*"
            }
          });
          const data1 = await response1.json();
          console.log(data1);
    
          // Fetch data for Dataset 2 (you can modify the API endpoint and headers as needed)
          const response2 = await fetch(`${baseUrl}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': `${apiKey}`,
              'Access-Control-Allow-Origin': "*"
            }
          });
          const data2 = await response2.json();
          const coins1 = data1?.data?.coins || [];
      const coins2 = data2?.data?.coins || [];
      console.log('Data for Dataset 1:', coins1);
console.log('Data for Dataset 2:', coins2);

          // Combine the data and setChartData with the combined data
          const combinedData = {
            labels: coins1?.map(x => x.name) || [],
            
            datasets: [
              {
                label: 'Price',
                data: data1?.data?.coins?.map(x => x.price) || [],  // Replace with actual dataset1 values
                backgroundColor: '#97D79E',
               
                borderWidth: 1,
              },
              {
                label: 'BtcPrice',
                data: coins2?.map(y => y.btcPrice) || [],  // Replace with actual dataset2 values
                backgroundColor: '#EE8383',
               
                borderWidth: 1,
              },
            ],
          };
          setChartData(combinedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      console.log(JSON.stringify(chartData, null, 2));
      fetchData();
    }, [baseUrl, apiKey]);
    
  
    const options = {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          beginAtZero: true,
        },
      },
      responsive: true,
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    };
  
    return (
      <div className='flex flex-wrap '>
      <div className=' lg:w-full w-full border-2 bg-white p-4 mt-6 rounded-[20px] '>
        
      {Object.keys(chartData).length === 0 ? (
        <p>Loading data...</p>
      ) : (
        // <div className="w-full md:w-3/4 lg:w-1/2">
        <Bar data={chartData} options={options} height={300} />
        // </div>
      )}
    </div>
    </div>
    );
      }
export default BarChart;
  