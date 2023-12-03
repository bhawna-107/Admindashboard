
import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
  const apiKey = "coinranking52e99fe8f66f56849a31504efe5dc8483d07d43424301bc6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': apiKey,
            'Access-Control-Allow-Origin': "*"
          }
        });
        const data = await response.json();
        console.log(data);

        const coins = data?.data?.coins || [];
        const labels = coins.map(coin => coin.name);
        const priceData = coins.map(coin => coin.price);
        const marketCap = coins.map(coin => coin.marketCap);

        setChartData({labels,
          series: [
          {
            name: 'Price',
            data: priceData
          },
          {
            name: 'Marketcap',
            data: marketCap
          }
        ]});
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [baseUrl, apiKey]);

  const options = {
    xaxis: {
      categories: chartData.labels || []
    },

    yaxis: {
      title: {
        text: 'Price (in USD)', // Y-axis title
      },
      labels: {
        formatter: function (val) {
          return `${val.toFixed(2)}`; // Formatting labels to show as currency
        }
      },
      min: 0, // Minimum value for the Y-axis
      max: 1000, // Maximum value for the Y-axis
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',  // Adjust the width of each bar
        endingShape: 'rounded',
        
   
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top',
      fontSize: '15px'
    },
    colors: ['#FF9EAA', '#2196F3']
  };

  return (
    <div className='flex flex-wrap'>
      <div className='lg:w-full w-full border-2 bg-white p-4 mt-6 rounded-[20px]  shadow-lg'>
        {Object.keys(chartData).length === 0 ? (
          <p>Loading data...</p>
        ) : (
          <ApexCharts
            options={options}
            series={chartData.series}
            type='bar'
            height={300}
          />
        )}
      </div>
    </div>
  );
};

export default BarChart;


